 "use client"
 
 import Link from "next/link";

 export default function Login() {
    return (
        <div >
            <div className = "w-full max-w-md rounded-2xl border border-[var(--light-grey)] bg-[var(--white)] p-8 shadow-lg">
            <h1 className = "text-3xl font-bold text-[var(--text-primary)] text-center">
                Welcome Back
            </h1>
            <p className = "mt-2 text-center text-[var(--text-secondary)]">
                sign in to your Account
            </p>

        <form className = "mt-8 space-y-5">
{/* email */}
            <div>
                <label>Email</label>
                <input type="email" placeholder="Enter Mail" />
            </div>
{/* password */}
            <div>
                <label >Password</label>
                <input type="password" placeholder="Enter Password" />
            </div>
{/* forget password */}
            <div>  
                <Link href="#">Forgot Password?</Link> 
            </div>
{/* signin button */}
            <button>
                Sign in
            </button>
        </form>
{/* Signup */}
        <p> Don&apos;t have an account?{" "}
            <Link href = "#"> Sign Up</Link>  
        </p>
        </div>
        </div>
    );
 }