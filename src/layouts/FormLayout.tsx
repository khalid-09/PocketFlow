import { Button } from '@/components/ui/button';
import { Radar } from 'lucide-react';
import { FaAngleLeft } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';

type FormLayoutProps = {
  children: React.ReactNode;
  title: string;
};

const FormLayout = ({ children, title }: FormLayoutProps) => {
  const navigate = useNavigate();

  return (
    <div className="px-3 lg:px-6">
      <div className="mb-6 flex flex-col items-start gap-3">
        <h1 className="mx-auto text-center text-xl font-medium font-rub">
          {title}
        </h1>
        <Button
          variant="secondary"
          className="font-rub text-red-400"
          onClick={() => navigate('..')}
        >
          <FaAngleLeft className="mr-1" />
          Back
        </Button>
      </div>
      <main className="grid  gap-10 md:grid-cols-2">
        {children}
        <div className="hidden  flex-1 bg-red-500 dark:bg-red-50 items-center justify-center rounded-l-xl md:flex">
          <Radar className="text-red-50 dark:text-red-500 h-20 w-36" />
        </div>
      </main>
    </div>
  );
};

export default FormLayout;
