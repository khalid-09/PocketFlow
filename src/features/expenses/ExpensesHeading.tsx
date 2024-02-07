import { Link } from 'react-router-dom';
import MobileFilter from '../common/MobileFilter';
import { Button } from '@/components/ui/button';
import { MdAddTask } from 'react-icons/md';

const ExpensesHeading = () => {
  return (
    <div className="mb-4 flex items-center justify-between p-3 lg:p-6 ">
      <h1 className="text-gray-500 text-xl">Expenses</h1>
      <div>
        <Link to="create" className="hidden lg:block">
          <Button
            variant="ghost"
            className="font-rub text-base hover:text-blue-300 text-red-400  "
          >
            <MdAddTask className="mr-1" />
            Add Expense
          </Button>
        </Link>
        <MobileFilter />
      </div>
    </div>
  );
};

export default ExpensesHeading;
