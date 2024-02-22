import { z } from 'zod';
import {
  forgotPasswordSchema,
  loginSchema,
  signupSchema,
  updatePasswordSchema,
} from '@/utils/validation/auth';

export type Login = z.infer<typeof loginSchema>;

export type Signup = z.infer<typeof signupSchema>;

export type ForgotPassword = z.infer<typeof forgotPasswordSchema>;

export type UpdatePass = z.infer<typeof updatePasswordSchema>;
