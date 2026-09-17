export default function LoginPage() {
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

        <form className="space-y-5">
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
              className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />
          </div>

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
