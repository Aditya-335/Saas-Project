export interface Campaign {
    id: string;
    name: string;
    platform: string;
    status: string;
    budget: string;
    performance: number;
    startDate: string;
    endDate: string;
  }
  
  export interface PerformanceData {
    name: string;
    performance: number;
  }