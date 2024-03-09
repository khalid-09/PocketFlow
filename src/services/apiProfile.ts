import supabase from '@/lib/supabase';
import { toast } from 'sonner';

export const updatePassword = async ({ password }: { password: string }) => {
  const { error } = await supabase.auth.updateUser({
    password,
  });

  if (error) toast.error(error.message);
};
