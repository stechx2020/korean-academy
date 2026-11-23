-- ==============================================================================
-- KOREAN ACADEMY - SUPABASE DATABASE SCHEMA
-- ==============================================================================
-- Comprehensive schema for user profiles, curriculum hierarchy, progress tracking,
-- interactive exercises, vocabulary flashcards, study sessions, and TOPIK simulations.
-- ==============================================================================

-- 1. Enable UUID Extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 2. Profiles Table (linked to Supabase auth.users)
CREATE TABLE IF NOT EXISTS public.profiles (
    id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
    username TEXT UNIQUE NOT NULL,
    full_name TEXT,
    avatar_url TEXT,
    current_level INTEGER DEFAULT 0 CHECK (current_level >= 0 AND current_level <= 5),
    certification_goal TEXT DEFAULT 'TOPIK I (Nivel 2)',
    study_streak INTEGER DEFAULT 1,
    total_study_minutes INTEGER DEFAULT 0,
    words_learned_count INTEGER DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 3. Courses Table
CREATE TABLE IF NOT EXISTS public.courses (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    slug TEXT UNIQUE NOT NULL,
    title TEXT NOT NULL,
    description TEXT,
    order_index INTEGER DEFAULT 1,
    is_published BOOLEAN DEFAULT true,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 4. Levels Table (Level 0 to Level 5)
CREATE TABLE IF NOT EXISTS public.levels (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    course_id UUID REFERENCES public.courses(id) ON DELETE CASCADE,
    level_number INTEGER NOT NULL UNIQUE CHECK (level_number >= 0 AND level_number <= 5),
    code TEXT NOT NULL, -- 'NIVEL_0', 'A1', 'A2', 'B1', 'B2', 'C1_C2'
    title TEXT NOT NULL,
    subtitle TEXT,
    description TEXT,
    topik_target TEXT,
    estimated_hours INTEGER DEFAULT 40,
    color_accent TEXT DEFAULT '#1e40af',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 5. Modules Table
CREATE TABLE IF NOT EXISTS public.modules (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    level_id UUID REFERENCES public.levels(id) ON DELETE CASCADE,
    module_number INTEGER NOT NULL,
    title TEXT NOT NULL,
    description TEXT,
    icon TEXT DEFAULT 'BookOpen',
    order_index INTEGER DEFAULT 1,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 6. Lessons Table (11-step pedagogical structure)
CREATE TABLE IF NOT EXISTS public.lessons (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    module_id UUID REFERENCES public.modules(id) ON DELETE CASCADE,
    lesson_number INTEGER NOT NULL,
    title TEXT NOT NULL,
    korean_title TEXT,
    slug TEXT UNIQUE NOT NULL,
    summary TEXT,
    learning_objectives JSONB DEFAULT '[]'::jsonb,
    theory_content JSONB DEFAULT '{}'::jsonb,
    grammar_notes JSONB DEFAULT '[]'::jsonb,
    vocabulary_list JSONB DEFAULT '[]'::jsonb,
    cultural_notes TEXT,
    order_index INTEGER DEFAULT 1,
    passing_score INTEGER DEFAULT 75,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 7. Lesson Progress Table
CREATE TABLE IF NOT EXISTS public.lesson_progress (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
    lesson_id UUID REFERENCES public.lessons(id) ON DELETE CASCADE NOT NULL,
    status TEXT DEFAULT 'not_started' CHECK (status IN ('not_started', 'in_progress', 'completed')),
    score INTEGER DEFAULT 0,
    attempts_count INTEGER DEFAULT 0,
    completed_at TIMESTAMP WITH TIME ZONE,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    UNIQUE(user_id, lesson_id)
);

-- 8. Exercises Table
CREATE TABLE IF NOT EXISTS public.exercises (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    lesson_id UUID REFERENCES public.lessons(id) ON DELETE CASCADE,
    exercise_type TEXT NOT NULL, -- 'multiple_choice', 'fill_in_blank', 'sentence_order', 'audio_listen', 'hangul_match'
    prompt TEXT NOT NULL,
    korean_text TEXT,
    audio_text TEXT,
    options JSONB,
    correct_answer JSONB NOT NULL,
    explanation TEXT,
    points INTEGER DEFAULT 10,
    order_index INTEGER DEFAULT 1,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 9. Exercise Attempts Table
CREATE TABLE IF NOT EXISTS public.exercise_attempts (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
    exercise_id UUID REFERENCES public.exercises(id) ON DELETE CASCADE NOT NULL,
    user_answer JSONB,
    is_correct BOOLEAN NOT NULL,
    attempt_timestamp TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 10. Vocabulary Table (Smart Dictionary)
CREATE TABLE IF NOT EXISTS public.vocabulary (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    hangul TEXT NOT NULL,
    hanja TEXT,
    romanization TEXT NOT NULL,
    spanish TEXT NOT NULL,
    part_of_speech TEXT, -- 'sustantivo', 'verbo', 'adjetivo', 'partícula', 'adverbio', 'expresión'
    level INTEGER DEFAULT 0 CHECK (level >= 0 AND level <= 5),
    topic TEXT, -- 'familia', 'comida', 'números', 'tiempo', 'viajes', etc.
    example_korean TEXT,
    example_spanish TEXT,
    audio_hint TEXT,
    frequency_rank INTEGER,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 11. User Vocabulary Table (Spaced Repetition System - SRS)
CREATE TABLE IF NOT EXISTS public.user_vocabulary (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
    vocabulary_id UUID REFERENCES public.vocabulary(id) ON DELETE CASCADE NOT NULL,
    is_favorite BOOLEAN DEFAULT false,
    mastery_level INTEGER DEFAULT 0 CHECK (mastery_level >= 0 AND mastery_level <= 5),
    reviews_count INTEGER DEFAULT 0,
    correct_count INTEGER DEFAULT 0,
    last_reviewed_at TIMESTAMP WITH TIME ZONE,
    next_review_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()),
    UNIQUE(user_id, vocabulary_id)
);

-- 12. Assessments Table (Unit & Level Exams)
CREATE TABLE IF NOT EXISTS public.assessments (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    level_id UUID REFERENCES public.levels(id) ON DELETE CASCADE,
    title TEXT NOT NULL,
    assessment_type TEXT NOT NULL CHECK (assessment_type IN ('unit_test', 'level_exam')),
    time_limit_minutes INTEGER DEFAULT 45,
    passing_score INTEGER DEFAULT 75,
    questions JSONB NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 13. Assessment Results Table
CREATE TABLE IF NOT EXISTS public.assessment_results (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
    assessment_id UUID REFERENCES public.assessments(id) ON DELETE CASCADE NOT NULL,
    score INTEGER NOT NULL,
    passed BOOLEAN NOT NULL,
    details JSONB,
    completed_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 14. TOPIK Simulations Table
CREATE TABLE IF NOT EXISTS public.topik_simulations (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
    exam_type TEXT NOT NULL CHECK (exam_type IN ('TOPIK_I', 'TOPIK_II')),
    target_level INTEGER, -- e.g. 1 or 2 for TOPIK I; 3, 4, 5, 6 for TOPIK II
    listening_score INTEGER DEFAULT 0,
    reading_score INTEGER DEFAULT 0,
    writing_score INTEGER DEFAULT 0,
    total_score INTEGER DEFAULT 0,
    max_possible_score INTEGER NOT NULL,
    estimated_level TEXT, -- 'No clasificado', 'Nivel 1', 'Nivel 2', etc.
    time_taken_seconds INTEGER NOT NULL,
    weak_areas JSONB DEFAULT '[]'::jsonb,
    strong_areas JSONB DEFAULT '[]'::jsonb,
    recommendations JSONB DEFAULT '[]'::jsonb,
    completed_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 15. TOPIK Answers Table
CREATE TABLE IF NOT EXISTS public.topik_answers (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    simulation_id UUID REFERENCES public.topik_simulations(id) ON DELETE CASCADE NOT NULL,
    question_index INTEGER NOT NULL,
    section TEXT NOT NULL, -- 'listening', 'reading', 'writing'
    user_answer TEXT,
    correct_answer TEXT,
    is_correct BOOLEAN,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 16. Study Sessions Table
CREATE TABLE IF NOT EXISTS public.study_sessions (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
    module_or_tool TEXT NOT NULL,
    duration_minutes INTEGER NOT NULL,
    session_date DATE DEFAULT CURRENT_DATE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 17. Achievements Table
CREATE TABLE IF NOT EXISTS public.achievements (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    code TEXT UNIQUE NOT NULL,
    title TEXT NOT NULL,
    description TEXT NOT NULL,
    badge_icon TEXT NOT NULL,
    points INTEGER DEFAULT 50,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 18. User Achievements Table
CREATE TABLE IF NOT EXISTS public.user_achievements (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
    achievement_id UUID REFERENCES public.achievements(id) ON DELETE CASCADE NOT NULL,
    unlocked_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    UNIQUE(user_id, achievement_id)
);

-- ==============================================================================
-- ROW LEVEL SECURITY (RLS) POLICIES
-- ==============================================================================

-- Enable RLS on user-specific tables
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.lesson_progress ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.exercise_attempts ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_vocabulary ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.assessment_results ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.topik_simulations ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.topik_answers ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.study_sessions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_achievements ENABLE ROW LEVEL SECURITY;

-- Enable RLS on academic content tables (public read-only)
ALTER TABLE public.courses ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.levels ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.modules ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.lessons ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.exercises ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.vocabulary ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.assessments ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.achievements ENABLE ROW LEVEL SECURITY;

-- Content: readable by anyone (authenticated or anonymous)
CREATE POLICY "Academic content is public read" ON public.courses FOR SELECT USING (true);
CREATE POLICY "Levels are public read" ON public.levels FOR SELECT USING (true);
CREATE POLICY "Modules are public read" ON public.modules FOR SELECT USING (true);
CREATE POLICY "Lessons are public read" ON public.lessons FOR SELECT USING (true);
CREATE POLICY "Exercises are public read" ON public.exercises FOR SELECT USING (true);
CREATE POLICY "Vocabulary is public read" ON public.vocabulary FOR SELECT USING (true);
CREATE POLICY "Assessments are public read" ON public.assessments FOR SELECT USING (true);
CREATE POLICY "Achievements are public read" ON public.achievements FOR SELECT USING (true);

-- User Profiles: each user can only read and update their own profile
CREATE POLICY "Users can view own profile" ON public.profiles FOR SELECT USING (auth.uid() = id);
CREATE POLICY "Users can update own profile" ON public.profiles FOR UPDATE USING (auth.uid() = id);
CREATE POLICY "Users can insert own profile" ON public.profiles FOR INSERT WITH CHECK (auth.uid() = id);

-- Lesson Progress: user private
CREATE POLICY "Users view own progress" ON public.lesson_progress FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users insert own progress" ON public.lesson_progress FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users update own progress" ON public.lesson_progress FOR UPDATE USING (auth.uid() = user_id);

-- Exercise Attempts: user private
CREATE POLICY "Users view own exercise attempts" ON public.exercise_attempts FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users insert own exercise attempts" ON public.exercise_attempts FOR INSERT WITH CHECK (auth.uid() = user_id);

-- User Vocabulary: user private
CREATE POLICY "Users manage own flashcards" ON public.user_vocabulary FOR ALL USING (auth.uid() = user_id);

-- Assessment Results: user private
CREATE POLICY "Users view own test results" ON public.assessment_results FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users insert own test results" ON public.assessment_results FOR INSERT WITH CHECK (auth.uid() = user_id);

-- TOPIK Simulations: user private
CREATE POLICY "Users manage own topik simulations" ON public.topik_simulations FOR ALL USING (auth.uid() = user_id);
CREATE POLICY "Users manage own topik answers" ON public.topik_answers FOR ALL 
    USING (EXISTS (SELECT 1 FROM public.topik_simulations s WHERE s.id = simulation_id AND s.user_id = auth.uid()));

-- Study Sessions: user private
CREATE POLICY "Users manage own study sessions" ON public.study_sessions FOR ALL USING (auth.uid() = user_id);

-- User Achievements: user private
CREATE POLICY "Users view own unlocked achievements" ON public.user_achievements FOR ALL USING (auth.uid() = user_id);

-- ==============================================================================
-- AUTOMATIC PROFILE TRIGGER ON SIGNUP
-- ==============================================================================

CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger AS $$
BEGIN
  INSERT INTO public.profiles (id, username, full_name, avatar_url, current_level, created_at, updated_at)
  VALUES (
    new.id,
    COALESCE(new.raw_user_meta_data->>'username', split_part(new.email, '@', 1)),
    COALESCE(new.raw_user_meta_data->>'full_name', split_part(new.email, '@', 1)),
    'https://api.dicebear.com/7.x/bottts/svg?seed=' || new.id,
    0,
    now(),
    now()
  );
  RETURN new;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();
