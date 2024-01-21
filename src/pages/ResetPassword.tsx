import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { ForgotPassword } from '@/types/auth';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Helmet } from 'react-helmet-async';
import { forgotPasswordSchema } from '@/utils/validation/auth';

const ResetPassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ForgotPassword>({ resolver: zodResolver(forgotPasswordSchema) });

  const onSubmit = (data: ForgotPassword) => {
    console.log(data);
    reset();
  };

  return (
    <>
      <Helmet title="PocketFlow | Reset Password" />
      <div className="font-rub">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-2">
            <Label htmlFor="email">Email Address</Label>
            <Input
              type="email"
              id="email"
              placeholder="Email Address"
              {...register('email')}
            />
            {errors?.email && (
              <span className="text-red-400 text-sm ml-2">
                {errors?.email?.message}
              </span>
            )}
          </div>
          <Button className="mt-3 w-full">Send password reset email</Button>
        </form>
      </div>
    </>
  );
};

export default ResetPassword;
