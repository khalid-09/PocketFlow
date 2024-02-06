import { logout } from '@/services/auth';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';

export const useLogout = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: logout,
    retry: false,
    onSuccess: () => {
      queryClient.setQueryData(['user'], null);
      queryClient.removeQueries();
    },
    onError: () => {
      toast('Scheduled: Catch up', {
        description: 'Friday, February 10, 2023 at 5:57 PM',
      });
    },
  });
};
