import { Button } from '@/components/ui/button';
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
      <main className="grid min-h-dvh gap-10 md:grid-cols-2">
        {children}
        <div className="hidden min-h-dvh flex-1 items-center justify-center rounded-l-xl md:flex">
          Logo
        </div>
      </main>
    </div>
  );
};

export default FormLayout;
