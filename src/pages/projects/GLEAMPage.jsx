import { Link } from 'react-router-dom';
import { HiArrowLeft, HiArrowRight } from 'react-icons/hi2';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';
import StatCard from '../../components/ui/StatCard';
import SectionLabel from '../../components/ui/SectionLabel';

export default function GLEAMPage() {
  return (
    <div className="min-h-screen">
      {/* ═══════ HEADER (Dark) ═══════ */}
      <div className="bg-bg-dark relative overflow-hidden">
        {/* Decorative circle */}
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] gradient-circle pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-16 pt-24 pb-12">
          {/* Back link */}
          <Link
            to="/#projects"
            className="inline-flex items-center text-sm text-orange hover:text-orange-light mb-8 transition-colors"
          >
            <HiArrowLeft className="mr-2 h-4 w-4" />
            Back to Projects
          </Link>

          {/* Breadcrumb */}
          <p className="text-xs text-text-muted mb-3">
            Projects / <span className="text-text-secondary">GLEAM</span>
          </p>

          {/* Category badge */}
          <span className="inline-block px-4 py-1.5 text-[10px] font-bold uppercase tracking-wider bg-orange text-white rounded-full mb-6">
            HEALTH INFORMATICS · DATA & SYSTEM ANALYTICS
          </span>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white font-heading mb-4 max-w-3xl leading-tight">
            GLEAM — Health Data Monitoring System
          </h1>
          <p className="text-base text-text-muted max-w-2xl mb-10">
            Diabetes Education and Risk Monitoring Dashboard for Community Health Centers
          </p>

          {/* Stats row */}
          <div className="flex flex-wrap gap-4 mb-8">
            <StatCard value="0%" label="Error Rate (load test)" />
            <StatCard value="28%" label="Knowledge Improvement" />
            <StatCard value="25" label="Concurrent Users Tested" />
            <StatCard value="100–300ms" label="System Response Time" />
          </div>

          {/* Tech tags */}
          <div className="flex flex-wrap gap-2">
            {['Laravel', 'MySQL', 'REST API', 'SQL Aggregation', 'Leaflet GIS', 'GitHub'].map((tag) => (
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
                  This project involved developing a web-based system to support diabetes education, screening, and risk monitoring at the community level. The system was designed to address the lack of structured data collection and monitoring in public health centers, particularly for early detection and follow-up actions.
                </p>
              </div>
              <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-100">
                <img
                  src="/images/projects/gleam/dashboard-1.png"
                  alt="GLEAM — Lokasi Persebaran Dashboard"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </section>

          {/* 02 — PROBLEM */}
          <section>
            <SectionLabel number="02" label="PROBLEM" />
            <h2 className="text-2xl font-bold text-gray-900 font-heading mb-4">Problem Statement</h2>
            <ul className="space-y-3">
              {[
                'Health data was collected manually and inconsistently',
                'No centralized system for monitoring patient risk levels',
                'Difficult to track intervention effectiveness over time',
                'Limited visibility into regional distribution of diabetes risk'
              ].map((item, i) => (
                <li key={i} className="flex items-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange mt-2 mr-3 flex-shrink-0" />
                  <span className="text-gray-600">{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* 03 — ARCHITECTURE */}
          <section>
            <SectionLabel number="03" label="ARCHITECTURE" />
            <h2 className="text-2xl font-bold text-gray-900 font-heading mb-6">System Design & Data Flow</h2>
            <div className="flex flex-wrap items-center gap-3 justify-center">
              {['User Input', 'API Processing', 'MySQL Storage', 'SQL Aggregation', 'Dashboard'].map((step, i, arr) => (
                <div key={step} className="flex items-center gap-3">
                  <span className="px-5 py-2.5 text-sm font-semibold bg-orange text-white rounded-lg">
                    {step}
                  </span>
                  {i < arr.length - 1 && (
                    <HiArrowRight className="w-5 h-5 text-gray-400" />
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* 04 — DATA PROCESSING */}
          <section>
            <SectionLabel number="04" label="DATA PROCESSING" />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 font-heading mb-4">KPI Development</h2>
                <ul className="space-y-3 mb-6">
                  {[
                    'Total screened users',
                    'Risk category distribution — Low / Medium / High',
                    'Regional distribution at RW-level granularity',
                    'Assessment completion rates'
                  ].map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="w-1.5 h-1.5 rounded-full bg-orange mt-2 mr-3 flex-shrink-0" />
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-gray-900 font-semibold mb-3">KPI Structure supports:</p>
                <ul className="space-y-2">
                  {[
                    'Monitoring trends over time',
                    'Identifying high-risk clusters',
                    'Evaluating intervention coverage'
                  ].map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="w-1.5 h-1.5 rounded-full bg-orange mt-2 mr-3 flex-shrink-0" />
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-100">
                <img
                  src="/images/projects/gleam/dashboard-2.png"
                  alt="GLEAM — Dashboard Manajemen"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </section>

          {/* 05 — QUALITY ASSURANCE */}
          <section>
            <SectionLabel number="05" label="QUALITY ASSURANCE" />
            <h2 className="text-2xl font-bold text-gray-900 font-heading mb-4">Data Validation & System Reliability</h2>
            <ul className="space-y-3">
              {[
                'Implemented validation rules for input consistency',
                'Ensured alignment between raw data, aggregated results, and dashboard outputs',
                'Load testing with 25 concurrent users — Response time: 100–300 ms',
                'Error rate: 0% under concurrent usage',
                'Maintainability analysis: 272 frontend + 118 backend issues categorized'
              ].map((item, i) => (
                <li key={i} className="flex items-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange mt-2 mr-3 flex-shrink-0" />
                  <span className="text-gray-600">{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* 06 — RESULTS */}
          <section>
            <SectionLabel number="06" label="RESULTS" />
            <h2 className="text-2xl font-bold text-gray-900 font-heading mb-6">Evaluation & Measurable Results</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-bg-card rounded-2xl p-6 border border-white/5">
                <p className="text-sm text-text-muted mb-2">User Knowledge Improvement</p>
                <p className="text-2xl font-bold text-orange font-heading mb-1">
                  Pre-test 50% → Post-test 78%
                </p>
                <p className="text-sm text-text-secondary">28% improvement in user understanding</p>
              </div>
              <div className="bg-bg-card rounded-2xl p-6 border border-white/5">
                <p className="text-sm text-text-muted mb-2">System Stability</p>
                <p className="text-2xl font-bold text-orange font-heading mb-1">
                  0% Failure Rate
                </p>
                <p className="text-sm text-text-secondary">Under 25 concurrent users load test</p>
              </div>
            </div>
          </section>

          {/* 07 — INSIGHTS */}
          <section>
            <SectionLabel number="07" label="INSIGHTS" />
            <h2 className="text-2xl font-bold text-gray-900 font-heading mb-4">Key Insights</h2>
            <ul className="space-y-3">
              {[
                'Identified uneven distribution of diabetes risk across regions',
                'Enabled targeted intervention based on RW-level data',
                'Highlighted correlation between education module usage and improved screening results'
              ].map((item, i) => (
                <li key={i} className="flex items-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange mt-2 mr-3 flex-shrink-0" />
                  <span className="text-gray-600">{item}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>

      {/* ═══════ FOOTER NAV ═══════ */}
      <div className="bg-bg-dark border-t border-white/5">
        <div className="max-w-5xl mx-auto px-6 md:px-12 py-8 flex justify-end">
          <Link
            to="/projects/pegadaian"
            className="inline-flex items-center text-sm text-orange hover:text-orange-light transition-colors font-semibold"
          >
            Next Project: Pegadaian Dashboard
            <HiArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
