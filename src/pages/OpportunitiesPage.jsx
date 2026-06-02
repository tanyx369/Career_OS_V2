import React from 'react'
import OpportunityMarketplace from '../components/opportunities/OpportunityMarketplace'
import { opportunities } from '../data/mockData'

export default function OpportunitiesPage() {
  return <OpportunityMarketplace opportunities={opportunities} />
}
