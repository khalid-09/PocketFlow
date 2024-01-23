import { Link } from 'react-router-dom';

import MainNav from '../ui/MainNav';
import { Radar } from 'lucide-react';
import { ModeToggle } from '../mode-toggle';
import UserProfile from './UserProfile';
import MobileNav from './MobileNav';

const MainHeader = () => {
  return (
    <header className="fixed inset-x-0 left-0 top-0 z-10  h-16 w-full  flex justify-between px-6  shadow-sm backdrop-blur items-center">
      <Link to="/dashboard">
        <Radar className="text-red-500/80 w-8 h-8" />
      </Link>
      <div className="flex items-center gap-3">
        <div className="sm:flex hidden items-center gap-4">
          <MainNav />
          <UserProfile />
        </div>
        <div className="block sm:hidden ">
          <MobileNav />
        </div>
        <ModeToggle />
      </div>
    </header>
  );
};

export default MainHeader;
