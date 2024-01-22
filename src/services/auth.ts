import supabase from '@/lib/supabase';

export const getUser = async () => {
  const {
    data: { session },
  } = await supabase.auth.getSession();
  if (!session) return null;

  const { data: { user } = {}, error } = await supabase.auth.getUser();

  if (error) throw new Error(error.message);

  return user;
};

export const signInWithGithub = () => {
  supabase.auth.signInWithOAuth({
    provider: 'github',
    options: {
      redirectTo: import.meta.env.VITE_SUPABASE_OAUTH_REDIRECT,
    },
  });
};

export const logout = async () => {
  const { error } = await supabase.auth.signOut();

  if (error) throw new Error(error.message);
};
