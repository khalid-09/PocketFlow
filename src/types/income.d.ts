import { incomeSchema } from '@/utils/validation/income';
import { z } from 'zod';

export type CreateEditIncome = z.infer<typeof incomeSchema>;
