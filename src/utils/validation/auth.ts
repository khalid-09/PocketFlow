import { z } from 'zod';

export const loginSchema = z.object({
  email: z.string().email('Enter a valid email'),
  password: z.string().min(8, 'Enter password of atleast 8 characters'),
});

export const signupSchema = z
  .object({
    username: z.string().min(3, 'Username must be atleast 3 characters long'),
    email: z.string().email('Enter a valid email'),
    password: z.string().min(8, 'Passowrd must be atleast 8 characters long'),
    confirmPassowrd: z
      .string()
      .min(8, 'Passowrd must be atleast 8 characters long'),
  })
  .refine(data => data.password === data.confirmPassowrd, {
    message: 'Passwords do not match',
    path: ['confirmPassowrd'],
  });

export const forgotPasswordSchema = z.object({
  email: z.string().email('Enter a valid email'),
});
