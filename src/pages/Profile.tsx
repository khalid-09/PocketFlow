import { useUser } from '@/features/authentication/useUser';
import UpdateCurrency from '@/features/profile/UpdateCurrency';
import UpdatePassword from '@/features/profile/UpdatePassword';
import UpdateProfileImage from '@/features/profile/UpdateProfileImage';
import { Helmet } from 'react-helmet-async';

const Profile = () => {
  const { user } = useUser();

  return (
    <>
      <Helmet title="Pocket Flow | Profile" />
      <div className="mx-auto max-w-2xl">
        <h1 className="mx-auto mb-5 text-center font-medium font-rub">
          My Profile
        </h1>

        <div className="space-y-4">
          <UpdateProfileImage />
          <UpdateCurrency />
          {!user?.app_metadata?.provider && <UpdatePassword />}
        </div>
      </div>
    </>
  );
};

export default Profile;
