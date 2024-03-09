import { updatePassword } from '@/services/apiProfile';
import { useMutation } from '@tanstack/react-query';
import { toast } from 'sonner';

export const useUpdatePassowrd = () => {
  return useMutation({
    mutationFn: updatePassword,
    onSuccess: () => {
      toast.success('Password updated successfully');
    },
    onError: () => {
      toast.error('Something went wrong');
    },
  });
};
