export default function AboutSection() {
  return (
    <section
      className="relative -mt-16 md:-mt-24 pt-20 md:pt-28 pb-20 md:pb-28 overflow-hidden z-20 bg-bg-dark rounded-t-[60px] shadow-[0_-30px_80px_rgba(0,0,0,0.6)]"
      id="about"
    >
      {/* Background */}
      <div className="absolute inset-0">
        {/* Soft gradient biar ada depth */}
        <div className="absolute inset-0 bg-bg-dark/95 backdrop-blur-sm" />

        {/* Texture */}
        <div
          className="absolute inset-0 opacity-40"
          style={{
            background: `
              repeating-linear-gradient(
                135deg,
                transparent,
                transparent 30px,
                rgba(245, 130, 58, 0.03) 30px,
                rgba(245, 130, 58, 0.03) 32px
              ),
              radial-gradient(ellipse at 20% 50%, rgba(245, 130, 58, 0.08) 0%, transparent 60%),
              radial-gradient(ellipse at 80% 30%, rgba(245, 130, 58, 0.05) 0%, transparent 50%)
            `,
          }}
        />

        {/* Wave overlay */}
        <svg
          className="absolute inset-0 w-full h-full opacity-10"
          preserveAspectRatio="none"
        >
          <defs>
            <pattern
              id="wave-pattern"
              x="0"
              y="0"
              width="200"
              height="50"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M0,25 Q50,0 100,25 Q150,50 200,25"
                fill="none"
                stroke="#F5823A"
                strokeWidth="0.8"
              />
            </pattern>
          </defs>
          <rect
            width="100%"
            height="100%"
            fill="url(#wave-pattern)"
            transform="rotate(-15)"
          />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-8 md:px-12 lg:px-16">
        <h2 className="text-3xl md:text-5xl font-bold text-white text-center mb-12 font-heading">
          About <span className="text-orange">Me</span>
        </h2>

        <div className="space-y-5">
          <p className="text-gray-300 text-base leading-relaxed">
            I am a Data & Operations Analyst with hands-on experience in SQL-based data processing, dashboard development, and reporting workflows.
          </p>

          <p className="text-gray-300 text-base leading-relaxed">
            I specialize in ensuring data accuracy through validation and reconciliation, and transforming raw data into structured, reliable insights for monitoring and decision-making.
          </p>

          <p className="text-gray-300 text-base leading-relaxed">
            My experience includes building KPI metrics, maintaining BI dashboards, and aligning reporting outputs with operational needs through stakeholder collaboration.
          </p>

          <p className="text-gray-300 text-base leading-relaxed">
            I focus on delivering data systems that are not only functional, but also accurate, traceable, and actionable.
          </p>
        </div>

        <div className="mt-10 flex justify-center">
          <a href="#contact" className="btn-primary px-15 py-6 text-base hover:bg-orange/50 transition-all duration-300 hover:-translate-y-1">
            Hire me
          </a>
        </div>
      </div>
    </section>
  );
}