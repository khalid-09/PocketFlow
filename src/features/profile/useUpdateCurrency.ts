import { updateCurrency } from '@/services/currency';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';

export const useUpdateCurrency = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateCurrency,
    onSuccess: user => {
      if (!user) return;

      queryClient.setQueryData(['user'], user);
      toast.success(`Currency updated successfully`);
    },
    onError: () =>
      toast.error('Couldn’t update your currency, please try again later.'),
  });
};
