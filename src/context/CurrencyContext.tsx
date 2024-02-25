import { useUser } from '@/features/authentication/useUser';
import { CurrencyContextType } from '@/types/currency';
import { createContext, useState } from 'react';

const defaultState = {
  currency: '',
  setCurrency: () => {},
} as CurrencyContextType;

export const CurrencyContext = createContext(defaultState);

const CurrencyProvider = ({ children }: { children: React.ReactNode }) => {
  const { user } = useUser();
  const [currency, setCurrency] = useState<string>(
    user?.user_metadata?.currency ?? 'INR'
  );

  return (
    <CurrencyContext.Provider value={{ currency, setCurrency }}>
      {children}
    </CurrencyContext.Provider>
  );
};

export { CurrencyProvider };
