// ==============================================================================
// KOREAN ACADEMY - CURRICULUM ROADMAP VIEW
// ==============================================================================
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  BookOpen,
  Lock,
  CheckCircle2,
  Play,
  Clock,
  GraduationCap,
  Sparkles,
  ChevronRight,
  Award,
  Layers
} from 'lucide-react';
import { CURRICULUM_LEVELS } from '../data/curriculumData';
import { useProgress } from '../context/ProgressContext';

export const CurriculumView: React.FC = () => {
  const { progressMap, isLessonUnlocked } = useProgress();
  const [selectedLevel, setSelectedLevel] = useState<number>(0);

  const activeLevelData = CURRICULUM_LEVELS.find((lvl) => lvl.levelNumber === selectedLevel) || CURRICULUM_LEVELS[0];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 animate-fade-in">
      {/* Page Header */}
      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-navy-50 text-navy-800 text-xs font-semibold border border-navy-200">
          <BookOpen className="w-3.5 h-3.5 text-crimson-600" />
          <span>Plan Curricular Integral</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
          Ruta Académica: De Cero a Nivel TOPIK 6
        </h1>
        <p className="text-sm text-slate-600 max-w-3xl leading-relaxed">
          Estructura académica progresiva diseñada por lingüistas y profesores nativos. Cada nivel desbloquea nuevas competencias y prepara para las certificaciones oficiales TOPIK I y TOPIK II.
        </p>
      </div>

      {/* Level Selector Tabs */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 bg-slate-100 p-1.5 rounded-2xl">
        {CURRICULUM_LEVELS.map((lvl) => {
          const isSelected = lvl.levelNumber === selectedLevel;
          return (
            <button
              key={lvl.levelNumber}
              onClick={() => setSelectedLevel(lvl.levelNumber)}
              className={`p-3 rounded-xl text-left transition-all flex flex-col justify-between ${
                isSelected
                  ? 'bg-white text-slate-900 shadow-md font-bold'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-white/50 font-medium'
              }`}
            >
              <div className="flex items-center justify-between">
                <span
                  className="w-2.5 h-2.5 rounded-full"
                  style={{ backgroundColor: lvl.colorAccent }}
                ></span>
                <span className="text-[10px] uppercase font-bold text-slate-400">
                  {lvl.code}
                </span>
              </div>
              <div className="mt-2 text-xs font-bold truncate">Nivel {lvl.levelNumber}</div>
              <div className="text-[11px] text-slate-400 font-hangul truncate">{lvl.badge}</div>
            </button>
          );
        })}
      </div>

      {/* Level Header Banner */}
      <div
        className="rounded-3xl p-6 sm:p-8 text-white relative overflow-hidden shadow-lg"
        style={{
          background: `linear-gradient(135deg, #102a43 0%, ${activeLevelData.colorAccent} 100%)`
        }}
      >
        <div className="max-w-2xl space-y-3 relative z-10">
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-white/20 text-white text-xs font-bold uppercase backdrop-blur-md">
              Nivel {activeLevelData.levelNumber} • {activeLevelData.code}
            </span>
            <span className="text-xs font-semibold text-slate-200 font-hangul bg-black/20 px-3 py-1 rounded-full">
              {activeLevelData.badge}
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-black text-white">
            {activeLevelData.title}
          </h2>

          <p className="text-sm text-slate-200 leading-relaxed">
            {activeLevelData.description}
          </p>

          <div className="pt-2 flex items-center gap-2 text-xs font-semibold text-amber-300">
            <GraduationCap className="w-4 h-4" />
            <span>Objetivo oficial de certificación: {activeLevelData.targetExam}</span>
          </div>
        </div>
      </div>

      {/* Modules and Lessons List */}
      <div className="space-y-8">
        {activeLevelData.modules.map((mod) => (
          <div
            key={mod.id}
            className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-6"
          >
            {/* Module Title Header */}
            <div className="flex items-start justify-between pb-4 border-b border-slate-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-navy-50 text-navy-800 flex items-center justify-center font-bold text-sm shrink-0">
                  <Layers className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                    Módulo {mod.moduleNumber}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">{mod.title}</h3>
                  <p className="text-xs text-slate-500">{mod.description}</p>
                </div>
              </div>
              <span className="text-xs font-semibold text-slate-400 shrink-0">
                {mod.lessons.length} {mod.lessons.length === 1 ? 'lección' : 'lecciones'}
              </span>
            </div>

            {/* Lessons Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {mod.lessons.map((les) => {
                const isUnlocked = isLessonUnlocked(les.id, les.orderIndex);
                const progress = progressMap[les.id];
                const isCompleted = progress?.status === 'completed';

                return (
                  <div
                    key={les.id}
                    className={`rounded-2xl p-5 border transition-all flex flex-col justify-between ${
                      isCompleted
                        ? 'bg-emerald-50/40 border-emerald-200 hover:border-emerald-300'
                        : isUnlocked
                        ? 'bg-white border-slate-200 hover:border-navy-300 shadow-sm'
                        : 'bg-slate-50 border-slate-200 opacity-60'
                    }`}
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-slate-400">
                          Lección {les.lessonNumber}
                        </span>
                        {isCompleted ? (
                          <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-100 px-2.5 py-0.5 rounded-full">
                            <CheckCircle2 className="w-3.5 h-3.5" />
                            Completada ({progress.score}%)
                          </span>
                        ) : isUnlocked ? (
                          <span className="inline-flex items-center gap-1 text-[11px] font-bold text-sky-700 bg-sky-100 px-2 py-0.5 rounded-full">
                            Disponible
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1 text-[11px] font-medium text-slate-400 bg-slate-200 px-2 py-0.5 rounded-full">
                            <Lock className="w-3 h-3" />
                            Bloqueada
                          </span>
                        )}
                      </div>

                      <div>
                        <h4 className="font-bold text-slate-900 text-sm leading-snug">
                          {les.title}
                        </h4>
                        <div className="text-xs font-bold text-crimson-600 font-hangul mt-0.5">
                          {les.koreanTitle}
                        </div>
                      </div>

                      <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                        {les.description}
                      </p>

                      <div className="flex items-center gap-3 text-[11px] text-slate-400 pt-1">
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {les.estimatedMinutes} min
                        </span>
                        <span>•</span>
                        <span>{les.grammarPoints.length} puntos gramaticales</span>
                      </div>
                    </div>

                    <div className="pt-4 mt-3 border-t border-slate-100">
                      {isUnlocked ? (
                        <Link
                          to={`/clase/${les.slug}`}
                          className={`w-full py-2.5 px-3 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-all ${
                            isCompleted
                              ? 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-sm'
                              : 'bg-navy-800 hover:bg-navy-900 text-white shadow-sm'
                          }`}
                        >
                          <Play className="w-3 h-3 fill-current" />
                          <span>{isCompleted ? 'Repasar Lección' : 'Iniciar Clase'}</span>
                        </Link>
                      ) : (
                        <button
                          disabled
                          className="w-full py-2.5 px-3 rounded-xl text-xs font-semibold bg-slate-200 text-slate-400 cursor-not-allowed flex items-center justify-center gap-1.5"
                        >
                          <Lock className="w-3 h-3" />
                          <span>Completa la lección anterior</span>
                        </button>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
