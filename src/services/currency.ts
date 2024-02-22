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
