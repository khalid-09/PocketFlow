import supabase from '@/lib/supabase';
import { toast } from 'sonner';

export const getIncomes = async () => {
  const { data: incomes, error } = await supabase.from('incomes').select('*');

  if (error) toast.error(error.message);

  return incomes;
};

export const deleteIncome = async (id: string) => {
  const { error } = await supabase.from('incomes').delete().eq('id', id);

  if (error) toast.error(error.message);
};
