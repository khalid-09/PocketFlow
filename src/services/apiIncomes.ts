import supabase from '@/lib/supabase';
import { CreateEditIncome } from '@/types/income';
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

export const createIncome = async (income: CreateEditIncome) => {
  const { data, error } = await supabase
    .from('incomes')
    .insert([
      {
        ...income,
        amount: +income.amount,
        date: income.date.toLocaleDateString(),
      },
    ])
    .select();

  if (error) toast.error(error.message);

  return data;
};

export const editIncome = async ({
  id,
  income,
}: {
  id: string;
  income: CreateEditIncome;
}) => {
  const { error } = await supabase
    .from('incomes')
    .update({
      ...income,
      amount: +income.amount,
      date: income.date.toLocaleDateString(),
    })
    .eq('id', id)
    .select();

  if (error) toast.error(error.message);
};
