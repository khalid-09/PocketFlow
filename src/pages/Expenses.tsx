import Filter from '@/features/common/Filter';
import Heading from '@/features/common/Heading';
import CommonTable from '@/features/common/CommonTable';
import { Payment, columns } from '@/features/common/columns';
import { Helmet } from 'react-helmet-async';

const data: Payment[] = [
  {
    id: '728ed52f',
    amount: 100,
    status: 'pending',
    title: 'Savings Deposit',
    date: '2021-09-01',
  },
  {
    id: '728ed52a',
    amount: 101,
    status: 'pending',
    title: 'Life Insurance',
    date: '2021-09-01',
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
          <Heading title="Expenses" actionName="Add Expense" />
          <CommonTable columns={columns} data={data} />
        </section>
      </div>
    </>
  );
};

export default Expenses;
