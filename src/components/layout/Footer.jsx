import { Link } from 'react-router-dom';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-bg-footer border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Left — Branding */}
          <div>
            <h3 className="text-lg font-bold text-white font-heading mb-2">Rachel Savitri</h3>
            <p className="text-sm text-text-muted mb-4">Data & System Analyst</p>
            <p className="text-sm text-text-secondary leading-relaxed mb-6">
              Turning raw data into structured insights through validation, KPI design, and dashboard development.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.linkedin.com/in/rachel-savitri/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-bg-card border border-white/10 flex items-center justify-center text-text-muted hover:text-orange hover:border-orange/30 transition-all"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn size={14} />
              </a>
              <a
                href="https://github.com/aaceelll"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-bg-card border border-white/10 flex items-center justify-center text-text-muted hover:text-orange hover:border-orange/30 transition-all"
                aria-label="GitHub"
              >
                <FaGithub size={14} />
              </a>
            </div>
          </div>

          {/* Center — Navigation */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">Navigation</h4>
            <ul className="space-y-3">
              {['Home', 'About', 'Experience', 'Projects'].map((item) => (
                <li key={item}>
                  <Link
                    to={item === 'Home' ? '/' : `/#${item.toLowerCase()}`}
                    className="text-sm text-text-muted hover:text-orange transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Right — Contact */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:savitri.rachel12@gmail.com"
                  className="text-sm text-text-muted hover:text-orange transition-colors"
                >
                  savitri.rachel12@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/rachel-savitri/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-text-muted hover:text-orange transition-colors"
                >
                  linkedin.com/in/rachel-savitri
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/aaceelll"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-text-muted hover:text-orange transition-colors"
                >
                  github.com/aaceelll
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-text-muted">
            © 2026 Rachel Savitri · Data & System Analyst
          </p>
          <p className="text-xs text-text-muted">
            Web Terms & Conditions · Privacy Policy
          </p>
        </div>
      </div>
    </footer>
  );
}
