import supabase from '@/lib/supabase';
import { CreateEditExpense } from '@/types/expense';
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

export const createExpense = async (expense: CreateEditExpense) => {
  const { data, error } = await supabase
    .from('expenses')
    .insert([
      {
        ...expense,
        amount: +expense.amount,
        date: expense.date.toLocaleDateString(),
      },
    ])
    .select();

  if (error) toast.error(error.message);

  return data;
};

export const editExpense = async ({
  id,
  expense,
}: {
  id: string;
  expense: CreateEditExpense;
}) => {
  const { error } = await supabase
    .from('expenses')
    .update({
      ...expense,
      amount: +expense.amount,
      date: expense.date.toLocaleDateString(),
    })
    .eq('id', id)
    .select();

  if (error) toast.error(error.message);
};
