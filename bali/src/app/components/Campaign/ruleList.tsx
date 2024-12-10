import React from 'react';
import { Rule } from '../Campaign/types';

interface RulesListProps {
  rules: Rule[];
  onToggleStatus: (id: number) => void;
}

const RulesList = ({ rules, onToggleStatus }: RulesListProps) => {
  return (
    <div className="bg-white shadow rounded-lg overflow-x-auto">
      <table className="w-full min-w-[800px]">
        <thead className="bg-gray-100 border-b">
          <tr>
            <th className="p-3 text-left">Rule Name</th>
            <th className="p-3 text-left">Condition</th>
            <th className="p-3 text-left">Action</th>
            <th className="p-3 text-left">Campaigns</th>
            <th className="p-3 text-left">Status</th>
            <th className="p-3 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {rules.map((rule) => (
            <tr key={rule.id} className="border-b hover:bg-gray-50">
              <td className="p-3 whitespace-nowrap">{rule.name}</td>
              <td className="p-3 whitespace-nowrap">{rule.condition}</td>
              <td className="p-3 whitespace-nowrap">{rule.action}</td>
              <td className="p-3">
                <div className="flex flex-wrap gap-1">
                  {rule.campaigns.map((campaign) => (
                    <span 
                      key={campaign} 
                      className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs"
                    >
                      {campaign}
                    </span>
                  ))}
                </div>
              </td>
              <td className="p-3">
                <span 
                  className={`px-2 py-1 rounded text-xs ${
                    rule.status === 'Active' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-gray-100 text-gray-800'
                  }`}
                >
                  {rule.status}
                </span>
              </td>
              <td className="p-3">
                <div className="flex flex-wrap gap-2">
                  <button 
                    className={`px-2 py-1 rounded text-xs ${
                      rule.status === 'Active' 
                        ? 'bg-red-100 text-red-800' 
                        : 'bg-green-100 text-green-800'
                    }`}
                    onClick={() => onToggleStatus(rule.id)}
                  >
                    {rule.status === 'Active' ? 'Deactivate' : 'Activate'}
                  </button>
                  <button 
                    className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs"
                  >
                    Edit
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RulesList;