import { logout } from '@/services/apiAuth';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

export const useLogout = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: logout,
    retry: false,
    onSuccess: () => {
      queryClient.setQueryData(['user'], null);
      queryClient.removeQueries();
      navigate('/login', { replace: true });
    },
    onError: () => {
      toast.error('Error logging out. Please try again.');
    },
  });
};
