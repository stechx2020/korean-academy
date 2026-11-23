// ==============================================================================
// KOREAN ACADEMY - TOPIK DIAGNOSTIC RESULTS REPORT VIEW (성적 리포트)
// ==============================================================================
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import confetti from 'canvas-confetti';
import {
  Award,
  CheckCircle2,
  AlertCircle,
  TrendingUp,
  Clock,
  ArrowRight,
  RotateCcw,
  BookOpen,
  Share2,
  ShieldCheck,
  ChevronRight
} from 'lucide-react';
import { TopikSimulationResult } from '../types';
import { useProgress } from '../context/ProgressContext';

export const TopikResultsView: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { topikHistory } = useProgress();
  const [result, setResult] = useState<TopikSimulationResult | null>(null);

  useEffect(() => {
    // Check sessionStorage or context history
    const stored = sessionStorage.getItem('latest_topik_result');
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        if (parsed.id === id || !id) {
          setResult(parsed);
          triggerConfetti(parsed.scores.percentage);
          return;
        }
      } catch (e) {}
    }

    const found = topikHistory.find((t) => t.id === id);
    if (found) {
      setResult(found);
      triggerConfetti(found.scores.percentage);
    }
  }, [id, topikHistory]);

  const triggerConfetti = (pct: number) => {
    if (pct >= 60) {
      confetti({ particleCount: 100, spread: 70, origin: { y: 0.5 } });
    }
  };

  const formatTime = (secs: number) => {
    const mins = Math.floor(secs / 60);
    const remSecs = secs % 60;
    return `${mins}m ${remSecs < 10 ? '0' : ''}${remSecs}s`;
  };

  if (!result) {
    return (
      <div className="max-w-md mx-auto my-20 p-8 bg-white rounded-3xl border border-slate-200 text-center space-y-4">
        <Award className="w-12 h-12 text-slate-300 mx-auto" />
        <h2 className="text-xl font-bold text-slate-900">Resultado no encontrado</h2>
        <p className="text-xs text-slate-500">No se encontraron los datos de este examen.</p>
        <Link
          to="/simulacros"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold bg-navy-800 text-white text-xs"
        >
          Volver a Simulacros
        </Link>
      </div>
    );
  }

  const { scores, estimatedLevel, strongTopics, weakTopics, recommendations } = result;

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 animate-fade-in">
      {/* Top Banner: Score & Estimated Level */}
      <div className="rounded-3xl bg-gradient-to-tr from-navy-950 via-navy-900 to-navy-800 text-white p-8 sm:p-12 border border-navy-700 shadow-2xl space-y-6 text-center relative overflow-hidden">
        <div className="w-16 h-16 rounded-3xl bg-amber-400 text-navy-950 flex items-center justify-center mx-auto shadow-lg shadow-amber-400/20">
          <Award className="w-9 h-9" />
        </div>

        <div className="space-y-2">
          <span className="px-3.5 py-1 rounded-full bg-white/10 text-sky-300 text-xs font-bold uppercase tracking-wider border border-white/10">
            Informe Oficial de Rendimiento • {result.examType.replace('_', ' ')}
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            {estimatedLevel}
          </h1>
          <p className="text-xs text-slate-300">
            Completado el {new Date(result.completedAt).toLocaleString()} • Tiempo empleado: {formatTime(result.timeSpentSeconds)}
          </p>
        </div>

        {/* Big Score Numbers */}
        <div className="inline-flex items-baseline gap-2 bg-white/10 backdrop-blur-md px-8 py-4 rounded-3xl border border-white/20">
          <span className="text-5xl sm:text-6xl font-black text-amber-300">
            {scores.total}
          </span>
          <span className="text-lg text-slate-300 font-bold">
            / {scores.maxPossible} puntos ({scores.percentage}%)
          </span>
        </div>
      </div>

      {/* Official Section Breakdown Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {/* Listening */}
        <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-2 text-center">
          <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
            Comprensión Auditiva (듣기)
          </div>
          <div className="text-3xl font-black text-navy-950">
            {scores.listening} <span className="text-xs font-bold text-slate-400">pts</span>
          </div>
          <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden mt-2">
            <div
              className="h-full bg-indigo-600 rounded-full"
              style={{ width: `${Math.min(100, (scores.listening / 100) * 100)}%` }}
            ></div>
          </div>
        </div>

        {/* Reading */}
        <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-2 text-center">
          <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
            Comprensión Lectora (읽기)
          </div>
          <div className="text-3xl font-black text-navy-950">
            {scores.reading} <span className="text-xs font-bold text-slate-400">pts</span>
          </div>
          <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden mt-2">
            <div
              className="h-full bg-emerald-600 rounded-full"
              style={{ width: `${Math.min(100, (scores.reading / 100) * 100)}%` }}
            ></div>
          </div>
        </div>

        {/* Writing (if TOPIK II) */}
        <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-2 text-center">
          <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
            Expresión Escrita (쓰기)
          </div>
          <div className="text-3xl font-black text-navy-950">
            {result.examType === 'TOPIK_II' ? scores.writing : 'N/A'}{' '}
            <span className="text-xs font-bold text-slate-400">
              {result.examType === 'TOPIK_II' ? 'pts' : '(Solo TOPIK II)'}
            </span>
          </div>
          <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden mt-2">
            <div
              className="h-full bg-crimson-600 rounded-full"
              style={{ width: `${Math.min(100, (scores.writing / 100) * 100)}%` }}
            ></div>
          </div>
        </div>
      </div>

      {/* Diagnostics: Mastered vs Weak Areas */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Strong topics */}
        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-4">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-700">
            <CheckCircle2 className="w-4 h-4" />
            Temas y Competencias Dominadas
          </div>
          {strongTopics.length > 0 ? (
            <ul className="space-y-2.5">
              {strongTopics.map((top, idx) => (
                <li key={idx} className="p-3 rounded-xl bg-emerald-50 text-emerald-950 text-xs font-semibold flex items-center gap-2 border border-emerald-100">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                  <span>{top}</span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-xs text-slate-400">Revisa el contenido teórico para consolidar tus aciertos.</p>
          )}
        </div>

        {/* Weak topics */}
        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-4">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-700">
            <AlertCircle className="w-4 h-4" />
            Áreas de Mejora y Temas por Reforzar
          </div>
          {weakTopics.length > 0 ? (
            <ul className="space-y-2.5">
              {weakTopics.map((top, idx) => (
                <li key={idx} className="p-3 rounded-xl bg-amber-50 text-amber-950 text-xs font-semibold flex items-center gap-2 border border-amber-100">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                  <span>{top}</span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-xs text-emerald-600 font-semibold">
              ¡Sin fallos críticos registrados en este simulacro!
            </p>
          )}
        </div>
      </div>

      {/* Actionable Study Recommendations */}
      <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-4">
        <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
          <TrendingUp className="w-4 h-4 text-navy-800" />
          Recomendaciones Académicas Personalizadas
        </h3>
        <div className="space-y-2 text-xs text-slate-600 leading-relaxed">
          {recommendations.map((rec, idx) => (
            <div key={idx} className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100 flex items-start gap-3">
              <span className="font-bold text-navy-800 shrink-0 mt-0.5">{idx + 1}.</span>
              <span>{rec}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Official Disclaimer */}
      <div className="p-4 rounded-2xl bg-slate-100 border border-slate-200 text-xs text-slate-500 flex items-start gap-3">
        <ShieldCheck className="w-5 h-5 text-slate-400 shrink-0 mt-0.5" />
        <p className="leading-relaxed">
          <strong>Aviso institucional:</strong> Los resultados presentados son una estimación diagnóstica pedagógica generada por los algoritmos de evaluación de Korean Academy, basados en los esquemas del NIIED. No constituyen una certificación gubernamental oficial de la República de Corea.
        </p>
      </div>

      {/* Next Actions */}
      <div className="flex flex-wrap items-center justify-between gap-4 pt-4">
        <Link
          to="/simulacros"
          className="py-3 px-6 rounded-2xl font-bold bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs transition-colors flex items-center gap-2"
        >
          <RotateCcw className="w-4 h-4" />
          <span>Presentar Otro Simulacro</span>
        </Link>

        <Link
          to="/dashboard"
          className="py-3 px-6 rounded-2xl font-bold bg-navy-800 hover:bg-navy-900 text-white text-xs transition-all shadow-md flex items-center gap-2"
        >
          <span>Ir a Mi Panel de Control</span>
          <ChevronRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
};
