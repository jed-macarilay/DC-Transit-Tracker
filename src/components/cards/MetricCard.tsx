type MetricCardProps = {
  label: string;
  value: string;
  hint?: string;
};

export function MetricCard({ label, value, hint }: MetricCardProps) {
  return (
    <article className="rounded-xl border border-metro-slate/10 bg-white p-4 shadow-sm">
      <p className="text-sm text-metro-slate">{label}</p>
      <p className="mt-1 text-2xl font-bold text-metro-navy">{value}</p>
      {hint ? <p className="mt-1 text-xs text-metro-slate">{hint}</p> : null}
    </article>
  );
}
