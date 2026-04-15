import { organizations } from '../../data/organizations';
// import { HiArrowRight } from 'react-icons/hi2';

export default function OrganizationSection() {
  return (
    <section className="py-20 md:py-28 bg-white" id="organization">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <h2 className="text-3xl md:text-4xl font-bold text-orange text-center mb-16 font-heading">
          Organization / Committee / Volunteer
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {organizations.map((org) => (
            <div
              key={org.id}
              className="bg-bg-surface rounded-2xl overflow-hidden border border-white hover:border-orange transition-all duration-300 group"
            >
              {/* Image */}
              <div className="h-48 overflow-hidden">
                <img
                  src={org.image}
                  alt={org.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
              </div>

              {/* Content */}
              <div className="p-5">
                <p className="text-xs text-text-muted mb-2">{org.period}</p>
                <h3 className="text-sm font-bold text-white font-heading mb-2 leading-snug">
                  {org.title}
                </h3>
                <p className="text-xs text-text-secondary leading-relaxed mb-4">
                  {org.description}
                </p>
                {/* <div className="flex justify-end">
                  <HiArrowRight className="w-5 h-5 text-orange group-hover:translate-x-1 transition-transform" />
                </div> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
