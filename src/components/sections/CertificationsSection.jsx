import { certifications } from '../../data/certifications';
import { useState } from 'react';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi2';

export default function CertificationsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const maxIndex = certifications.length - 1;

  const prev = () => setCurrentIndex((i) => Math.max(0, i - 1));
  const next = () => setCurrentIndex((i) => Math.min(maxIndex, i + 1));

  return (
    <section className="py-20 md:py-28 bg-bg-surface" id="certifications">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white font-heading">
            Certifications
          </h2>
          <div className="flex gap-2">
            {/* <button
              onClick={prev}
              disabled={currentIndex === 0}
              className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:border-orange hover:text-orange transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
              aria-label="Previous certification"
            > */}
            {/* <HiChevronLeft size={20} /> */}
            {/* </button> */}
            {/* <button
              onClick={next}
              disabled={currentIndex === maxIndex}
              className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:border-orange hover:text-orange transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
              aria-label="Next certification"
            > */}
            {/* <HiChevronRight size={20} /> */}
            {/* </button> */}
          </div>
        </div>

        {/* Card Grid / Carousel */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {certifications.map((cert) => (
            <a
              key={cert.id}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <div className="bg-bg-card rounded-2xl overflow-hidden border border-white/5 h-full hover:border-orange/30 transition-all duration-300 hover:-translate-y-1">
                {/* Certificate image */}
                <div className="h-52 overflow-hidden">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-5">
                  <p className="text-xs text-orange font-bold uppercase tracking-wider mb-2">
                    {cert.issuer || '\u00A0'}
                  </p>
                  {cert.subtitle && (
                    <p className="text-xs text-text-muted mb-2">{cert.subtitle}</p>
                  )}
                  <h3 className="text-sm font-bold text-white font-heading group-hover:text-orange transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-xs text-orange mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    View Certificate →
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
