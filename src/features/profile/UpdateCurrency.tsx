import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import SelectCategroy from '../category/SelectCategroy';

const UpdateCurrency = () => {
  return (
    <Card className="font-rub">
      <CardHeader>
        <CardTitle>Update Currency</CardTitle>
        <CardDescription>Update your currency.</CardDescription>
      </CardHeader>
      <CardContent>
        <SelectCategroy />
      </CardContent>
      <CardFooter>
        <Button>Update Currency</Button>
      </CardFooter>
    </Card>
  );
};

export default UpdateCurrency;
