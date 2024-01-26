import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { FaBagShopping } from 'react-icons/fa6';

const ExpensesPerCategory = () => {
  return (
    <section className="mb-10">
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 my-6 gap-4">
        <Card className="flex p-3 items-center font-rub">
          <FaBagShopping className="ml-4 h-14 w-14 p-2 bg-green-50 text-green-600 rounded-full" />
          <CardHeader>
            <CardDescription>Food</CardDescription>
            <CardTitle className="text-base">$130.00</CardTitle>
          </CardHeader>
        </Card>
        <Card className="flex p-3 items-center font-rub">
          <FaBagShopping className="ml-4 h-14 w-14 p-2 bg-green-50 text-green-600 rounded-full" />
          <CardHeader>
            <CardDescription>Food</CardDescription>
            <CardTitle className="text-base">$130.00</CardTitle>
          </CardHeader>
        </Card>
        <Card className="flex p-3 items-center font-rub">
          <FaBagShopping className="ml-4 h-14 w-14 p-2 bg-green-50 text-green-600 rounded-full" />
          <CardHeader>
            <CardDescription>Food</CardDescription>
            <CardTitle className="text-base">$130.00</CardTitle>
          </CardHeader>
        </Card>
        <Card className="flex p-3 items-center font-rub">
          <FaBagShopping className="ml-4 h-14 w-14 p-2 bg-green-50 text-green-600 rounded-full" />
          <CardHeader>
            <CardDescription>Food</CardDescription>
            <CardTitle className="text-base">$130.00</CardTitle>
          </CardHeader>
        </Card>
        <Card className="flex p-3 items-center font-rub">
          <FaBagShopping className="ml-4 h-14 w-14 p-2 bg-green-50 text-green-600 rounded-full" />
          <CardHeader>
            <CardDescription>Food</CardDescription>
            <CardTitle className="text-base">$130.00</CardTitle>
          </CardHeader>
        </Card>
      </div>
    </section>
  );
};

export default ExpensesPerCategory;
