import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { FaArrowTrendDown, FaArrowTrendUp } from 'react-icons/fa6';
import { useUser } from '../authentication/useUser';

type StatPorps = {
  current: number;
  prev: number;
  label: string;
};

const Stat = ({ current, prev, label }: StatPorps) => {
  const { user } = useUser();
  const diff = current - prev;

  return (
    <Card className="md:w-1/3 font-rub">
      <CardHeader>
        <CardDescription>{label}</CardDescription>
        <CardTitle className="text-2xl">
          {new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: user?.user_metadata.currency ?? 'INR',
          }).format(current ?? 0)}
        </CardTitle>
      </CardHeader>
      <CardContent className="flex items-center gap-4">
        {current && current > prev ? (
          <FaArrowTrendDown className="text-red-600 rounded-2xl bg-red-50 p-2 w-8 h-8" />
        ) : (
          <FaArrowTrendUp className="text-green-600 rounded-2xl bg-green-50 p-2 w-8 h-8" />
        )}
        {new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: user?.user_metadata.currency ?? 'INR',
        }).format(Math.abs(diff) ?? 0)}{' '}
        compared to previous month
      </CardContent>
    </Card>
  );
};

export default Stat;
