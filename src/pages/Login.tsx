import LoginForm from '@/features/authentication/LoginForm';
import { Helmet } from 'react-helmet-async';

const Login = () => {
  return (
    <>
      <Helmet title="PocketFlow | Log in to your account" />
      <LoginForm />
    </>
  );
};

export default Login;
