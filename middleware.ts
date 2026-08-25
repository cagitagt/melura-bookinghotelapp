import { NextRequest, NextResponse } from "next/server";
import { auth } from "./auth";

const ProtectedRoutes = ["/reservation", "/checkout", "/admin"]

export async function middleware(request:NextRequest) {
    const session = await auth();
    const isLoggedIn = !!session?.user;
    const role = session?.user.role;
    const {pathname} = request.nextUrl;

    // belum login dan mau akses protectedroutes return ke signin
    if(!isLoggedIn && ProtectedRoutes.some((route) => pathname.startsWith(route))) {
        return NextResponse.redirect(new URL("/signin", request.url))
    }

    // sudah login & bukan admin, mau masuk ke admin return ke home
    if(isLoggedIn && role !== "admin" && pathname.startsWith("/admin")){
        return NextResponse.redirect(new URL("/", request.url))
    }

    // sudah login, mau masuk ke hal login lagi return ke home
    if(isLoggedIn && pathname.startsWith("/signin")) {
        return NextResponse.redirect(new URL("/", request.url))
    }
}

// regular expression
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
  runtime: "nodejs",
};