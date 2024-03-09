import { getIncomes } from '@/services/apiIncomes';
import { useQuery } from '@tanstack/react-query';

export const useIncomes = () => {
  return useQuery({
    queryKey: ['incomes'],
    queryFn: getIncomes,
    staleTime: 0,
  });
};
