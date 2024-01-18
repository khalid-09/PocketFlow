import { Outlet } from 'react-router-dom';
import Header from '@/components/Header';

const LandingLayout = () => {
  return (
    <div className="overflow-hidden ">
      <div className="container mx-auto px-3">
        <Header />
        <Outlet />
      </div>
    </div>
  );
};

export default LandingLayout;
