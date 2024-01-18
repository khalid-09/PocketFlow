import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { ModeToggle } from './mode-toggle';
import { Radar } from 'lucide-react';

const Header = () => {
  return (
    <header className="justify-between flex font-inter m-4 gap-2">
      <Link className="ml-4" to="/">
        <Radar className="text-red-500/80 w-8 h-8" />
      </Link>
      <nav className="flex gap-2">
        <Button asChild variant="ghost">
          <Link to="/Login">Login</Link>
        </Button>
        <Button asChild className="px-10" variant="outline">
          <Link to="SignUp">Sign Up</Link>
        </Button>
        <ModeToggle />
      </nav>
    </header>
  );
};

export default Header;
