import { CreateEditExpense } from '@/types/expense';
import { expenseSchema } from '@/utils/validation/expense';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useLocation } from 'react-router-dom';

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
import { Separator } from '@/components/ui/separator';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';
import { CalendarIcon, ReloadIcon } from '@radix-ui/react-icons';
import { Calendar } from '@/components/ui/calendar';
import { Textarea } from '@/components/ui/textarea';
import { useEditIncome } from './useEditIncome';
import { incomeCategories } from '@/utils/constansts';
import SelectCategory from '@/components/SelectCategory';

const EditIncomeForm = () => {
  const location = useLocation();
  const incomeData = location.state;
  const { mutate: editIncome, isPending } = useEditIncome();

  const form = useForm<CreateEditExpense>({
    resolver: zodResolver(expenseSchema),
    defaultValues: {
      title: incomeData.title,
      amount: String(incomeData.amount),
      date: new Date(incomeData.date),
      category: incomeData.category,
      description: incomeData.description,
    },
  });

  const onSubmit = (income: CreateEditExpense) => {
    editIncome({ id: incomeData.id, income });
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
                <p>INR</p>
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
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="w-[280px] h-12">
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {incomeCategories.map(category => (
                    <div>
                      <SelectItem value={category.key} className="flex">
                        <div className="flex items-center">
                          <SelectCategory
                            type="income"
                            categoryKey={category.key}
                          />{' '}
                          <span>{category.category}</span>
                        </div>
                      </SelectItem>
                      <Separator className="my-1" />
                    </div>
                  ))}
                </SelectContent>
              </Select>
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
        <Button disabled={isPending} type="submit">
          {isPending && <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />}{' '}
          Save Changes
        </Button>
      </form>
    </Form>
  );
};

export default EditIncomeForm;
