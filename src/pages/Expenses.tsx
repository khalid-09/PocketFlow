import { Helmet } from 'react-helmet-async';

import { Payment, columns } from '@/features/common/columns';
import Heading from '@/features/common/Heading';
import CommonTable from '@/features/common/CommonTable';
import { useExpenses } from '@/features/expenses/useExpenses';
import { toast } from 'sonner';

const Expenses = () => {
  const { data = [], isLoading } = useExpenses();
  const expenses = data as Payment[]; // as Payment[] is used to tell typescript that expenses is an array of Payment type, so that it doesn't throw error while accessing properties of Payment type like id, amount, title, date, et

  if (isLoading) return toast.info('Loading expenses...');

  return (
    <>
      <Helmet title="PocketFlow | Expenses" />
      <div>
        {/* <div className="hidden lg:block w-1/3 p-8">
          <Filter />
        </div> */}
        <section className="min-h-dvh">
          <Heading type="expense" title="Expenses" actionName="Add Expense" />
          <CommonTable columns={columns} data={expenses} />
        </section>
      </div>
    </>
  );
};

export default Expenses;
