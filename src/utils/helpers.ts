export const formatCurrency = (price: number, currency = 'USD') => {
  return new Intl.NumberFormat(navigator.language, {
    style: 'currency',
    currency,
  }).format(price);
};

export const formatDate = (date?: string | Date, format = 'short') => {
  if (!date) return;

  return new Date(date).toLocaleDateString('en-US', { dateStyle: format });
};

export const getDateFromStartDate = (date: Date | string) => {
  const trasnformedDate = new Date(date);
  trasnformedDate.setDate(1);
  return trasnformedDate;
};
