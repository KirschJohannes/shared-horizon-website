import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

function unauthorized() {
  return new NextResponse("Zugriff verweigert", {
    status: 401,
    headers: { "WWW-Authenticate": 'Basic realm="Shared Horizon", charset="UTF-8"' },
  });
}

export default function proxy(request: NextRequest) {
  const user = process.env.NEU_BASIC_AUTH_USER;
  const password = process.env.NEU_BASIC_AUTH_PASSWORD;

  if (!user || !password) {
    return unauthorized();
  }

  const header = request.headers.get("authorization");
  if (!header?.startsWith("Basic ")) {
    return unauthorized();
  }

  const decoded = atob(header.slice("Basic ".length));
  const separatorIndex = decoded.indexOf(":");
  const providedUser = decoded.slice(0, separatorIndex);
  const providedPassword = decoded.slice(separatorIndex + 1);

  if (providedUser !== user || providedPassword !== password) {
    return unauthorized();
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/vertrag/neu/:path*",
};
