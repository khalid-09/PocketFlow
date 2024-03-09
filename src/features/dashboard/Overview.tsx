import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useExpenses } from '../expenses/useExpenses';
import { useUser } from '../authentication/useUser';
import CategoryIcon from '@/components/CategoryIcon';
import { useIncomes } from '../incomes/useIncomes';
import { Skeleton } from '@/components/ui/skeleton';

const Overview = () => {
  const { data: expenses = [], isLoading: isExpenseLoading } = useExpenses();
  const { data: incomes = [], isLoading: isIncomeLoading } = useIncomes();
  const { user } = useUser();

  return (
    <Card>
      <CardHeader>
        <CardTitle>Overview</CardTitle>
      </CardHeader>
      {isExpenseLoading ||
        (isIncomeLoading && (
          <CardContent className="space-y-4">
            {Array.from({ length: 5 }, (_, i) => (
              <div key={i} className="flex items-center space-x-4">
                <Skeleton className="h-12 w-12 rounded-full" />
                <div className="space-y-2">
                  <Skeleton className="h-4 w-[250px]" />
                  <Skeleton className="h-4 w-[200px]" />
                </div>
              </div>
            ))}
          </CardContent>
        ))}
      <CardContent>
        <Tabs defaultValue="account" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="account">Expenses</TabsTrigger>
            <TabsTrigger value="password">Incomes</TabsTrigger>
          </TabsList>
          <div className="flex justify-between p-3">
            <CardDescription>Category</CardDescription>
            <CardDescription>Amount</CardDescription>
          </div>
          <TabsContent value="account" className="font-rub p-3">
            <div className="space-y-3">
              {expenses?.map(expense => (
                <div
                  key={expense.id}
                  className="flex justify-between items-center"
                >
                  <div className="flex items-center gap-3">
                    <CategoryIcon categoryKey={expense?.category} />{' '}
                    <p>{expense?.title}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <p>
                      {new Intl.NumberFormat('en-US', {
                        style: 'currency',
                        currency: user?.user_metadata.currency ?? 'INR',
                      }).format(expense?.amount)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="password" className="font-rub p-3">
            <div className="space-y-3">
              {incomes?.map(income => (
                <div
                  key={income.id}
                  className="flex justify-between items-center"
                >
                  <div className="flex items-center gap-3">
                    <CategoryIcon
                      type="income"
                      categoryKey={income?.category}
                    />{' '}
                    <p>{income?.title}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <p>
                      {new Intl.NumberFormat('en-US', {
                        style: 'currency',
                        currency: user?.user_metadata.currency ?? 'INR',
                      }).format(income?.amount)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default Overview;
