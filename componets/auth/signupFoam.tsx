"use client";

import Link from "next/link";

export default function SignupForm() {
    return (
        <div className = "w-full max-w-md rounded-2xl bg-white p-8 shadow-lg"> 
            <h1 className = "text-3xl font-bold text-center text-[var(--text-primary)]">Create Account</h1>
 
            <p className = "mt-2 text-center text-sm text--[var(--text-secondary)]">Sign up to get started</p>

            <form className = "mt-8 space-y-5">
                {/* usernmame */}
                <div>
                    <label className = "mb-2 block text-sm font-medium "> Username</label>
                    <input type="text" placeholder="Enter your Name" className="w-full rounded-lg border border-[var(--light-grey)] px-4 py-3 outline-none focus:border-black"/>
                </div>
                {/* Emial */}
                <div>
                    <label>Email</label>
                    <input type="Email" placeholder="Enter your email" className="w-full rounded-lg border border-[var(--light-grey)] px-4 py-3 outline-none focus:border-black"/>
                </div>
                {/* Password */}
                <div>
                    <label>Password</label>
                    <input type="password" placeholder="Create a Password" className="w-full rounded-lg border border-[var(--light-grey)] px-4 py-3 outline-none focus:border-black"/>
                </div>

                {/* create account button */}
                <button type="submit" className="w-full rounded-lg bg-[var(--black)] py-3 font-semibold text-white transition hover:opacity-90">
                    Create Account
                </button>
                
                {/* Login Link */}

                <p>
                    Already have an account?{" "}
                    <Link href="/login" className = "font-semibold text-[var(--text-primary)] hover:underline">
                    Sign In 
                    </Link>
                </p>
            </form>

        </div>

    );
}