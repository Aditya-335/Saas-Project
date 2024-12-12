'use client';
import React, { useState } from 'react';
import RulesList from '../../../components/Campaign/ruleList';
import CreateRuleModal from '../../../components/Campaign/createRules';
import { Rule, NewRule } from '../../../components/Campaign/types';
import { initialRules, defaultNewRule } from '../../../components/Campaign/data';

const AutomatedRules = () => {
  const [rules, setRules] = useState<Rule[]>(initialRules);
  const [isCreateRuleModalOpen, setIsCreateRuleModalOpen] = useState(false);
  const [newRule, setNewRule] = useState<NewRule>(defaultNewRule);

  const handleCreateRule = () => {
    const ruleToAdd: Rule = {
      id: rules.length + 1,
      name: newRule.name,
      condition: `If ${newRule.metric} ${newRule.condition} ${newRule.value}`,
      action: newRule.action,
      status: 'Active',
      campaigns: newRule.selectedCampaigns
    };

    setRules([...rules, ruleToAdd]);
    setIsCreateRuleModalOpen(false);
    setNewRule(defaultNewRule);
  };

  const toggleRuleStatus = (ruleId: number) => {
    setRules(rules.map(rule => 
      rule.id === ruleId 
        ? { ...rule, status: rule.status === 'Active' ? 'Inactive' : 'Active' }
        : rule
    ));
  };

  return (
    <div className="p-4 md:p-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <h1 className="text-2xl font-bold">Automated Rules</h1>
        <button 
          className="w-full md:w-auto px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          onClick={() => setIsCreateRuleModalOpen(true)}
        >
          Create New Rule
        </button>
      </div>

      <RulesList rules={rules} onToggleStatus={toggleRuleStatus} />

      <CreateRuleModal 
        isOpen={isCreateRuleModalOpen}
        onClose={() => setIsCreateRuleModalOpen(false)}
        newRule={newRule}
        setNewRule={setNewRule}
        onCreateRule={handleCreateRule}
      />
    </div>
  );
};

export default AutomatedRules;