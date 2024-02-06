import CategoryChart from '@/features/category/CategoryChart';
import ExpensesPerCategory from '@/features/category/ExpensesPerCategory';
import DateRangePicker from '@/features/dashboard/DateRangePicker';
import { Helmet } from 'react-helmet-async';

const Categories = () => {
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
        <DateRangePicker />
      </div>
      <ExpensesPerCategory />
      <CategoryChart />
    </>
  );
};

export default Categories;
