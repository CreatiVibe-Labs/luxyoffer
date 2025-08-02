import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export function middleware(request) {
  const token = request.cookies.get("authToken")?.value;
  const forgotToken = request.cookies.get("fp_email")?.value;

  if (!forgotToken && request.nextUrl.pathname.startsWith('/forgot-password/reset-password')) {
    return NextResponse.redirect(new URL("/forgot-password", request.url));
  }

  if (!token && request.nextUrl.pathname.startsWith('/profile')) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  // Auth pages to block if user is already logged in
  const authPages = ["/login", "/register"];

  const isAuthPage = authPages.some((path) =>
    request.nextUrl.pathname.startsWith(path)
  );

  // If logged in and trying to access login/register → redirect to dashboard
  if (token && isAuthPage) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  // Otherwise, continue
  return NextResponse.next();
}
