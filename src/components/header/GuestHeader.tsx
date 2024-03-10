import { Link } from 'react-router-dom';
import { Button } from '../ui/button';
import { ModeToggle } from '../mode-toggle';
import { Radar } from 'lucide-react';
import { useUser } from '@/features/authentication/useUser';
import { motion } from 'framer-motion';

const MotionRadar = motion(Radar);

const GuestHeader = () => {
  const { user, isAuthenticated } = useUser();

  return (
    <header className="justify-between px-6 py-4 flex shadow-sm backdrop-blur h-16 gap-2 font-rub w-full fixed inset-x-0 left-0 top-0 z-10 ">
      <Link to="/">
        <MotionRadar
          initial={{ rotate: -360, scale: 0.5 }}
          animate={{ rotate: 0, scale: 1 }}
          transition={{ duration: 1 }}
          className="text-red-500/80 w-8 h-8"
        />
      </Link>
      <nav className="flex gap-2">
        {user && isAuthenticated ? (
          <Button variant="outline" asChild>
            <Link to="/dashboard">Go to dashboard</Link>
          </Button>
        ) : (
          <>
            <Button asChild variant="ghost">
              <Link to="/login">Login</Link>
            </Button>
            <Button asChild className="px-10 shadow-md" variant="outline">
              <Link to="/signup">Sign Up</Link>
            </Button>
          </>
        )}
        <ModeToggle />
      </nav>
    </header>
  );
};

export default GuestHeader;
