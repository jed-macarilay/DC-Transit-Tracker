import { NavLink, Outlet } from "react-router-dom";

const navItems = [
  { to: "/", label: "Dashboard" },
  { to: "/rail", label: "Rail" },
  { to: "/bus", label: "Bus" },
  { to: "/trip-planner", label: "Trip Planner" },
  { to: "/stations", label: "Stations" },
  { to: "/alerts", label: "Alerts" }
];

export function AppLayout() {
  return (
    <div className="min-h-screen bg-metro-cloud text-slate-900">
      <header className="border-b border-metro-slate/20 bg-metro-navy text-white">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-4">
          <h1 className="text-xl font-bold tracking-wide">MetroPulse</h1>
          <span className="text-sm text-white font-bold">Realtime WMATA Dashboard</span>
        </div>
      </header>

      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-4 px-4 py-4 md:grid-cols-[220px_1fr]">
        <aside className="rounded-xl border border-metro-slate/10 bg-white p-3 shadow-sm">
          <nav className="flex gap-2 md:flex-col">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/"}
                className={({ isActive }) =>
                  `rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-metro-mint text-metro-navy"
                      : "bg-slate-100 text-slate-700 hover:bg-emerald-50 hover:text-metro-slate"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </aside>

        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
}
