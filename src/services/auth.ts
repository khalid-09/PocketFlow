import supabase from '@/lib/supabase';
import { Signup } from '@/types/auth';

const VITE_SUPABASE_OAUTH_REDIRECT_URL = 'http://localhost:5173/' as const;

export const signUp = async ({ email, password, username }: Signup) => {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        username,
        currency: 'INR',
      },
    },
  });

  if (error) throw new Error(error.message);

  return data;
};

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
