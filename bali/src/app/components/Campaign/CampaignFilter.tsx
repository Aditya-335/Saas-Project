import React from 'react';

interface CampaignFiltersProps {
  selectedPlatform: string;
  onPlatformChange: (platform: string) => void;
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export function CampaignFilters({
  selectedPlatform,
  onPlatformChange,
  activeTab,
  onTabChange,
}: CampaignFiltersProps) {
  return (
    <>
      <div className="flex justify-between items-center mb-4">
        <div className="flex space-x-4">
          <select 
            value={selectedPlatform} 
            onChange={(e) => onPlatformChange(e.target.value)}
            className="px-3 py-2 border rounded"
          >
            <option value="All">All Platforms</option>
            <option value="Google Ads">Google Ads</option>
            <option value="Facebook">Facebook</option>
            <option value="LinkedIn">LinkedIn</option>
          </select>
          <button className="px-4 py-2 border rounded hover:bg-gray-50">
            Export Reports
          </button>
        </div>
        <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
          Create New Campaign
        </button>
      </div>

      <div className="mb-4 border-b">
        <nav className="flex space-x-4">
          {['active', 'paused', 'completed'].map((tab) => (
            <button
              key={tab}
              onClick={() => onTabChange(tab)}
              className={`py-2 px-4 ${
                activeTab === tab 
                  ? 'border-b-2 border-blue-600 text-blue-600' 
                  : 'text-gray-600'
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)} Campaigns
            </button>
          ))}
        </nav>
      </div>
    </>
  );
}