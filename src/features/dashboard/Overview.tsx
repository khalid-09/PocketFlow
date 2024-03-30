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
import OverviewSkeleton from './OverviewSkeleton';

const Overview = () => {
  const { data: expenses = [], isLoading: isExpenseLoading } = useExpenses();
  const { data: incomes = [], isLoading: isIncomeLoading } = useIncomes();
  const { user } = useUser();

  return (
    <Card>
      <CardHeader className="font-rub w-full col-span-1">
        <CardTitle>Overview</CardTitle>
      </CardHeader>
      <CardContent className="w-full">
        <Tabs defaultValue="expense" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="expense">Expenses</TabsTrigger>
            <TabsTrigger value="income">Incomes</TabsTrigger>
          </TabsList>
          <div className="flex justify-between p-3">
            <CardDescription>Category</CardDescription>
            <CardDescription>Amount</CardDescription>
          </div>
          {(isExpenseLoading || isIncomeLoading) && <OverviewSkeleton />}
          <TabsContent value="expense" className="font-rub block p-3">
            <div className="space-y-3 w-full">
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
          <TabsContent value="income" className="font-rub block p-3">
            <div className="space-y-3 w-full">
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
