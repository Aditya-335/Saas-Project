export interface Rule {
    id: number;
    name: string;
    condition: string;
    action: string;
    status: 'Active' | 'Inactive';
    campaigns: string[];
  }
  
  export interface NewRule {
    name: string;
    metric: string;
    condition: string;
    value: string;
    action: string;
    selectedCampaigns: string[];
  }