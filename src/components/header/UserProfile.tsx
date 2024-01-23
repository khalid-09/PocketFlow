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
import { FaList } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

export default function UserProfile() {
  const { user } = useUser();

  const fallBackName: string = user?.user_metadata?.full_name
    .split(' ')
    .map(n => n[0])
    .join('');

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar className="flex items-center gap-2 font-rub text-sm">
          <AvatarImage
            className="h-8 rounded-full"
            src={user?.user_metadata?.avatar_url}
          />
          <AvatarFallback>{fallBackName}</AvatarFallback>
          <span>{user?.user_metadata?.full_name}</span>
          <FaList />
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="start">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <Link to="profile">Profile</Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Button variant="destructive" size="sm" onClick={() => {}}>
            Logout
          </Button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}