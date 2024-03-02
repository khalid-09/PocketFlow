import { editIncome } from '@/services/incomes';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

export const useEditIncome = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: editIncome,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['incomes'] });
      navigate('/dashboard/incomes');
      toast.success('Income updated successfully');
    },
    onError: () =>
      toast.error('Failed to update income, please try again later.'),
  });
};
