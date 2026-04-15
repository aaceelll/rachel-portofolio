export default function CTASection() {
  return (
    <section className="py-20 md:py-28 bg-bg-dark border-t border-white/5">
      <div className="max-w-3xl mx-auto px-6 md:px-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-heading">
          Have an Awesome Project Idea?{' '}
          <span className="text-orange">Let's Discuss</span>
        </h2>

        <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-5 py-3 rounded-full bg-bg-surface border border-white/10 text-white text-sm placeholder-text-muted focus:outline-none focus:border-orange transition-colors"
          />
          <a
            href="mailto:savitri.rachel12@gmail.com"
            className="btn-primary whitespace-nowrap"
          >
            Send
          </a>
        </div>
      </div>
    </section>
  );
}
