import { useForm } from 'react-hook-form';

import DateRangePicker from './DateRangePicker';
import SelectCategroy from '../category/SelectCategory';

import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { useState } from 'react';
import { DateRange } from 'react-day-picker';

type FilterProps = {
  onMobile?: boolean;
  table: any;
};

const Filter = ({ onMobile, table }: FilterProps) => {
  const { handleSubmit, reset } = useForm();
  const [date, setDate] = useState<DateRange | undefined>();

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
          <DateRangePicker date={date} setDate={setDate} />
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
          <Label>Filter by amount</Label>
          <Input
            value={
              (table.getColumn('amount')?.getFilterValue() as number) ?? ''
            }
            onChange={event => console.log(+event.target.value)}
          />
        </div>
        <div className="space-y-1">
          <Label>Filter by Category</Label>
          <SelectCategroy />
        </div>
        <div className={`${onMobile ? 'hidden' : ''}`}>
          <Button>Filter</Button>
        </div>
      </form>
    </section>
  );
};

export default Filter;
