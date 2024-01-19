import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { PlayCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const CTA = () => {
  return (
    <section className="p-3">
      <Card className="text-center font-rub mb-32 p-2 pb-4">
        <CardHeader className="text-lg font-bold md:text-4xl">
          Ready to take control of your Finances?
        </CardHeader>
        <CardContent className="text-sm">
          Explore the power of financial management with our feature-rich web
          app. Get started today to secure your financial future.
        </CardContent>
        <div className="flex rounded-md gap-2 items-center justify-center">
          <Button
            variant="outline"
            className="border outline-none font-rub bg-red-500 font-semibold text-red-50 hover:border-red-400"
            asChild
          >
            <Link
              className="hover:border-red-400 hover:border outline-none dark:hover:text-red-50 hover:text-red-600 transition duration-300 ease-in"
              to="/Login"
            >
              Get Started Now
            </Link>
          </Button>
          <PlayCircle />
        </div>
      </Card>
    </section>
  );
};

export default CTA;
