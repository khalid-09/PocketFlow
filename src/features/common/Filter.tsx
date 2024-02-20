import { useForm } from 'react-hook-form';

import DateRangePicker from '../dashboard/DateRangePicker';
import SelectCategroy from '../category/SelectCategroy';

import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';

type FilterProps = {
  onMobile?: boolean;
  table: any;
};

const Filter = ({ onMobile, table }: FilterProps) => {
  const { handleSubmit, reset } = useForm();

  const onSubmit = () => {
    console.log('click');
    reset();
  };

  return (
    <section>
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
          <Input
            value={(table.getColumn('title')?.getFilterValue() as string) ?? ''}
            onChange={event =>
              table.getColumn('title')?.setFilterValue(event.target.value)
            }
          />
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
        <div className={`${onMobile ? 'hidden' : ''}`}>
          <Button>Filter</Button>
        </div>
      </form>
    </section>
  );
};

export default Filter;
