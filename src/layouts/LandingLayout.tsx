import { Outlet } from 'react-router-dom';
import Header from '@/components/Header';

const LandingLayout = () => {
  return (
    <>
      <Header />
      <div>
        <Outlet />
      </div>
    </>
  );
};

export default LandingLayout;
