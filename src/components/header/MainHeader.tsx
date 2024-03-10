import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import { ModeToggle } from '../mode-toggle';
import MainNav from './MainNav';
import UserProfile from './UserProfile';
import MobileNav from './MobileNav';
import BreadCrumb from './BreadCrumb';

import { Radar } from 'lucide-react';
const MotionRadar = motion(Radar);

const MainHeader = () => {
  return (
    <header className="fixed inset-x-0 left-0 top-0 z-10  h-16 w-full  flex justify-between px-6  shadow-sm backdrop-blur items-center">
      <Link to="/">
        <MotionRadar
          initial={{ rotate: -360, scale: 0.3 }}
          animate={{ rotate: 0, scale: 1 }}
          transition={{ duration: 1 }}
          className="text-red-500/80 w-8 h-8"
        />
      </Link>
      <BreadCrumb />
      <div className="flex items-center gap-1 md:gap-2">
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
