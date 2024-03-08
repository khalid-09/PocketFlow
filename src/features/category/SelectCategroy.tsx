import SelectCategory from '@/components/SelectCategory';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import { categories } from '@/utils/constansts';

const SelectCategroy = () => {
  const seletectCategory = categories;

  return (
    <Select>
      <SelectTrigger className="w-[280px] h-12">
        <SelectValue placeholder="Select category" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {seletectCategory.map(category => (
            <div>
              <SelectItem value={category.key} className="flex">
                <div className="flex items-center">
                  <SelectCategory categoryKey={category.key} />{' '}
                  <span>{category.category}</span>
                </div>
              </SelectItem>
              <Separator className="my-1" />
            </div>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default SelectCategroy;
