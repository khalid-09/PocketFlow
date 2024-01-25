import { Helmet } from 'react-helmet-async';
import DateRangePicker from '@/features/dashboard/DateRangePicker';
import StatSkeleton from '@/features/dashboard/StatSkeleton';
import Overview from '@/features/dashboard/Overview';
// import OverviewSkeleton from '@/features/dashboard/OverviewSkeleton';

const Dashboard = () => {
  return (
    <>
      <Helmet title="Pocket Flow | Dashboard" />
      <div className="py-3 mb-8 text-center text-xl font-medium font-rub">
        <h1>Monthly Performance Dashboard</h1>
      </div>
      <div className="flex flex-col md:flex-row gap-6">
        <StatSkeleton />
        <StatSkeleton />
        <StatSkeleton />
      </div>
      <div className="flex my-10 items-center justify-end">
        <DateRangePicker />
      </div>
      <div className="">
        <Overview />
      </div>
    </>
  );
};

export default Dashboard;
