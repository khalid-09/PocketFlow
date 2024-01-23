import MainFooter from '@/components/header/MainFooter';
import MainHeader from '@/components/header/MainHeader';
import { useUser } from '@/features/authentication/useUser';
import { Navigate, Outlet } from 'react-router-dom';

const DashboardLayout = () => {
  const { user, isAuthenticated } = useUser();

  console.log(user);
  // if (!user || !isAuthenticated) return <Navigate to="/login" />;

  return (
    <div className="">
      <MainHeader />
      <div className="">
        <Outlet />
      </div>
      <MainFooter />
    </div>
  );
};

export default DashboardLayout;
