import { useUser } from '@/features/authentication/useUser';
import { useLogout } from '@/features/authentication/useLogout';

import { Link, useNavigate } from 'react-router-dom';

import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar';
import { RiMenu4Fill } from 'react-icons/ri';

const navLinks = [
  {
    to: '/dashboard',
    name: 'Dashboard',
  },
  {
    to: 'expenses',
    name: 'Expenses',
  },
  {
    to: 'incomes',
    name: 'Incomes',
  },
  {
    to: 'category',
    name: 'Category',
  },
];

const MobileNav = () => {
  const { user } = useUser();
  const navigate = useNavigate();
  const { mutate: logout } = useLogout();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size="icon" variant="outline">
          <RiMenu4Fill />
        </Button>
      </SheetTrigger>
      <SheetContent className="font-rub w-[65%] flex flex-col">
        <SheetHeader>
          <SheetDescription>
            <Avatar className="flex items-center gap-3">
              <AvatarImage
                className="h-10 rounded-full"
                src={user?.user_metadata?.avatar_url}
              />
              <AvatarFallback>CN</AvatarFallback>
              <span>{user?.user_metadata?.full_name}</span>
            </Avatar>
          </SheetDescription>
        </SheetHeader>
        <div className="mt-8 flex-1 flex flex-col justify-between ">
          <div>
            <ul className="flex flex-col gap-4">
              {navLinks.map(link => (
                <li key={link.name}>
                  <SheetClose asChild>
                    <Link to={link.to}>{link.name}</Link>
                  </SheetClose>
                </li>
              ))}
            </ul>
          </div>
          <SheetFooter className=" flex gap-2">
            <SheetClose asChild>
              <Button
                variant="destructive"
                onClick={() => logout()}
                type="submit"
              >
                Log Out
              </Button>
            </SheetClose>
            <SheetClose asChild>
              <Button onClick={() => navigate('profile')}>Profile</Button>
            </SheetClose>
          </SheetFooter>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
