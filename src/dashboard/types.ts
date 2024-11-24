export interface CustomerData {
    name: string;
    company: string;
    phone: string;
    email: string;
    country: string;
    status: 'active' | 'inactive';
  }
  
  export interface MetricCardProps {
    title: string;
    value: string;
    percentageChange: string;
    isPositive: boolean;
    fromValue?: string;
  }
  
  export interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
    theme: string;
    setTheme: (theme: string) => void;
  }
  
  export interface SearchBarProps {
    placeholder: string;
    onSearch: (value: string) => void;
  }
  
  export interface SortingProps {
    sortBy: string;
    onSortChange: (value: string) => void;
  }