 import Link from "next/link";

export default function Signup() {
    return (
        // create account
        <div>
            <h1>Create Account</h1>

            <p>Sign up to get started</p>

            <form>
                {/* usernmame */}
                <div>
                    <label> Username</label>
                <input type="text" placeholder="Enter your Name"/>
                </div>
                {/* Emial */}
                <div>
                    <label>Email</label>
                <input type="Email" placeholder="Enter your email"/>
                </div>
{/* Password */}
                <div>
                    <label>Password</label>
                <input type="password" placeholder="Create a Password"/>
                </div>

                <div>
                    <label>Confirm PassWord</label>
                <input type="password" placeholder="Enter your Name:"/>
                </div>
                {/* create account button */}
                <button type="submit">
                    Create Account
                </button>
            </form>

            {/* Login Link */}

            <p>
                Already have an Account?{" "}
                <Link href="/login"> Sign In</Link>
            </p>
        </div>
    );
}
