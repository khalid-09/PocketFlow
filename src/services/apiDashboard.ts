import supabase from '@/lib/supabase';
import { Expense } from '@/types/expense';
import { DateRange } from 'react-day-picker';
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

export const getPerformace = async (date: DateRange | undefined) => {
  const from = date?.from
    ? new Date(date.from).toLocaleDateString()
    : new Date(new Date('1,1,2024')).toLocaleDateString();

  const to = date?.to
    ? new Date(date.to).toLocaleDateString()
    : new Date().toLocaleDateString();

  const { data: expenses, error: expenseError } = await supabase
    .from('expenses')
    .select('*')
    .gte('date', from)
    .lte('date', to);

  if (expenseError) toast.error(expenseError.message);

  const { data: incomes, error: incomeError } = await supabase
    .from('incomes')
    .select('*')
    .gte('date', from)
    .lte('date', to);

  if (incomeError) toast.error(incomeError.message);

  const result: { [key: string]: { expenses: number; incomes: number } } = {};

  expenses?.forEach(expense => {
    if (!result[expense.date]?.expenses) {
      result[expense.date] = {
        ...result[expense.date],
        expenses: expense.amount,
      };
    } else {
      result[expense.date].expenses += expense.amount;
    }
  });

  incomes?.forEach(income => {
    if (!result[income.date]?.incomes) {
      result[income.date] = {
        ...result[income.date],
        incomes: income.amount,
      };
    } else {
      result[income.date].incomes += income.amount;
    }
  });

  const data = Object.entries(result).reduce(
    (acc, [date, { expenses, incomes }]) => [
      ...acc,
      { date, expenses: expenses, incomes: incomes },
    ],
    [] as { date: string; expenses: number; incomes: number }[]
  );

  return data;
};
