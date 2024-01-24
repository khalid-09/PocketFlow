import StatSkeleton from '@/features/dashboard/StatSkeleton';
import { Helmet } from 'react-helmet-async';

const Dashboard = () => {
  return (
    <>
      <Helmet title="Pocket Flow | Dashboard" />
      <div className="py-3 text-center text-xl font-medium font-rub">
        <h1>Monthly Performance Dashboard</h1>
      </div>
      <div className="flex flex-col md:flex-row gap-6">
        <StatSkeleton />
        <StatSkeleton />
        <StatSkeleton />
      </div>
    </>
  );
};

export default Dashboard;
