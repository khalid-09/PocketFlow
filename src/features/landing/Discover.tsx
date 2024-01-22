import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import discover1 from '../../assets/discover-1.svg';
import discover2 from '../../assets/discover-2.svg';
import discover3 from '../../assets/discover-3.svg';
import discover4 from '../../assets/discover-4.svg';

const discoveries = [
  {
    imgPath: discover1,
    reverse: true,
    heading: 'Monthly Performance Dashboard',
    text: 'Monitor your financial progress and track key metrics at a glance with our Monthly Performance Dashboard. Gain insights into your income, expenses, budgeting, and more to make informed decisions for a financially successful future.',
  },
  {
    imgPath: discover2,
    reverse: false,
    heading: 'Track Expenses and incomes',
    text: "Effortlessly track your expenses and income with our intuitive financial management tools. Stay in control of your money and gain a clear understanding of where your funds are coming from and where they'e going.,",
  },
  {
    imgPath: discover3,
    reverse: true,
    heading: 'Category Spending',
    text: 'Easily categorize and manage your spending with our Category Spending feature. Organize your expenses into custom categories, gain insights into your financial habits, and make smarter budgeting decisions.',
  },
  {
    imgPath: discover4,
    reverse: false,
    heading: 'Currency conversion & profile',
    text: 'Seamlessly handle currency conversion and customize your profile with our user-friendly tools. Convert currencies with ease and personalize your account settings to suit your unique financial needs.',
  },
];

const Discover = () => {
  return (
    <section className="mx-auto pb-32 max-w-4xl">
      <div className="font-rob text-center flex flex-col gap-3">
        <h3 className="font-rub text-2xl tracking-wide font-bold text-red-400">
          Discover
        </h3>
        <p className="font-rub">Journey into Financial Clarity</p>
      </div>
      {discoveries.map(discover => (
        <div
          className="flex items-center justify-center flex-col font-rub md:flex-row gap-8 px-3 md:p-0 md:mt-10 mt-4"
          key={discover.heading}
        >
          {discover.reverse && (
            <img
              src={discover.imgPath}
              alt={`${discover.heading} title`}
              width={300}
              className="hidden md:block"
            />
          )}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl tracking-wide">
                {discover.heading}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm tracking-wide">{discover.text}</p>
            </CardContent>
          </Card>
          {!discover.reverse && (
            <img
              src={discover.imgPath}
              alt={`${discover.heading} title`}
              width={300}
              className="hidden md:block"
            />
          )}
        </div>
      ))}
    </section>
  );
};

export default Discover;
