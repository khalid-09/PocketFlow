import { Radar } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ModeToggle } from '../mode-toggle';
import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar';
import MainNav from '../ui/MainNav';

const MainHeader = () => {
  return (
    <header className="flex justify-around items-center">
      <Link to="/dashboard">
        <Radar className="text-red-500/80 w-8 h-8" />
      </Link>
      <div className="flex gap-4">
        <MainNav />
        <Avatar>
          <AvatarImage
            className="h-8 rounded-full"
            src="https://github.com/shadcn.png"
            alt="avatar-image"
          />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <ModeToggle />
      </div>
    </header>
  );
};

export default MainHeader;
