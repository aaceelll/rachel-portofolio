import { HiArrowUpRight } from 'react-icons/hi2';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen lg:min-h-0 flex flex-col items-center justify-center overflow-hidden bg-bg-dark pt-24 pb-16 lg:py-24" id="home">
      {/* Decorative orange circle - top right */}
      <div className="absolute -top-32 -right-32 w-[600px] h-[600px] gradient-circle pointer-events-none" />
      {/* Decorative wavy lines - left side */}
      <div className="absolute top-20 left-0 w-40 opacity-30 pointer-events-none">
        <svg viewBox="0 0 100 300" fill="none" className="w-full h-auto">
          <path d="M10,20 Q40,60 10,100 Q-20,140 10,180 Q40,220 10,260" stroke="#F5823A" strokeWidth="1.5" fill="none" opacity="0.5" />
          <path d="M30,20 Q60,60 30,100 Q0,140 30,180 Q60,220 30,260" stroke="#F5823A" strokeWidth="1.5" fill="none" opacity="0.4" />
          <path d="M50,20 Q80,60 50,100 Q20,140 50,180 Q80,220 50,260" stroke="#F5823A" strokeWidth="1.5" fill="none" opacity="0.3" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-16 w-full py-20 flex flex-col items-center">
        {/* Hello badge
        <span className="inline-block px-5 py-1.5 text-xs font-semibold text-gray-900 bg-white rounded-full shadow-sm mb-8">
          Hello!
        </span> */}

        {/* Title */}
        <h1 className="text-4xl md:text-5xl lg:text-[56px] font-bold text-white leading-tight font-heading text-center mb-6">
          I'm <span className="text-orange">Rachel Savitri</span>,
          <br />
          Data & System Analyst
        </h1>

        {/* Main content: quote + photo + description */}
        <div className="relative w-full flex flex-col items-center">
          {/* Photo with orange circle */}
          <div className="relative z-10 mb-0 pb-10">
            {/* Orange circle — foto masuk ke dalamnya via overflow-hidden */}
            <div className="relative w-[350px] h-[350px] md:w-[350px] md:h-[350px] rounded-full bg-orange overflow-hidden mx-auto mt-1 md:mt-0">
              <img
                src="/images/hero/rachel-hero.png"
                alt="Rachel Savitri — Data & System Analyst"
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-full object-cover object-top"
              />
            </div>
          </div>

          {/* Two description blocks - flanking the photo */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between items-center pointer-events-none px-0 lg:px-8 hidden lg:flex">
            {/* Left - quote + description */}
            <div className="max-w-[240px] pointer-events-auto">
              <span className="text-5xl text-orange font-heading font-bold leading-none block mb-1">"</span>
              <p className="text-base text-text-secondary leading-relaxed">
                I specialize in <strong className="text-white">data validation, reporting workflows, and dashboard development</strong> to support operational decision-making
              </p>
            </div>

            {/* Right - description */}
            <div className="max-w-[240px] text-right pointer-events-auto">
              <p className="text-base text-text-secondary leading-relaxed">
                Experienced in transforming raw data into structured insights using
              </p>
              <p className="text-lg font-semibold text-white mt-1 font-heading">
                SQL, Excel, and BI tools.
              </p>
            </div>
          </div>

          {/* Mobile: description blocks below photo */}
          <div className="lg:hidden grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 w-full max-w-xl mb-8">
            <div className="bg-bg-surface rounded-xl p-4 border border-white/5">
              <p className="text-sm text-text-secondary leading-relaxed">
                I specialize in <strong className="text-white">data validation, reporting workflows, and dashboard development</strong> to support operational decision-making
              </p>
            </div>
            <div className="bg-bg-surface rounded-xl p-4 border border-white/5">
              <p className="text-sm text-text-secondary leading-relaxed">
                Experienced in transforming raw data into structured insights using <strong className="text-white">SQL, Excel, and BI tools.</strong>
              </p>
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="relative z-20 mt-8 lg:mt-12 w-full flex justify-center px-6">
          <div className="flex gap-2 items-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-3 py-3 shadow-lg w-full max-w-xs justify-center hover:bg-white/10 transition-all duration-300 hover:-translate-y-1">
            <a href="#projects" className="btn-primary">
              Portfolio
              <HiArrowUpRight className="ml-2 h-4 w-4" />
            </a>
            <a href="#contact" className="btn-outline">
              Hire me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
