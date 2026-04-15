import { Link } from 'react-router-dom';
import { HiArrowLeft, HiArrowRight } from 'react-icons/hi2';
import StatCard from '../../components/ui/StatCard';
import SectionLabel from '../../components/ui/SectionLabel';
import FindingCard from '../../components/ui/FindingCard';

export default function PegadaianPage() {
  return (
    <div className="min-h-screen">
      {/* ═══════ HEADER (Dark) ═══════ */}
      <div className="bg-bg-dark relative overflow-hidden">
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] gradient-circle pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-16 pt-24 pb-12">
          <Link
            to="/#projects"
            className="inline-flex items-center text-sm text-orange hover:text-orange-light mb-8 transition-colors"
          >
            <HiArrowLeft className="mr-2 h-4 w-4" />
            Back to Projects
          </Link>

          <p className="text-xs text-text-muted mb-3">
            Projects / <span className="text-text-secondary">Pegadaian Dashboard</span>
          </p>

          <span className="inline-block px-4 py-1.5 text-[10px] font-bold uppercase tracking-wider bg-orange text-white rounded-full mb-6">
            BUSINESS ANALYTICS · BI DASHBOARD
          </span>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white font-heading mb-4 max-w-3xl leading-tight">
            Transaction Performance Dashboard — Pegadaian
          </h1>
          <p className="text-base text-text-muted max-w-2xl mb-10">
            Revenue, Product, and Regional Analysis
          </p>

          <div className="flex flex-wrap gap-4 mb-8">
            <StatCard value="$408M" label="Total Transaction Value" />
            <StatCard value="100" label="Total Transactions" />
            <StatCard value="$4.08M" label="Average Transaction Value" />
            <StatCard value="39%" label="Gadai KCA Revenue Share" />
          </div>

          <div className="flex flex-wrap gap-2">
            {['Looker Studio', 'Data Validation', 'KPI Design', 'Multi-dimensional Analysis'].map((tag) => (
              <span key={tag} className="tech-tag">{tag}</span>
            ))}
          </div>
        </div>
      </div>

      {/* ═══════ BODY (White) ═══════ */}
      <div className="bg-white">
        <div className="max-w-5xl mx-auto px-6 md:px-12 py-16 space-y-16">

          {/* 01 — OVERVIEW + 02 — DATA PROCESSING (side by side) */}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <SectionLabel number="01" label="OVERVIEW" />
              <h2 className="text-2xl font-bold text-gray-900 font-heading mb-4">Project Overview</h2>
              <p className="text-gray-600 leading-relaxed">
                Developed a transaction-level dashboard to analyze Pegadaian's business performance across products, regions, and channels. The goal was to identify revenue drivers, operational dependencies, and growth opportunities.
              </p>
            </div>
            <div>
              <SectionLabel number="02" label="DATA PROCESSING" />
              <h2 className="text-2xl font-bold text-gray-900 font-heading mb-4">KPI Design</h2>
              <ul className="space-y-3">
                {[
                  'Total Transaction Value',
                  'Total Transactions',
                  'Average Transaction Value (ATV) = SUM(value) / COUNT(id)',
                  'Product Contribution (%)',
                  'Multi-dimensional breakdown: Product · Region · Branch · Channel'
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange mt-2 mr-3 flex-shrink-0" />
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* 03 — ANALYTICAL FINDINGS */}
          <section>
            <SectionLabel number="03" label="ANALYTICAL FINDINGS" />
            <h2 className="text-2xl font-bold text-gray-900 font-heading mb-3">Key Findings</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <FindingCard
                number="01"
                title="High-Value, Low-Volume Business"
                description="$408.02M from only 100 transactions → growth should focus on increasing transaction value, not volume."
              />
              <FindingCard
                number="02"
                title="Product Dependency Risk"
                description="Gadai KCA = 39% of revenue. Highly dependent on a single product → high risk exposure."
              />
              <FindingCard
                number="03"
                title="Secondary Growth Opportunity"
                description="Tabungan Emas: 28.7% contribution, more evenly distributed across regions → more scalable and stable."
              />
              <FindingCard
                number="04"
                title="Regional Performance Imbalance"
                description="Medan = highest region but dominated by one branch. Performance is not evenly distributed."
              />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-1 gap-6">
              <FindingCard
                number="05"
                title="Digital Channel Effectiveness"
                description="Pegadaian Digital: highest in both value and volume → primary growth driver."
              />
              <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-100 mt-2">
                <img
                  src="/images/projects/pegadaian/dashboard.png"
                  alt="Pegadaian Dashboard — Looker Studio"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </section>

          {/* 04 — RECOMMENDATIONS */}
          <section>
            <SectionLabel number="04" label="RECOMMENDATIONS" />
            <h2 className="text-2xl font-bold text-gray-900 font-heading mb-4">Decision Recommendations</h2>
            <ul className="space-y-3 mb-8">
              {[
                'Diversify Revenue: Reduce reliance on Gadai KCA → mitigate revenue volatility',
                'Scale Tabungan Emas: High value, stable distribution, scalable across regions',
                'Replicate High-Performing Branch: Use Medan/Kisaran branch as benchmark',
                'Optimize High-Potential Regions: Focus on Bandung — diverse transaction types',
                'Double Down on Digital: Invest in onboarding, accessibility, digital campaigns'
              ].map((item, i) => (
                <li key={i} className="flex items-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange mt-2 mr-3 flex-shrink-0" />
                  <span className="text-gray-600">{item}</span>
                </li>
              ))}
            </ul>

            {/* Strategic Conclusion */}
            <div className="bg-bg-card rounded-2xl p-6 border border-white/5">
              <p className="text-sm font-bold text-white mb-2 font-heading">Strategic Conclusion</p>
              <p className="text-sm text-text-secondary leading-relaxed">
                Growth should come from product diversification, channel optimization, and operational replication — not from opening new branches.
              </p>
            </div>
          </section>
        </div>
      </div>

      {/* ═══════ FOOTER NAV ═══════ */}
      <div className="bg-bg-dark border-t border-white/5">
        <div className="max-w-5xl mx-auto px-6 md:px-12 py-8 flex justify-between">
          <Link
            to="/projects/gleam"
            className="inline-flex items-center text-sm text-orange hover:text-orange-light transition-colors font-semibold"
          >
            <HiArrowLeft className="mr-2 h-4 w-4" />
            GLEAM
          </Link>
          <Link
            to="/projects/sales-shipping"
            className="inline-flex items-center text-sm text-orange hover:text-orange-light transition-colors font-semibold"
          >
            Next: Sales & Shipping
            <HiArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
