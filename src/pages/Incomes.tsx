import CommonTable from '@/features/common/CommonTable';
import Heading from '@/features/common/Heading';
import { Payment, columns } from '@/features/common/columns';
import { useIncomes } from '@/features/incomes/useIncomes';
import { Helmet } from 'react-helmet-async';
import { toast } from 'sonner';

const Incomes = () => {
  const { data = [], isLoading } = useIncomes();
  const incomes = data as Payment[];
  const rows = incomes.map(income => {
    return { ...income, date: new Date(income.date).toLocaleDateString() };
  });

  if (isLoading) toast.info('Loading incomes...');

  return (
    <>
      <Helmet title="PocketFlow | Incomes" />
      <div className="flex divide-gray-300 font-rub lg:divide-x ">
        {/* <div className="hidden lg:block w-1/3 p-8">
          <Filter />
        </div> */}
        <section className="min-h-screen flex-1">
          <Heading type="income" title="Incomes" actionName="Add Income" />
          <CommonTable columns={columns} data={rows} />
        </section>
      </div>
    </>
  );
};

export default Incomes;
