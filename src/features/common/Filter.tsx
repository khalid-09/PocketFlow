import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { useForm } from 'react-hook-form';
import DateRangePicker from '../dashboard/DateRangePicker';
import { Input } from '@/components/ui/input';
import SelectCategroy from '../category/SelectCategroy';
import { toast } from 'sonner';

type FilterProps = {
  onMobile?: boolean;
};

const Filter = ({ onMobile }: FilterProps) => {
  const { register, handleSubmit, reset } = useForm();

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
          <Label>Date</Label>
          <DateRangePicker />
        </div>
        <div className="space-y-1">
          <Label>Search</Label>
          <Input />
        </div>
        <div className="space-y-1">
          <Label>Minimum amount</Label>
          <Input />
        </div>
        <div className="space-y-1">
          <Label>Maximum amount</Label>
          <Input />
        </div>
        <div className="space-y-1">
          <Label>Category</Label>
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
