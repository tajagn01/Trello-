import { NextRequest, NextResponse } from "next/server";
import { jwtVerify } from "jose";
export  function middleware(request: NextRequest){
    const token = request.cookies.get("token")?.value;

    if(!token){
        return NextResponse.redirect(new URL("/login",request.url));
    }


    try{
        jwtVerify(token, new TextEncoder().encode(process.env.JWT_SECRET!));
        return NextResponse.next();
    }catch{
    return NextResponse.redirect(new URL("/login",request.url));
    }
}

export const config = {
    matcher: ["/dashboard/:path*"],
}