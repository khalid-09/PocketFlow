import { Outlet } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/features/landing/Footer';

const LandingLayout = () => {
  return (
    <div className="overflow-hidden ">
      <div className="container mx-auto px-3">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
};

export default LandingLayout;
