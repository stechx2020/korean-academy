// ==============================================================================
// KOREAN ACADEMY - PROGRESS CONTEXT & ACADEMIC TRACKING
// ==============================================================================
import React, { createContext, useContext, useState, useEffect } from 'react';
import { LessonProgress, TopikSimulationResult } from '../types';
import { useAuth } from './AuthContext';
import { getSupabase } from '../lib/supabase';

interface ProgressContextType {
  progressMap: Record<string, LessonProgress>;
  favoriteWordIds: string[];
  masteredWordIds: string[];
  topikHistory: TopikSimulationResult[];
  activeLevel: number;
  totalStudySeconds: number;
  streakDays: number;
  isLessonUnlocked: (lessonId: string, orderIndex: number) => boolean;
  completeLesson: (lessonId: string, score: number) => Promise<void>;
  toggleFavoriteWord: (wordId: string) => Promise<void>;
  markWordMastered: (wordId: string) => Promise<void>;
  saveTopikResult: (result: TopikSimulationResult) => Promise<void>;
  getGlobalProgressPercentage: () => number;
  resetAllProgress: () => void;
}

const ProgressContext = createContext<ProgressContextType | undefined>(undefined);

const STORAGE_KEY_PROGRESS = 'korean_academy_lesson_progress';
const STORAGE_KEY_FAVORITES = 'korean_academy_fav_words';
const STORAGE_KEY_MASTERED = 'korean_academy_mastered_words';
const STORAGE_KEY_TOPIK = 'korean_academy_topik_history';
const STORAGE_KEY_STUDY_TIME = 'korean_academy_study_seconds';

