import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { ForgotPassword } from '@/types/auth';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Helmet } from 'react-helmet-async';
import { forgotPasswordSchema } from '@/utils/validation/auth';
import Error from '@/components/Error';
import { useResetPassword } from '@/features/authentication/useResetPassword';
import { ReloadIcon } from '@radix-ui/react-icons';

const ResetPassword = () => {
  const { mutate: resetPassword, isPending: isResetting } = useResetPassword();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ForgotPassword>({ resolver: zodResolver(forgotPasswordSchema) });

  const onSubmit = (data: ForgotPassword) => {
    resetPassword({ email: data.email }, { onSuccess: () => reset() });
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
            {errors?.email && <Error>{errors?.email?.message}</Error>}
          </div>
          <Button className="mt-3 w-full">
            {isResetting && (
              <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
            )}{' '}
            {isResetting ? 'Sending email...' : ' Send email to reset password'}
          </Button>
        </form>
      </div>
    </>
  );
};

export default ResetPassword;
