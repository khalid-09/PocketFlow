import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { updatePasswordSchema } from '@/utils/validation/auth';
import { UpdatePass } from '@/types/auth';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Error from '@/components/Error';
import { useUpdatePassowrd } from './useUpdatePassword';
import { ReloadIcon } from '@radix-ui/react-icons';

const UpdatePassword = () => {
  const { mutate: updatePassword, isPending: isUpdating } = useUpdatePassowrd();

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<UpdatePass>({
    defaultValues: {},
    resolver: zodResolver(updatePasswordSchema),
  });

  const onSubmit = (data: UpdatePass) => {
    updatePassword({ password: data.newPassword });
    reset();
  };

  return (
    <Card className="font-rub">
      <CardHeader>
        <CardTitle>Update Password</CardTitle>
        <CardDescription>Update your password.</CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit(onSubmit)}>
        <CardContent>
          <div className="mt-2">
            <Input
              type="password"
              id="password"
              placeholder="New Password"
              {...register('newPassword')}
            />
            {errors?.newPassword && (
              <Error>{errors?.newPassword?.message}</Error>
            )}
          </div>
          <div className="mt-2">
            <Input
              type="password"
              id="confirm-pass"
              placeholder="Confirm Password"
              {...register('newPasswordConfirmation')}
            />
            {errors?.newPasswordConfirmation && (
              <Error>{errors?.newPasswordConfirmation?.message}</Error>
            )}
          </div>
        </CardContent>
        <CardFooter>
          <Button>
            {isUpdating && <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />}{' '}
            {isUpdating ? 'Updating...' : 'Update Password'}
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
};

export default UpdatePassword;
