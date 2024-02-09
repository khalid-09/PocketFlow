import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { useForm } from 'react-hook-form';
import DateRangePicker from '../dashboard/DateRangePicker';
import { Input } from '@/components/ui/input';
import SelectCategroy from '../category/SelectCategroy';

type FilterProps = {
  isMobile?: boolean;
};

const Filter = ({ isMobile }: FilterProps) => {
  const { register, handleSubmit } = useForm();

  const onSubmit = () => {
    console.log('click');
  };

  return (
    <section>
      <h1 className={`text-gray-600 text-xl mb-2 ${isMobile ? 'hidden' : ''}`}>
        Filters
      </h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-2 lg:space-y-4"
      >
        <div className="">
          <Label>Date</Label>
          <DateRangePicker />
        </div>
        <div className="">
          <Label>Search</Label>
          <Input />
        </div>
        <div className="">
          <Label>Minimum amount</Label>
          <Input />
        </div>
        <div className="">
          <Label>Maximum amount</Label>
          <Input />
        </div>
        <div className="">
          <Label>Category</Label>
          <SelectCategroy />
        </div>
        <div className="">
          <Label>Tag</Label>
          <Input />
        </div>
        <div className={`${isMobile ? 'flex justify-end' : ''}`}>
          <Button>Filter</Button>
        </div>
      </form>
    </section>
  );
};

export default Filter;
