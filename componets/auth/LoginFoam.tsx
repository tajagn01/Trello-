"use client";

import Link from "next/link";

export default function LoginFoam() {
    return (
        <div>
            <h1>welcome back</h1>


            <form>
              
            
                {/* Emial */}
                <div>
                    <label>Email</label>
                    <input type="Email" placeholder="Enter your email" />
                </div>
                {/* Password */}
                <div>
                    <label>Password</label>
                    <input type="password" placeholder="Create a Password" />
                </div>

                {/* create account button */}
                
                <Link href="/dashboard" type="submit">
                   Log in
                </Link>
            </form>

            {/* Login Link */}

           
        </div>

    );
}