"use client";
import React, { useState } from "react";
import {
  Plus,
  Menu,
  LayoutDashboard,
  Megaphone,
  FileText,
  BarChart2,
  Settings,
  Lightbulb,
  AlertTriangle,
  TrendingUp,
  ChevronDown,
  Play,
  Pause,
} from "lucide-react";

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isCampaignDropdownOpen, setIsCampaignDropdownOpen] = useState(false);

  const menuItems = [
    { icon: LayoutDashboard, label: "Dashboard", active: true },
    {
      icon: Megaphone,
      label: "Campaigns",
      hasDropdown: true,
      dropdownItems: [
        { label: "Campaign Overview", link: "/pages/campaign/campaignOverview" },
        { label: "Create Campaign", link: "/pages/campaign/createCampaign" },
        { label: "Optimization Center", link: "/pages/campaign/optimizeCenter" },
        { label: "Automated Rules", link: "/pages/campaign/automatedRules" },
      ],
    },
    { icon: FileText, label: "Content" },
    { icon: BarChart2, label: "Analytics" },
    { icon: Settings, label: "Settings" },
  ];

  const campaigns = [
    { name: "Summer Sale Campaign", status: "active", budget: "$2,500", roi: "+12.5%" },
    { name: "Winter Collection", status: "paused", budget: "$1,800", roi: "+8.3%" },
    { name: "Black Friday Special", status: "active", budget: "$3,200", roi: "+15.7%" },
  ];

  const insights = [
    {
      type: "recommendation",
      icon: Lightbulb,
      title: "Budget Optimization",
      description: "Increase budget for Summer Sale Campaign by 20% to maximize ROI",
    },
    {
      type: "alert",
      icon: AlertTriangle,
      title: "Performance Alert",
      description: "Winter Campaign is underperforming. Consider adjusting targeting.",
    },
    {
      type: "trend",
      icon: TrendingUp,
      title: "Trending Keywords",
      description: 'Add "sustainable" and "eco-friendly" to improve engagement',
    },
  ];

  const performanceMetrics = [
    {
      title: "Total Revenue",
      value: "$45,320",
      description: "15% increase from last month",
      color: "text-green-600",
    },
    {
      title: "Ad Spend",
      value: "$12,800",
      description: "5% decrease from last month",
      color: "text-red-600",
    },
    {
      title: "ROI",
      value: "+18.7%",
      description: "2% improvement",
      color: "text-green-600",
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
          <aside
            className={`fixed md:static inset-y-0 left-0 w-64 bg-gray-50 border-r transform transition-transform duration-200 ease-in-out z-30 ${
              isSidebarOpen ? "translate-x-0" : "-translate-x-full"
            } md:translate-x-0`}
          >
            <div className="p-6">
              <h2 className="text-sm font-semibold text-gray-600 uppercase">Menu</h2>
              <nav className="mt-6 space-y-2">
                {menuItems.map(({ icon: Icon, label, active, hasDropdown, dropdownItems }) => (
                  <div key={label} className="relative">
                    <a
                      href="#"
                      onClick={() =>
                        hasDropdown
                          ? setIsCampaignDropdownOpen(!isCampaignDropdownOpen)
                          : setIsCampaignDropdownOpen(false)
                      }
                      className={`flex items-center justify-between px-4 py-3 rounded-lg transition-colors ${
                        active
                          ? "bg-blue-50 text-blue-600"
                          : "text-gray-700 hover:bg-gray-100"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <Icon size={20} />
                        <span>{label}</span>
                      </div>
                      {hasDropdown && <ChevronDown size={16} />}
                    </a>
                    {hasDropdown && isCampaignDropdownOpen && (
                      <div className="mt-2 bg-white shadow rounded-lg absolute left-0 w-full z-10">
                        {dropdownItems.map((item) => (
                          <a
                            key={item.label}
                            href={item.link}
                            className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg"
                          >
                            {item.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </nav>
            </div>
          </aside>
        </>

        {/* Main Content */}
        <main className="flex-1 p-4 md:p-6 overflow-auto">
          {/* Performance Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-6">
            {performanceMetrics.map((metric, index) => (
              <div key={index} className="bg-white p-4 md:p-6 rounded-xl border">
                <h3 className="text-sm font-semibold text-gray-600">{metric.title}</h3>
                <p className={`text-xl font-bold ${metric.color}`}>{metric.value}</p>
                <p className="text-sm text-gray-500">{metric.description}</p>
              </div>
            ))}
          </div>

          {/* Campaign List and AI Insights */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
            {/* Campaign List */}
            <div className="lg:col-span-2">
              <h2 className="text-lg font-semibold text-gray-800 mb-4">Active Campaigns</h2>
              <div className="space-y-4">
                {campaigns.map((campaign, index) => (
                  <div key={index} className="bg-white p-4 md:p-6 rounded-xl border">
                    <h3 className="text-md font-bold text-gray-800">{campaign.name}</h3>
                    <p className="text-sm text-gray-500">Budget: {campaign.budget}</p>
                    <p className="text-sm text-gray-500">ROI: {campaign.roi}</p>
                    <button
                      className={`mt-2 px-4 py-2 text-sm rounded-lg ${
                        campaign.status === "active"
                          ? "bg-green-600 text-white hover:bg-green-700"
                          : "bg-gray-600 text-white hover:bg-gray-700"
                      }`}
                    >
                      {campaign.status === "active" ? "Pause" : "Resume"}
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* AI Insights */}
            <div>
              <h2 className="text-lg font-semibold text-gray-800 mb-4">AI Insights</h2>
              <div className="space-y-4">
                {insights.map((insight, index) => (
                  <div
                    key={index}
                    className="bg-white p-4 md:p-6 rounded-xl border flex items-start gap-4"
                  >
                    <insight.icon size={24} className="text-blue-600" />
                    <div>
                      <h3 className="font-semibold text-gray-800">{insight.title}</h3>
                      <p className="text-sm text-gray-500">{insight.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
