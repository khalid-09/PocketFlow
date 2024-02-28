import supabase from '@/lib/supabase';
import { toast } from 'sonner';

export const getExpenses = async () => {
  const { data: expenses, error } = await supabase.from('expenses').select('*');

  if (error) toast.error(error.message);

  return expenses;
};

export const deleteExpense = async (id: string) => {
  const { error } = await supabase.from('expenses').delete().eq('id', id);

  if (error) toast.error(error.message);
};
