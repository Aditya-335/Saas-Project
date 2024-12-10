"use client";
import React, { useState } from 'react';
import { 
  Image, Video, LayoutGrid, Type, Instagram, 
  Target,DollarSign, Users, CheckCircle 
} from 'lucide-react';

interface CampaignDetails {
  name: string;
  platform: string;
  objective: string;
  budget: string;
  startDate: string;
  endDate: string;
  targetAudience: {
    age: string;
    location: string;
    interests: string[];
  };
  adContent: {
    type: string;
    headline: string;
    description: string;
    mediaUrls: string[];
  };
}

const INITIAL_STATE: CampaignDetails = {
  name: '',
  platform: '',
  objective: '',
  budget: '',
  startDate: '',
  endDate: '',
  targetAudience: {
    age: '',
    location: '',
    interests: []
  },
  adContent: {
    type: '',
    headline: '',
    description: '',
    mediaUrls: []
  }
};

const CreateCampaign = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [campaignDetails, setCampaignDetails] = useState<CampaignDetails>(INITIAL_STATE);

  const steps = [
    { id: 1, name: 'Basics', icon: CheckCircle },
    { id: 2, name: 'Objective', icon: Target },
    { id: 3, name: 'Audience', icon: Users },
    { id: 4, name: 'Content', icon: Image },
    { id: 5, name: 'Review', icon: CheckCircle }
  ];

  const platformOptions = [
    { name: 'Google Ads', icon: DollarSign },
    { name: 'Facebook', icon: Users },
    { name: 'Instagram', icon: Instagram },
    { name: 'LinkedIn', icon: Users }
  ];

  const objectiveOptions = [
    { name: 'Brand Awareness', description: 'Increase visibility and recognition' },
    { name: 'Lead Generation', description: 'Collect potential customer information' },
    { name: 'Website Traffic', description: 'Drive visitors to your website' },
    { name: 'Conversions', description: 'Generate sales or sign-ups' }
  ];

  const adTypes = [
    { name: 'Image', icon: Image },
    { name: 'Video', icon: Video },
    { name: 'Carousel', icon: LayoutGrid },
    { name: 'Text', icon: Type }
  ];

  const renderStepIndicator = () => (
    <div className="flex items-center justify-between mb-8">
      {steps.map((step, idx) => (
        <div key={step.id} className="flex items-center">
          <div className={`
            flex items-center justify-center w-8 h-8 rounded-full
            ${currentStep >= step.id ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'}
          `}>
            <step.icon size={16} />
          </div>
          {idx < steps.length - 1 && (
            <div className={`
              w-full h-1 mx-2
              ${currentStep > step.id ? 'bg-blue-600' : 'bg-gray-200'}
            `} />
          )}
        </div>
      ))}
    </div>
  );

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Campaign Name
              </label>
              <input
                type="text"
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                placeholder="Enter campaign name"
                value={campaignDetails.name}
                onChange={(e) => setCampaignDetails({ ...campaignDetails, name: e.target.value })}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Select Platform
              </label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {platformOptions.map((platform) => (
                  <button
                    key={platform.name}
                    onClick={() => setCampaignDetails({ ...campaignDetails, platform: platform.name })}
                    className={`
                      p-4 rounded-lg border flex items-center justify-center gap-2
                      ${campaignDetails.platform === platform.name
                        ? 'bg-blue-50 border-blue-500 text-blue-700'
                        : 'hover:bg-gray-50'
                      }
                    `}
                  >
                    <platform.icon size={20} />
                    <span>{platform.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Campaign Objective
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {objectiveOptions.map((objective) => (
                  <button
                    key={objective.name}
                    onClick={() => setCampaignDetails({ ...campaignDetails, objective: objective.name })}
                    className={`
                      p-4 rounded-lg border text-left
                      ${campaignDetails.objective === objective.name
                        ? 'bg-blue-50 border-blue-500'
                        : 'hover:bg-gray-50'
                      }
                    `}
                  >
                    <div className="font-medium">{objective.name}</div>
                    <div className="text-sm text-gray-500">{objective.description}</div>
                  </button>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Budget
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <DollarSign size={16} className="text-gray-400" />
                  </div>
                  <input
                    type="number"
                    className="w-full pl-10 p-3 border rounded-lg"
                    placeholder="Enter budget"
                    value={campaignDetails.budget}
                    onChange={(e) => setCampaignDetails({ ...campaignDetails, budget: e.target.value })}
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Campaign Duration
                </label>
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="date"
                    className="p-3 border rounded-lg"
                    value={campaignDetails.startDate}
                    onChange={(e) => setCampaignDetails({ ...campaignDetails, startDate: e.target.value })}
                  />
                  <input
                    type="date"
                    className="p-3 border rounded-lg"
                    value={campaignDetails.endDate}
                    onChange={(e) => setCampaignDetails({ ...campaignDetails, endDate: e.target.value })}
                  />
                </div>
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Target Age Range
                </label>
                <select
                  className="w-full p-3 border rounded-lg"
                  value={campaignDetails.targetAudience.age}
                  onChange={(e) => setCampaignDetails({
                    ...campaignDetails,
                    targetAudience: { ...campaignDetails.targetAudience, age: e.target.value }
                  })}
                >
                  <option value="">Select age range</option>
                  <option value="18-24">18-24</option>
                  <option value="25-34">25-34</option>
                  <option value="35-44">35-44</option>
                  <option value="45+">45+</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Target Location
                </label>
                <input
                  type="text"
                  className="w-full p-3 border rounded-lg"
                  placeholder="Enter location"
                  value={campaignDetails.targetAudience.location}
                  onChange={(e) => setCampaignDetails({
                    ...campaignDetails,
                    targetAudience: { ...campaignDetails.targetAudience, location: e.target.value }
                  })}
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Interests
              </label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {['Technology', 'Fashion', 'Sports', 'Travel', 'Food', 'Music'].map((interest) => (
                  <label
                    key={interest}
                    className="flex items-center p-3 border rounded-lg cursor-pointer hover:bg-gray-50"
                  >
                    <input
                      type="checkbox"
                      className="mr-2"
                      checked={campaignDetails.targetAudience.interests.includes(interest)}
                      onChange={(e) => {
                        const interests = e.target.checked
                          ? [...campaignDetails.targetAudience.interests, interest]
                          : campaignDetails.targetAudience.interests.filter(i => i !== interest);
                        setCampaignDetails({
                          ...campaignDetails,
                          targetAudience: { ...campaignDetails.targetAudience, interests }
                        });
                      }}
                    />
                    {interest}
                  </label>
                ))}
              </div>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Ad Type
              </label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {adTypes.map((type) => (
                  <button
                    key={type.name}
                    onClick={() => setCampaignDetails({
                      ...campaignDetails,
                      adContent: { ...campaignDetails.adContent, type: type.name }
                    })}
                    className={`
                      p-4 rounded-lg border flex flex-col items-center gap-2
                      ${campaignDetails.adContent.type === type.name
                        ? 'bg-blue-50 border-blue-500 text-blue-700'
                        : 'hover:bg-gray-50'
                      }
                    `}
                  >
                    <type.icon size={24} />
                    <span>{type.name}</span>
                  </button>
                ))}
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Ad Headline
              </label>
              <input
                type="text"
                className="w-full p-3 border rounded-lg"
                placeholder="Enter headline"
                value={campaignDetails.adContent.headline}
                onChange={(e) => setCampaignDetails({
                  ...campaignDetails,
                  adContent: { ...campaignDetails.adContent, headline: e.target.value }
                })}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Ad Description
              </label>
              <textarea
                className="w-full p-3 border rounded-lg"
                rows={4}
                placeholder="Enter description"
                value={campaignDetails.adContent.description}
                onChange={(e) => setCampaignDetails({
                  ...campaignDetails,
                  adContent: { ...campaignDetails.adContent, description: e.target.value }
                })}
              />
            </div>
          </div>
        );

      case 5:
        return (
          <div className="space-y-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-medium mb-4">Campaign Summary</h3>
              <dl className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-6">
                <div>
                  <dt className="text-sm font-medium text-gray-500">Campaign Name</dt>
                  <dd className="mt-1 text-sm text-gray-900">{campaignDetails.name}</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-gray-500">Platform</dt>
                  <dd className="mt-1 text-sm text-gray-900">{campaignDetails.platform}</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-gray-500">Objective</dt>
                  <dd className="mt-1 text-sm text-gray-900">{campaignDetails.objective}</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-gray-500">Budget</dt>
                  <dd className="mt-1 text-sm text-gray-900">${campaignDetails.budget}</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-gray-500">Duration</dt>
                  <dd className="mt-1 text-sm text-gray-900">
                    {campaignDetails.startDate} to {campaignDetails.endDate}
                  </dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-gray-500">Target Audience</dt>
                  <dd className="mt-1 text-sm text-gray-900">
                    {campaignDetails.targetAudience.age}, {campaignDetails.targetAudience.location}
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  const handleNext = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = () => {
    console.log('Campaign Details:', campaignDetails);
    // Add your submission logic here
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-xl shadow-sm">
          <div className="p-6 border-b">
            <h1 className="text-xl font-semibold text-gray-900">Create New Campaign</h1>
          </div>
          
          <div className="p-6">
            {renderStepIndicator()}
            
            <div className="mb-8">
              {renderStepContent()}
            </div>

            <div className="flex justify-between">
              {currentStep > 1 && (
                <button
                  onClick={handleBack}
                  className="px-4 py-2 border rounded-lg hover:bg-gray-50"
                >
                  Back
                </button>
              )}
              
              <button
                onClick={currentStep === steps.length ? handleSubmit : handleNext}
                className={`px-4 py-2 rounded-lg text-white ${
                  currentStep === steps.length
                    ? 'bg-green-600 hover:bg-green-700'
                    : 'bg-blue-600 hover:bg-blue-700'
                }`}
              >
                {currentStep === steps.length ? 'Launch Campaign' : 'Next Step'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateCampaign