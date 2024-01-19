import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { ModeToggle } from './mode-toggle';
import { Radar } from 'lucide-react';

const Header = () => {
  return (
    <header className="justify-between p-6 flex fixed left-0 top-0 z-10 h-16 gap-2 font-rub w-full">
      <Link to="/">
        <Radar className="text-red-500/80 w-8 h-8" />
      </Link>
      <nav className="flex gap-2">
        <Button asChild variant="ghost">
          <Link to="/Login">Login</Link>
        </Button>
        <Button asChild className="px-10 shadow-md" variant="outline">
          <Link to="SignUp">Sign Up</Link>
        </Button>
        <ModeToggle />
      </nav>
    </header>
  );
};

export default Header;
