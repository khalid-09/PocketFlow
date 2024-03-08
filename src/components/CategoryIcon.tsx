import { categories, incomeCategories } from '@/utils/constansts';

type SelectCategoryProps = {
  categoryKey: string;
  variant?: 'category' | 'selectCategory';
  type?: 'expense' | 'income';
};

const CategoryIcon = ({
  categoryKey,
  variant = 'selectCategory',
  type = 'expense',
}: SelectCategoryProps) => {
  const categoryList = type === 'expense' ? categories : incomeCategories;

  const category = categoryList.find(category => category.key === categoryKey);

  if (!category) return null;

  return (
    <span
      className={` rounded-full', mr-2 flex aspect-square items-center justify-center rounded-full bg-opacity-25 p-1 ${
        category.className
      } ${variant === 'selectCategory' && 'h-8 w-8'} ${
        variant === 'category' && 'h-8 w-8'
      }`}
    >
      <category.Icon
        className={`${variant === 'selectCategory' && 'h-10 w-10'}
        ${variant === 'category' && 'h-8 w-8'}`}
      />
    </span>
  );
};

export default CategoryIcon;
