import { Link } from 'react-router-dom';
import MobileFilter from '../common/MobileFilter';
import { Button } from '@/components/ui/button';
import { MdAddTask } from 'react-icons/md';

const ExpensesHeading = () => {
  return (
    <div className="mb-4 flex items-center justify-between px-3 lg:px-6 pt-6">
      <h1 className="font-medium text-xl">Expenses</h1>
      <div>
        <Link to="create" className="hidden lg:block">
          <Button
            variant="ghost"
            className="font-rub text-base hover:text-red-400 text-red-400  "
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
