import React from 'react';
import { Campaign } from '../Campaign/campaign';

interface CampaignTableProps {
  campaigns: Campaign[];
}

export function CampaignTable({ campaigns }: CampaignTableProps) {
  const renderPerformanceTag = (performance: number) => {
    if (performance > 80) {
      return 'bg-green-100 text-green-800';
    } else if (performance > 60) {
      return 'bg-yellow-100 text-yellow-800';
    }
    return 'bg-red-100 text-red-800';
  };

  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-3 text-left border">Campaign Name</th>
            <th className="p-3 text-left border">Platform</th>
            <th className="p-3 text-left border">Budget</th>
            <th className="p-3 text-left border">Performance</th>
            <th className="p-3 text-left border">Date Range</th>
            <th className="p-3 text-left border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {campaigns.map((campaign) => (
            <tr key={campaign.id} className="hover:bg-gray-50">
              <td className="p-3 border">{campaign.name}</td>
              <td className="p-3 border">{campaign.platform}</td>
              <td className="p-3 border">{campaign.budget}</td>
              <td className="p-3 border">
                <span className={`px-2 py-1 rounded ${renderPerformanceTag(campaign.performance)}`}>
                  {campaign.performance}%
                </span>
              </td>
              <td className="p-3 border">{campaign.startDate} - {campaign.endDate}</td>
              <td className="p-3 border">
                <div className="flex space-x-2">
                  <button className="px-2 py-1 text-sm text-blue-600 border border-blue-600 rounded hover:bg-blue-50">
                    Edit
                  </button>
                  <button className="px-2 py-1 text-sm text-red-600 border border-red-600 rounded hover:bg-red-50">
                    Pause
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}