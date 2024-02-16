import Filter from '@/features/common/Filter';
import ExpensesHeading from '@/features/expenses/ExpensesHeading';
import ExpensesTable from '@/features/expenses/ExpensesTable';
import { Payment, columns } from '@/features/expenses/columns';
import { Helmet } from 'react-helmet-async';

const data: Payment[] = [
  {
    id: '728ed52f',
    amount: 100,
    status: 'pending',
    title: 'Savings Deposit',
  },
  {
    id: '728ed52a',
    amount: 101,
    status: 'pending',
    title: 'Life Insurance',
  },
];

const Expenses = () => {
  return (
    <>
      <Helmet title="PocketFlow | Expenses" />
      <div className="flex divide-gray-100 font-rub lg:divide-x ">
        <div className="hidden lg:block w-1/3 p-8">
          <Filter />
        </div>
        <section className="min-h-dvh flex-1">
          <ExpensesHeading />
          <ExpensesTable columns={columns} data={data} />
        </section>
      </div>
    </>
  );
};

export default Expenses;
