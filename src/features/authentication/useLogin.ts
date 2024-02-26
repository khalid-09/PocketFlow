import { login } from '@/services/auth';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';

export const useLogin = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: login,
    retry: false,
    onSuccess: ({ user }) => queryClient.setQueryData(['user'], user),
    onError: error => toast.error(error?.message),
  });
};
