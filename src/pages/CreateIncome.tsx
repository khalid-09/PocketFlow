import { Helmet } from 'react-helmet-async';
import FormLayout from '@/layouts/FormLayout';
import CreateIncomeForm from '@/features/incomes/CreateIncomeForm';

const CreateIncome = () => {
  return (
    <>
      <Helmet title="Pocket Flow | New Income" />
      <FormLayout title="Create Income">
        <CreateIncomeForm />
      </FormLayout>
    </>
  );
};

export default CreateIncome;
