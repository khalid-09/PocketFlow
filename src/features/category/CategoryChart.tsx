import { useState } from 'react';
import { useExpenses } from '../expenses/useExpenses';
import { categories } from '@/utils/constansts';
import { DateRange } from 'react-day-picker';

import CategoryIcon from '@/components/CategoryIcon';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import {
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

const CategoryChart = ({ date }: { date: DateRange | undefined }) => {
  const { data: expenses } = useExpenses();
  const [selected, setSelected] = useState<string>('');

  const selectedCategory = categories.find(
    category => category.key === selected
  );

  const categoryExpenses = expenses
    ?.filter(expense => {
      const isInSelectedCategory = expense.category === selectedCategory?.key;

      const expDate = new Date(expense.date);
      const isInSelectedDateRange = date
        ? expDate >= date.from! && expDate <= date.to!
        : true;

      return isInSelectedCategory && isInSelectedDateRange;
    })
    .map(expense => ({ date: expense.date, value: expense.amount }));

  const validCategories = [
    ...new Set(expenses?.map(expense => expense.category)),
  ];

  const filteredCategories = categories.filter(category =>
    validCategories.includes(category.key)
  );

  return (
    <section className="font-rub ">
      <div className="flex justify-between items-center">
        <h3>Select a category</h3>
        <Select value={selected} onValueChange={setSelected}>
          <SelectTrigger className="w-[280px] h-12">
            <SelectValue placeholder="Select category" />
          </SelectTrigger>
          <SelectContent>
            {filteredCategories.map(category => (
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
      </div>
      <div className="my-6">
        {selectedCategory ? (
          <ResponsiveContainer height={300} width="100%">
            <LineChart data={categoryExpenses}>
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                name="Expense"
                dataKey="value"
                stroke="#8884d8"
              />
            </LineChart>
          </ResponsiveContainer>
        ) : (
          <div className="mt-20 space-y-3 text-center">
            <h3>Select a category</h3>
            <p>
              No category selected. Please choose a category from the dropdown
              to view the corresponding chart.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default CategoryChart;
