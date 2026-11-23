// ==============================================================================
// KOREAN ACADEMY - WRITING STUDIO & TOPIK WRITING VIEW (쓰기 공방)
// ==============================================================================
import React, { useState } from 'react';
import {
  PenTool,
  CheckCircle2,
  Sparkles,
  BookOpen,
  Eye,
  RotateCcw,
  GraduationCap
} from 'lucide-react';
import { WRITING_TASKS } from '../data/writingData';

export const WritingView: React.FC = () => {
  const [selectedTaskIndex, setSelectedTaskIndex] = useState(0);
  const activeTask = WRITING_TASKS[selectedTaskIndex] || WRITING_TASKS[0];

  const [studentWriting, setStudentWriting] = useState(activeTask.starterText || '');
  const [showReferenceAnswer, setShowReferenceAnswer] = useState(false);

  const handleSwitchTask = (idx: number) => {
    setSelectedTaskIndex(idx);
    setStudentWriting(WRITING_TASKS[idx].starterText || '');
    setShowReferenceAnswer(false);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 animate-fade-in">
      {/* Header */}
      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 text-cyan-800 text-xs font-semibold border border-cyan-200">
          <PenTool className="w-3.5 h-3.5 text-cyan-600" />
          <span>Taller de Expresión Escrita</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
          Taller de Redacción y Escritura TOPIK (쓰기)
        </h1>
        <p className="text-sm text-slate-600 max-w-2xl leading-relaxed">
          Practica la construcción sintáctica, oraciones SOV, completado de anuncios oficiales y redacción de ensayos analíticos tipo TOPIK II (Preguntas 51 a 54).
        </p>
      </div>

      {/* Task Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        {WRITING_TASKS.map((t, idx) => (
          <button
            key={t.id}
            onClick={() => handleSwitchTask(idx)}
            className={`px-4 py-2.5 rounded-2xl text-xs font-bold whitespace-nowrap transition-all ${
              selectedTaskIndex === idx
                ? 'bg-navy-800 text-white shadow-sm'
                : 'bg-white text-slate-600 hover:text-slate-900 hover:bg-slate-50 border border-slate-200'
            }`}
          >
            Tarea {idx + 1}: {t.title}
          </button>
        ))}
      </div>

      {/* Main Writing Workspace */}
      <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm space-y-8">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-md text-[10px] font-black uppercase text-white bg-navy-800">
              Nivel {activeTask.level}
            </span>
            {activeTask.targetLength && (
              <span className="text-xs font-bold text-amber-600 bg-amber-50 px-2.5 py-0.5 rounded-lg border border-amber-200">
                Extensión objetivo: {activeTask.targetLength}
              </span>
            )}
          </div>
          <h2 className="text-xl font-bold text-slate-900">{activeTask.title}</h2>
          <p className="text-sm font-semibold text-slate-700 bg-slate-50 p-4 rounded-2xl border border-slate-200">
            {activeTask.prompt}
          </p>
          <p className="text-xs text-slate-500">{activeTask.instructions}</p>
        </div>

        {/* Text Area Writing Input */}
        <div className="space-y-3">
          <div className="flex items-center justify-between text-xs font-bold text-slate-500">
            <span>Tu redacción en Hangul:</span>
            <span>{studentWriting.length} caracteres</span>
          </div>

          <textarea
            rows={7}
            value={studentWriting}
            onChange={(e) => setStudentWriting(e.target.value)}
            placeholder="Escribe aquí tu respuesta en coreano..."
            className="w-full p-4 rounded-2xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-navy-600 font-hangul text-base leading-relaxed"
          ></textarea>

          <div className="flex items-center justify-between pt-2">
            <button
              onClick={() => setStudentWriting(activeTask.starterText || '')}
              className="text-xs font-semibold text-slate-400 hover:text-slate-700 flex items-center gap-1"
            >
              <RotateCcw className="w-3.5 h-3.5" /> Restablecer texto inicial
            </button>

            <button
              onClick={() => setShowReferenceAnswer(!showReferenceAnswer)}
              className="py-2.5 px-5 rounded-xl font-bold bg-navy-800 hover:bg-navy-900 text-white text-xs transition-colors shadow-sm flex items-center gap-1.5"
            >
              <Eye className="w-3.5 h-3.5" />
              <span>{showReferenceAnswer ? 'Ocultar Modelo de Respuesta' : 'Comparar con Modelo Oficial'}</span>
            </button>
          </div>
        </div>

        {/* Evaluation Criteria List */}
        <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
          <div className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
            <GraduationCap className="w-4 h-4 text-navy-800" />
            Criterios de Evaluación y Rúbrica Oficial
          </div>
          <ul className="space-y-2 text-xs text-slate-600">
            {activeTask.criteria.map((cr, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>{cr}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Reference Model Answer */}
        {showReferenceAnswer && (
          <div className="p-6 rounded-3xl bg-emerald-50 border border-emerald-200 space-y-3 animate-fade-in">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-900">
                Modelo de Respuesta de Referencia
              </span>
              <span className="text-xs font-bold text-emerald-700 bg-emerald-100 px-2.5 py-0.5 rounded-full">
                Puntuación Óptima
              </span>
            </div>
            <div className="font-hangul text-sm font-semibold text-emerald-950 leading-relaxed bg-white p-4 rounded-2xl border border-emerald-100 whitespace-pre-wrap">
              {activeTask.referenceAnswer}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
