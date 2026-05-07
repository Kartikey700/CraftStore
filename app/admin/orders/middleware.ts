import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(req: any) {
  const token = await getToken({ req });
  const { pathname } = req.nextUrl;

  // allow login page
  if (pathname.startsWith("/Admin/login")) {
    return NextResponse.next();
  }

  // protect other admin routes
  if (pathname.startsWith("/Admin") && !token) {
    return NextResponse.redirect(new URL("/Admin/login", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/Admin/:path*"]
};