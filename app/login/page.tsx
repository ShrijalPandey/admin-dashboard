"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";

function LoginForm() {
  const router = useRouter();
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (email !== "admin@example.com" || password !== "admin") {
      setError("Incorrect email or password. Please try again.");
      return;
    }

    setError("");
    login({ name: "Admin", email });
    router.push("/dashboard");
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50 px-4 py-12">
      <section
        aria-labelledby="login-heading"
        className="w-full max-w-md rounded-xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
      >
        <div className="mb-8 text-center">
          <h1 id="login-heading" className="text-2xl font-bold text-slate-900">
            Admin Dashboard
          </h1>
          <p className="mt-2 text-sm text-slate-600">Welcome back</p>
        </div>

        <form className="space-y-5" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-700">
              Email address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="email@example.com"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              aria-describedby={error ? "login-error" : undefined}
              required
              className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />
          </div>

          <div>
            <label htmlFor="password" className="mb-2 block text-sm font-medium text-slate-700">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              placeholder="Enter your password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              aria-describedby={error ? "login-error" : undefined}
              required
              className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />
          </div>

          {error && (
            <p id="login-error" role="alert" className="text-sm text-red-600">
              {error}
            </p>
          )}

          <button
            type="submit"
            className="w-full rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Sign In
          </button>
        </form>
      </section>
    </main>
  );
}

export default function LoginPage() {
  return <LoginForm />;
}
