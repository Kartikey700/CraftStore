import { NextResponse } from "next/server"
import { verifyToken } from "@/lib/auth"

export function middleware(req: any) {
  const token = req.cookies.get("Admin-token")?.value

  const isAdminRoute = req.nextUrl.pathname.startsWith("/Admin")

  if (isAdminRoute && !token) {
    return NextResponse.redirect(new URL("/Admin/login", req.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/Admin/:path*"],
}