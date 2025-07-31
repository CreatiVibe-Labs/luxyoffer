import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export function middleware(request) {
  const token = request.cookies.get("authToken")?.value;

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
