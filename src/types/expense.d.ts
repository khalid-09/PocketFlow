import { z } from 'zod';
import { expenseSchema } from '@/utils/validation/expense';

type CreateEditExpense = z.infer<typeof expenseSchema>;

interface Expense {
  id: number;
  date: string;
  amount: number;
  description?: string;
  type: string;
  category: string;
  tags: string;
  title: string;
}
