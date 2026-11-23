// ==============================================================================
// KOREAN ACADEMY - AUTHENTICATION CONTEXT & SUPABASE INTEGRATION
// ==============================================================================
import React, { createContext, useContext, useState, useEffect } from 'react';
import { UserProfile } from '../types';
import { getSupabase, getSupabaseConfig } from '../lib/supabase';

interface AuthContextType {
  user: UserProfile | null;
  isLoading: boolean;
  isConfigured: boolean;
  signUp: (email: string, password: string, username: string, fullName: string) => Promise<{ success: boolean; error?: string }>;
  signIn: (email: string, password: string, rememberMe?: boolean) => Promise<{ success: boolean; error?: string }>;
  signOut: () => Promise<void>;
  resetPassword: (email: string) => Promise<{ success: boolean; error?: string }>;
  updatePassword: (newPassword: string) => Promise<{ success: boolean; error?: string }>;
  updateProfile: (updates: Partial<UserProfile>) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const LOCAL_STORAGE_USER_KEY = 'korean_academy_local_user';

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<UserProfile | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { isConfigured } = getSupabaseConfig();

  // Load session on startup
  useEffect(() => {
    const initAuth = async () => {
      setIsLoading(true);
      const supabase = getSupabase();

      if (supabase) {
        try {
          const { data: { session } } = await supabase.auth.getSession();
          if (session?.user) {
            // Fetch profile from supabase profiles table
            const { data: profile } = await supabase
              .from('profiles')
              .select('*')
              .eq('id', session.user.id)
              .single();

            if (profile) {
              setUser({
                id: profile.id,
                email: session.user.email || '',
                username: profile.username || session.user.email?.split('@')[0] || 'Estudiante',
                fullName: profile.full_name || profile.username || 'Estudiante Coreano',
                avatarUrl: profile.avatar_url || `https://api.dicebear.com/7.x/bottts/svg?seed=${profile.id}`,
                currentLevel: profile.current_level ?? 0,
                certificationGoal: profile.certification_goal || 'TOPIK I (Nivel 2)',
                studyStreak: profile.study_streak ?? 1,
                totalStudyMinutes: profile.total_study_minutes ?? 15,
                wordsLearnedCount: profile.words_learned_count ?? 8,
                createdAt: profile.created_at || new Date().toISOString()
              });
            } else {
              // Fallback to auth metadata if profile query hasn't returned yet
              setUser({
                id: session.user.id,
                email: session.user.email || '',
                username: session.user.user_metadata?.username || session.user.email?.split('@')[0] || 'Estudiante',
                fullName: session.user.user_metadata?.full_name || 'Estudiante Coreano',
                currentLevel: 0,
                certificationGoal: 'TOPIK I (Nivel 2)',
                studyStreak: 1,
                totalStudyMinutes: 0,
                wordsLearnedCount: 0,
                createdAt: session.user.created_at || new Date().toISOString()
              });
            }
          }
        } catch (err) {
          console.error('Error fetching Supabase session:', err);
        }
      } else {
        // Fallback: Check local storage for persistent guest / local session
        const stored = localStorage.getItem(LOCAL_STORAGE_USER_KEY);
        if (stored) {
          try {
            setUser(JSON.parse(stored));
          } catch (e) {
            localStorage.removeItem(LOCAL_STORAGE_USER_KEY);
          }
        }
      }
      setIsLoading(false);
    };

    initAuth();
  }, [isConfigured]);

  const signUp = async (email: string, password: string, username: string, fullName: string) => {
    setIsLoading(true);
    const supabase = getSupabase();

    if (supabase) {
      try {
        const { data, error } = await supabase.auth.signUp({
          email,
          password,
          options: {
            data: {
              username,
              full_name: fullName
            }
          }
        });

        if (error) {
          setIsLoading(false);
          return { success: false, error: error.message };
        }

        if (data.user) {
          const newUser: UserProfile = {
            id: data.user.id,
            email,
            username,
            fullName,
            avatarUrl: `https://api.dicebear.com/7.x/bottts/svg?seed=${data.user.id}`,
            currentLevel: 0,
            certificationGoal: 'TOPIK I (Nivel 2)',
            studyStreak: 1,
            totalStudyMinutes: 0,
            wordsLearnedCount: 0,
            createdAt: new Date().toISOString()
          };
          setUser(newUser);
        }
        setIsLoading(false);
        return { success: true };
      } catch (err: any) {
        setIsLoading(false);
        return { success: false, error: err.message || 'Error en el registro' };
      }
    } else {
      // Local fallback mode: Immediate registration without external network dependencies
      const fakeId = 'local-user-' + Date.now();
      const newUser: UserProfile = {
        id: fakeId,
        email,
        username: username || email.split('@')[0],
        fullName: fullName || username || 'Estudiante Coreano',
        avatarUrl: `https://api.dicebear.com/7.x/bottts/svg?seed=${fakeId}`,
        currentLevel: 0,
        certificationGoal: 'TOPIK I (Nivel 2)',
        studyStreak: 1,
        totalStudyMinutes: 0,
        wordsLearnedCount: 0,
        createdAt: new Date().toISOString()
      };
      localStorage.setItem(LOCAL_STORAGE_USER_KEY, JSON.stringify(newUser));
      setUser(newUser);
      setIsLoading(false);
      return { success: true };
    }
  };

