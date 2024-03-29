import CategoryIcon from '@/components/CategoryIcon';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import { categories } from '@/utils/constansts';

type SelectedCategoryProps = {
  selected?: string;
  setSelected?: React.Dispatch<React.SetStateAction<string>>;
};

const SelectCategory = ({ selected, setSelected }: SelectedCategoryProps) => {
  const seletectCategory = categories;

  return (
    <Select value={selected} onValueChange={setSelected}>
      <SelectTrigger className="w-[280px] h-12">
        <SelectValue placeholder="Select category" />
      </SelectTrigger>
      <SelectContent>
        {seletectCategory.map(category => (
          <div key={category.id}>
            <SelectItem value={category.key}>
              <div className="flex items-center">
                <CategoryIcon categoryKey={category.key} />{' '}
                <span>{category.category}</span>
              </div>
            </SelectItem>
            <Separator className="my-1" />
          </div>
        ))}
      </SelectContent>
    </Select>
  );
};

export default SelectCategory;
