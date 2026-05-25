type BusRoute = {
  route: string;
  family: "local" | "express" | "limited";
  northTo: string;
  southTo: string;
  northActual: number;
  southActual: number;
  northScheduled: number;
  southScheduled: number;
  activeBuses: number;
  scheduledBuses: number;
  alerts: number;
};

const busRoutes: BusRoute[] = [
  {
    route: "A11",
    family: "local",
    northTo: "Pentagon",
    southTo: "Huntington",
    northActual: 10,
    southActual: 16,
    northScheduled: 15,
    southScheduled: 11,
    activeBuses: 1,
    scheduledBuses: 2,
    alerts: 0
  },
  {
    route: "A12",
    family: "local",
    northTo: "Ballston",
    southTo: "Hunting Point",
    northActual: 11,
    southActual: 13,
    northScheduled: 15,
    southScheduled: 14,
    activeBuses: 2,
    scheduledBuses: 4,
    alerts: 0
  },
  {
    route: "A1X",
    family: "express",
    northTo: "Pentagon City",
    southTo: "Braddock Rd",
    northActual: 9,
    southActual: 11,
    northScheduled: 6,
    southScheduled: 6,
    activeBuses: 1,
    scheduledBuses: 3,
    alerts: 1
  },
  {
    route: "A27",
    family: "local",
    northTo: "Benning Rd",
    southTo: "Southern Ave",
    northActual: 12,
    southActual: 9,
    northScheduled: 10,
    southScheduled: 10,
    activeBuses: 2,
    scheduledBuses: 4,
    alerts: 0
  },
  {
    route: "A40",
    family: "limited",
    northTo: "Congress Heights",
    southTo: "Southern Ave",
    northActual: 17,
    southActual: 14,
    northScheduled: 12,
    southScheduled: 11,
    activeBuses: 2,
    scheduledBuses: 4,
    alerts: 1
  },
  {
    route: "A58",
    family: "express",
    northTo: "Anacostia",
    southTo: "Capitol Heights",
    northActual: 8,
    southActual: 10,
    northScheduled: 9,
    southScheduled: 9,
    activeBuses: 2,
    scheduledBuses: 3,
    alerts: 0
  }
];

function routeBadgeClass(family: BusRoute["family"]) {
  if (family === "express") return "bg-sky-700 text-white";
  if (family === "limited") return "bg-orange-600 text-white";
  return "bg-sky-500 text-white";
}

function chipTone(actual: number, scheduled: number) {
  if (actual <= scheduled) return "bg-emerald-100 text-emerald-800";
  if (actual - scheduled >= 4) return "bg-rose-100 text-rose-800";
  return "bg-amber-100 text-amber-800";
}

export function BusPage() {
  const totalActive = busRoutes.reduce((sum, route) => sum + route.activeBuses, 0);
  const totalScheduled = busRoutes.reduce((sum, route) => sum + route.scheduledBuses, 0);
  const totalAlerts = busRoutes.reduce((sum, route) => sum + route.alerts, 0);

  return (
    <section className="space-y-5">
      <div className="rounded-2xl border border-metro-slate/10 bg-white p-4 shadow-sm sm:p-5">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <h2 className="text-2xl font-bold text-metro-navy sm:text-3xl">Bus Service Status</h2>
            <p className="mt-1 text-sm text-slate-600 sm:text-base">
              Route-level performance, directional wait times, and schedule adherence.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
            <div className="rounded-xl bg-metro-cloud px-3 py-2">
              <p className="text-xs text-slate-500">Active Buses</p>
              <p className="text-xl font-bold text-metro-navy">{totalActive}</p>
            </div>
            <div className="rounded-xl bg-metro-cloud px-3 py-2">
              <p className="text-xs text-slate-500">Scheduled</p>
              <p className="text-xl font-bold text-metro-navy">{totalScheduled}</p>
            </div>
            <div className="col-span-2 rounded-xl bg-metro-cloud px-3 py-2 sm:col-span-1">
              <p className="text-xs text-slate-500">Active Alerts</p>
              <p className="text-xl font-bold text-metro-navy">{totalAlerts}</p>
            </div>
          </div>
        </div>

        <div className="mt-4 grid grid-cols-1 gap-2 md:grid-cols-[1fr_auto_auto]">
          <input
            className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm outline-none transition focus:border-metro-mint"
            placeholder="Search route or destination"
          />
          <select className="rounded-xl border border-slate-300 px-3 py-2 text-sm text-slate-700">
            <option>All Routes</option>
            <option>Local</option>
            <option>Express</option>
            <option>Limited</option>
          </select>
          <select className="rounded-xl border border-slate-300 px-3 py-2 text-sm text-slate-700">
            <option>Sort: Performance</option>
            <option>Sort: Alerts</option>
            <option>Sort: Headway Gap</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 xl:grid-cols-2">
        {busRoutes.map((route) => (
          <article key={route.route} className="rounded-2xl border border-metro-slate/10 bg-white p-4 shadow-sm sm:p-5">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <span className={`rounded-full px-4 py-1.5 text-sm font-extrabold ${routeBadgeClass(route.family)}`}>
                  {route.route}
                </span>
                <div>
                  <p className="text-sm font-semibold text-metro-navy">{route.family.toUpperCase()} service</p>
                  <p className="text-xs text-slate-500">{route.activeBuses} active of {route.scheduledBuses} scheduled</p>
                </div>
              </div>
              <span className="rounded-full bg-rose-50 px-2.5 py-1 text-xs font-semibold text-rose-700">
                {route.alerts} alerts
              </span>
            </div>

            <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
              <div className="rounded-xl border border-slate-200 p-3">
                <p className="text-xs font-semibold text-slate-500">Northbound</p>
                <p className="mt-1 text-sm font-semibold text-slate-700">to {route.northTo}</p>
                <div className="mt-3 flex items-center gap-2">
                  <span className={`rounded-full px-2.5 py-1 text-xs font-semibold ${chipTone(route.northActual, route.northScheduled)}`}>
                    Actual {route.northActual}m
                  </span>
                  <span className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-700">
                    Scheduled {route.northScheduled}m
                  </span>
                </div>
              </div>

              <div className="rounded-xl border border-slate-200 p-3">
                <p className="text-xs font-semibold text-slate-500">Southbound</p>
                <p className="mt-1 text-sm font-semibold text-slate-700">to {route.southTo}</p>
                <div className="mt-3 flex items-center gap-2">
                  <span className={`rounded-full px-2.5 py-1 text-xs font-semibold ${chipTone(route.southActual, route.southScheduled)}`}>
                    Actual {route.southActual}m
                  </span>
                  <span className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-700">
                    Scheduled {route.southScheduled}m
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-4 flex flex-wrap items-center gap-2">
              <button className="rounded-lg bg-metro-navy px-3 py-2 text-sm font-semibold text-white">Route</button>
              <button className="rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm font-semibold text-slate-700">Data</button>
              <button className="rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm font-semibold text-slate-700">Details</button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
