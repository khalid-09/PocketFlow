import Header from '@/components/Header';
import { Outlet } from 'react-router-dom';

const DashboardLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default DashboardLayout;
