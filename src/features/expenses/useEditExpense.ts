import { editExpense } from '@/services/apiExpenses';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

export const useEditExpense = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: editExpense,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['expenses'] });
      navigate('/dashboard/expenses');
      toast.success('Expense updated successfully');
    },
    onError: () =>
      toast.error('Failed to update expense, please try again later.'),
  });
};
