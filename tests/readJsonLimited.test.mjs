import test from 'node:test';
import assert from 'node:assert/strict';
import { readJsonLimited, RequestBodyError } from '../lib/http/readJsonLimited.ts';

function jsonRequest(body) {
  return new Request('https://shared-horizon.de/api/anfrage', {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body,
  });
}

test('decodes a valid JSON body', async () => {
  const result = await readJsonLimited(jsonRequest('{"name":"Test"}'), 1024);
  assert.deepEqual(result, { name: 'Test' });
});

test('rejects malformed JSON', async () => {
  await assert.rejects(
    readJsonLimited(jsonRequest('{'), 1024),
    (error) => error instanceof RequestBodyError && error.status === 400,
  );
});

test('rejects bodies that exceed the actual byte limit', async () => {
  const payload = JSON.stringify({ name: 'x'.repeat(300) });
  await assert.rejects(
    readJsonLimited(jsonRequest(payload), 64),
    (error) => error instanceof RequestBodyError && error.status === 413,
  );
});

test('rejects non-JSON content types', async () => {
  const request = new Request('https://shared-horizon.de/api/anfrage', {
    method: 'POST',
    headers: { 'content-type': 'text/plain' },
    body: 'test',
  });
  await assert.rejects(
    readJsonLimited(request, 1024),
    (error) => error instanceof RequestBodyError && error.status === 415,
  );
});
