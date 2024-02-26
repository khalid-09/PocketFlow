import EditExpenseForm from '@/features/expenses/EditExpenseForm';
import FormLayout from '@/layouts/FormLayout';
import { Helmet } from 'react-helmet-async';

const EditExpense = () => {
  return (
    <>
      <Helmet title="Pocket Flow | Edit Expense" />
      <FormLayout title="Edit Expense">
        <EditExpenseForm />
      </FormLayout>
    </>
  );
};

export default EditExpense;
