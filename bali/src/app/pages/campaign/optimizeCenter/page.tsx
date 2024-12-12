"use client";
import React, { useState } from 'react';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, BarChart, Bar } from 'recharts';
import { Zap, TrendingUp, Users, Target, Check, X } from 'lucide-react';

interface AISuggestion {
  id: number;
  type: string;
  icon: keyof typeof suggestionIcons;
  currentPerformance: number;
  suggestedImprovement: number;
  recommendation: string;
  confidence: 'High' | 'Medium' | 'Low';
  impact: 'Significant' | 'Moderate' | 'Low';
}

const suggestionIcons = {
  budget: Zap,
  audience: Users,
  performance: TrendingUp,
  targeting: Target
};

const mockAISuggestions: AISuggestion[] = [
  {
    id: 1,
    type: 'Budget Optimization',
    icon: 'budget',
    currentPerformance: 65,
    suggestedImprovement: 85,
    recommendation: 'Reallocate 20% of budget from underperforming ad sets to top-performing segments.',
    confidence: 'High',
    impact: 'Significant'
  },
  {
    id: 2,
    type: 'Audience Expansion',
    icon: 'audience',
    currentPerformance: 55,
    suggestedImprovement: 75,
    recommendation: 'Expand audience targeting to include adjacent interest groups with similar characteristics.',
    confidence: 'Medium',
    impact: 'Moderate'
  },
  {
    id: 3,
    type: 'Performance Boost',
    icon: 'performance',
    currentPerformance: 60,
    suggestedImprovement: 80,
    recommendation: 'A/B test new ad variations with more engaging visual content and refined messaging.',
    confidence: 'High',
    impact: 'Significant'
  }
];

const performanceData = [
  { name: 'Jan', ctr: 3.2, cpc: 1.5, conversions: 45 },
  { name: 'Feb', ctr: 3.8, cpc: 1.3, conversions: 52 },
  { name: 'Mar', ctr: 4.5, cpc: 1.1, conversions: 65 },
  { name: 'Apr', ctr: 4.2, cpc: 1.2, conversions: 60 },
  { name: 'May', ctr: 4.7, cpc: 1.0, conversions: 70 }
];

const campaignPerformance = [
  { name: 'Summer Sale', performance: 85 },
  { name: 'Brand Awareness', performance: 72 },
  { name: 'Product Launch', performance: 65 },
  { name: 'Holiday Special', performance: 58 }
];

const OptimizationCenter = () => {
  const [selectedMetric, setSelectedMetric] = useState<'ctr' | 'cpc' | 'conversions'>('ctr');

  const metrics = [
    { key: 'ctr' as const, label: 'CTR', color: '#8884d8' },
    { key: 'cpc' as const, label: 'CPC', color: '#82ca9d' },
    { key: 'conversions' as const, label: 'Conversions', color: '#ffc658' }
  ];

  const renderMetricCard = (title: string, value: string, trend: number) => (
    <div className="bg-white rounded-lg p-4 shadow-sm">
      <p className="text-sm text-gray-600">{title}</p>
      <p className="text-2xl font-semibold mt-1">{value}</p>
      <div className={`flex items-center mt-1 text-sm ${trend >= 0 ? 'text-green-600' : 'text-red-600'}`}>
        <TrendingUp size={16} className="mr-1" />
        <span>{Math.abs(trend)}% vs last month</span>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Optimization Center</h1>

        {/* Metrics Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          {renderMetricCard('Average CTR', '4.2%', 12)}
          {renderMetricCard('Cost per Click', '$1.24', -8)}
          {renderMetricCard('Conversion Rate', '2.8%', 15)}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Performance Charts */}
          <div className="space-y-6">
            {/* Metrics Chart */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
                <h2 className="text-lg font-semibold mb-2 sm:mb-0">Performance Metrics</h2>
                <div className="flex flex-wrap gap-2">
                  {metrics.map(({ key, label }) => (
                    <button
                      key={key}
                      onClick={() => setSelectedMetric(key)}
                      className={`px-3 py-1.5 text-sm rounded-lg transition-colors ${
                        selectedMetric === key
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {label}
                    </button>
                  ))}
                </div>
              </div>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={performanceData}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Line
                      type="monotone"
                      dataKey={selectedMetric}
                      stroke={metrics.find(m => m.key === selectedMetric)?.color}
                      strokeWidth={2}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Campaign Performance */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-lg font-semibold mb-6">Campaign Performance</h2>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={campaignPerformance}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="performance" fill="#82ca9d" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          {/* AI Suggestions */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-lg font-semibold mb-6">AI Optimization Suggestions</h2>
            <div className="space-y-4">
              {mockAISuggestions.map((suggestion) => {
                const Icon = suggestionIcons[suggestion.icon];
                return (
                  <div
                    key={suggestion.id}
                    className="border rounded-lg p-4 hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-2 bg-blue-100 rounded-lg">
                        <Icon className="text-blue-600" size={20} />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-start">
                          <h3 className="font-semibold text-gray-900">{suggestion.type}</h3>
                          <span className={`px-2 py-1 text-xs rounded-full ${
                            suggestion.confidence === 'High'
                              ? 'bg-green-100 text-green-800'
                              : 'bg-yellow-100 text-yellow-800'
                          }`}>
                            {suggestion.confidence} Confidence
                          </span>
                        </div>
                        <p className="text-gray-600 text-sm mt-1 mb-3">
                          {suggestion.recommendation}
                        </p>
                        <div className="grid grid-cols-3 gap-4 mb-4">
                          <div>
                            <p className="text-xs text-gray-500">Current</p>
                            <p className="font-semibold">{suggestion.currentPerformance}%</p>
                          </div>
                          <div>
                            <p className="text-xs text-gray-500">Potential</p>
                            <p className="font-semibold text-green-600">
                              {suggestion.suggestedImprovement}%
                            </p>
                          </div>
                          <div>
                            <p className="text-xs text-gray-500">Impact</p>
                            <p className="font-semibold">{suggestion.impact}</p>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <button className="flex items-center gap-1 px-3 py-1.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm">
                            <Check size={16} />
                            Apply
                          </button>
                          <button className="flex items-center gap-1 px-3 py-1.5 border rounded-lg hover:bg-gray-50 text-sm">
                            <X size={16} />
                            Dismiss
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OptimizationCenter