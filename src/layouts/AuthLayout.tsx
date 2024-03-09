import { Button } from '@/components/ui/button';
import { signInWithGithub, signInWithGoogle } from '@/services/apiAuth';
import { useUser } from '@/features/authentication/useUser';
import { FaGithub, FaGoogle } from 'react-icons/fa6';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { toast } from 'sonner';

const AuthLayout = () => {
  const location = useLocation();
  const { isAuthenticated, user } = useUser();

  if (isAuthenticated && user) return <Navigate to="/dashboard" />;

  let title = '';
  if (location.pathname === '/login') title = 'Log In to your account.';
  if (location.pathname === '/signup') title = 'Create your account.';
  if (location.pathname === '/reset-password') title = 'Reset your password';

  const showAuth = title !== 'Reset your password';

  return (
    <div className="h-dvh flex items-center font-rub flex-col pt-32 ">
      <div className="mt-0 flex max-w-2xl flex-col items-center justify-between border-0 bg-transparent p-6 gap-4 sm:flex-row">
        <div className="flex-1 space-y-4">
          <h1 className="text-xl">{title}</h1>
          <Outlet />
        </div>
        {showAuth && (
          <>
            <div className="my-4 h-px w-20 bg-gray-300 sm:mx-4 sm:h-20 sm:w-px" />
            <div className="flex w-full flex-col gap-2 sm:w-auto">
              <Button
                variant="outline"
                onClick={() => {
                  toast.loading('Signing in with Google');
                  console.log('signing in with google');
                  signInWithGoogle();
                }}
              >
                <FaGoogle className="mr-2 h-4 w-4" />
                Continue with Google
              </Button>
              <Button
                onClick={() => {
                  toast.loading('Signing in with Github');
                  console.log('signing in with github');
                  signInWithGithub();
                }}
                color="gray"
              >
                <FaGithub className="mr-2 h-4 w-4" /> Continue with Github
              </Button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default AuthLayout;
