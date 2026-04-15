import { Link } from 'react-router-dom';
import { HiArrowLeft, HiArrowRight } from 'react-icons/hi2';
import StatCard from '../../components/ui/StatCard';
import SectionLabel from '../../components/ui/SectionLabel';
import FindingCard from '../../components/ui/FindingCard';

export default function SalesShippingPage() {
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
            Projects / <span className="text-text-secondary">Sales & Shipping</span>
          </p>

          <span className="inline-block px-4 py-1.5 text-[10px] font-bold uppercase tracking-wider bg-orange text-white rounded-full mb-6">
            SALES ANALYTICS · PROFITABILITY
          </span>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white font-heading mb-4 max-w-3xl leading-tight">
            Sales & Shipping Performance Analysis
          </h1>
          <p className="text-base text-text-muted max-w-2xl mb-10">
            Strategic Decision-Making through Profitability, Segment & Shipping Analysis
          </p>

          <div className="flex flex-wrap gap-4 mb-8">
            <StatCard value="-24.7%" label="Profit Decline" />
            <StatCard value="-48.6%" label="Profit Margin Drop" />
            <StatCard value="45.3%" label="Consumer Revenue Share" />
            <StatCard value="Aug" label="Peak Sales Month" />
          </div>

          <div className="flex flex-wrap gap-2">
            {['Looker Studio', 'Data Blending', 'Time-series Analysis', 'Segment Analysis'].map((tag) => (
              <span key={tag} className="tech-tag">{tag}</span>
            ))}
          </div>
        </div>
      </div>

      {/* ═══════ BODY (White) ═══════ */}
      <div className="bg-white">
        <div className="max-w-5xl mx-auto px-6 md:px-12 py-16 space-y-16">

          {/* 01 — OVERVIEW */}
          <section>
            <SectionLabel number="01" label="OVERVIEW" />
            <h2 className="text-2xl font-bold text-gray-900 font-heading mb-4">Project Overview</h2>
            <p className="text-gray-600 leading-relaxed">
              Analyzed sales and operational data to evaluate profitability, customer behavior, and shipping performance — to identify revenue leakage and optimization opportunities.
            </p>
          </section>

          {/* 02 — DATA PROCESSING */}
          <section>
            <SectionLabel number="02" label="DATA PROCESSING" />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 font-heading mb-4">Metrics Built</h2>
                <ul className="space-y-3 mb-4">
                  {[
                    'Profit Margin',
                    'Average Order Value (AOV)',
                    'Return Rate',
                    'Shipping Processing Time'
                  ].map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="w-1.5 h-1.5 rounded-full bg-orange mt-2 mr-3 flex-shrink-0" />
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-gray-500 text-sm">
                  Techniques: Data blending · Time-series analysis · Segment analysis
                </p>
              </div>
              <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-100">
                <img
                  src="/images/projects/sales-shipping/dashboard.png"
                  alt="Superstore Dashboard — Looker Studio"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </section>

          {/* 03 — FINDINGS */}
          <section>
            <SectionLabel number="03" label="FINDINGS" />
            <h2 className="text-2xl font-bold text-gray-900 font-heading mb-6">Analytical Findings</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <FindingCard
                number="01"
                title="Profitability Decline"
                description="Profit ↓ 24.7%, Profit Margin ↓ 48.6%. Revenue growth is not translating into profitability → pricing or cost issue."
              />
              <FindingCard
                number="02"
                title="Binders — High Volume, Low Margin"
                description="High sales & quantity but low profit contribution. Binders = traffic generator, not profit driver."
              />
              <FindingCard
                number="03"
                title="Discount Sensitivity Eroding Margin"
                description="High sales often tied to high discounts. Discount strategy is eroding overall profitability."
              />
              <FindingCard
                number="04"
                title="Seasonal Demand Pattern"
                description="Sales spike in August (back-to-school). Demand is seasonal-driven, not stable."
              />
            </div>
            <FindingCard
              number="05"
              title="Product Profitability Contrast"
              description="Paper = highest profit. Binders = high sales, lower profit. Not all high-selling products are profitable."
            />
          </section>

          {/* 04 — STRATEGY */}
          <section>
            <SectionLabel number="04" label="STRATEGY" />
            <h2 className="text-2xl font-bold text-gray-900 font-heading mb-4">Decision Recommendations</h2>
            <ul className="space-y-3 mb-8">
              {[
                'Reduce Discount Dependency — Stop aggressive discounting on Binders to protect margin',
                'Implement Bundling Strategy — Combine Binders (high demand) + Paper (high profit)',
                'Segment-Based Promotion — Target only profitable customer segments, avoid mass discount',
                'Seasonal Optimization — Focus campaigns on August, reduce spend in low-demand months'
              ].map((item, i) => (
                <li key={i} className="flex items-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange mt-2 mr-3 flex-shrink-0" />
                  <span className="text-gray-600">{item}</span>
                </li>
              ))}
            </ul>

            <div className="bg-bg-card rounded-2xl p-6 border border-white/5">
              <p className="text-sm font-bold text-white mb-2 font-heading">Strategic Conclusion</p>
              <p className="text-sm text-text-secondary leading-relaxed">
                Binders should be treated as traffic generator. Profit must be driven by bundling + pricing control.
              </p>
            </div>
          </section>
        </div>
      </div>

      {/* ═══════ FOOTER NAV ═══════ */}
      <div className="bg-bg-dark border-t border-white/5">
        <div className="max-w-5xl mx-auto px-6 md:px-12 py-8 flex justify-between">
          <Link
            to="/projects/pegadaian"
            className="inline-flex items-center text-sm text-orange hover:text-orange-light transition-colors font-semibold"
          >
            <HiArrowLeft className="mr-2 h-4 w-4" />
            Pegadaian
          </Link>
          <Link
            to="/projects/pizza-sales"
            className="inline-flex items-center text-sm text-orange hover:text-orange-light transition-colors font-semibold"
          >
            Next: Pizza Sales
            <HiArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
