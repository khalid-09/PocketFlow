import Stat from './Stat';
import StatSkeleton from './StatSkeleton';
import { useStats } from './useStats';

const Stats = () => {
  const { data, isLoading } = useStats();
  console.log(data);
  const savings = data && data?.income.cur - data?.expenses.cur;
  const savingsPrevMonth = data && data?.income.prev - data?.expenses.prev;

  return (
    <>
      {isLoading ? (
        Array.from({ length: 3 }).map((_, i) => <StatSkeleton key={i} />)
      ) : (
        <>
          <Stat
            label="Savings"
            current={savings ?? 0}
            prev={savingsPrevMonth ?? 0}
          />
          <Stat
            label="Income"
            current={data?.income.cur ?? 0}
            prev={data?.income.prev ?? 0}
          />
          <Stat
            label="Expenses"
            current={data?.expenses.cur ?? 0}
            prev={data?.expenses.prev ?? 0}
          />
        </>
      )}
    </>
  );
};

export default Stats;
