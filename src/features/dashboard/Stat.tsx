import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { FaArrowTrendDown, FaArrowTrendUp } from 'react-icons/fa6';

type StatPorps = {
  current: number;
  prev: number;
  label: string;
};

const Stat = ({ current, prev, label }: StatPorps) => {
  return (
    <Card className="md:w-1/3 font-rub">
      <CardHeader>
        <CardDescription>Savings</CardDescription>
        <CardTitle className="text-2xl">0.00$</CardTitle>
      </CardHeader>
      <CardContent className="flex items-center gap-4">
        {current && current > prev ? (
          <FaArrowTrendDown className="text-red-600 rounded-2xl bg-red-50 p-2 w-8 h-8" />
        ) : (
          <FaArrowTrendUp className="text-green-600 rounded-2xl bg-green-50 p-2 w-8 h-8" />
        )}
        0.00$ to previous month
      </CardContent>
    </Card>
  );
};

export default Stat;
