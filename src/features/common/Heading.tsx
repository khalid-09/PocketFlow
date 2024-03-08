import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { MdAddTask, MdOutlineAddToPhotos } from 'react-icons/md';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

type HeadingProps = {
  title: string;
  actionName: string;
  type: 'expense' | 'income';
};

const Heading = ({ title, actionName, type }: HeadingProps) => {
  return (
    <div className=" flex font-rub items-center justify-between px-3 mb-2 lg:px-6 pt-6">
      <h1 className="font-medium text-2xl">{title}</h1>
      <div>
        <Link to="create">
          <Button
            variant="ghost"
            className="font-rub text-base  lg:flex hidden hover:text-red-400 text-red-400  "
          >
            <MdAddTask className="mr-1" />
            <p>{actionName}</p>
          </Button>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline" className="block lg:hidden">
                  <MdOutlineAddToPhotos className="h-5 text-red-400 w-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>{type === 'expense' ? 'Add Expense' : 'Add Income'}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </Link>
      </div>
    </div>
  );
};

export default Heading;
