import { useQuery } from '@tanstack/react-query';
import { getCurrencies } from '@/services/apiCurrency';

export const useCurrencies = () =>
  useQuery({
    queryKey: ['currencies'],
    queryFn: getCurrencies,
  });
