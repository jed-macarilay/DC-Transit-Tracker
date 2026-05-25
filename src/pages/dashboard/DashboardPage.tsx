import { MetricCard } from "../../components/cards/MetricCard";

const mockArrivals = [
  { line: "RD", destination: "Shady Grove", min: "2" },
  { line: "BL", destination: "Largo", min: "5" },
  { line: "OR", destination: "Vienna", min: "7" }
];

export function DashboardPage() {
  return (
    <section className="space-y-4">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <MetricCard label="Active Trains" value="128" hint="+4 from previous hour" />
        <MetricCard label="On-time Performance" value="93%" hint="System average today" />
        <MetricCard label="Open Alerts" value="6" hint="2 high-priority" />
        <MetricCard label="Average Wait" value="4.1 min" hint="Across core stations" />
      </div>

      <div className="grid grid-cols-1 gap-4 xl:grid-cols-3">
        <article className="rounded-xl border border-metro-slate/10 bg-white p-4 shadow-sm xl:col-span-2">
          <h2 className="text-lg font-semibold text-metro-navy">Next Train Arrivals</h2>
          <div className="mt-3 space-y-2">
            {mockArrivals.map((row) => (
              <div
                key={`${row.line}-${row.destination}`}
                className="flex items-center justify-between rounded-lg border border-metro-slate/15 bg-emerald-50/30 p-3"
              >
                <div className="flex items-center gap-2">
                  <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-metro-mint text-xs font-semibold text-metro-navy">
                    {row.line}
                  </span>
                  <span className="text-sm font-medium">{row.destination}</span>
                </div>
                <span className="text-sm text-slate-600">{row.min} min</span>
              </div>
            ))}
          </div>
        </article>

        <article className="rounded-xl border border-metro-slate/10 bg-white p-4 shadow-sm">
          <h2 className="text-lg font-semibold text-metro-navy">Service Status</h2>
          <ul className="mt-3 space-y-2 text-sm">
            <li className="rounded-lg border border-emerald-200 bg-emerald-50 p-2 text-emerald-800">Red Line: Normal</li>
            <li className="rounded-lg border border-amber-200 bg-amber-50 p-2 text-amber-800">Blue Line: Minor Delays</li>
            <li className="rounded-lg border border-rose-200 bg-rose-50 p-2 text-rose-800">Silver Line: Single Tracking</li>
          </ul>
        </article>
      </div>
    </section>
  );
}
