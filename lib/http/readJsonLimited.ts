/** Begrenztes JSON-Parsing ohne vollständiges Einlesen übergroßer Request-Bodys. */
export class RequestBodyError extends Error {
  constructor(
    public readonly status: number,
    message: string,
  ) {
    super(message);
    this.name = 'RequestBodyError';
  }
}

export async function readJsonLimited(request: Request, limitBytes: number): Promise<unknown> {
  const contentType = request.headers.get('content-type') ?? '';
  if (!/^application\/json(?:\s*;|\s*$)/i.test(contentType)) {
    throw new RequestBodyError(415, 'Nur JSON-Anfragen werden unterstützt.');
  }

  const lengthHeader = request.headers.get('content-length');
  if (lengthHeader !== null && Number(lengthHeader) > limitBytes) {
    throw new RequestBodyError(413, 'Anfrage ist zu groß.');
  }
  if (!request.body) {
    throw new RequestBodyError(400, 'Anfragedaten fehlen.');
  }

  const reader = request.body.getReader();
  const chunks: Uint8Array[] = [];
  let bytesRead = 0;
  try {
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      bytesRead += value.byteLength;
      if (bytesRead > limitBytes) {
        await reader.cancel();
        throw new RequestBodyError(413, 'Anfrage ist zu groß.');
      }
      chunks.push(value);
    }
  } catch (error) {
    if (error instanceof RequestBodyError) throw error;
    throw new RequestBodyError(400, 'Anfragedaten konnten nicht gelesen werden.');
  }

  const bytes = new Uint8Array(bytesRead);
  let offset = 0;
  for (const chunk of chunks) {
    bytes.set(chunk, offset);
    offset += chunk.byteLength;
  }

  try {
    return JSON.parse(new TextDecoder('utf-8', { fatal: true }).decode(bytes));
  } catch {
    throw new RequestBodyError(400, 'Ungültiges JSON.');
  }
}
