import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { signupSchema } from '@/utils/validation/auth';

import Error from '@/components/Error';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Link } from 'react-router-dom';
import { Signup } from '@/types/auth';
import { ReloadIcon } from '@radix-ui/react-icons';
import { useSignUp } from './useSignUp';

const SignupForm = () => {
  const { mutate: signUp, isPending } = useSignUp();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Signup>({ resolver: zodResolver(signupSchema) });

  const onSubmit = (data: Signup) => {
    signUp(data);
    reset();
  };

  return (
    <div className="font-rub">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="space-y-2">
          <Label htmlFor="username">Username</Label>
          <Input
            type="username"
            id="username"
            placeholder="Username"
            {...register('username')}
          />
          {errors?.username && <Error>{errors?.username?.message}</Error>}
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email Address</Label>
          <Input
            type="email"
            id="email"
            placeholder="Email Address"
            {...register('email')}
          />
          {errors?.email && <Error>{errors?.email?.message}</Error>}
        </div>
        <div className="space-y-2 mt-2">
          <Label htmlFor="password">Password</Label>
          <Input
            type="password"
            id="password"
            placeholder="Password"
            {...register('password')}
          />
          {errors?.password && <Error>{errors?.password?.message}</Error>}
        </div>
        <div className="space-y-2 mt-2">
          <Label htmlFor="confirm-pass">Confirm Password</Label>
          <Input
            type="password"
            id="confirm-pass"
            placeholder="Confirm Password"
            {...register('confirmPassowrd')}
          />
          {errors?.confirmPassowrd && (
            <Error>{errors?.confirmPassowrd?.message}</Error>
          )}
        </div>
        <Button className="w-full mt-4">
          {isPending && <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />}{' '}
          Sign Up
        </Button>
      </form>
      <div className="flex items-center text-sm mt-4">
        <p className="text-gray-500">You already have an account?</p>{' '}
        <Link
          className="ml-1 font-medium text-red-600 dark:text-red-400"
          to="/login"
        >
          Login
        </Link>
      </div>
    </div>
  );
};

export default SignupForm;
