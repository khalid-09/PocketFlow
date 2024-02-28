import { deleteIncome } from '@/services/incomes';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';

export const useDelteIncome = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteIncome,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['incomes'] });
      toast.success('Income deleted successfully');
    },
    onError: () =>
      toast.error('Failed to delete income. Please try again later.'),
  });
};
