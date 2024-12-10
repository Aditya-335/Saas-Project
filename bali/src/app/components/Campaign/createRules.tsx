import React from 'react';
import { NewRule } from '../Campaign/types';
import { campaignOptions, metricOptions, actionOptions, conditionOptions } from '../Campaign/data';

interface CreateRuleModalProps {
  isOpen: boolean;
  onClose: () => void;
  newRule: NewRule;
  setNewRule: (rule: NewRule) => void;
  onCreateRule: () => void;
}

const CreateRuleModal = ({ 
  isOpen, 
  onClose, 
  newRule, 
  setNewRule, 
  onCreateRule 
}: CreateRuleModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg p-6 w-full max-w-[600px] max-h-[90vh] overflow-y-auto">
        <h2 className="text-xl font-semibold mb-4">Create New Automated Rule</h2>
        
        <div className="space-y-4">
          <div>
            <label className="block mb-2">Rule Name</label>
            <input 
              type="text"
              className="w-full p-2 border rounded"
              value={newRule.name}
              onChange={(e) => setNewRule({...newRule, name: e.target.value})}
              placeholder="Enter rule name"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block mb-2">Metric</label>
              <select 
                className="w-full p-2 border rounded"
                value={newRule.metric}
                onChange={(e) => setNewRule({...newRule, metric: e.target.value})}
              >
                {metricOptions.map(metric => (
                  <option key={metric} value={metric}>{metric}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block mb-2">Condition</label>
              <select 
                className="w-full p-2 border rounded"
                value={newRule.condition}
                onChange={(e) => setNewRule({...newRule, condition: e.target.value})}
              >
                {conditionOptions.map(condition => (
                  <option key={condition} value={condition}>{condition}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block mb-2">Value</label>
              <input 
                type="text"
                className="w-full p-2 border rounded"
                value={newRule.value}
                onChange={(e) => setNewRule({...newRule, value: e.target.value})}
                placeholder="Enter value"
              />
            </div>
          </div>

          <div>
            <label className="block mb-2">Action</label>
            <select 
              className="w-full p-2 border rounded"
              value={newRule.action}
              onChange={(e) => setNewRule({...newRule, action: e.target.value})}
            >
              {actionOptions.map(action => (
                <option key={action} value={action}>{action}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block mb-2">Apply to Campaigns</label>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
              {campaignOptions.map(campaign => (
                <label key={campaign} className="flex items-center space-x-2">
                  <input 
                    type="checkbox"
                    checked={newRule.selectedCampaigns.includes(campaign)}
                    onChange={(e) => {
                      const updatedCampaigns = e.target.checked
                        ? [...newRule.selectedCampaigns, campaign]
                        : newRule.selectedCampaigns.filter(c => c !== campaign);
                      setNewRule({...newRule, selectedCampaigns: updatedCampaigns});
                    }}
                  />
                  <span>{campaign}</span>
                </label>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-end space-y-2 sm:space-y-0 sm:space-x-4 mt-6">
          <button 
            className="px-4 py-2 border rounded hover:bg-gray-100"
            onClick={onClose}
          >
            Cancel
          </button>
          <button 
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50"
            onClick={onCreateRule}
            disabled={!newRule.name || !newRule.value}
          >
            Create Rule
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateRuleModal;