import { resetPassword } from '@/services/apiAuth';
import { useMutation } from '@tanstack/react-query';
import { toast } from 'sonner';

export const useResetPassword = () => {
  return useMutation({
    mutationFn: resetPassword,
    onSuccess: () =>
      toast.success(
        'We have sent you an email to reset your password. Please check your inbox.'
      ),
    onError: error => toast.error(error.message),
  });
};
