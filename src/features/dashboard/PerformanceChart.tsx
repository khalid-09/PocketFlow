import { DateRange } from 'react-day-picker';
import { usePerformace } from './usePerformace';
import { useMemo } from 'react';
import { formatDate } from '@/utils/helpers';

import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from 'recharts';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';

const chartConfig = {
  expenses: {
    label: 'Expenses',
    color: 'hsl(var(--chart-1))',
  },
  incomes: {
    label: 'Income',
    color: 'hsl(var(--chart-2))',
  },
} satisfies ChartConfig;

export function PerformanceBarChart({ date }: { date: DateRange | undefined }) {
  const { data } = usePerformace(date);

  const sortedData = useMemo(() => {
    if (data) {
      return data
        .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
        .map(item => ({
          ...item,
          incomes: item.incomes ?? 0,
          expenses: item.expenses ?? 0,
        }));
    }
    return [];
  }, [data]);

  console.log('Sorted Data:', sortedData);

  const from = date?.from ? `From ${formatDate(date?.from, 'medium')}` : '';
  const to = date?.to ? `To ${formatDate(date?.to, 'medium')}` : '';

  return (
    <Card className="col-span-2">
      <CardHeader>
        <CardTitle>{from || to ? `${from} ${to}` : 'All time'}</CardTitle>
        <CardDescription>Expense / Income</CardDescription>
      </CardHeader>
      <CardContent>
        {sortedData.length === 0 ? (
          <div className="flex items-center justify-center h-48">
            <span>No data to display</span>
          </div>
        ) : (
          <ChartContainer config={chartConfig}>
            <BarChart
              accessibilityLayer
              data={sortedData}
              margin={{
                left: -20,
                right: 12,
              }}
            >
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="date"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                tickFormatter={value => {
                  const date = new Date(value);
                  return date.toLocaleDateString('en-US', { month: 'short' });
                }}
              />
              <YAxis
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                tickCount={3}
              />
              <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
              <Bar dataKey="expenses" fill="var(--color-expenses)" radius={4} />
              <Bar dataKey="incomes" fill="var(--color-incomes)" radius={4} />
            </BarChart>
          </ChartContainer>
        )}
      </CardContent>
    </Card>
  );
}

export default PerformanceBarChart;
