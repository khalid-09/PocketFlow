export const formatCurrency = (price: number, currency = 'INR') => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
  }).format(price);
};

export const formatDate = (date?: string | Date, format = 'short') => {
  if (!date) return;
  // @ts-expect-error Description is added to explain why the @ts-expect-error is necessary.
  return new Date(date).toLocaleDateString('en-US', { dateStyle: format });
};

export const getDateFromStartDate = (date: Date | string) => {
  const trasnformedDate = new Date(date);
  trasnformedDate.setDate(1);
  return trasnformedDate;
};
