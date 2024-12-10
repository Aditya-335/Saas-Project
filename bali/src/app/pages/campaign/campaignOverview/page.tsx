"use client";
import React, { useState } from 'react';
import { CampaignTable } from '../../../components/Campaign/CampaignTable';
import { CampaignFilters } from '../../../components/Campaign/CampaignFilter';
import { PerformanceChart } from '../../../components/Campaign/PerformanceChart';
import { campaignData, performanceData } from '../../../components/Campaign/CampaignData';

const CampaignOverview = () => {
  const [selectedPlatform, setSelectedPlatform] = useState('All');
  const [activeTab, setActiveTab] = useState('active');

  return (
    <div className="p-4 md:p-6 space-y-6">
      <div className="bg-white shadow rounded-lg">
        <div className="p-4 md:p-6 border-b">
          <h2 className="text-xl md:text-2xl font-semibold">Campaign Overview</h2>
        </div>
        
        <div className="p-4 md:p-6">
          <CampaignFilters
            selectedPlatform={selectedPlatform}
            onPlatformChange={setSelectedPlatform}
            activeTab={activeTab}
            onTabChange={setActiveTab}
          />

          <CampaignTable campaigns={campaignData[activeTab]} />
        </div>
      </div>

      <PerformanceChart data={performanceData} />
    </div>
  );
}

export default CampaignOverview