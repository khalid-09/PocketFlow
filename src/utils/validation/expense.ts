import { z } from 'zod';

export const expenseSchema = z.object({
  title: z
    .string({ required_error: 'Title is required' })
    .min(3, { message: 'Title must be atleast 3 characters long' }),
  amount: z
    .string({ required_error: 'Amount is required' })
    .min(1, 'Amount must be atleast 1'),
  date: z.date({ required_error: 'An expense date in required' }),
  category: z.string({ required_error: 'Category is required' }),
  description: z.string().optional(),
  // attachment: z.instanceOf(File).optional(),
});
