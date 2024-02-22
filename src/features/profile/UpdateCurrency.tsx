import { useState } from 'react';
import { useUser } from '../authentication/useUser';
import { useCurrencies } from './useCurrencies';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import { toast } from 'sonner';

const UpdateCurrency = () => {
  const { user } = useUser();
  const [currency, setCurrency] = useState<string>(
    user?.user_metadata?.currency ?? 'INR'
  );
  const { data: currencies } = useCurrencies();

  return (
    <Card className="font-rub">
      <CardHeader>
        <CardTitle>Update Currency</CardTitle>
        <CardDescription>Update your currency.</CardDescription>
      </CardHeader>
      <CardContent>
        <Select value={currency} onValueChange={value => setCurrency(value)}>
          <SelectTrigger>
            <SelectValue placeholder="Select a fruit" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {currencies?.map(currency => (
                <>
                  <SelectItem value={currency.key} key={currency.key}>
                    {currency.key} - {currency.countryName}
                  </SelectItem>
                  <Separator className="my-1" />
                </>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </CardContent>
      <CardFooter>
        <Button onClick={() => toast.success('Currency updated successfully!')}>
          Update Currency
        </Button>
      </CardFooter>
    </Card>
  );
};

export default UpdateCurrency;
