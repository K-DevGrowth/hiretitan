import { NextResponse, type NextRequest } from "next/server";
import { getSessionCookie } from "better-auth/cookies";

export function proxy(request: NextRequest) {
  if (!getSessionCookie(request)) {
    return NextResponse.redirect(new URL("/signin", request.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: [
    "/profile/:path*",
    "/applications/:path*",
    "/dashboard/:path*",
    "/jobs/:path*",
    "/candidates/:path*",
    "/interviews/:path*",
    "/scorecards/:path*",
    "/offers/:path*",
    "/admin/:path*",
  ],
};
