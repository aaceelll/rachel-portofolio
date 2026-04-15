export default function Badge({ children, className = '' }) {
  return (
    <span className={`inline-flex items-center px-4 py-1.5 text-xs font-bold uppercase tracking-wider bg-orange text-white rounded-full ${className}`}>
      {children}
    </span>
  );
}
