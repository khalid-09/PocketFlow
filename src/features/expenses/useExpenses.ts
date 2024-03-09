import { getExpenses } from '@/services/apiExpenses';
import { useQuery } from '@tanstack/react-query';

export const useExpenses = () => {
  return useQuery({
    queryKey: ['expenses'],
    queryFn: getExpenses,
    staleTime: 0,
  });
};
