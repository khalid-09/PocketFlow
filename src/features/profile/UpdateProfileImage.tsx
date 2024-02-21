import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { MdEdit } from 'react-icons/md';
import { useUser } from '../authentication/useUser';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';

const UpdateProfileImage = () => {
  const { user } = useUser();

  return (
    <Card className="font-rub">
      <CardHeader>
        <CardTitle>Update Profile</CardTitle>
        <CardDescription>Update your profile photo.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="relative w-fit rounded-full">
          <img
            src={user?.user_metadata.avatar_url}
            className="h-28 w-28 rounded-full bg-gray-100 object-cover"
          />
          <Label
            htmlFor="image"
            className="absolute bottom-0 right-0 cursor-pointer rounded-full border bg-gray-100 w-6 h-6 flex justify-center items-center"
          >
            <MdEdit className="text-red-500" />
            <Input
              type="file"
              id="image"
              className="sr-only"
              onChange={() => {}}
            />
          </Label>
        </div>
      </CardContent>
      <CardFooter>
        <div className="flex items-center gap-2">
          <Button onClick={() => {}}>Update Profile</Button>
          {user?.user_metadata.avatar_url && (
            <Button variant="destructive" onClick={() => {}}>
              Remove Profile
            </Button>
          )}
        </div>
      </CardFooter>
    </Card>
  );
};

export default UpdateProfileImage;
