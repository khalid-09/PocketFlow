import { getStats } from '@/services/apiDashboard';
import { useQuery } from '@tanstack/react-query';

export const useStats = () => {
  return useQuery({
    queryKey: ['stats'],
    queryFn: getStats,
  });
};
