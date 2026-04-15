export default function StatCard({ value, label }) {
  return (
    <div className="stat-card">
      <p className="text-xl md:text-2xl font-bold text-orange font-heading">{value}</p>
      <p className="text-xs text-text-muted mt-1 leading-tight">{label}</p>
    </div>
  );
}
