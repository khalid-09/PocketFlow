import CategoryChart from '@/features/category/CategoryChart';
import ExpensesPerCategory from '@/features/category/ExpensesPerCategory';
import DateRangePicker from '@/features/common/DateRangePicker';
import { useState } from 'react';
import { DateRange } from 'react-day-picker';
import { Helmet } from 'react-helmet-async';

const Categories = () => {
  const [date, setDate] = useState<DateRange | undefined>({
    from: new Date('1,1,2024'),
    to: new Date(),
  });

  return (
    <>
      <Helmet title="Pocket Flow | Category" />
      <div>
        <h1 className="mb-10 text-center text-xl font-medium font-rub">
          Category
        </h1>
      </div>
      <div className="font-rub flex items-center justify-between gap-4 flex-wrap">
        <p>Expenses Per Category</p>
        <DateRangePicker date={date} setDate={setDate} />
      </div>
      <ExpensesPerCategory date={date} />
      <CategoryChart />
    </>
  );
};

export default Categories;
