import { expenseSchema } from '@/utils/validation/expense';
import { z } from 'zod';

export type CreateEditExpense = z.infer<typeof expenseSchema>;
