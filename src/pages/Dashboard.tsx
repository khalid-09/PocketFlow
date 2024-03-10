import { Helmet } from 'react-helmet-async';
import Overview from '@/features/dashboard/Overview';
import PerformanceChart from '@/features/dashboard/PerformanceChart';
import Stats from '@/features/dashboard/Stats';
import DateRangePicker from '@/features/common/DateRangePicker';
import { useState } from 'react';
import { DateRange } from 'react-day-picker';

const Dashboard = () => {
  const [date, setDate] = useState<DateRange | undefined>({
    from: new Date(Date.now() - 240 * 3600 * 1000),
    to: new Date(),
  });

  return (
    <>
      <Helmet title="Pocket Flow | Dashboard" />
      <div className="py-3 mb-8 text-center text-xl font-medium font-rub">
        <h1>Monthly Performance Dashboard</h1>
      </div>
      <div className="flex flex-col md:flex-row gap-6">
        <Stats />
      </div>
      <div className="flex my-10 items-center justify-end">
        <DateRangePicker date={date} setDate={setDate} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <PerformanceChart />
        <Overview />
      </div>
    </>
  );
};

export default Dashboard;
