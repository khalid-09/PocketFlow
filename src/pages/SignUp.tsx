import SignupForm from '@/features/authentication/SignupForm';
import { Helmet } from 'react-helmet-async';

const SignUp = () => {
  return (
    <>
      <Helmet title="PocketFlow | Create your account" />
      <SignupForm />
    </>
  );
};

export default SignUp;
