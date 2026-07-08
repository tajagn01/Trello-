"use client";

import Link from "next/link";

export default function SignupForm() {
    return (
        <div>
            <h1>Create Account</h1>

            <p>Sign up to get started</p>

            <form>
                {/* usernmame */}
                <div>
                    <label> Username</label>
                    <input type="text" placeholder="Enter your Name" />
                </div>
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
                <button type="submit">
                    Create Account
                </button>
            </form>

            {/* Login Link */}

            <p>
                <Link href="/login">  Already have an Account?</Link>
                <Link href=""> Sign In</Link>
            </p>
        </div>

    );
}