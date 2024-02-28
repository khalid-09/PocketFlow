import { getIncomes } from '@/services/incomes';
import { useQuery } from '@tanstack/react-query';

export const useIncomes = () => {
  return useQuery({
    queryKey: ['incomes'],
    queryFn: getIncomes,
    staleTime: Infinity,
  });
};
