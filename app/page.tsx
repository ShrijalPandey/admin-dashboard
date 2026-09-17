import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50 px-4 py-12">
      <section className="w-full max-w-xl text-center">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Admin Dashboard
        </h1>
        <p className="mt-4 text-base text-slate-600 sm:text-lg">
          Manage your application from one place.
        </p>
        <Link
          href="/login"
          className="mt-8 inline-flex rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Login
        </Link>
      </section>
    </main>
  );
}
