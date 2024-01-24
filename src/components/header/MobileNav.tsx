import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { useUser } from '@/features/authentication/useUser';
import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar';
import { FaList } from 'react-icons/fa6';

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

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">
          <FaList />
        </Button>
      </SheetTrigger>
      <SheetContent className="font-rub w-[65%]">
        <SheetHeader>
          <SheetTitle>Profile</SheetTitle>
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
        <div className="mt-8">
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
          <SheetFooter className="mt-96 flex gap-2">
            <SheetClose asChild>
              <Button variant="destructive" type="submit">
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
