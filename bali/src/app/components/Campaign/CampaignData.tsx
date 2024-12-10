import { Campaign, PerformanceData } from '../Campaign/campaign';

export const campaignData: Record<string, Campaign[]> = {
  active: [
    { 
      id: 'C001', 
      name: 'Summer Sale Campaign', 
      platform: 'Google Ads', 
      status: 'Active', 
      budget: '$5000', 
      performance: 85,
      startDate: '2024-06-01',
      endDate: '2024-08-31'
    },
    { 
      id: 'C002', 
      name: 'Social Media Engagement', 
      platform: 'Facebook', 
      status: 'Active', 
      budget: '$3000', 
      performance: 72,
      startDate: '2024-07-01',
      endDate: '2024-09-15'
    }
  ],
  paused: [
    { 
      id: 'C003', 
      name: 'Winter Product Launch', 
      platform: 'LinkedIn', 
      status: 'Paused', 
      budget: '$4000', 
      performance: 45,
      startDate: '2024-01-15',
      endDate: '2024-03-15'
    }
  ],
  completed: [
    { 
      id: 'C004', 
      name: 'Spring Clearance', 
      platform: 'Google Ads', 
      status: 'Completed', 
      budget: '$2500', 
      performance: 90,
      startDate: '2024-03-01',
      endDate: '2024-05-31'
    }
  ]
};

export const performanceData: PerformanceData[] = [
  { name: 'Week 1', performance: 65 },
  { name: 'Week 2', performance: 72 },
  { name: 'Week 3', performance: 80 },
  { name: 'Week 4', performance: 85 },
];