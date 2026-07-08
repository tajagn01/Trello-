"use client"

import { useRouter } from "next/navigation"

export function  Logoutbtn(){
    const Router = useRouter();


    async function  logout(){
    const req = await fetch("api/auth/logout",{
        method : "POST",
    })
    if(req.ok){
        Router.push("/");
        Router.refresh();
    }

    
}


    return (
        <>
       <button onClick= {logout}className="border bg-gray-500 w-36 rounded-4xl">log out</button>
        </>
    )
}