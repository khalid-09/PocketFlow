import CreateExpenseForm from '@/features/expenses/CreateExpenseForm';
import FormLayout from '@/layouts/FormLayout';
import { Helmet } from 'react-helmet-async';

const CreateIncome = () => {
  return (
    <>
      <Helmet title="Pocket Flow | New Expense" />
      <FormLayout title="Create Income">
        <CreateExpenseForm />
      </FormLayout>
    </>
  );
};

export default CreateIncome;
