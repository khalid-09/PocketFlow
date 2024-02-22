import { z } from 'zod';

export const loginSchema = z.object({
  email: z
    .string({ required_error: 'Email is required' })
    .email('Enter a valid email'),
  password: z
    .string({ required_error: 'Passowrd is required' })
    .min(8, 'Enter password of atleast 8 characters'),
});

export const signupSchema = z
  .object({
    username: z
      .string({ required_error: 'Username is required' })
      .min(3, 'Username must be atleast 3 characters long'),
    email: z
      .string({ required_error: 'Email is required' })
      .email('Enter a valid email'),
    password: z
      .string({ required_error: 'Password is required' })
      .min(8, 'Passowrd must be atleast 8 characters long'),
    confirmPassowrd: z
      .string({ required_error: 'Confirm password is required' })
      .min(8, 'Passowrd must be atleast 8 characters long'),
  })
  .refine(data => data.password === data.confirmPassowrd, {
    message: 'Passwords do not match',
    path: ['confirmPassowrd'],
  });

export const forgotPasswordSchema = z.object({
  email: z.string().email('Enter a valid email'),
});

export const updatePasswordSchema = z
  .object({
    newPassword: z
      .string({ required_error: 'Password is required' })
      .min(8, 'Password must be atleast 8 characters long'),
    newPasswordConfirmation: z
      .string({ required_error: 'Confirm password is required' })
      .min(8, 'Password must be atleast 8 characters long'),
  })
  .refine(data => data.newPassword === data.newPasswordConfirmation, {
    message: 'Passwords do not match',
    path: ['newPasswordConfirmation'],
  });
