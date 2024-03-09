import supabase from '@/lib/supabase';
import { Expense } from '@/types/expense';
// import { Expense } from '@/types/expense';
import { toast } from 'sonner';

export const getStats = async () => {
  const curDate = new Date();
  const firstDayOfPrevMonth = new Date(
    curDate.getFullYear(),
    curDate.getMonth() - 1,
    1
  ).toLocaleDateString();
  const firstDayOfCurMonth = new Date(
    curDate.getFullYear(),
    curDate.getMonth(),
    1
  ).toLocaleDateString();

  const { data: expensesOfCurMonth, error: errorInCurMonthExpenses } =
    await supabase
      .from('expenses')
      .select<'*', Expense>('*')
      .gte('date', firstDayOfCurMonth);

  const { data: expensesOfPrevMonth, error: errorInPrevMonthExpenses } =
    await supabase
      .from('expenses')
      .select<'*', Expense>('*')
      .gte('date', firstDayOfPrevMonth)
      .lte('date', firstDayOfCurMonth);

  if (errorInCurMonthExpenses || errorInPrevMonthExpenses)
    toast.error('Failed to fetch expense stats');

  const { data: incomeOfCurMonth, error: errorInCurMonthIncome } =
    await supabase.from('incomes').select('*').gte('date', firstDayOfCurMonth);

  const { data: incomeOfPrevMonth, error: errorInPrevMonthIncome } =
    await supabase
      .from('incomes')
      .select('*')
      .gte('date', firstDayOfPrevMonth)
      .lte('date', firstDayOfCurMonth);

  if (errorInCurMonthIncome || errorInPrevMonthIncome)
    toast.error('Failed to fetch income stats');

  const totalExpensesOfCurMonth = expensesOfCurMonth?.reduce(
    (total, expense) => total + expense.amount,
    0
  );

  const totalExpensesOfPrevMonth = expensesOfPrevMonth?.reduce(
    (total, expense) => total + expense.amount,
    0
  );

  const totalIncomeOfCurMonth: number = incomeOfCurMonth?.reduce(
    (total, income) => total + income.amount,
    0
  );

  const totalIncomeOfPrevMonth: number = incomeOfPrevMonth?.reduce(
    (total, income) => total + income.amount,
    0
  );

  return {
    expenses: {
      cur: totalExpensesOfCurMonth ?? 0,
      prev: totalExpensesOfPrevMonth ?? 0,
    },
    income: {
      cur: totalIncomeOfCurMonth ?? 0,
      prev: totalIncomeOfPrevMonth ?? 0,
    },
  };
};
