import { useState } from 'react';
import { useUser } from '../authentication/useUser';
import { useCurrencies } from './useCurrencies';
import { useUpdateCurrency } from './useUpdateCurrency';

import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { toast } from 'sonner';
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

import { ReloadIcon } from '@radix-ui/react-icons';

const UpdateCurrency = () => {
  const { user } = useUser();
  const [currency, setCurrency] = useState<string>(
    user?.user_metadata.currency ?? 'INR'
  );
  const { data: currencies } = useCurrencies();
  const { mutate: updateCurrency, isPending: isUpdating } = useUpdateCurrency();

  const handleClick = () => {
    if (!currency) {
      toast.error('Please select a currency');
      return;
    }
    updateCurrency({ currency });
  };

  return (
    <Card className="font-rub">
      <CardHeader>
        <CardTitle>Update Currency</CardTitle>
        <CardDescription>Update your currency.</CardDescription>
      </CardHeader>
      <CardContent>
        <Select value={currency} onValueChange={value => setCurrency(value)}>
          <SelectTrigger>
            <SelectValue placeholder="Select a currency" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {currencies?.map(currency => (
                <div key={currency.key}>
                  <SelectItem value={currency.key}>
                    {currency.key} - {currency.countryName}
                  </SelectItem>
                  <Separator className="my-1" />
                </div>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </CardContent>
      <CardFooter>
        <Button onClick={handleClick}>
          {isUpdating ? (
            <>
              <ReloadIcon className="mr-2 h-4 w-4 animate-spin" /> Updating...
            </>
          ) : (
            <span>Update Currency</span>
          )}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default UpdateCurrency;
