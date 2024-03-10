import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { useExpenses } from '../expenses/useExpenses';
import CategoryCardSkeleton from './CategoryCardSkeleton';
import { categories } from '@/utils/constansts';
import CategoryIcon from '@/components/CategoryIcon';
import { useUser } from '../authentication/useUser';
import { DateRange } from 'react-day-picker';

const ExpensesPerCategory = ({ date }: { date: DateRange | undefined }) => {
  const { user } = useUser();
  const { data: expenses, isLoading } = useExpenses();

  const filteredExpenses =
    date?.from && date.to
      ? expenses?.filter(exp => {
          const expDate = new Date(exp.date);

          return expDate >= date.from! && expDate <= date.to!;
        })
      : expenses;

  const expensesPerCategory = filteredExpenses?.reduce((acc, expense) => {
    acc[expense.category] = acc[expense.category]
      ? acc[expense.category] + expense.amount
      : expense.amount;

    return acc;
  }, {} as { [key: string]: number });

  return (
    <section className="mb-10">
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 my-6 gap-4">
        {isLoading
          ? Array.from({ length: 4 }).map((_, index) => (
              <CategoryCardSkeleton key={index} />
            ))
          : categories
              .filter(category => expensesPerCategory?.[category.key])
              .map(category => (
                <Card
                  key={category.id}
                  className="flex  p-3 pl-8 items-center font-rub"
                >
                  {/* <FaBagShopping className="ml-4 h-14 w-14 p-2 bg-green-50 text-green-600 rounded-full" /> */}
                  <CategoryIcon variant="category" categoryKey={category.key} />
                  <CardHeader>
                    <CardDescription>{category.category}</CardDescription>
                    <CardTitle className="text-base">
                      {expensesPerCategory?.[category.key] &&
                        new Intl.NumberFormat('en-US', {
                          style: 'currency',
                          currency: user?.user_metadata.currency ?? 'INR',
                        }).format(expensesPerCategory?.[category.key])}
                    </CardTitle>
                  </CardHeader>
                </Card>
              ))}
      </div>
    </section>
  );
};

export default ExpensesPerCategory;
