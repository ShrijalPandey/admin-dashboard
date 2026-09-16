export default function Navbar() {
  return (
    <header className="flex h-16 items-center justify-between border-b border-slate-200 bg-white px-6">
      <div>
        <p className="text-sm font-medium text-slate-900">Admin Dashboard</p>
        <p className="text-xs text-slate-500">Manage your workspace</p>
      </div>
      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-sm font-semibold text-slate-600">
        AD
      </div>
    </header>
  );
}
