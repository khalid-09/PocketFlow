import DatePicker from '@/components/DatePicker';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const DateRangePicker = () => {
  return (
    <div className="flex items-center gap-1">
      <DatePicker />
      <Select>
        <SelectTrigger className="w-[140px]">
          <SelectValue placeholder="Select" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="apple">Today</SelectItem>
            <SelectItem value="banana">Last 7 days</SelectItem>
            <SelectItem value="blueberry">Last 30 days</SelectItem>
            <SelectItem value="grapes">Month to date</SelectItem>
            <SelectItem value="pineapple">Year to date</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

export default DateRangePicker;
