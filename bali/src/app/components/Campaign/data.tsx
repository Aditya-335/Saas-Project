export const initialRules = [
    {
      id: 1,
      name: 'Pause Underperforming Ads',
      condition: 'If CTR < 1.5%',
      action: 'Pause Ad',
      status: 'Active',
      campaigns: ['Summer Sale', 'Product Launch']
    },
    {
      id: 2,
      name: 'Increase Budget for High Performers',
      condition: 'If ROAS > 400%',
      action: 'Increase Budget by 20%',
      status: 'Active',
      campaigns: ['Holiday Campaign']
    },
    {
      id: 3,
      name: 'Stop Spending on Low Conversion Ads',
      condition: 'If Cost per Conversion > $50',
      action: 'Pause Ad Set',
      status: 'Inactive',
      campaigns: ['Brand Awareness']
    }
  ];
  
  export const defaultNewRule = {
    name: '',
    metric: 'CTR',
    condition: 'less than',
    value: '',
    action: 'Pause Ad',
    selectedCampaigns: []
  };
  
  export const campaignOptions = [
    'Summer Sale', 'Product Launch', 'Holiday Campaign', 
    'Brand Awareness', 'Winter Promotion'
  ];
  
  export const metricOptions = [
    'CTR', 'CPC', 'Conversions', 'ROAS', 
    'Impressions', 'Cost per Conversion'
  ];
  
  export const actionOptions = [
    'Pause Ad', 'Pause Ad Set', 
    'Increase Budget', 'Decrease Budget', 
    'Adjust Bid'
  ];
  
  export const conditionOptions = [
    'less than', 'greater than', 
    'equal to', 'less than or equal to', 
    'greater than or equal to'
  ];