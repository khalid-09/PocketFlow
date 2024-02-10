import { Button } from '@/components/ui/button';
import { MdAddTask } from 'react-icons/md';
import { Link } from 'react-router-dom';
import MobileFilter from '../common/MobileFilter';

const IncomesHeading = () => {
  return (
    <div className="mb-4 flex items-center justify-between p-3 lg:p-6 ">
      <h1 className="text-gray-500 text-xl">Incomes</h1>
      <div>
        <Link to="create" className="hidden lg:block">
          <Button
            variant="ghost"
            className="font-rub text-base hover:text-red-400 text-red-400  "
          >
            <MdAddTask className="mr-1" />
            Add Income
          </Button>
        </Link>
        <MobileFilter />
      </div>
    </div>
  );
};

export default IncomesHeading;
