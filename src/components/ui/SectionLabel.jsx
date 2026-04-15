export default function SectionLabel({ number, label }) {
  return (
    <span className="section-label">
      {number} — {label}
    </span>
  );
}