export const ProgressProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user, updateProfile } = useAuth();
  const [progressMap, setProgressMap] = useState<Record<string, LessonProgress>>({});
  const [favoriteWordIds, setFavoriteWordIds] = useState<string[]>([]);
  const [masteredWordIds, setMasteredWordIds] = useState<string[]>([]);
  const [topikHistory, setTopikHistory] = useState<TopikSimulationResult[]>([]);
  const [totalStudySeconds, setTotalStudySeconds] = useState<number>(0);
  const [streakDays, setStreakDays] = useState<number>(1);
  const [activeLevel, setActiveLevel] = useState<number>(0);

  // Initialize data from Supabase or localStorage
  useEffect(() => {
    const loadProgress = async () => {
      const supabase = getSupabase();

      if (supabase && user?.id) {
        try {
          // 1. Fetch lesson progress
          const { data: lpData } = await supabase
            .from('lesson_progress')
            .select('*')
            .eq('user_id', user.id);

          if (lpData) {
            const map: Record<string, LessonProgress> = {};
            lpData.forEach((row: any) => {
              map[row.lesson_id] = {
                lessonId: row.lesson_id,
                status: row.status,
                score: row.score,
                attemptsCount: row.attempts_count,
                completedAt: row.completed_at
              };
            });
            setProgressMap(map);
          }

          // 2. Fetch user vocabulary (favorites & mastery)
          const { data: uvData } = await supabase
            .from('user_vocabulary')
            .select('*')
            .eq('user_id', user.id);

          if (uvData) {
            const favs: string[] = [];
            const masters: string[] = [];
            uvData.forEach((row: any) => {
              if (row.is_favorite) favs.push(row.vocabulary_id);
              if (row.mastery_level >= 3) masters.push(row.vocabulary_id);
            });
            setFavoriteWordIds(favs);
            setMasteredWordIds(masters);
          }

          // 3. Fetch TOPIK simulations
          const { data: topikData } = await supabase
            .from('topik_simulations')
            .select('*')
            .eq('user_id', user.id)
            .order('completed_at', { ascending: false });

          if (topikData) {
            const history: TopikSimulationResult[] = topikData.map((row: any) => ({
              id: row.id,
              examType: row.exam_type,
              completedAt: row.completed_at,
              timeSpentSeconds: row.time_taken_seconds,
              scores: {
                listening: row.listening_score,
                reading: row.reading_score,
                writing: row.writing_score,
                total: row.total_score,
                maxPossible: row.max_possible_score,
                percentage: Math.round((row.total_score / row.max_possible_score) * 100)
              },
              estimatedLevel: row.estimated_level || 'Nivel evaluado',
              answers: {},
              strongTopics: row.strong_areas || [],
              weakTopics: row.weak_areas || [],
              recommendations: row.recommendations || []
            }));
            setTopikHistory(history);
          }
        } catch (e) {
          console.warn('Error loading progress from Supabase:', e);
        }
      } else {
        // LocalStorage loading
        const storedProgress = localStorage.getItem(STORAGE_KEY_PROGRESS);
        if (storedProgress) {
          try { setProgressMap(JSON.parse(storedProgress)); } catch (e) {}
        }
        const storedFavs = localStorage.getItem(STORAGE_KEY_FAVORITES);
        if (storedFavs) {
          try { setFavoriteWordIds(JSON.parse(storedFavs)); } catch (e) {}
        }
        const storedMasters = localStorage.getItem(STORAGE_KEY_MASTERED);
        if (storedMasters) {
          try { setMasteredWordIds(JSON.parse(storedMasters)); } catch (e) {}
        }
        const storedTopik = localStorage.getItem(STORAGE_KEY_TOPIK);
        if (storedTopik) {
          try { setTopikHistory(JSON.parse(storedTopik)); } catch (e) {}
        }
        const storedTime = localStorage.getItem(STORAGE_KEY_STUDY_TIME);
        if (storedTime) {
          setTotalStudySeconds(parseInt(storedTime, 10) || 0);
        }
      }

      if (user?.currentLevel !== undefined) {
        setActiveLevel(user.currentLevel);
      }
      if (user?.studyStreak) {
        setStreakDays(user.studyStreak);
      }
    };

    loadProgress();
  }, [user?.id]);

  // Active study timer ticker
  useEffect(() => {
    const timer = setInterval(() => {
      setTotalStudySeconds((prev) => {
        const next = prev + 1;
        if (next % 60 === 0) {
          localStorage.setItem(STORAGE_KEY_STUDY_TIME, next.toString());
          if (user) {
            updateProfile({ totalStudyMinutes: Math.floor(next / 60) });
          }
        }
        return next;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [user]);

  // Determine if a lesson is unlocked (Lesson 1 is always unlocked; subsequent lessons unlock if previous is completed)
  const isLessonUnlocked = (lessonId: string, orderIndex: number): boolean => {
    if (orderIndex <= 1) return true;
    // Check if any previous lesson in sequence is completed or user has advanced
    const allProgressList = Object.values(progressMap);
    const completedCount = allProgressList.filter((p) => p.status === 'completed').length;
    return completedCount >= orderIndex - 1 || user?.currentLevel! >= 1;
  };

  const completeLesson = async (lessonId: string, score: number) => {
    const existing = progressMap[lessonId];
    const updated: LessonProgress = {
      lessonId,
      status: 'completed',
      score: Math.max(score, existing?.score || 0),
      attemptsCount: (existing?.attemptsCount || 0) + 1,
      completedAt: new Date().toISOString()
    };

    const newMap = { ...progressMap, [lessonId]: updated };
    setProgressMap(newMap);
    localStorage.setItem(STORAGE_KEY_PROGRESS, JSON.stringify(newMap));

    // Update Supabase if available
    const supabase = getSupabase();
    if (supabase && user?.id) {
      await supabase.from('lesson_progress').upsert({
        user_id: user.id,
        lesson_id: lessonId,
        status: 'completed',
        score: updated.score,
        attempts_count: updated.attemptsCount,
        completed_at: updated.completedAt,
        updated_at: new Date().toISOString()
      }, { onConflict: 'user_id,lesson_id' });
    }

    // Auto-advance level if enough lessons are completed
    const completedTotal = Object.values(newMap).filter((p) => p.status === 'completed').length;
    let newLevel = 0;
    if (completedTotal >= 20) newLevel = 4;
    else if (completedTotal >= 15) newLevel = 3;
    else if (completedTotal >= 10) newLevel = 2;
    else if (completedTotal >= 4) newLevel = 1;

    if (newLevel > activeLevel) {
      setActiveLevel(newLevel);
      updateProfile({ currentLevel: newLevel });
    }
  };

  const toggleFavoriteWord = async (wordId: string) => {
    const nextFavs = favoriteWordIds.includes(wordId)
      ? favoriteWordIds.filter((id) => id !== wordId)
      : [...favoriteWordIds, wordId];

    setFavoriteWordIds(nextFavs);
    localStorage.setItem(STORAGE_KEY_FAVORITES, JSON.stringify(nextFavs));

    const supabase = getSupabase();
    if (supabase && user?.id) {
      await supabase.from('user_vocabulary').upsert({
        user_id: user.id,
        vocabulary_id: wordId,
        is_favorite: nextFavs.includes(wordId),
        last_reviewed_at: new Date().toISOString()
      }, { onConflict: 'user_id,vocabulary_id' });
    }
  };

  const markWordMastered = async (wordId: string) => {
    if (!masteredWordIds.includes(wordId)) {
      const nextMasters = [...masteredWordIds, wordId];
      setMasteredWordIds(nextMasters);
      localStorage.setItem(STORAGE_KEY_MASTERED, JSON.stringify(nextMasters));

      if (user) {
        updateProfile({ wordsLearnedCount: nextMasters.length });
      }

      const supabase = getSupabase();
      if (supabase && user?.id) {
        await supabase.from('user_vocabulary').upsert({
          user_id: user.id,
          vocabulary_id: wordId,
          mastery_level: 5,
          last_reviewed_at: new Date().toISOString()
        }, { onConflict: 'user_id,vocabulary_id' });
      }
    }
  };

  const saveTopikResult = async (result: TopikSimulationResult) => {
    const nextHistory = [result, ...topikHistory];
    setTopikHistory(nextHistory);
    localStorage.setItem(STORAGE_KEY_TOPIK, JSON.stringify(nextHistory));

    const supabase = getSupabase();
    if (supabase && user?.id) {
      await supabase.from('topik_simulations').insert({
        id: result.id,
        user_id: user.id,
        exam_type: result.examType,
        listening_score: result.scores.listening,
        reading_score: result.scores.reading,
        writing_score: result.scores.writing,
        total_score: result.scores.total,
        max_possible_score: result.scores.maxPossible,
        estimated_level: result.estimatedLevel,
        time_taken_seconds: result.timeSpentSeconds,
        weak_areas: result.weakTopics,
        strong_areas: result.strongTopics,
        recommendations: result.recommendations,
        completed_at: result.completedAt
      });
    }
  };

  const getGlobalProgressPercentage = (): number => {
    const totalCurriculumLessons = 10; // total curated lessons in demo curriculum
    const completedCount = Object.values(progressMap).filter((p) => p.status === 'completed').length;
    return Math.min(100, Math.round((completedCount / totalCurriculumLessons) * 100));
  };

  const resetAllProgress = () => {
    setProgressMap({});
    setFavoriteWordIds([]);
    setMasteredWordIds([]);
    setTopikHistory([]);
    setTotalStudySeconds(0);
    localStorage.removeItem(STORAGE_KEY_PROGRESS);
    localStorage.removeItem(STORAGE_KEY_FAVORITES);
    localStorage.removeItem(STORAGE_KEY_MASTERED);
    localStorage.removeItem(STORAGE_KEY_TOPIK);
    localStorage.removeItem(STORAGE_KEY_STUDY_TIME);
  };

  return (
    <ProgressContext.Provider
      value={{
        progressMap,
        favoriteWordIds,
        masteredWordIds,
        topikHistory,
        activeLevel,
        totalStudySeconds,
        streakDays,
        isLessonUnlocked,
        completeLesson,
        toggleFavoriteWord,
        markWordMastered,
        saveTopikResult,
        getGlobalProgressPercentage,
        resetAllProgress
      }}
    >
      {children}
    </ProgressContext.Provider>
  );
};

export const useProgress = () => {
  const context = useContext(ProgressContext);
  if (!context) {
    throw new Error('useProgress must be used within a ProgressProvider');
  }
  return context;
};
