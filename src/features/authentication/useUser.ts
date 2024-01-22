import { getUser } from '@/services/auth';
import { useQuery } from '@tanstack/react-query';

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
