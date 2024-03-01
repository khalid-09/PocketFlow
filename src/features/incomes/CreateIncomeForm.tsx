// import { CreateEditExpense } from '@/types/expense';
// import { expenseSchema } from '@/utils/validation/expense';
// import { zodResolver } from '@hookform/resolvers/zod';
// import { useForm } from 'react-hook-form';
// import { useUser } from '../authentication/useUser';
// import { Label } from '@/components/ui/label';
// import { Input } from '@/components/ui/input';
// import Error from '@/components/Error';
// import DatePicker from '@/components/DatePicker';
// import { Button } from '@/components/ui/button';

// const CreateExpenseForm = () => {
//   const { user } = useUser();

//   const {
//     register,
//     handleSubmit,
//     setValue,
//     getValues,
//     reset,
//     formState: { errors },
//   } = useForm<CreateEditExpense>({
//     defaultValues: {},
//     resolver: zodResolver(expenseSchema),
//   });

//   const onSubmit = (data: CreateEditExpense) => {
//     console.log(data);
//     reset();
//   };

//   return (
//     <section>
//       <form onSubmit={handleSubmit(onSubmit)}>
//         <div className="space-y-4 font-rub">
//           <div className="space-y-1">
//             <Label htmlFor="title">Title</Label>
//             <Input id="title" placeholder="Type..." {...register('title')} />
//             {errors?.title && <Error>{errors?.title?.message}</Error>}
//           </div>
//           <div className="space-y-1">
//             <Label htmlFor="amount">Amount</Label>
//             <div className="flex items-center gap-1">
//               <span>{`${user?.user_metadata.currency || 'INR'}`}</span>
//               <Input
//                 id="amount"
//                 placeholder="Type..."
//                 {...register('amount', { valueAsNumber: true })}
//               />
//             </div>
//             {errors?.amount && <Error>{errors?.amount?.message}</Error>}
//           </div>
//           {/* <div className="space-y-1">
//             <Label htmlFor="date">Date</Label>
//             <DatePicker />
//             {errors?.title && <Error>{errors?.title?.message}</Error>}
//           </div> */}
//         </div>
//         <Button>Submit</Button>
//       </form>
//     </section>
//   );
// };

// export default CreateExpenseForm;

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { cn } from '@/lib/utils';
import { format } from 'date-fns';
import { CalendarIcon, ReloadIcon } from '@radix-ui/react-icons';
import { Calendar } from '@/components/ui/calendar';
import { Separator } from '@/components/ui/separator';
import { Textarea } from '@/components/ui/textarea';
import { useCurrency } from '@/context/useCurrency';
import { CreateEditIncome } from '@/types/income';
import { incomeSchema } from '@/utils/validation/income';
import { useCreateIncome } from './useCreateIncome';

const CreateIncomeForm = () => {
  const { currency } = useCurrency();
  const { mutate: createIncome, isPending } = useCreateIncome();

  const form = useForm<CreateEditIncome>({
    defaultValues: { date: new Date() },
    resolver: zodResolver(incomeSchema),
  });

  const onSubmit = (data: CreateEditIncome) => {
    createIncome(data);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className=" font-rub space-y-4"
      >
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input placeholder="Type..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="amount"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Amount</FormLabel>
              <div className="flex items-center gap-1">
                <p>{currency}</p>
                <Separator orientation="vertical" />
                <FormControl>
                  <Input placeholder="Enter amount" {...field} />
                </FormControl>
              </div>
              <FormDescription>
                You can change the currency from Profile page.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="date"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Date</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant={'outline'}
                      className={cn(
                        'w-[240px] pl-3 text-left font-normal',
                        !field.value && 'text-muted-foreground'
                      )}
                    >
                      {field.value ? (
                        format(field.value, 'PPP')
                      ) : (
                        <span>Pick a date</span>
                      )}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={field.value}
                    onSelect={field.onChange}
                    disabled={date =>
                      date > new Date() || date < new Date('1900-01-01')
                    }
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
              <FormDescription>Enter your income date.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="category"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Category</FormLabel>
              <FormControl>
                <Input placeholder="Type..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea placeholder="Type your message here." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* <FormField
          control={form.control}
          name="attachment"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Attachments</FormLabel>
              <FormControl>
                <Input type="file" className="h-10" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        /> */}
        <Button disabled={isPending} type="submit">
          {isPending && <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />}{' '}
          Create
        </Button>
      </form>
    </Form>
  );
};

export default CreateIncomeForm;
