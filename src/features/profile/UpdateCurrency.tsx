import { useCurrencies } from './useCurrencies';
import { useCurrency } from '@/context/useCurrency';

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
  const { currency, setCurrency } = useCurrency();
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
        <Button
          onClick={() =>
            toast.success(`Currency updated successfully! ${currency}`)
          }
        >
          Update Currency
        </Button>
      </CardFooter>
    </Card>
  );
};

export default UpdateCurrency;
