// ==============================================================================
// KOREAN ACADEMY - GRAMMAR LAB VIEW (문법 연구소)
// ==============================================================================
import React, { useState } from 'react';
import {
  Layers,
  BookOpen,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  ArrowRight,
  RotateCcw,
  Sparkles
} from 'lucide-react';
import { GRAMMAR_COMPARISONS } from '../data/grammarLabData';
import { AudioButton } from '../components/AudioButton';

export const GrammarLabView: React.FC = () => {
  const [selectedCompId, setSelectedCompId] = useState<string>(GRAMMAR_COMPARISONS[0].id);
  const activeComp = GRAMMAR_COMPARISONS.find((c) => c.id === selectedCompId) || GRAMMAR_COMPARISONS[0];

  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, string>>({});
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleSelectOption = (qIdx: number, opt: string) => {
    if (submitted) return;
    setSelectedAnswers((prev) => ({ ...prev, [qIdx]: opt }));
  };

  const handleReset = () => {
    setSelectedAnswers({});
    setSubmitted(false);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 animate-fade-in">
      {/* Header */}
      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-semibold border border-emerald-200">
          <Layers className="w-3.5 h-3.5 text-emerald-600" />
          <span>Laboratorio de Estructuras Lingüísticas</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
          Laboratorio de Gramática Comparada
        </h1>
        <p className="text-sm text-slate-600 max-w-2xl leading-relaxed">
          Resuelve las confusiones más comunes entre estructuras aparentemente similares. Comprende cuándo y por qué utilizar cada partícula o terminación verbal.
        </p>
      </div>

      {/* Comparisons Selector Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        {GRAMMAR_COMPARISONS.map((comp) => (
          <button
            key={comp.id}
            onClick={() => {
              setSelectedCompId(comp.id);
              handleReset();
            }}
            className={`px-4 py-2.5 rounded-2xl text-xs font-bold whitespace-nowrap transition-all ${
              selectedCompId === comp.id
                ? 'bg-navy-800 text-white shadow-sm'
                : 'bg-white text-slate-600 hover:text-slate-900 hover:bg-slate-50 border border-slate-200'
            }`}
          >
            {comp.title}
          </button>
        ))}
      </div>

      {/* Comparison Deep Dive Card */}
      <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm space-y-8">
        <div>
          <span className="px-2.5 py-0.5 rounded-md text-[10px] font-black uppercase text-white bg-emerald-700">
            Nivel {activeComp.level}
          </span>
          <h2 className="text-2xl font-black text-slate-900 mt-2">{activeComp.title}</h2>
          <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-xs font-semibold text-amber-950 mt-3 leading-relaxed">
            <strong className="block font-bold text-amber-900 mb-0.5">Regla de Oro:</strong>
            {activeComp.comparisonRule}
          </div>
        </div>

        {/* Side by side columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Pattern A */}
          <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-navy-800">
              Patrón A
            </div>
            <h3 className="text-lg font-bold text-slate-900 font-hangul">
              {activeComp.patternA}
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              {activeComp.explanationA}
            </p>
          </div>

          {/* Pattern B */}
          <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-crimson-600">
              Patrón B
            </div>
            <h3 className="text-lg font-bold text-slate-900 font-hangul">
              {activeComp.patternB}
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              {activeComp.explanationB}
            </p>
          </div>
        </div>

        {/* Examples Comparison List */}
        <div className="space-y-4">
          <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400">
            Casos Comparativos Cara a Cara
          </h3>

          <div className="space-y-4">
            {activeComp.examples.map((ex, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Case A */}
                  <div className="p-3 bg-white rounded-xl border border-slate-200 flex items-center justify-between gap-3">
                    <div>
                      <div className="text-sm font-bold font-hangul text-navy-950">
                        {ex.hangulA}
                      </div>
                      <div className="text-xs text-slate-600">{ex.spanishA}</div>
                    </div>
                    <AudioButton text={ex.hangulA} size="sm" />
                  </div>

                  {/* Case B */}
                  <div className="p-3 bg-white rounded-xl border border-slate-200 flex items-center justify-between gap-3">
                    <div>
                      <div className="text-sm font-bold font-hangul text-crimson-950">
                        {ex.hangulB}
                      </div>
                      <div className="text-xs text-slate-600">{ex.spanishB}</div>
                    </div>
                    <AudioButton text={ex.hangulB} size="sm" />
                  </div>
                </div>

                <div className="text-[11px] font-semibold text-slate-500 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                  <span>{ex.contextTip}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive Practice Quiz */}
        <div className="pt-6 border-t border-slate-100 space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-base font-bold text-slate-900">
              Práctica de Autocorrección Inmediata
            </h3>
            {submitted && (
              <button
                onClick={handleReset}
                className="text-xs font-semibold text-navy-800 hover:underline flex items-center gap-1"
              >
                <RotateCcw className="w-3.5 h-3.5" /> Reintentar
              </button>
            )}
          </div>

          <div className="space-y-4">
            {activeComp.exercises.map((ex, qIdx) => {
              const userAns = selectedAnswers[qIdx];
              const isCorrect = userAns === ex.correctAnswer;

              return (
                <div key={qIdx} className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                  <p className="text-sm font-bold text-slate-800">{ex.prompt}</p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {ex.options.map((opt) => {
                      const selected = userAns === opt;
                      let btnStyle = 'bg-white border-slate-200 text-slate-700 hover:border-navy-300';

                      if (submitted) {
                        if (opt === ex.correctAnswer) {
                          btnStyle = 'bg-emerald-100 border-emerald-400 text-emerald-900 font-bold';
                        } else if (selected && !isCorrect) {
                          btnStyle = 'bg-red-100 border-red-300 text-red-900';
                        }
                      } else if (selected) {
                        btnStyle = 'bg-navy-800 border-navy-800 text-white font-bold';
                      }

                      return (
                        <button
                          key={opt}
                          disabled={submitted}
                          onClick={() => handleSelectOption(qIdx, opt)}
                          className={`p-3 rounded-xl border text-sm text-left font-hangul transition-all ${btnStyle}`}
                        >
                          {opt}
                        </button>
                      );
                    })}
                  </div>

                  {submitted && (
                    <div
                      className={`p-3 rounded-xl text-xs ${
                        isCorrect
                          ? 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                          : 'bg-red-50 text-red-800 border border-red-200'
                      }`}
                    >
                      <strong>{isCorrect ? '¡Correcto!' : 'Respuesta errónea.'}</strong> {ex.explanation}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {!submitted && (
            <div className="flex justify-end">
              <button
                onClick={() => setSubmitted(true)}
                disabled={Object.keys(selectedAnswers).length < activeComp.exercises.length}
                className="py-3 px-6 rounded-xl font-bold bg-navy-800 hover:bg-navy-900 text-white text-xs disabled:opacity-50 transition-all shadow-md"
              >
                Comprobar Mis Respuestas
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
