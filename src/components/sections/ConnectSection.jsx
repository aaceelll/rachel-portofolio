import { FaLinkedinIn, FaGithub } from 'react-icons/fa';

export default function ConnectSection() {
  return (
    <section className="py-20 md:py-28 bg-white border-t border-white/5" id="contact">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-orange mb-6 font-heading">
            Lets Connect <span className="text-orange">there</span>
          </h2>
          <a href="mailto:savitri.rachel12@gmail.com" className="btn-primary">
            Hire me
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {/* Email */}
          <div className="bg-bg-surface rounded-2xl p-6 border border-white/5 text-center">
            <div className="w-12 h-12 rounded-full bg-orange/10 flex items-center justify-center mx-auto mb-4">
              <svg className="w-5 h-5 text-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-sm font-bold text-white mb-2 font-heading">Email</h3>
            <a
              href="mailto:savitri.rachel12@gmail.com"
              className="text-sm text-text-secondary hover:text-orange transition-colors"
            >
              savitri.rachel12@gmail.com
            </a>
          </div>

          {/* LinkedIn */}
          <div className="bg-bg-surface rounded-2xl p-6 border border-white/5 text-center">
            <div className="w-12 h-12 rounded-full bg-orange/10 flex items-center justify-center mx-auto mb-4">
              <FaLinkedinIn className="w-5 h-5 text-orange" />
            </div>
            <h3 className="text-sm font-bold text-white mb-2 font-heading">LinkedIn</h3>
            <a
              href="https://www.linkedin.com/in/rachel-savitri/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-text-secondary hover:text-orange transition-colors"
            >
              linkedin.com/in/rachel-savitri
            </a>
          </div>

          {/* Resume */}
          <div className="bg-bg-surface rounded-2xl p-6 border border-white/5 text-center">
            <div className="w-12 h-12 rounded-full bg-orange/10 flex items-center justify-center mx-auto mb-4">
              <svg className="w-5 h-5 text-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="text-sm font-bold text-white mb-2 font-heading">Resume</h3>
            <a
              href="https://drive.google.com/file/d/1Mkun2hxmJlm8Xs5O9u2Ur6DfL_5zLBAI/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-text-secondary hover:text-orange transition-colors"
            >
              View Resume →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
