import { NextRequest, NextResponse } from "next/server";

export const middleware = (reqest: NextRequest) => {
  console.log("middleware");
  if (reqest.nextUrl.pathname.startsWith("/products/1004")) {
    console.log("Middleware - route redirect");
    return NextResponse.redirect(new URL("/products", reqest.url));
  }
};

export const config = {
  matcher: ["/products/:path+"],
};
