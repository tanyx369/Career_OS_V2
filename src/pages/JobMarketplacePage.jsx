import React, { useState, useMemo } from 'react';
import { Inbox, Search } from 'lucide-react';
import OpportunityCard from '../components/employer/OpportunityCard';
import CreateOpportunityWizard from '../components/employer/CreateOpportunityWizard';
import ApplicantPipeline from '../components/employer/ApplicantPipeline';
import OpportunityAnalytics from '../components/employer/OpportunityAnalytics';
import { employerTalentWorkspace } from '../data/mockData';

import { useEmployerMarketplaceStore } from '../store/useEmployerMarketplaceStore';

export default function JobMarketplacePage() {
  const opportunities = useEmployerMarketplaceStore((state) => state.opportunities);
  const pipelineApplications = useEmployerMarketplaceStore((state) => state.pipelineApplications);
  const addOpportunity = useEmployerMarketplaceStore((state) => state.addOpportunity);
  const updatePipelineCandidates = useEmployerMarketplaceStore((state) => state.updatePipelineCandidates);
  
  const [currentView, setCurrentView] = useState('dashboard');
  const [selectedOpportunity, setSelectedOpportunity] = useState(null);
  
  const [activeTab, setActiveTab] = useState('Active');
  
  const [searchQuery, setSearchQuery] = useState('');
  const [filterType, setFilterType] = useState('All');
  const [filterLocation, setFilterLocation] = useState('All');

  const [isWizardOpen, setIsWizardOpen] = useState(false);

  const stats = useMemo(() => {
    const activeCount = opportunities.filter(o => o.status === 'Active').length;
    
    let totalApplicants = 0;
    let totalInterviews = 0;
    let totalHired = 0;

    Object.entries(pipelineApplications).forEach(([oppId, list]) => {
      const opp = opportunities.find(o => o.id === oppId);
      if (opp && opp.status === 'Active') {
        totalApplicants += list.length;
        totalInterviews += list.filter(c => c.stage === 'Interviewing').length;
        totalHired += list.filter(c => c.stage === 'Hired').length;
      }
    });

    // Calculate dynamic average match rate of active positions
    const activeOppsWithApplicants = opportunities.filter(o => o.status === 'Active' && o.applicantsCount > 0);
    const avgMatchRate = activeOppsWithApplicants.length > 0
      ? Math.round(activeOppsWithApplicants.reduce((sum, o) => sum + o.averageMatch, 0) / activeOppsWithApplicants.length)
      : 89;

    return {
      active: activeCount,
      applicants: totalApplicants,
      interviews: totalInterviews,
      filled: totalHired,
      matchRate: avgMatchRate
    };
  }, [opportunities, pipelineApplications]);

  const handleCreateOpportunity = (newOpp) => {
    addOpportunity(newOpp);
    setIsWizardOpen(false);
    
    if (newOpp.status === 'Active') {
      setActiveTab('Active');
    } else {
      setActiveTab('Drafts');
    }
  };

  const handleUpdatePipelineCandidates = (opportunityId, updatedList) => {
    updatePipelineCandidates(opportunityId, updatedList);
  };


  const filteredOpportunities = useMemo(() => {
    return opportunities.filter(opp => {
      if (activeTab === 'Active' && opp.status !== 'Active') return false;
      if (activeTab === 'Drafts' && opp.status !== 'Draft') return false;
      if (activeTab === 'Closed' && opp.status !== 'Closed') return false;
      if (activeTab === 'Archived' && opp.status !== 'Archived') return false;

      const matchesSearch = opp.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            opp.requiredSkills.some(s => s.toLowerCase().includes(searchQuery.toLowerCase()));
      const matchesType = filterType === 'All' || opp.type === filterType;
      const matchesLocation = filterLocation === 'All' || opp.location === filterLocation;

      return matchesSearch && matchesType && matchesLocation;
    });
  }, [opportunities, activeTab, searchQuery, filterType, filterLocation]);

  return (
    <div className="space-y-6">
      
      {/* 1. Main View: Jobs Dashboard */}
      {currentView === 'dashboard' && (
        <div className="space-y-6">
          
          {/* Header */}
          <header className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-slate-950">Job & Internship Marketplace</h2>
              <p className="mt-2 text-sm text-slate-500">Publish vacancies, review trace-matched applications, and direct-hire university talent.</p>
            </div>
            <button
              onClick={() => setIsWizardOpen(true)}
              className="h-11 rounded-[8px] bg-gradient-to-br from-indigo-600 to-blue-600 px-6 text-sm font-semibold text-white shadow-md shadow-indigo-100 hover:bg-gradient-to-br hover:from-indigo-700 hover:to-blue-700 transition duration-200"
              type="button"
            >
              + Create Opportunity
            </button>
          </header>

          {/* Stats Cards Section */}
          <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {[
              { label: 'Active Positions', value: stats.active },
              { label: 'Total Applicants', value: stats.applicants },
              { label: 'Interviews Running', value: stats.interviews },
              { label: 'Positions Filled', value: stats.filled },
              { label: 'Average Match Rate', value: `${stats.matchRate}%` }
            ].map((stat) => (
              <div key={stat.label} className="rounded-[8px] border border-slate-200/80 bg-white p-5 shadow-[0_12px_30px_rgba(15,23,42,0.04)] flex flex-col justify-between">
                <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">{stat.label}</span>
                <p className="mt-3 text-2xl font-semibold text-slate-950 leading-none">{stat.value}</p>
                <div className="mt-2.5 h-1 w-12 rounded bg-gradient-to-r from-slate-200 to-slate-300" />
              </div>
            ))}
          </section>

          {/* Tabs bar */}
          <div className="border-b border-slate-200">
            <div className="flex gap-8 overflow-x-auto">
              {['Active', 'Drafts', 'Closed', 'Archived', 'Analytics'].map((tab) => (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setActiveTab(tab)}
                  className={`relative whitespace-nowrap px-1 pb-4 text-sm font-semibold transition-all duration-200 ${
                    activeTab === tab ? 'text-blue-700' : 'text-slate-500 hover:text-slate-900'
                  }`}
                >
                  {tab}
                  {activeTab === tab && (
                    <span className="absolute bottom-0 left-0 h-0.5 w-full rounded-full bg-blue-600" />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Render Active/Drafts/Closed listings */}
          {activeTab !== 'Analytics' ? (
            <div className="space-y-6">
              
              {/* Filters Panel */}
              <div className="rounded-[8px] border border-slate-200 bg-white p-4 flex flex-col md:flex-row items-center gap-4 shadow-sm">
                
                {/* Search */}
                <div className="relative w-full md:w-80">
                  <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search by title or skills..."
                    className="w-full rounded-[8px] border border-slate-200 pl-9 pr-4 py-2 text-xs font-medium text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 bg-white"
                  />
                </div>

                {/* Filters */}
                <div className="flex flex-wrap items-center gap-4 w-full md:w-auto">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold text-slate-500 whitespace-nowrap">Role Type:</span>
                    <select
                      value={filterType}
                      onChange={(e) => setFilterType(e.target.value)}
                      className="rounded-[8px] border border-slate-200 px-3 py-2 text-xs font-semibold text-slate-700 bg-white focus:outline-none"
                    >
                      <option value="All">All Types</option>
                      <option value="Internship">Internships</option>
                      <option value="Graduate Program">Graduate Programs</option>
                      <option value="Full-Time">Full-Time</option>
                      <option value="Part-Time">Part-Time</option>
                    </select>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold text-slate-500 whitespace-nowrap">Work Mode:</span>
                    <select
                      value={filterLocation}
                      onChange={(e) => setFilterLocation(e.target.value)}
                      className="rounded-[8px] border border-slate-200 px-3 py-2 text-xs font-semibold text-slate-700 bg-white focus:outline-none"
                    >
                      <option value="All">All Modes</option>
                      <option value="On-site">On-site</option>
                      <option value="Hybrid">Hybrid</option>
                      <option value="Remote">Remote</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Opportunities list grid */}
              {filteredOpportunities.length > 0 ? (
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-stretch">
                  {filteredOpportunities.map((opportunity) => (
                    <OpportunityCard
                      key={opportunity.id}
                      opportunity={opportunity}
                      onViewApplicants={() => {
                        setSelectedOpportunity(opportunity);
                        setCurrentView('pipeline');
                      }}
                    />
                  ))}
                </div>
              ) : (
                <div className="rounded-[8px] border border-dashed border-slate-200 bg-slate-50/50 p-16 text-center space-y-3">
                  <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-500">
                    <Inbox className="h-6 w-6" />
                  </span>
                  <h3 className="text-sm font-semibold text-slate-950">No opportunities found</h3>
                  <p className="text-xs text-slate-400 font-normal max-w-sm mx-auto">Try clearing search filters or create a new vacancy listing to get started.</p>
                </div>
              )}

            </div>
          ) : (
            // Render aggregated Analytics tab
            <OpportunityAnalytics 
              opportunities={opportunities} 
              allCandidates={Object.values(pipelineApplications).flat()} 
            />
          )}

        </div>
      )}

      {/* 2. Secondary View: Candidate Application Pipeline stage board */}
      {currentView === 'pipeline' && selectedOpportunity && (
        <ApplicantPipeline
          opportunity={selectedOpportunity}
          candidates={pipelineApplications[selectedOpportunity.id] || []}
          onUpdateCandidates={(updatedList) => handleUpdatePipelineCandidates(selectedOpportunity.id, updatedList)}
          onBack={() => {
            setCurrentView('dashboard');
            setSelectedOpportunity(null);
          }}
          allMockCandidates={employerTalentWorkspace.candidates}
        />
      )}

      {/* Posting Overlay wizard modal */}
      <CreateOpportunityWizard
        isOpen={isWizardOpen}
        onClose={() => setIsWizardOpen(false)}
        onSave={handleCreateOpportunity}
      />
    </div>
  );
}
