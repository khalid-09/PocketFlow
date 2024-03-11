import { Outlet, ScrollRestoration } from 'react-router-dom';

const RootLayout = () => {
  return (
    <>
      <Outlet />
      <ScrollRestoration getKey={location => location.key} />
    </>
  );
};

export default RootLayout;
