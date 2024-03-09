import { resetPassword } from '@/services/apiAuth';
import { useMutation } from '@tanstack/react-query';
import { toast } from 'sonner';

export const useResetPassword = () => {
  return useMutation({
    mutationFn: resetPassword,
    onSuccess: () =>
      toast.success('Email sent to reset password..', {
        description:
          'Check your inbox, if you do not see the email, it might take a few minutes to arrive. Also, check your spam folder.',
      }),
    onError: error => toast.error(error.message),
  });
};
