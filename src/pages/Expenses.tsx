import Filter from '@/features/common/Filter';
import ExpensesHeading from '@/features/expenses/ExpensesHeading';
import ExpensesTable from '@/features/expenses/ExpensesTable';
import { Helmet } from 'react-helmet-async';

const Expenses = () => {
  return (
    <>
      <Helmet title="PocketFlow | Expenses" />
      <div className="flex divide-gray-300 font-rub lg:divide-x ">
        <div className="hidden lg:block w-1/3 p-8">
          <Filter />
        </div>
        <section className="min-h-screen flex-1">
          <ExpensesHeading />
          <ExpensesTable />
        </section>
      </div>
    </>
  );
};

export default Expenses;
