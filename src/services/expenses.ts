import supabase from '@/lib/supabase';
import { toast } from 'sonner';

export const getExpenses = async () => {
  const { data: expenses, error } = await supabase.from('expenses').select('*');

  if (error) toast.error(error.message);

  return expenses;
};
