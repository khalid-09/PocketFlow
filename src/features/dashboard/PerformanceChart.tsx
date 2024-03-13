import { DateRange } from 'react-day-picker';
import { usePerformace } from './usePerformace';
import { useMemo } from 'react';
import { formatDate } from '@/utils/helpers';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Legend,
  Bar,
} from 'recharts';

export function PerformanceChart({ date }: { date: DateRange | undefined }) {
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

  return (
    <Card className="col-span-2">
      <CardHeader>
        <CardTitle>{from || to ? `${from} ${to}` : 'All time'}</CardTitle>
        <CardDescription>Expense / Income</CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer height={300} width="100%">
          <BarChart data={sortedData ?? []}>
            <CartesianGrid strokeDasharray="4" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip contentStyle={{ backgroundColor: '#aaa' }} />
            <Legend />
            <Bar dataKey="expenses" name="Expense" fill="#ef4444" />
            <Bar dataKey="incomes" name="Income" fill="#4ade80" />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
export default PerformanceChart;
