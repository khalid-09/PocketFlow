import { Outlet } from 'react-router-dom';
import GuestHeader from '@/components/header/GuestHeader';
import Footer from '@/features/landing/Footer';

const LandingLayout = () => {
  return (
    <div className="overflow-hidden">
      <div className="container mx-auto px-3">
        <GuestHeader />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
};

export default LandingLayout;
