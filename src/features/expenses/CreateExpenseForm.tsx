import { CreateEditExpense } from '@/types/expense';
import { expenseSchema } from '@/utils/validation/expense';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useUser } from '../authentication/useUser';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import Error from '@/components/Error';
import DatePicker from '@/components/DatePicker';
import { Button } from '@/components/ui/button';

const CreateExpenseForm = () => {
  const { user } = useUser();

  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    reset,
    formState: { errors },
  } = useForm<CreateEditExpense>({
    defaultValues: {},
    resolver: zodResolver(expenseSchema),
  });

  const onSubmit = (data: CreateEditExpense) => {
    console.log(data);
    reset();
  };

  return (
    <section>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="space-y-4 font-rub">
          <div className="space-y-1">
            <Label htmlFor="title">Title</Label>
            <Input id="title" placeholder="Type..." {...register('title')} />
            {errors?.title && <Error>{errors?.title?.message}</Error>}
          </div>
          <div className="space-y-1">
            <Label htmlFor="amount">Amount</Label>
            <div className="flex items-center gap-1">
              <span>{`${user?.user_metadata.currency || 'INR'}`}</span>
              <Input
                id="amount"
                placeholder="Type..."
                {...register('amount', { valueAsNumber: true })}
              />
            </div>
            {errors?.amount && <Error>{errors?.amount?.message}</Error>}
          </div>
          {/* <div className="space-y-1">
            <Label htmlFor="date">Date</Label>
            <DatePicker />
            {errors?.title && <Error>{errors?.title?.message}</Error>}
          </div> */}
        </div>
        <Button>Submit</Button>
      </form>
    </section>
  );
};

export default CreateExpenseForm;
