import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  BadgeDollarSign,
  LibraryBig,
  NotebookPen,
  PiggyBank,
} from 'lucide-react';

const features = [
  {
    title: 'Expense Tracking',
    description:
      'Stay in control of your spending with our intuitive expense tracking tools. Easily categorize and monitor your expenses, making it simple to identify where your money is going.',
    icon: <NotebookPen />,
  },
  {
    title: 'Income Management',
    description:
      'Track and manage your income sources efficiently. Keep a close eye on your earnings and gain insights into your cash flow.',
    icon: <PiggyBank />,
  },
  {
    title: 'Currency Conversion',
    description:
      'Manage finances across borders with ease. Convert currencies and keep track of expenses in multiple currencies effortlessly.',
    icon: <BadgeDollarSign />,
  },
  {
    title: 'Category Spending Insights',
    description:
      'Gain deeper insights into your spending habits with our Category Spending Insights feature.',
    icon: <LibraryBig />,
  },
];

const Features = () => {
  return (
    <section className="mx-auto max-w-4xl pb-32">
      <div className="font-rob text-center flex flex-col gap-3">
        <h3 className="font-rub text-2xl font-bold">Features</h3>
        <p className="font-rub text-sm">
          Unlock the power of Financial Management
        </p>
      </div>
      <div className="md:grid-cols-2 font-rub grid gap-8 p-6 md:p-0 md:mt-10 mt-4 ">
        {features.map(feature => (
          <Card key={feature.title}>
            <CardHeader>
              {feature.icon}
              <CardTitle className="text-xl">{feature.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xs md:text-sm">{feature.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Features;
