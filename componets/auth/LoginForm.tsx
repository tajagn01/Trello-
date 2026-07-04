"use client";

import { useState } from "react";
import Link from "next/link";

export default function LoginForm() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(formData);
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[var(--background)] px-4">
      <div className="w-full max-w-md rounded-2xl border border-[var(--light-grey)] bg-[var(--surface)] p-8 shadow-lg">

        {/* Heading */}
        <h1 className="text-center text-3xl font-bold text-[var(--text-primary)]">
          Welcome Back
        </h1>

        <p className="mt-2 text-center text-[var(--text-secondary)]">
          Sign in to your account
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="mt-8 space-y-5">

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-medium text-[var(--text-primary)]"
            >
              Email
            </label>

            <input
              id="email"
              name="email"
              type="email"
              placeholder="Enter Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full rounded-lg border border-[var(--light-grey)] bg-[var(--white)] px-4 py-3 text-[var(--text-primary)] placeholder:text-[var(--text-secondary)] outline-none transition-all duration-300 focus:border-[var(--black)] focus:ring-2 focus:ring-[var(--light-grey)]"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="mb-2 block text-sm font-medium text-[var(--text-primary)]"
            >
              Password
            </label>

            <input
              id="password"
              name="password"
              type="password"
              placeholder="Enter Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full rounded-lg border border-[var(--light-grey)] bg-[var(--white)] px-4 py-3 text-[var(--text-primary)] placeholder:text-[var(--text-secondary)] outline-none transition-all duration-300 focus:border-[var(--black)] focus:ring-2 focus:ring-[var(--light-grey)]"
              required
            />
          </div>

          {/* Forgot Password */}
          <div className="flex justify-end">
            <div
             
              className="text-sm text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)]"
            >
              Forgot Password?
            </div>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full rounded-lg bg-[var(--black)] py-3 font-semibold text-[var(--white)] transition-all duration-300 hover:opacity-90 hover:scale-[1.02] active:scale-95"
          >
            Sign In
          </button>
        </form>

        {/* Signup */}
        <p className="mt-6 text-center text-[var(--text-secondary)]">
          Don&apos;t have an account?{" "}
          <Link
            href="/signup"
            className="font-semibold text-[var(--text-primary)] transition hover:underline"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}