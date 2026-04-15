import { experience } from '../../data/experience';

export default function ExperienceSection() {
  return (
    <section className="py-20 md:py-28 bg-white" id="experience">
      <div className="max-w-5xl mx-auto px-6 md:px-12 lg:px-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-16 font-heading">
          My <span className="text-orange">Work Experience</span>
        </h2>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical dashed line — desktop: tengah, mobile: kiri */}
          <div className="absolute left-5 md:left-1/2 top-0 bottom-0 w-px border-l-2 border-dashed border-gray-300 md:-translate-x-1/2" />
          <div className="space-y-12 md:space-y-20">
            {experience.map((exp, index) => (
              <div key={exp.id} className="relative">
                {/* Timeline dot — desktop: tengah, mobile: kiri */}
                <div className="absolute left-5 md:left-1/2 top-2 -translate-x-1/2 z-10 flex items-center justify-center">
                  <div className="w-4 h-4 md:w-5 md:h-5 rounded-full bg-gray-800 border-4 border-orange shadow-lg shadow-orange/20" />
                </div>
                {/* Content row */}
                <div className="pl-14 md:pl-0 grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-16">
                  {/* Left — Company + Period */}
                  <div className="text-left md:text-right md:pr-12">
                    <h3 className="text-lg md:text-2xl font-bold text-gray-900 font-heading leading-tight">
                      {exp.company}
                    </h3>
                    <p className="text-sm text-gray-400 mt-1">{exp.period}</p>
                  </div>
                  {/* Right — Role + Bullets */}
                  <div className="md:pl-12">
                    <h4 className="text-lg md:text-2xl font-bold text-gray-900 font-heading mb-3">
                      {exp.role}
                    </h4>
                    <ul className="space-y-2">
                      {exp.bullets.map((bullet, i) => (
                        <li key={i} className="flex items-start text-sm text-gray-500">
                          <span className="w-1.5 h-1.5 rounded-full bg-orange mt-1.5 mr-2.5 flex-shrink-0" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
