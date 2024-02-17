import { useForm } from 'react-hook-form';

import DateRangePicker from '../dashboard/DateRangePicker';
import SelectCategroy from '../category/SelectCategroy';
import { toast } from 'sonner';

import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';

type FilterProps = {
  onMobile?: boolean;
};

const Filter = ({ onMobile }: FilterProps) => {
  const { handleSubmit, reset } = useForm();

  const onSubmit = () => {
    console.log('click');
    toast('Table filtered 👍');
    reset();
  };

  return (
    <section>
      <h2 className={`font-medium text-xl mb-2 ${onMobile ? 'hidden' : ''}`}>
        Filters
      </h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-2 lg:space-y-4"
      >
        <div className="space-y-1">
          <Label>Filter by Date</Label>
          <DateRangePicker />
        </div>
        <div className="space-y-1">
          <Label>Filter by Title</Label>
          <Input />
        </div>
        <div className="space-y-1">
          <Label>Filter by Minimum amount</Label>
          <Input />
        </div>
        <div className="space-y-1">
          <Label>Filter by Maximum amount</Label>
          <Input />
        </div>
        <div className="space-y-1">
          <Label>Filter by Category</Label>
          <SelectCategroy />
        </div>
        <div className="space-y-1">
          <Label>Tag</Label>
          <Input />
        </div>
        <div className={`${onMobile ? 'flex justify-end' : ''}`}>
          <Button>Filter</Button>
        </div>
      </form>
    </section>
  );
};

export default Filter;
