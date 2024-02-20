import CreateExpenseForm from '@/features/expenses/CreateExpenseForm';
import FormLayout from '@/layouts/FormLayout';
import { Helmet } from 'react-helmet-async';

const CreateExpense = () => {
  return (
    <>
      <Helmet title="Pocket Flow | New Expense" />
      <FormLayout title="Create Expense">
        <CreateExpenseForm />
      </FormLayout>
    </>
  );
};

export default CreateExpense;
