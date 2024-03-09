import supabase from '@/lib/supabase';
import { toast } from 'sonner';

export const getCurrencies = async () => {
  const res = await fetch('https://openexchangerates.org/api/currencies.json');

  if (!res.ok)
    throw new Error('Something went wrong could not load currencies');

  const data = await res.json();

  const currencies = Object.entries(data).map(entry => ({
    key: entry[0],
    countryName: entry[1] as string,
  }));

  return currencies;
};

export const updateCurrency = async ({ currency }: { currency: string }) => {
  const { data, error } = await supabase.auth.updateUser({
    data: { currency },
  });

  if (error) toast.error(error.message);

  return data.user;
};
