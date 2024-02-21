import CommonTable from '@/features/common/CommonTable';
import Heading from '@/features/common/Heading';
import { Payment, columns } from '@/features/common/columns';
import { Helmet } from 'react-helmet-async';

const data: Payment[] = [
  {
    id: '728ed52f',
    amount: 100,
    status: 'pending',
    title: 'Savings Deposit',
    date: '02-01-2024',
  },
  {
    id: '728ed52a',
    amount: 101,
    status: 'pending',
    title: 'Life Insurance',
    date: '03-01-2024',
  },
];

const Incomes = () => {
  return (
    <>
      <Helmet title="PocketFlow | Incomes" />
      <div className="flex divide-gray-300 font-rub lg:divide-x ">
        {/* <div className="hidden lg:block w-1/3 p-8">
          <Filter />
        </div> */}
        <section className="min-h-screen flex-1">
          <Heading type="income" title="Incomes" actionName="Add Income" />
          <CommonTable columns={columns} data={data} />
        </section>
      </div>
    </>
  );
};

export default Incomes;
