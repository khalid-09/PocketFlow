import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Login } from '@/types/auth';
import { loginSchema } from '@/utils/validation/auth';
import { Link } from 'react-router-dom';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ReloadIcon } from '@radix-ui/react-icons';
import Error from '@/components/Error';

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<Login>({ resolver: zodResolver(loginSchema) });

  const onSubmit = (data: Login) => {
    console.log(data);
    reset();
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
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
        <Button className=" w-full mt-4">
          {isSubmitting && <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />}{' '}
          Login
        </Button>
      </form>
      <div className="flex items-center text-sm mt-4">
        <p className="text-gray-500">You don't have an account yet?</p>{' '}
        <Link
          className="ml-1 font-medium text-red-600 dark:text-red-400"
          to="/signup"
        >
          Sign Up
        </Link>
      </div>
      <Link
        to="/reset-password"
        className="text-sm text-gray-500 tracking-wide"
      >
        Forgot your password?
      </Link>
    </div>
  );
};

export default LoginForm;
