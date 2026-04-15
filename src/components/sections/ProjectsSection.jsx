import { projects } from '../../data/projects';
import { Link } from 'react-router-dom';
import { HiArrowUpRight } from 'react-icons/hi2';

export default function ProjectsSection() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden" id="projects">
      {/* Dark wavy texture background */}
      <div className="absolute inset-0 bg-bg-dark">
        <div className="absolute inset-0 opacity-40"
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
              radial-gradient(ellipse at 80% 30%, rgba(245, 130, 58, 0.05) 0%, transparent 50%),
              linear-gradient(180deg, #1A1A14 0%, #1f1e16 50%, #1A1A14 100%)
            `
          }}
        />
        <svg className="absolute inset-0 w-full h-full opacity-10" preserveAspectRatio="none">
          <defs>
            <pattern id="wave-projects" x="0" y="0" width="200" height="50" patternUnits="userSpaceOnUse">
              <path d="M0,25 Q50,0 100,25 Q150,50 200,25" fill="none" stroke="#F5823A" strokeWidth="0.8" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#wave-projects)" transform="rotate(-15)" />
        </svg>
      </div>

      {/* Decorative orange blurred circles */}
      <div className="absolute top-0 left-0 w-72 h-72 rounded-full bg-orange/8 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-orange/5 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        {/* Header row */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white font-heading">
            My <span className="text-[#FD853A]">Projects</span>
          </h2>
          <p className="text-sm text-text-secondary max-w-md leading-relaxed lg:text-right">
            These projects demonstrate my experience in data validation, KPI design, and dashboard development across healthcare and business domains, focusing on delivering reliable and actionable insights.
          </p>
        </div>

        {/* 2x2 Grid of glassmorphism cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <Link
              key={project.id}
              to={project.route}
              className="group relative flex flex-col h-[360px] rounded-2xl overflow-hidden border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1"
            >
              {/* IMAGE */}
              <div className="relative flex-grow overflow-hidden">
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                />

                {/* overlay biar text kebaca */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              </div>

              {/* BOTTOM CONTENT */}
              <div className="relative p-5 pr-16">
                <h3 className="text-sm md:text-base font-semibold text-white leading-snug">
                  {project.title}
                </h3>
              </div>

              {/* ARROW */}
              <div className="absolute bottom-4 right-4">
                <div className="w-11 h-11 rounded-full bg-orange flex items-center justify-center shadow-lg shadow-orange/20 group-hover:scale-110 transition-transform">
                  <HiArrowUpRight className="w-5 h-5 text-white" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
