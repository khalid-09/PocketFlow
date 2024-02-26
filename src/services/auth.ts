import supabase from '@/lib/supabase';

const VITE_SUPABASE_OAUTH_REDIRECT_URL =
  'http://localhost:5173/dashboard' as const;

export const getUser = async () => {
  const {
    data: { session },
  } = await supabase.auth.getSession();
  if (!session) return null;

  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  if (error) throw new Error(error.message);

  return user;
};

export const signInWithGoogle = () => {
  supabase.auth.signInWithOAuth({
    provider: 'google',
    options: {
      redirectTo: VITE_SUPABASE_OAUTH_REDIRECT_URL,
    },
  });
};

export const signInWithGithub = () => {
  supabase.auth.signInWithOAuth({
    provider: 'github',
    options: {
      redirectTo: VITE_SUPABASE_OAUTH_REDIRECT_URL,
    },
  });
};

export const logout = async () => {
  const { error } = await supabase.auth.signOut();

  if (error) throw new Error(error.message);
};
