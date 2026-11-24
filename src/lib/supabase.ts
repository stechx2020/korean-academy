import { createClient, SupabaseClient } from '@supabase/supabase-js';

// Default Academy credentials (Public Publishable Key + Project URL)
const DEFAULT_SUPABASE_URL = 'https://qvkjbqjtbjewnrcpowbo.supabase.co';
const DEFAULT_SUPABASE_ANON_KEY = 'sb_publishable_Eht1lXkZIKTUAu0Cak2t3w_KqbCDT7e';

// Retrieve credentials from localStorage or Vite environment variables
const STORAGE_KEY_URL = 'korean_academy_supabase_url';
const STORAGE_KEY_KEY = 'korean_academy_supabase_anon_key';

export const sanitizeSupabaseUrl = (inputUrl: string): string => {
  let clean = inputUrl.trim();
  if (clean.endsWith('/rest/v1')) {
    clean = clean.slice(0, -'/rest/v1'.length);
  } else if (clean.endsWith('/rest/v1/')) {
    clean = clean.slice(0, -'/rest/v1/'.length);
  }
  return clean.replace(/\/+$/, '');
};

export const getSupabaseConfig = () => {
  const envUrl = import.meta.env.VITE_SUPABASE_URL || '';
  const envKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

  const storedUrl = typeof window !== 'undefined' ? localStorage.getItem(STORAGE_KEY_URL) : '';
  const storedKey = typeof window !== 'undefined' ? localStorage.getItem(STORAGE_KEY_KEY) : '';

  // Use stored credentials only if they are not placeholders
  const validStoredUrl = storedUrl && !storedUrl.includes('your-project-id') ? storedUrl : '';
  const validStoredKey = storedKey && !storedKey.includes('your-anon-key') ? storedKey : '';

  const rawUrl = validStoredUrl || envUrl || DEFAULT_SUPABASE_URL;
  const rawKey = validStoredKey || envKey || DEFAULT_SUPABASE_ANON_KEY;

  const url = sanitizeSupabaseUrl(rawUrl);
  const anonKey = rawKey.trim();

  return {
    url,
    anonKey,
    isConfigured: Boolean(url && anonKey && !url.includes('your-project-id'))
  };
};

export const saveSupabaseConfig = (url: string, anonKey: string) => {
  if (typeof window !== 'undefined') {
    const cleanUrl = sanitizeSupabaseUrl(url);
    localStorage.setItem(STORAGE_KEY_URL, cleanUrl);
    localStorage.setItem(STORAGE_KEY_KEY, anonKey.trim());
  }
};

export const clearSupabaseConfig = () => {
  if (typeof window !== 'undefined') {
    localStorage.removeItem(STORAGE_KEY_URL);
    localStorage.removeItem(STORAGE_KEY_KEY);
  }
};

let clientInstance: SupabaseClient | null = null;

export const getSupabase = (): SupabaseClient | null => {
  const { url, anonKey, isConfigured } = getSupabaseConfig();
  if (!isConfigured) return null;

  if (!clientInstance) {
    try {
      clientInstance = createClient(url, anonKey, {
        auth: {
          persistSession: true,
          autoRefreshToken: true,
          detectSessionInUrl: true,
        }
      });
    } catch (err) {
      console.warn('Failed to initialize Supabase client:', err);
      clientInstance = null;
    }
  }
  return clientInstance;
};

// Reset client instance when credentials change
export const refreshSupabaseClient = () => {
  clientInstance = null;
  return getSupabase();
};
