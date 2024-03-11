// import { AreaChart } from '@tremor/react';
import { DateRange } from 'react-day-picker';
import { usePerformace } from './usePerformace';
import { useMemo } from 'react';
import { formatCurrency, formatDate } from '@/utils/helpers';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { useUser } from '../authentication/useUser';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

export function PerformanceChart({ date }: { date: DateRange | undefined }) {
  const { user } = useUser();
  const { data } = usePerformace(date);
  console.log(data);

  const sortedData = useMemo(() => {
    return data?.sort(
      (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
    );
  }, [data]);
  console.log(sortedData);

  const from = date?.from ? `From ${formatDate(date?.from, 'medium')}` : '';
  const to = date?.to ? `To ${formatDate(date?.to, 'medium')}` : '';

  const colors = {
    totalSales: { stroke: '#4f46e5', fill: '#4f46e5' },
    extrasSales: { stroke: '#22c55e', fill: '#22c55e' },
    text: '#e5e7eb',
    background: '#18212f',
  };

  return (
    <Card className="col-span-2">
      <CardHeader>
        <CardTitle>{from || to ? `${from} ${to}` : 'All time'}</CardTitle>
        <CardDescription>Expense / Income</CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer height={400} width="100%">
          <AreaChart width={500} height={400} data={data ?? []}>
            <CartesianGrid strokeDasharray="4" />
            <Tooltip contentStyle={{ backgroundColor: colors.background }} />
            <XAxis
              dataKey="date"
              // tick={{ fill: colors.text }}
              // tickLine={{ stroke: colors.text }}
            />
            <YAxis
            // unit={'Eur'}
            // tick={{ fill: colors.text }}
            // tickLine={{ stroke: colors.text }}
            />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="incomes"
              // stroke={colors.totalSales.stroke}
              // fill={colors.totalSales.fill}
              strokeWidth={2}
              name="Incomes"
              unit={formatCurrency(user?.user_metadata?.currency).toString()}
            />
            <Area
              dataKey="expenses"
              type="monotone"
              // stroke={colors.extrasSales.stroke}
              // fill={colors.extrasSales.fill}
              strokeWidth={2}
              name="Expenses"
              unit={formatCurrency(user?.user_metadata?.currency)}
            />
          </AreaChart>
        </ResponsiveContainer>
        {/* <AreaChart
          className="h-96"
          data={sortedData ?? []}
          index="date"
          categories={['expenses', 'incomes']}
          colors={['indigo', 'rose']}
          valueFormatter={value =>
            formatCurrency(value, user?.user_metadata.currency)
          }
          noDataText={'No expenses'}
        /> */}
      </CardContent>
    </Card>
  );
}
export default PerformanceChart;
