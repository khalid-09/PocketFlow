import { Link } from 'react-router-dom';
import MobileFilter from './MobileFilter';
import { Button } from '@/components/ui/button';
import { MdAddTask } from 'react-icons/md';

type HeadingProps = {
  title: string;
  actionName: string;
};

const Heading = ({ title, actionName }: HeadingProps) => {
  return (
    <div className=" flex font-rub items-center justify-between px-3 lg:px-6 pt-6">
      <h1 className="font-medium text-2xl">{title}</h1>
      <div>
        <Link to="create" className="hidden lg:block">
          <Button
            variant="ghost"
            className="font-rub text-base hover:text-red-400 text-red-400  "
          >
            <MdAddTask className="mr-1" />
            {actionName}
          </Button>
        </Link>
        <MobileFilter />
      </div>
    </div>
  );
};

export default Heading;
