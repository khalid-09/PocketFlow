import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { signupSchema } from '@/utils/validation/auth';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Link } from 'react-router-dom';
import { Signup } from '@/types/auth';
import { ReloadIcon } from '@radix-ui/react-icons';

const SignupForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<Signup>({ resolver: zodResolver(signupSchema) });

  const onSubmit = (data: Signup) => {
    console.log(data);
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
          {errors?.username && (
            <span className="ml-2 text-red-400 text-sm"></span>
          )}
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email Address</Label>
          <Input
            type="email"
            id="email"
            placeholder="Email Address"
            {...register('email')}
          />
          {errors?.email && (
            <span className="ml-2 text-red-400 text-sm">
              {errors?.email?.message}
            </span>
          )}
        </div>
        <div className="space-y-2 mt-2">
          <Label htmlFor="password">Password</Label>
          <Input
            type="password"
            id="password"
            placeholder="Password"
            {...register('password')}
          />
          {errors?.password && (
            <span className="ml-2 text-red-400 text-sm">
              {errors?.password?.message}
            </span>
          )}
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
            <span className="ml-2 text-red-400 text-sm">
              {errors?.confirmPassowrd?.message}
            </span>
          )}
        </div>
        <Button className="w-full mt-4">
          {isSubmitting && <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />}{' '}
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
