import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Link } from 'react-router-dom';

const SignupForm = () => {
  return (
    <div className="font-rub">
      <form>
        <div className="space-y-2">
          <Label htmlFor="username">Username</Label>
          <Input type="username" id="username" placeholder="Username" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email Address</Label>
          <Input type="email" id="email" placeholder="Email Address" />
        </div>
        <div className="space-y-2 mt-2">
          <Label htmlFor="password">Password</Label>
          <Input type="password" id="password" placeholder="Password" />
        </div>
        <div className="space-y-2 mt-2">
          <Label htmlFor="confirm-pass">Confirm Password</Label>
          <Input
            type="password"
            id="confirm-pass"
            placeholder="Confirm Password"
          />
        </div>
        <Button className="w-full mt-4">
          {/* {isLoading && <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />}{' '} */}
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
