import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ReloadIcon } from '@radix-ui/react-icons';
import { Link } from 'react-router-dom';

const LoginForm = () => {
  const isLoading = false;

  return (
    <div>
      <form>
        <div className="space-y-2">
          <Label htmlFor="email">Email Address</Label>
          <Input type="email" id="email" placeholder="Email Address" />
        </div>
        <div className="space-y-2 mt-2">
          <Label htmlFor="password">Password</Label>
          <Input type="password" id="password" placeholder="Password" />
        </div>
        <Button className="w-full mt-4">
          {isLoading && <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />}{' '}
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
