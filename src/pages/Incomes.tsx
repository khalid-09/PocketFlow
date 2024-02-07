import Filter from '@/features/common/Filter';
import IncomesHeading from '@/features/incomes/IncomesHeading';
import IncomesTable from '@/features/incomes/IncomesTable';
import { Helmet } from 'react-helmet-async';

const Incomes = () => {
  return (
    <>
      <Helmet title="PocketFlow | Incomes" />
      <div className="flex divide-gray-300 font-rub lg:divide-x ">
        <div className="hidden lg:block w-1/3 p-8">
          <Filter />
        </div>
        <section className="min-h-screen flex-1">
          <IncomesHeading />
          <IncomesTable />
        </section>
      </div>
    </>
  );
};

export default Incomes;
