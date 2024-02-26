import { signUp } from '@/services/auth';
import { useMutation } from '@tanstack/react-query';
import { toast } from 'sonner';

export const useSignUp = () => {
  return useMutation({
    mutationFn: signUp,
    retry: false,
    onSuccess: data => console.log(data),
    onError: error => toast.error(error?.message),
  });
};
