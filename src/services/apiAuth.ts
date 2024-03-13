import supabase from '@/lib/supabase';
import { Login, Signup } from '@/types/auth';
import { toast } from 'sonner';

// const VITE_SUPABASE_OAUTH_REDIRECT_URL =
//   'http://localhost:5173/dashboard' as const;

export const login = async ({ email, password }: Login) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) toast.error(error.message);

  return data;
};

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

  if (error) toast.error(error.message);

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

  if (error) toast.error(error.message);

  return user;
};

export const signInWithGoogle = () => {
  supabase.auth.signInWithOAuth({
    provider: 'google',
    // options: {
    //   redirectTo: VITE_SUPABASE_OAUTH_REDIRECT_URL,
    // },
  });
};

export const signInWithGithub = () => {
  supabase.auth.signInWithOAuth({
    provider: 'github',
    // options: {
    //   redirectTo: VITE_SUPABASE_OAUTH_REDIRECT_URL,
    // },
  });
};

export const logout = async () => {
  const { error } = await supabase.auth.signOut();

  if (error) toast.error(error.message);
};

export const resetPassword = async ({ email }: { email: string }) => {
  const { data, error } = await supabase.auth.resetPasswordForEmail(email);

  if (error) toast.error(error.message);

  return data;
};
