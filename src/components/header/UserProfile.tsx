import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useUser } from '@/features/authentication/useUser';
import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar';
import { RiMenu4Fill } from 'react-icons/ri';
import { useNavigate } from 'react-router-dom';
import { FaUser } from 'react-icons/fa6';
import { IoMdLogOut } from 'react-icons/io';
import { useLogout } from '@/features/authentication/useLogout';

export default function UserProfile() {
  const { user } = useUser();
  const navigate = useNavigate();
  const { mutate: logout } = useLogout();

  const fallBackName: string =
    user?.user_metadata?.username ??
    user?.user_metadata?.full_name
      .split(' ')
      .map((n: string[]) => n[0])
      .join('');

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="hover:cursor-pointer" asChild>
        <Avatar className="flex items-center gap-2 font-rub text-sm">
          <AvatarImage
            className="h-8 rounded-full"
            src={user?.user_metadata?.avatar_url}
          />
          <AvatarFallback>{fallBackName}</AvatarFallback>
          <span className="text-base">{user?.user_metadata?.full_name}</span>
          <Button variant="outline" size="icon">
            <RiMenu4Fill />
          </Button>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-40" align="start">
        <DropdownMenuLabel className="font-rub text-center">
          My Account
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem className="flex items-center gap-1">
            <Button className="w-full" onClick={() => navigate('profile')}>
              <FaUser className="mr-1 font-rub text-sm" />
              Profile
            </Button>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuItem>
          <Button
            variant="destructive"
            className="font-rub w-full text-sm"
            size="sm"
            onClick={() => logout()}
          >
            <IoMdLogOut className="h-5 w-5 mr-1" />
            Logout
          </Button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
