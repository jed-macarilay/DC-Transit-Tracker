type RailLine = {
  code: string;
  name: string;
  colorClass: string;
  activeTrains: number;
  headwayPct: number;
  serviceGaps: number;
  directionA: string;
  directionB: string;
  avgA: string;
  avgB: string;
  trend: "up" | "down" | "flat";
  alerts: number;
};

const railLines: RailLine[] = [
  {
    code: "RD",
    name: "Red Line",
    colorClass: "bg-red-600",
    activeTrains: 25,
    headwayPct: 89,
    serviceGaps: 2,
    directionA: "Glenmont",
    directionB: "Shady Grove",
    avgA: "6 min",
    avgB: "5 min",
    trend: "up",
    alerts: 0
  },
  {
    code: "OR",
    name: "Orange Line",
    colorClass: "bg-orange-500",
    activeTrains: 11,
    headwayPct: 100,
    serviceGaps: 0,
    directionA: "New Carrollton",
    directionB: "Vienna",
    avgA: "11 min",
    avgB: "11 min",
    trend: "flat",
    alerts: 0
  },
  {
    code: "SV",
    name: "Silver Line",
    colorClass: "bg-slate-400",
    activeTrains: 16,
    headwayPct: 83,
    serviceGaps: 0,
    directionA: "Downtown Largo",
    directionB: "Ashburn",
    avgA: "13 min",
    avgB: "14 min",
    trend: "down",
    alerts: 1
  },
  {
    code: "BL",
    name: "Blue Line",
    colorClass: "bg-sky-600",
    activeTrains: 12,
    headwayPct: 92,
    serviceGaps: 0,
    directionA: "Largo",
    directionB: "Franconia",
    avgA: "8 min",
    avgB: "9 min",
    trend: "up",
    alerts: 0
  },
  {
    code: "YL",
    name: "Yellow Line",
    colorClass: "bg-yellow-400",
    activeTrains: 8,
    headwayPct: 67,
    serviceGaps: 2,
    directionA: "Mt Vernon Sq",
    directionB: "Huntington",
    avgA: "15 min",
    avgB: "14 min",
    trend: "down",
    alerts: 2
  },
  {
    code: "GR",
    name: "Green Line",
    colorClass: "bg-emerald-600",
    activeTrains: 15,
    headwayPct: 66,
    serviceGaps: 2,
    directionA: "Branch Ave",
    directionB: "Greenbelt",
    avgA: "10 min",
    avgB: "9 min",
    trend: "flat",
    alerts: 1
  }
];

function trendLabel(value: RailLine["trend"]) {
  if (value === "up") return "Improving";
  if (value === "down") return "Needs attention";
  return "Stable";
}

export function RailPage() {
  const totalTrains = railLines.reduce((sum, line) => sum + line.activeTrains, 0);
  const avgHeadway = Math.round(
    railLines.reduce((sum, line) => sum + line.headwayPct, 0) / railLines.length
  );
  const totalAlerts = railLines.reduce((sum, line) => sum + line.alerts, 0);

  return (
    <section className="space-y-5">
      <div className="rounded-2xl border border-metro-slate/10 bg-white p-4 shadow-sm sm:p-5">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <h2 className="text-2xl font-bold text-metro-navy sm:text-3xl">Rail Service Status</h2>
            <p className="mt-1 text-sm text-slate-600 sm:text-base">
              Real-time line health, headway reliability, and terminal direction performance.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
            <div className="rounded-xl bg-metro-cloud px-3 py-2">
              <p className="text-xs text-slate-500">Active Trains</p>
              <p className="text-xl font-bold text-metro-navy">{totalTrains}</p>
            </div>
            <div className="rounded-xl bg-metro-cloud px-3 py-2">
              <p className="text-xs text-slate-500">Avg Headway</p>
              <p className="text-xl font-bold text-metro-navy">{avgHeadway}%</p>
            </div>
            <div className="col-span-2 rounded-xl bg-metro-cloud px-3 py-2 sm:col-span-1">
              <p className="text-xs text-slate-500">Active Alerts</p>
              <p className="text-xl font-bold text-metro-navy">{totalAlerts}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 xl:grid-cols-2">
        {railLines.map((line) => (
          <article key={line.code} className="rounded-2xl border border-metro-slate/10 bg-white p-4 shadow-sm sm:p-5">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
              <div className="flex items-center gap-3">
                <div
                  className={`grid h-12 w-12 place-items-center rounded-full text-sm font-extrabold text-white ${line.colorClass}`}
                >
                  {line.code}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-metro-navy">{line.name}</h3>
                  <p className="text-sm text-slate-500">{trendLabel(line.trend)}</p>
                </div>
              </div>
              <div className="flex gap-2">
                <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-700">
                  {line.headwayPct}% headway
                </span>
                <span className="rounded-full bg-rose-50 px-2.5 py-1 text-xs font-semibold text-rose-700">
                  {line.alerts} alerts
                </span>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
              <div className="rounded-xl border border-slate-200 p-3">
                <p className="text-xs text-slate-500">Active Trains</p>
                <p className="text-xl font-bold text-metro-navy">{line.activeTrains}</p>
              </div>
              <div className="rounded-xl border border-slate-200 p-3">
                <p className="text-xs text-slate-500">Service Gaps</p>
                <p className="text-xl font-bold text-metro-navy">{line.serviceGaps}</p>
              </div>
              <div className="rounded-xl border border-slate-200 p-3 col-span-2 sm:col-span-2">
                <p className="text-xs text-slate-500">Direction Balance</p>
                <p className="text-sm font-semibold text-slate-700">{line.directionA} to {line.directionB}</p>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
              <div className="rounded-xl bg-metro-cloud p-3">
                <p className="text-xs font-semibold text-slate-500">{line.directionA}</p>
                <p className="mt-1 text-lg font-bold text-metro-navy">{line.avgA}</p>
              </div>
              <div className="rounded-xl bg-metro-cloud p-3">
                <p className="text-xs font-semibold text-slate-500">{line.directionB}</p>
                <p className="mt-1 text-lg font-bold text-metro-navy">{line.avgB}</p>
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
