import { Link } from 'react-router-dom';
import { HiArrowLeft } from 'react-icons/hi2';
import StatCard from '../../components/ui/StatCard';
import SectionLabel from '../../components/ui/SectionLabel';

export default function PizzaSalesPage() {
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
            Projects / <span className="text-text-secondary">Pizza Sales Analysis</span>
          </p>

          <span className="inline-block px-4 py-1.5 text-[10px] font-bold uppercase tracking-wider bg-orange text-white rounded-full mb-6">
            EXCEL ANALYSIS · EDA
          </span>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white font-heading mb-4 max-w-3xl leading-tight">
            Pizza Sales Performance Analysis — Microsoft Excel
          </h1>
          <p className="text-base text-text-muted max-w-2xl mb-10">
            Exploratory Data Analysis for Revenue Patterns, Product Performance & Customer Behavior
          </p>

          <div className="flex flex-wrap gap-4 mb-8">
            <StatCard value="$817,860" label="Total Revenue" />
            <StatCard value="21,350" label="Total Transactions" />
            <StatCard value="$38.31" label="Average Order Value" />
            <StatCard value="Aug" label="Peak Revenue Month" />
          </div>

          <div className="flex flex-wrap gap-2">
            {['Microsoft Excel', 'Pivot Tables', 'XLOOKUP', 'SUMIF', 'Data Cleaning'].map((tag) => (
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
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 font-heading mb-4">Project Overview</h2>
                <p className="text-gray-600 leading-relaxed">
                  Conducted exploratory data analysis on 21,350 pizza sales transactions to identify revenue patterns, product performance, and customer behavior. Dataset includes: product, category, date, quantity, and price.
                </p>
              </div>
              <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-100">
                <img
                  src="/images/projects/pizza-sales/dashboard.png"
                  alt="Pizza Sales Dashboard — Excel"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </section>

          {/* 02 — DATA PREPARATION */}
          <section>
            <SectionLabel number="02" label="DATA PREPARATION" />
            <h2 className="text-2xl font-bold text-gray-900 font-heading mb-4">Data Preparation & Processing</h2>
            <ul className="space-y-3 mb-4">
              {[
                'Cleaned inconsistent formats and standardized numeric & date fields',
                'KPI: Revenue ($817,860) · Orders (21,350) · Average Order Value ($38.31)',
                'Techniques: Pivot Tables · Aggregation · Time-based grouping'
              ].map((item, i) => (
                <li key={i} className="flex items-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange mt-2 mr-3 flex-shrink-0" />
                  <span className="text-gray-600">{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* 03 — KEY INSIGHTS */}
          <section>
            <SectionLabel number="03" label="KEY INSIGHTS" />
            <h2 className="text-2xl font-bold text-gray-900 font-heading mb-6">Key Insights</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-bg-card rounded-2xl p-6 border border-white/5">
                <h4 className="text-base font-bold text-white font-heading mb-3">
                  Revenue<br />Concentration
                </h4>
                <p className="text-sm text-text-secondary leading-relaxed">
                  Revenue is concentrated on specific product categories — not evenly distributed across all items.
                </p>
              </div>
              <div className="bg-bg-card rounded-2xl p-6 border border-white/5">
                <h4 className="text-base font-bold text-white font-heading mb-3">
                  Seasonal<br />Spike
                </h4>
                <p className="text-sm text-text-secondary leading-relaxed">
                  Clear sales spike in August, similar to other datasets. Seasonal demand pattern confirmed.
                </p>
              </div>
              <div className="bg-bg-card rounded-2xl p-6 border border-white/5">
                <h4 className="text-base font-bold text-white font-heading mb-3">
                  Volume ≠<br />Profit
                </h4>
                <p className="text-sm text-text-secondary leading-relaxed">
                  High-volume products don't always contribute the highest profit. Margin analysis is essential.
                </p>
              </div>
            </div>
          </section>

          {/* 04 — RECOMMENDATIONS */}
          <section>
            <SectionLabel number="04" label="RECOMMENDATIONS" />
            <h2 className="text-2xl font-bold text-gray-900 font-heading mb-4">Decision Recommendations</h2>
            <ul className="space-y-3 mb-8">
              {[
                'Focus on high-margin products rather than high-volume ones',
                'Use seasonal demand pattern (August spike) for campaign timing',
                'Optimize pricing strategy to improve overall profit margin'
              ].map((item, i) => (
                <li key={i} className="flex items-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange mt-2 mr-3 flex-shrink-0" />
                  <span className="text-gray-600">{item}</span>
                </li>
              ))}
            </ul>

            {/* Tools Used */}
            <div className="bg-bg-card rounded-2xl p-6 border border-white/5">
              <p className="text-sm font-bold text-white mb-2 font-heading">Tools Used</p>
              <p className="text-sm text-text-secondary">
                Microsoft Excel — Pivot Tables, XLOOKUP, SUMIF, Data Cleaning, Conditional Formatting
              </p>
            </div>
          </section>
        </div>
      </div>

      {/* ═══════ FOOTER NAV ═══════ */}
      <div className="bg-bg-dark border-t border-white/5">
        <div className="max-w-5xl mx-auto px-6 md:px-12 py-8 flex justify-between">
          <Link
            to="/projects/sales-shipping"
            className="inline-flex items-center text-sm text-orange hover:text-orange-light transition-colors font-semibold"
          >
            <HiArrowLeft className="mr-2 h-4 w-4" />
            Sales & Shipping
          </Link>
          <Link
            to="/#projects"
            className="inline-flex items-center text-sm text-orange hover:text-orange-light transition-colors font-semibold"
          >
            Back to Projects
          </Link>
        </div>
      </div>
    </div>
  );
}
