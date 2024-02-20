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
import { z } from 'zod';

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
import { toast } from 'sonner';
import { CreateEditExpense } from '@/types/expense';
import { expenseSchema } from '@/utils/validation/expense';
import { useUser } from '../authentication/useUser';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { cn } from '@/lib/utils';
import { format } from 'date-fns';
import { CalendarIcon } from '@radix-ui/react-icons';
import { Calendar } from '@/components/ui/calendar';
import { Separator } from '@/components/ui/separator';
import { Textarea } from '@/components/ui/textarea';

const CreateExpenseForm = () => {
  const { user } = useUser();

  const form = useForm<CreateEditExpense>({
    defaultValues: { date: new Date() },
    resolver: zodResolver(expenseSchema),
  });

  const onSubmit = (data: CreateEditExpense) => {
    toast('You submitted the following values:', {
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
    form.reset();
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
                <p>{user?.user_metadata.currency || 'INR'}</p>
                <Separator orientation="vertical" />
                <FormControl>
                  <Input placeholder="Enter amount" {...field} />
                </FormControl>
              </div>
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
              <FormDescription>Enter your expense date.</FormDescription>
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
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};

export default CreateExpenseForm;
