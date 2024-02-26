import MainFooter from '@/components/header/MainFooter';
import MainHeader from '@/components/header/MainHeader';
import { CurrencyProvider } from '@/context/CurrencyContext';
import { useUser } from '@/features/authentication/useUser';
import { Navigate, Outlet } from 'react-router-dom';

const DashboardLayout = () => {
  const { user, isAuthenticated } = useUser();
  console.log(user, isAuthenticated);

  if (!isAuthenticated && !user) return <Navigate to="/login" />;

  return (
    <div className="px-3 pt-16 sm:px-6">
      <MainHeader />
      <div className="py-3">
        <CurrencyProvider>
          <Outlet />
        </CurrencyProvider>
      </div>
      <MainFooter />
    </div>
  );
};

export default DashboardLayout;
