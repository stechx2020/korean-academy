// ==============================================================================
// KOREAN ACADEMY - STUDENT DASHBOARD VIEW
// ==============================================================================
import React from 'react';
import { Link } from 'react-router-dom';
import {
  Flame,
  Clock,
  BookOpen,
  GraduationCap,
  Sparkles,
  Award,
  ChevronRight,
  Play,
  CheckCircle,
  BrainCircuit,
  Search,
  Volume2,
  FileText,
  PenTool,
  Mic,
  TrendingUp,
  Target
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useProgress } from '../context/ProgressContext';
import { CURRICULUM_LEVELS, getAllLessons } from '../data/curriculumData';

export const DashboardView: React.FC = () => {
  const { user } = useAuth();
  const {
    progressMap,
    activeLevel,
    streakDays,
    totalStudySeconds,
    masteredWordIds,
    topikHistory,
    getGlobalProgressPercentage
  } = useProgress();

  const allLessons = getAllLessons();
  const completedLessonsCount = Object.values(progressMap).filter((p) => p.status === 'completed').length;
  const globalProgress = getGlobalProgressPercentage();

  // Find next recommended lesson: first lesson not yet completed
  const nextLesson = allLessons.find((l) => progressMap[l.id]?.status !== 'completed') || allLessons[0];
  const lastCompletedLesson = allLessons.filter((l) => progressMap[l.id]?.status === 'completed').pop();

  const formatStudyTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    if (mins < 60) return `${mins} minutos`;
    const hrs = Math.floor(mins / 60);
    const remMins = mins % 60;
    return `${hrs}h ${remMins}m`;
  };

  const currentLevelData = CURRICULUM_LEVELS.find((lvl) => lvl.levelNumber === activeLevel) || CURRICULUM_LEVELS[0];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 animate-fade-in">
      {/* Welcome Banner */}
      <div className="rounded-3xl bg-gradient-to-r from-navy-950 via-navy-900 to-navy-800 text-white p-6 sm:p-8 lg:p-10 shadow-xl border border-navy-700 relative overflow-hidden">
        {/* Glow circle */}
        <div className="absolute right-0 top-0 w-80 h-80 bg-crimson-600/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-3 max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-semibold text-sky-300 border border-white/10">
              <span className="font-hangul font-bold">안녕하세요!</span>
              <span>•</span>
              <span>Bienvenido de vuelta</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-white">
              {user?.fullName || user?.username || 'Estudiante'}님, 화이팅!
            </h1>
            <p className="text-sm text-slate-300 leading-relaxed">
              Estás en camino hacia tu certificación{' '}
              <span className="font-bold text-amber-300">{user?.certificationGoal || 'TOPIK I (Nivel 2)'}</span>.
              Continúa tu racha y desbloquea el siguiente módulo.
            </p>
          </div>

          {/* Quick Continue Lesson Card */}
          {nextLesson && (
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/20 max-w-sm w-full space-y-3">
              <div className="text-[11px] font-bold text-sky-300 uppercase tracking-wider flex items-center gap-1.5">
                <Play className="w-3.5 h-3.5 fill-sky-300" />
                Próxima Lección Recomendada
              </div>
              <div>
                <div className="text-xs text-slate-300">
                  Nivel {nextLesson.levelNumber} • Lección {nextLesson.lessonNumber}
                </div>
                <div className="font-bold text-white text-base line-clamp-1">
                  {nextLesson.title}
                </div>
                <div className="text-xs text-amber-300 font-hangul mt-0.5">
                  {nextLesson.koreanTitle}
                </div>
              </div>
              <Link
                to={`/clase/${nextLesson.slug}`}
                className="w-full py-2.5 px-4 rounded-xl font-bold bg-crimson-600 hover:bg-crimson-500 text-white text-xs transition-all flex items-center justify-center gap-2 shadow-md"
              >
                <span>Continuar Estudio</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Metric 1: Streak */}
        <div className="p-5 rounded-3xl bg-white border border-slate-200 shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-500 flex items-center justify-center shrink-0">
            <Flame className="w-6 h-6 fill-amber-500" />
          </div>
          <div>
            <div className="text-2xl font-black text-slate-900">{streakDays} días</div>
            <div className="text-xs text-slate-500 font-medium">Racha de estudio activa</div>
          </div>
        </div>

        {/* Metric 2: Study Time */}
        <div className="p-5 rounded-3xl bg-white border border-slate-200 shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-sky-50 text-sky-600 flex items-center justify-center shrink-0">
            <Clock className="w-6 h-6" />
          </div>
          <div>
            <div className="text-2xl font-black text-slate-900 line-clamp-1">
              {formatStudyTime(totalStudySeconds)}
            </div>
            <div className="text-xs text-slate-500 font-medium">Tiempo total invertido</div>
          </div>
        </div>

        {/* Metric 3: Mastered Vocab */}
        <div className="p-5 rounded-3xl bg-white border border-slate-200 shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
            <BrainCircuit className="w-6 h-6" />
          </div>
          <div>
            <div className="text-2xl font-black text-slate-900">
              {masteredWordIds.length + 8} palabras
            </div>
            <div className="text-xs text-slate-500 font-medium">Vocabulario memorizado</div>
          </div>
        </div>

        {/* Metric 4: Lessons Done */}
        <div className="p-5 rounded-3xl bg-white border border-slate-200 shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0">
            <BookOpen className="w-6 h-6" />
          </div>
          <div>
            <div className="text-2xl font-black text-slate-900">
              {completedLessonsCount} / {allLessons.length}
            </div>
            <div className="text-xs text-slate-500 font-medium">Lecciones completadas</div>
          </div>
        </div>
      </div>

      {/* Progress & TOPIK Tracker Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left: Academic Curriculum Progress */}
        <div className="lg:col-span-2 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-bold text-slate-900">Tu Ruta de Aprendizaje</h2>
              <p className="text-xs text-slate-500">Progreso global del plan curricular de 0 a C2</p>
            </div>
            <Link
              to="/curriculum"
              className="text-xs font-bold text-navy-800 hover:text-crimson-600 flex items-center gap-1"
            >
              Ver mapa completo <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Progress Bar */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs font-bold text-slate-700">
              <span>Avance Global</span>
              <span>{globalProgress}%</span>
            </div>
            <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-navy-800 via-korean-blue to-crimson-600 rounded-full transition-all duration-700"
                style={{ width: `${Math.max(globalProgress, 5)}%` }}
              ></div>
            </div>
          </div>

          {/* Current Level Highlight */}
          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100 flex items-start justify-between gap-4">
            <div className="space-y-1">
              <span className="px-2.5 py-0.5 rounded-lg text-[10px] font-black uppercase text-white bg-navy-800">
                Nivel Actual {currentLevelData.levelNumber}
              </span>
              <h3 className="font-bold text-slate-900 text-base">{currentLevelData.title}</h3>
              <p className="text-xs text-slate-500">{currentLevelData.subTitle}</p>
            </div>
            <span className="text-xs font-bold text-slate-700 font-hangul px-3 py-1 bg-white rounded-xl border border-slate-200 shrink-0">
              {currentLevelData.badge}
            </span>
          </div>

          {/* Recent Lessons List */}
          <div className="space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Lecciones del Nivel Activo
            </div>
            <div className="divide-y divide-slate-100">
              {currentLevelData.modules[0]?.lessons.slice(0, 3).map((les) => {
                const isDone = progressMap[les.id]?.status === 'completed';
                return (
                  <div
                    key={les.id}
                    className="py-3 flex items-center justify-between gap-3 group"
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-8 h-8 rounded-xl flex items-center justify-center font-bold text-xs ${
                          isDone
                            ? 'bg-emerald-100 text-emerald-700'
                            : 'bg-slate-100 text-slate-600'
                        }`}
                      >
                        {isDone ? <CheckCircle className="w-4 h-4 text-emerald-600" /> : les.lessonNumber}
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-slate-800 group-hover:text-navy-900 transition-colors">
                          {les.title}
                        </div>
                        <div className="text-xs text-slate-400 font-hangul">{les.koreanTitle}</div>
                      </div>
                    </div>
                    <Link
                      to={`/clase/${les.slug}`}
                      className="px-3 py-1.5 rounded-xl text-xs font-semibold bg-slate-50 hover:bg-navy-50 text-navy-800 border border-slate-200 transition-colors"
                    >
                      {isDone ? 'Repasar' : 'Estudiar'}
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right: TOPIK Simulator & Goal Widget */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-crimson-600">
              <Target className="w-4 h-4" />
              Meta de Certificación
            </div>

            <div className="p-4 rounded-2xl bg-crimson-50/60 border border-crimson-100 space-y-2">
              <div className="text-xs text-crimson-800 font-semibold">Objetivo Actual:</div>
              <div className="text-lg font-black text-crimson-950 flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-crimson-600" />
                {user?.certificationGoal || 'TOPIK I (Nivel 2)'}
              </div>
              <p className="text-[11px] text-slate-600 leading-relaxed">
                Examen oficial del NIIED que certifica fluidez en situaciones cotidianas, compras, direcciones y comprensión auditiva básica.
              </p>
            </div>

            {/* TOPIK Simulation Attempts History */}
            <div className="space-y-2">
              <div className="text-xs font-bold text-slate-700 flex items-center justify-between">
                <span>Historial de Simulacros</span>
                <span className="text-[11px] text-slate-400">{topikHistory.length} intentos</span>
              </div>

              {topikHistory.length > 0 ? (
                <div className="space-y-2">
                  {topikHistory.slice(0, 2).map((sim) => (
                    <div
                      key={sim.id}
                      className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs flex items-center justify-between"
                    >
                      <div>
                        <div className="font-bold text-slate-800">{sim.examType.replace('_', ' ')}</div>
                        <div className="text-[11px] text-slate-400">
                          {new Date(sim.completedAt).toLocaleDateString()}
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-black text-navy-800">
                          {sim.scores.total} / {sim.scores.maxPossible} pts
                        </div>
                        <div className="text-[11px] text-emerald-600 font-semibold">
                          {sim.estimatedLevel}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="p-4 rounded-xl bg-slate-50 border border-dashed border-slate-200 text-center text-xs text-slate-400">
                  Aún no has presentado ningún simulacro cronometrado.
                </div>
              )}
            </div>
          </div>

          <div className="pt-4 border-t border-slate-100">
            <Link
              to="/simulacros"
              className="w-full py-3 px-4 rounded-xl font-bold bg-navy-800 hover:bg-navy-900 text-white text-xs transition-all flex items-center justify-center gap-2 shadow-sm"
            >
              <Award className="w-4 h-4 text-amber-400" />
              <span>Realizar Simulacro TOPIK Ahora</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Quick Access Tools Suite Grid */}
      <div className="space-y-4">
        <h2 className="text-lg font-bold text-slate-900">Módulos y Herramientas Rápidas</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          <Link
            to="/hangul"
            className="p-4 rounded-2xl bg-white border border-slate-200 hover:border-navy-300 shadow-sm hover:shadow-md transition-all text-center space-y-2 group"
          >
            <div className="w-10 h-10 mx-auto rounded-xl bg-rose-50 text-crimson-600 flex items-center justify-center font-bold font-hangul text-lg group-hover:scale-110 transition-transform">
              한
            </div>
            <div className="text-xs font-bold text-slate-800">Hangul Lab</div>
          </Link>

          <Link
            to="/diccionario"
            className="p-4 rounded-2xl bg-white border border-slate-200 hover:border-navy-300 shadow-sm hover:shadow-md transition-all text-center space-y-2 group"
          >
            <div className="w-10 h-10 mx-auto rounded-xl bg-sky-50 text-korean-blue flex items-center justify-center group-hover:scale-110 transition-transform">
              <Search className="w-5 h-5" />
            </div>
            <div className="text-xs font-bold text-slate-800">Diccionario</div>
          </Link>

          <Link
            to="/flashcards"
            className="p-4 rounded-2xl bg-white border border-slate-200 hover:border-navy-300 shadow-sm hover:shadow-md transition-all text-center space-y-2 group"
          >
            <div className="w-10 h-10 mx-auto rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center group-hover:scale-110 transition-transform">
              <BrainCircuit className="w-5 h-5" />
            </div>
            <div className="text-xs font-bold text-slate-800">Flashcards SRS</div>
          </Link>

          <Link
            to="/gramatica"
            className="p-4 rounded-2xl bg-white border border-slate-200 hover:border-navy-300 shadow-sm hover:shadow-md transition-all text-center space-y-2 group"
          >
            <div className="w-10 h-10 mx-auto rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center group-hover:scale-110 transition-transform">
              <BookOpen className="w-5 h-5" />
            </div>
            <div className="text-xs font-bold text-slate-800">Laboratorio</div>
          </Link>

          <Link
            to="/escucha"
            className="p-4 rounded-2xl bg-white border border-slate-200 hover:border-navy-300 shadow-sm hover:shadow-md transition-all text-center space-y-2 group"
          >
            <div className="w-10 h-10 mx-auto rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Volume2 className="w-5 h-5" />
            </div>
            <div className="text-xs font-bold text-slate-800">Comp. Auditiva</div>
          </Link>

          <Link
            to="/pronunciacion"
            className="p-4 rounded-2xl bg-white border border-slate-200 hover:border-navy-300 shadow-sm hover:shadow-md transition-all text-center space-y-2 group"
          >
            <div className="w-10 h-10 mx-auto rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Mic className="w-5 h-5" />
            </div>
            <div className="text-xs font-bold text-slate-800">Pronunciación</div>
          </Link>
        </div>
      </div>
    </div>
  );
};
