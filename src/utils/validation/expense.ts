import { z } from 'zod';

export const expenseSchema = z.object({
  title: z.string().min(3, 'Title must be atleast 3 characters long'),
  description: z.string().optional(),
  amount: z.number().min(1, 'Amount must be atleast 1'),
  date: z.string(),
  category: z.instanceof(File).optional(),
});