  const signIn = async (email: string, password: string, rememberMe = true) => {
    setIsLoading(true);
    const supabase = getSupabase();

    if (supabase) {
      try {
        const { data, error } = await supabase.auth.signInWithPassword({
          email,
          password
        });

        if (error) {
          setIsLoading(false);
          return { success: false, error: error.message };
        }

        if (data.user) {
          const { data: profile } = await supabase
            .from('profiles')
            .select('*')
            .eq('id', data.user.id)
            .single();

          const loggedUser: UserProfile = {
            id: data.user.id,
            email: data.user.email || email,
            username: profile?.username || data.user.user_metadata?.username || email.split('@')[0],
            fullName: profile?.full_name || data.user.user_metadata?.full_name || 'Estudiante Coreano',
            avatarUrl: profile?.avatar_url || `https://api.dicebear.com/7.x/bottts/svg?seed=${data.user.id}`,
            currentLevel: profile?.current_level ?? 0,
            certificationGoal: profile?.certification_goal || 'TOPIK I (Nivel 2)',
            studyStreak: profile?.study_streak ?? 1,
            totalStudyMinutes: profile?.total_study_minutes ?? 0,
            wordsLearnedCount: profile?.words_learned_count ?? 0,
            createdAt: profile?.created_at || data.user.created_at || new Date().toISOString()
          };
          setUser(loggedUser);
        }
        setIsLoading(false);
        return { success: true };
      } catch (err: any) {
        setIsLoading(false);
        return { success: false, error: err.message || 'Error al iniciar sesión' };
      }
    } else {
      // Local fallback mode: check if local user exists or create session
      let existing = localStorage.getItem(LOCAL_STORAGE_USER_KEY);
      let localUser: UserProfile;
      if (existing) {
        localUser = JSON.parse(existing);
        localUser.email = email;
      } else {
        const fakeId = 'local-user-' + Date.now();
        localUser = {
          id: fakeId,
          email,
          username: email.split('@')[0],
          fullName: 'Estudiante Coreano',
          avatarUrl: `https://api.dicebear.com/7.x/bottts/svg?seed=${fakeId}`,
          currentLevel: 0,
          certificationGoal: 'TOPIK I (Nivel 2)',
          studyStreak: 1,
          totalStudyMinutes: 0,
          wordsLearnedCount: 0,
          createdAt: new Date().toISOString()
        };
      }
      localStorage.setItem(LOCAL_STORAGE_USER_KEY, JSON.stringify(localUser));
      setUser(localUser);
      setIsLoading(false);
      return { success: true };
    }
  };

  const signOut = async () => {
    const supabase = getSupabase();
    if (supabase) {
      await supabase.auth.signOut();
    }
    localStorage.removeItem(LOCAL_STORAGE_USER_KEY);
    setUser(null);
  };

  const resetPassword = async (email: string) => {
    const supabase = getSupabase();
    if (supabase) {
      try {
        const { error } = await supabase.auth.resetPasswordForEmail(email, {
          redirectTo: `${window.location.origin}${window.location.pathname}#/reset-password`
        });
        if (error) return { success: false, error: error.message };
        return { success: true };
      } catch (err: any) {
        return { success: false, error: err.message };
      }
    } else {
      // Simulated recovery notification in local demo mode
      return {
        success: true,
        error: undefined
      };
    }
  };

  const updatePassword = async (newPassword: string) => {
    const supabase = getSupabase();
    if (supabase) {
      try {
        const { error } = await supabase.auth.updateUser({ password: newPassword });
        if (error) return { success: false, error: error.message };
        return { success: true };
      } catch (err: any) {
        return { success: false, error: err.message };
      }
    } else {
      return { success: true };
    }
  };

  const updateProfile = async (updates: Partial<UserProfile>) => {
    if (!user) return;
    const updated = { ...user, ...updates };
    setUser(updated);

    const supabase = getSupabase();
    if (supabase) {
      await supabase
        .from('profiles')
        .update({
          full_name: updated.fullName,
          username: updated.username,
          current_level: updated.currentLevel,
          certification_goal: updated.certificationGoal,
          study_streak: updated.studyStreak,
          total_study_minutes: updated.totalStudyMinutes,
          words_learned_count: updated.wordsLearnedCount,
          updated_at: new Date().toISOString()
        })
        .eq('id', user.id);
    } else {
      localStorage.setItem(LOCAL_STORAGE_USER_KEY, JSON.stringify(updated));
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoading,
        isConfigured,
        signUp,
        signIn,
        signOut,
        resetPassword,
        updatePassword,
        updateProfile
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
