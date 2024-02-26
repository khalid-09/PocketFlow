import EditIncomeForm from '@/features/incomes/EditIncomeForm';
import FormLayout from '@/layouts/FormLayout';
import { Helmet } from 'react-helmet-async';

const EditIncome = () => {
  return (
    <>
      <Helmet title="Pocket Flow | Edit Income" />
      <FormLayout title="Edit Income">
        <EditIncomeForm />
      </FormLayout>
    </>
  );
};

export default EditIncome;
