import { getPerformace } from '@/services/apiDashboard';
import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { DateRange } from 'react-day-picker';

export const usePerformace = (date: DateRange | undefined) => {
  return useQuery({
    queryKey: ['performace', { date }],
    queryFn: () => getPerformace(date),
    placeholderData: keepPreviousData,
  });
};
