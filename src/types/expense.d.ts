import { z } from 'zod';
import { expenseSchema } from '@/utils/validation/expense';

export type CreateEditExpense = z.infer<typeof expenseSchema>;
