import { useContext } from 'react';
import { CurrencyContext } from './CurrencyContext';

export const useCurrency = () => {
  const context = useContext(CurrencyContext);
  if (context === undefined)
    throw new Error('useCurrency was used outside of CurrencyProvider');

  return context;
};
