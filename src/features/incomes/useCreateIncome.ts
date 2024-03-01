import { createIncome } from '@/services/incomes';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

export const useCreateIncome = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: createIncome,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['incomes'] });
      toast.success('Income created successfully');
      navigate('/dashboard/incomes');
    },
    onError: () => {
      toast.error('Failed to create income, please try again later');
    },
  });
};
