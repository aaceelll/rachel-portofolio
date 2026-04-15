export default function FindingCard({ number, title, description }) {
  return (
    <div className="finding-card">
      <span className="inline-block px-3 py-1 text-[10px] font-bold uppercase tracking-wider bg-orange/15 text-orange rounded mb-3">
        Finding {number}
      </span>
      <h4 className="text-base font-bold text-white mb-2 font-heading">{title}</h4>
      <p className="text-sm text-text-secondary leading-relaxed">{description}</p>
    </div>
  );
}
