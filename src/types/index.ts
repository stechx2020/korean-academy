// ==============================================================================
// KOREAN ACADEMY - TYPE DEFINITIONS
// ==============================================================================

export type CEFRLevel = 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2';

export interface UserProfile {
  id: string;
  email: string;
  username: string;
  fullName: string;
  avatarUrl?: string;
  currentLevel: number; // 0 to 5
  certificationGoal: string; // e.g. 'TOPIK I (Nivel 2)' or 'TOPIK II (Nivel 4)'
  studyStreak: number;
  totalStudyMinutes: number;
  wordsLearnedCount: number;
  createdAt: string;
}

export interface LessonSummary {
  id: string;
  moduleId: string;
  levelNumber: number;
  lessonNumber: number;
  title: string;
  koreanTitle: string;
  slug: string;
  description: string;
  orderIndex: number;
  estimatedMinutes: number;
}

export interface Exercise {
  id: string;
  type: 'multiple_choice' | 'fill_in_blank' | 'sentence_order' | 'audio_listen' | 'hangul_match';
  prompt: string;
  koreanText?: string;
  audioText?: string;
  options?: string[];
  correctAnswer: string | string[];
  explanation: string;
  points: number;
}

export interface LessonDetail extends LessonSummary {
  learningObjectives: string[];
  theoryContent: {
    introduction: string;
    sections: {
      heading: string;
      content: string;
      koreanFocus?: string;
      culturalNote?: string;
    }[];
  };
  grammarPoints: {
    title: string;
    structure: string;
    explanation: string;
    examples: {
      hangul: string;
      romanization: string;
      spanish: string;
      audioHint?: string;
    }[];
    cautions?: string;
  }[];
  vocabularyList: {
    hangul: string;
    hanja?: string;
    romanization: string;
    spanish: string;
    partOfSpeech: string;
    exampleKorean?: string;
    exampleSpanish?: string;
  }[];
  dailyExamples: {
    speakerA: string;
    hangulA: string;
    spanishA: string;
    speakerB: string;
    hangulB: string;
    spanishB: string;
  }[];
  exercises: Exercise[];
  quiz: Exercise[];
  summaryChecklist: string[];
}

export interface ModuleData {
  id: string;
  levelNumber: number;
  moduleNumber: number;
  title: string;
  description: string;
  iconName: string;
  lessons: LessonDetail[];
}

export interface LevelData {
  levelNumber: number;
  code: string;
  title: string;
  subTitle: string;
  description: string;
  targetExam: string;
  colorAccent: string;
  badge: string;
  modules: ModuleData[];
}

export interface VocabularyWord {
  id: string;
  hangul: string;
  hanja?: string;
  romanization: string;
  spanish: string;
  partOfSpeech: 'sustantivo' | 'verbo' | 'adjetivo' | 'partícula' | 'adverbio' | 'expresión' | 'conector';
  level: number;
  topic: string;
  exampleKorean: string;
  exampleSpanish: string;
  isFavorite?: boolean;
  masteryScore?: number; // 0 to 5
}

export interface GrammarComparison {
  id: string;
  title: string;
  patternA: string;
  patternB: string;
  level: number;
  explanationA: string;
  explanationB: string;
  comparisonRule: string;
  examples: {
    hangulA: string;
    spanishA: string;
    hangulB: string;
    spanishB: string;
    contextTip: string;
  }[];
  exercises: {
    prompt: string;
    options: string[];
    correctAnswer: string;
    explanation: string;
  }[];
}

export interface ListeningItem {
  id: string;
  level: number;
  title: string;
  situation: string;
  audioScript: {
    speaker: string;
    hangul: string;
    romanization: string;
    spanish: string;
  }[];
  questions: {
    id: string;
    question: string;
    options: string[];
    correctAnswerIndex: number;
    explanation: string;
  }[];
  dictationSentence?: {
    hangul: string;
    romanization: string;
    spanish: string;
  };
}

export interface ReadingArticle {
  id: string;
  level: number;
  category: string;
  titleKorean: string;
  titleSpanish: string;
  readingTimeMinutes: number;
  paragraphs: {
    hangul: string;
    spanish: string;
    annotations?: { word: string; meaning: string }[];
  }[];
  vocabularyFocus: { hangul: string; spanish: string; grammarRole: string }[];
  questions: {
    id: string;
    question: string;
    options: string[];
    correctAnswerIndex: number;
    explanation: string;
  }[];
}

export interface WritingTask {
  id: string;
  level: number;
  title: string;
  type: 'sentence_building' | 'paragraph_order' | 'topik_writing';
  prompt: string;
  instructions: string;
  starterText?: string;
  targetLength?: string; // e.g. "200-300자"
  referenceAnswer: string;
  criteria: string[];
}

export interface TopikQuestion {
  id: string;
  number: number;
  section: 'listening' | 'reading' | 'writing';
  subType: string; // e.g. "Gráfico / Imagen", "Idea Principal", "Completar Espacio", "Ordenar"
  instructions: string;
  audioText?: string;
  passage?: string;
  imageAlt?: string;
  options?: string[];
  correctAnswer: number | string; // 1-4 for multiple choice, text for writing
  points: number;
  explanation: string;
  topicTag: string; // e.g. "Partículas", "Conectores", "Vocabulario formal", "Inferencia"
}

export interface TopikExam {
  id: string;
  code: 'TOPIK_I' | 'TOPIK_II';
  title: string;
  levelsCovered: string; // 'Niveles 1 y 2' or 'Niveles 3 a 6'
  durationMinutes: number;
  maxScore: number;
  passingThresholds: {
    level: string;
    minScore: number;
    description: string;
  }[];
  sections: {
    id: 'listening' | 'reading' | 'writing';
    name: string;
    koreanName: string;
    questionsCount: number;
    maxScore: number;
    durationMinutes: number;
    questions: TopikQuestion[];
  }[];
}

export interface TopikSimulationResult {
  id: string;
  examType: 'TOPIK_I' | 'TOPIK_II';
  completedAt: string;
  timeSpentSeconds: number;
  scores: {
    listening: number;
    reading: number;
    writing: number;
    total: number;
    maxPossible: number;
    percentage: number;
  };
  estimatedLevel: string; // e.g., 'TOPIK Nivel 2 (Avanzado Principiante)'
  answers: Record<string, string | number>;
  strongTopics: string[];
  weakTopics: string[];
  recommendations: string[];
}

export interface LessonProgress {
  lessonId: string;
  status: 'not_started' | 'in_progress' | 'completed';
  score: number;
  attemptsCount: number;
  completedAt?: string;
}
