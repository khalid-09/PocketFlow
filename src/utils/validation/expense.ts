import { z } from 'zod';

export const expenseSchema = z.object({
  title: z.string().min(3, 'Title must be atleast 3 characters long'),
  amount: z.string().min(1, 'Amount must be atleast 1'),
  date: z.date({ required_error: 'An expense date in required' }),
  category: z.string(),
  description: z.string().optional(),
  // attachment: z.instanceOf(File).optional(),
});
