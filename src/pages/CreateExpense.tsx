import CreateExpenseForm from '@/features/expenses/CreateExpenseForm';
import { Helmet } from 'react-helmet-async';

const CreateExpense = () => {
  return (
    <>
      <Helmet title="Pocket Flow | New Expense" />
      <div className="py-3 mb-8 text-center text-xl font-medium font-rub">
        <h1>Create Expense</h1>
      </div>
      <CreateExpenseForm />
    </>
  );
};

export default CreateExpense;
