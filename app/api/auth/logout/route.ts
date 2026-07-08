import { NextResponse } from "next/server";

export function POST(){

    const Response = NextResponse.json(
        {massage : "logo is done"},
        {status : 200}
    )
    
    Response.cookies.set("token","",{
        httpOnly : true,
        expires : new Date(0),
        path:"/",
    })
 return Response;
}