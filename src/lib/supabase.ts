import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://dynrakyjfyrdfcbnkiwu.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR5bnJha3lqZnlyZGZjYm5raXd1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDU5MDIzMzMsImV4cCI6MjAyMTQ3ODMzM30.Zkxz9petkMxwxVfSz_uOQOxbOie9eWdNGh88Ih-PG-s';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
