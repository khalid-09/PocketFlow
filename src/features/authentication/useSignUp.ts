import { signUp } from '@/services/auth';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';

export const useSignUp = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: signUp,
    retry: false,
    onSuccess: ({ user }) => queryClient.setQueryData(['user'], user),
    onError: error => toast.error(error?.message),
  });
};
