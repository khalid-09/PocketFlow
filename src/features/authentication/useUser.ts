import { useQuery } from '@tanstack/react-query';
import { getUser } from '@/services/auth';

export const useUser = () => {
  const { data: user, isLoading } = useQuery({
    queryKey: ['user'],
    queryFn: getUser,
    staleTime: Infinity,
    retry: false,
  });

  const isAuthenticated = user?.role === 'authenticated';

  return { user, isLoading, isAuthenticated };
};
