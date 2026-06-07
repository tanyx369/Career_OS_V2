import React from 'react';
import { useMarketIntelligenceStore } from '../../store/useMarketIntelligenceStore';
import AIInsightCard from './AIInsightCard';
import InteractiveDropdown from './InteractiveDropdown';
import InDemandSkillsTable from './InDemandSkillsTable';
import MarketPositionCard from './MarketPositionCard';
import MarketTrendChart from './MarketTrendChart';
import SalaryBenchmarkCard from './SalaryBenchmarkCard';
import ShareReportButton from './ShareReportButton';
import MarketSkeletonLoader from './MarketSkeletonLoader';

export default function MarketStanding() {
  const {
    selectedCountry,
    selectedTimeframe,
    isLoading,
    marketData,
    setCountry,
    setTimeframe,
  } = useMarketIntelligenceStore();

  const countryOptions = [
    'Malaysia',
    'Singapore',
    'Indonesia',
    'Thailand',
    'Vietnam',
    'Philippines',
    'Australia',
    'United Kingdom',
    'United States',
    'Canada',
  ];

  const timeframeOptions = [
    'Past 3 Months',
    'Past 6 Months',
    'Past 12 Months',
    'Past 24 Months',
    'Past 5 Years',
  ];

  return (
    <div className="space-y-5">
      <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">
        <InteractiveDropdown
          label="Country"
          options={countryOptions}
          selectedOption={selectedCountry}
          onSelect={setCountry}
        />
        <InteractiveDropdown
          label="Timeframe"
          options={timeframeOptions}
          selectedOption={selectedTimeframe}
          onSelect={setTimeframe}
        />
        <ShareReportButton />
      </div>

      <MarketSkeletonLoader isLoading={isLoading}>
        <div className="space-y-5">
          <section className="grid gap-5 2xl:grid-cols-[1.25fr_1.1fr_0.95fr]">
            <MarketTrendChart data={marketData.trendData} growthText={marketData.demandGrowthText} />
            <InDemandSkillsTable skills={marketData.inDemandSkills} />
            <SalaryBenchmarkCard benchmark={marketData.salaryBenchmark} />
          </section>

          <section className="grid gap-5 xl:grid-cols-[1.05fr_1.35fr_1fr]">
            <MarketPositionCard score={marketData.marketPositionScore} country={selectedCountry} />

            <div className="grid gap-5 md:grid-cols-2">
              <section className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-[0_12px_30px_rgba(15,23,42,0.04)]">
                <h3 className="text-sm font-semibold text-slate-950">You are strong in</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {marketData.strongAreas.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-lg bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700 ring-1 ring-emerald-100"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </section>

              <section className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-[0_12px_30px_rgba(15,23,42,0.04)]">
                <h3 className="text-sm font-semibold text-slate-950">Focus to improve</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {marketData.improvementAreas.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-lg bg-rose-50 px-3 py-1 text-xs font-semibold text-rose-700 ring-1 ring-rose-100 animate-pulse"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </section>
            </div>

            <AIInsightCard title="AI Insight" insight={{ text: marketData.aiInsight }} />
          </section>
        </div>
      </MarketSkeletonLoader>
    </div>
  );
}
