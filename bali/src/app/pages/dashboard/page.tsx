"use client";
import React, { useState } from 'react';
import { Plus, Menu, LayoutDashboard, Megaphone, FileText, BarChart2, Settings, Play, Pause, Lightbulb, AlertTriangle, TrendingUp } from 'lucide-react';

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const menuItems = [
    { icon: LayoutDashboard, label: 'Dashboard', active: true },
    { icon: Megaphone, label: 'Campaigns' },
    { icon: FileText, label: 'Content' },
    { icon: BarChart2, label: 'Analytics' },
    { icon: Settings, label: 'Settings' },
  ];

  const campaigns = [
    { name: 'Summer Sale Campaign', status: 'active', budget: '$2,500', roi: '+12.5%' },
    { name: 'Winter Collection', status: 'paused', budget: '$1,800', roi: '+8.3%' },
    { name: 'Black Friday Special', status: 'active', budget: '$3,200', roi: '+15.7%' },
  ];

  const insights = [
    {
      type: 'recommendation',
      icon: Lightbulb,
      title: 'Budget Optimization',
      description: 'Increase budget for Summer Sale Campaign by 20% to maximize ROI',
    },
    {
      type: 'alert',
      icon: AlertTriangle,
      title: 'Performance Alert',
      description: 'Winter Campaign is underperforming. Consider adjusting targeting.',
    },
    {
      type: 'trend',
      icon: TrendingUp,
      title: 'Trending Keywords',
      description: 'Add "sustainable" and "eco-friendly" to improve engagement',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="flex items-center justify-between p-4 md:p-6 border-b bg-white">
        <div className="flex items-center gap-4">
          <button onClick={() => setIsSidebarOpen(true)} className="md:hidden text-gray-600">
            <Menu size={24} />
          </button>
          <h1 className="text-xl md:text-2xl font-bold text-gray-900">Dashboard</h1>
        </div>
        <button className="flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm md:text-base">
          <Plus size={20} />
          <span className="hidden sm:inline">New Campaign</span>
        </button>
      </header>

      <div className="flex h-[calc(100vh-80px)]">
        {/* Sidebar */}
        <>
          {isSidebarOpen && (
            <div
              className="fixed inset-0 bg-black bg-opacity-50 md:hidden z-20"
              onClick={() => setIsSidebarOpen(false)}
            />
          )}
          
          <aside className={`
            fixed md:static inset-y-0 left-0 w-64 bg-gray-50 border-r transform transition-transform duration-200 ease-in-out z-30
            ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
            md:translate-x-0
          `}>
            <div className="p-6">
              <h2 className="text-sm font-semibold text-gray-600 uppercase">Menu</h2>
              <nav className="mt-6 space-y-2">
                {menuItems.map(({ icon: Icon, label, active }) => (
                  <a
                    key={label}
                    href="#"
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                      active
                        ? 'bg-blue-50 text-blue-600'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <Icon size={20} />
                    <span>{label}</span>
                  </a>
                ))}
              </nav>
            </div>
          </aside>
        </>

        {/* Main Content */}
        <main className="flex-1 p-4 md:p-6 overflow-auto w-full">
          {/* Performance Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-6">
            {[
              { title: 'Total Campaigns', value: '5 Active', trend: { value: '+2 this month', positive: true } },
              { title: 'Total Spend', value: '$5,234', trend: { value: '12% vs last month', positive: true } },
              { title: 'Conversion Rate', value: '3.4%', trend: { value: '0.5% vs last month', positive: true } },
            ].map((card, index) => (
              <div key={index} className="bg-white p-4 md:p-6 rounded-xl border">
                <h3 className="text-sm font-medium text-gray-500">{card.title}</h3>
                <p className="mt-2 text-2xl md:text-3xl font-semibold text-gray-900">{card.value}</p>
                {card.trend && (
                  <p className={`mt-2 text-sm ${card.trend.positive ? 'text-green-600' : 'text-red-600'}`}>
                    {card.trend.value} {card.trend.positive ? '↑' : '↓'}
                  </p>
                )}
              </div>
            ))}
          </div>

          {/* Campaign List and AI Insights */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
            {/* Campaign List */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl border">
                <div className="p-4 md:p-6">
                  <h2 className="text-lg font-semibold text-gray-900">Recent Campaigns</h2>
                  <div className="mt-4 md:mt-6 space-y-4">
                    {campaigns.map((campaign) => (
                      <div
                        key={campaign.name}
                        className="flex items-center justify-between p-3 md:p-4 hover:bg-gray-50 rounded-lg transition-colors"
                      >
                        <div className="flex items-center gap-3 md:gap-4">
                          {campaign.status === 'active' ? (
                            <Play size={18} className="text-green-500" />
                          ) : (
                            <Pause size={18} className="text-orange-500" />
                          )}
                          <div>
                            <h3 className="font-medium text-gray-900 text-sm md:text-base">{campaign.name}</h3>
                            <p className="text-xs md:text-sm text-gray-500">Budget: {campaign.budget}</p>
                          </div>
                        </div>
                        <span className={`text-xs md:text-sm px-2 py-1 rounded-full ${
                          campaign.status === 'active' ? 'bg-green-100 text-green-600' : 'bg-orange-100 text-orange-600'
                        }`}>
                          {campaign.status}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* AI Insights */}
            <div>
              <div className="bg-white rounded-xl border">
                <div className="p-4 md:p-6">
                  <h2 className="text-lg font-semibold text-gray-900">AI Insights</h2>
                  <div className="mt-4 md:mt-6 space-y-4">
                    {insights.map((insight) => (
                      <div
                        key={insight.title}
                        className="p-3 md:p-4 bg-gray-50 rounded-lg"
                      >
                        <div className="flex items-center gap-2 md:gap-3 mb-2">
                          <insight.icon size={18} className="text-blue-600" />
                          <h3 className="font-medium text-gray-900 text-sm md:text-base">{insight.title}</h3>
                        </div>
                        <p className="text-xs md:text-sm text-gray-600">{insight.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Dashboard