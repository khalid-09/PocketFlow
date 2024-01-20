import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Helmet } from 'react-helmet-async';

const ResetPassword = () => {
  return (
    <>
      <Helmet title="PocketFlow | Reset Password" />
      <div className="font-rub">
        <form>
          <div className="space-y-2">
            <Label htmlFor="email">Email Address</Label>
            <Input type="email" id="email" placeholder="Email Address" />
          </div>
          <Button className="mt-3 w-full">Send password reset email</Button>
        </form>
      </div>
    </>
  );
};

export default ResetPassword;
