// ==============================================================================
// KOREAN ACADEMY - GRADED READING PORTAL VIEW (읽기 마당)
// ==============================================================================
import React, { useState } from 'react';
import {
  FileText,
  Clock,
  BookOpen,
  Sparkles,
  CheckCircle2,
  HelpCircle,
  Eye,
  EyeOff,
  Volume2
} from 'lucide-react';
import { READING_DATABASE } from '../data/readingData';
import { AudioButton } from '../components/AudioButton';

export const ReadingView: React.FC = () => {
  const [selectedArticleIndex, setSelectedArticleIndex] = useState(0);
  const activeArticle = READING_DATABASE[selectedArticleIndex] || READING_DATABASE[0];

  const [showSpanishTranslation, setShowSpanishTranslation] = useState(false);
  const [userAnswers, setUserAnswers] = useState<Record<string, number>>({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);

  const fullKoreanText = activeArticle.paragraphs.map((p) => p.hangul).join(' ');

  const handleSelectAnswer = (qId: string, optIdx: number) => {
    if (quizSubmitted) return;
    setUserAnswers((prev) => ({ ...prev, [qId]: optIdx }));
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 animate-fade-in">
      {/* Header */}
      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 text-purple-800 text-xs font-semibold border border-purple-200">
          <FileText className="w-3.5 h-3.5 text-purple-600" />
          <span>Portal de Lectura Graduada</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
          Lectura Comprensiva Graduada (읽기)
        </h1>
        <p className="text-sm text-slate-600 max-w-2xl leading-relaxed">
          Lee artículos culturales, rutinas y noticias adaptadas con soporte de glosario flotante, audio en voz alta y preguntas de comprobación.
        </p>
      </div>

      {/* Article Selector Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        {READING_DATABASE.map((art, idx) => (
          <button
            key={art.id}
            onClick={() => {
              setSelectedArticleIndex(idx);
              setUserAnswers({});
              setQuizSubmitted(false);
              setShowSpanishTranslation(false);
            }}
            className={`px-4 py-2.5 rounded-2xl text-xs font-bold whitespace-nowrap transition-all ${
              selectedArticleIndex === idx
                ? 'bg-navy-800 text-white shadow-sm'
                : 'bg-white text-slate-600 hover:text-slate-900 hover:bg-slate-50 border border-slate-200'
            }`}
          >
            Texto {idx + 1}: {art.titleSpanish}
          </button>
        ))}
      </div>

      {/* Main Reading Card */}
      <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-md text-[10px] font-black uppercase text-white bg-purple-700">
                Nivel {activeArticle.level}
              </span>
              <span className="text-xs text-slate-400 font-semibold">
                Categoría: {activeArticle.category}
              </span>
            </div>
            <h2 className="text-2xl font-bold font-hangul text-slate-900">
              {activeArticle.titleKorean}
            </h2>
            <div className="text-xs text-slate-500 font-medium">
              {activeArticle.titleSpanish}
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setShowSpanishTranslation(!showSpanishTranslation)}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
            >
              {showSpanishTranslation ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
              <span>{showSpanishTranslation ? 'Ocultar Traducción' : 'Ver Traducción'}</span>
            </button>
            <AudioButton text={fullKoreanText} size="md" label="Escuchar Texto" showSlowToggle />
          </div>
        </div>

        {/* Text Paragraphs with Annotations */}
        <div className="space-y-6">
          {activeArticle.paragraphs.map((p, pIdx) => (
            <div key={pIdx} className="space-y-2 p-5 rounded-2xl bg-slate-50 border border-slate-100">
              <p className="text-base sm:text-lg font-hangul text-slate-900 leading-loose">
                {p.hangul}
              </p>

              {showSpanishTranslation && (
                <p className="text-xs text-slate-500 italic pt-2 border-t border-slate-200/60">
                  {p.spanish}
                </p>
              )}

              {p.annotations && p.annotations.length > 0 && (
                <div className="flex flex-wrap items-center gap-2 pt-2">
                  <span className="text-[10px] font-bold text-slate-400 uppercase">Glosario:</span>
                  {p.annotations.map((ann, aIdx) => (
                    <span
                      key={aIdx}
                      className="px-2.5 py-0.5 rounded-lg bg-white border border-slate-200 text-xs text-navy-900 font-medium"
                    >
                      <strong className="font-hangul">{ann.word}</strong>: {ann.meaning}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Vocabulary Focus */}
        <div className="p-6 rounded-2xl bg-purple-50/50 border border-purple-100 space-y-3">
          <div className="text-xs font-bold uppercase tracking-wider text-purple-900 flex items-center gap-1.5">
            <Sparkles className="w-4 h-4 text-purple-600" />
            Vocabulario Clave del Texto
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {activeArticle.vocabularyFocus.map((vf, idx) => (
              <div key={idx} className="p-3 bg-white rounded-xl border border-purple-100 flex items-center justify-between">
                <div>
                  <div className="font-bold font-hangul text-slate-900 text-sm">{vf.hangul}</div>
                  <div className="text-xs text-slate-600">{vf.spanish}</div>
                  <div className="text-[10px] text-slate-400">{vf.grammarRole}</div>
                </div>
                <AudioButton text={vf.hangul} size="sm" />
              </div>
            ))}
          </div>
        </div>

        {/* Comprehension Questions */}
        <div className="space-y-6 pt-4 border-t border-slate-100">
          <h3 className="text-base font-bold text-slate-900">
            Preguntas de Comprensión de Lectura
          </h3>

          <div className="space-y-4">
            {activeArticle.questions.map((q, qIdx) => {
              const userAns = userAnswers[q.id];
              const isCorrect = userAns === q.correctAnswerIndex;

              return (
                <div key={q.id} className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                  <div className="text-xs font-bold text-slate-400">Pregunta {qIdx + 1}</div>
                  <p className="text-sm font-bold text-slate-900">{q.question}</p>

                  <div className="space-y-2">
                    {q.options.map((opt, optIdx) => {
                      const selected = userAns === optIdx;
                      let btnStyle = 'bg-white border-slate-200 text-slate-700 hover:border-navy-300';

                      if (quizSubmitted) {
                        if (optIdx === q.correctAnswerIndex) {
                          btnStyle = 'bg-emerald-100 border-emerald-400 text-emerald-900 font-bold';
                        } else if (selected && !isCorrect) {
                          btnStyle = 'bg-red-100 border-red-300 text-red-900';
                        }
                      } else if (selected) {
                        btnStyle = 'bg-navy-800 border-navy-800 text-white font-bold';
                      }

                      return (
                        <button
                          key={optIdx}
                          disabled={quizSubmitted}
                          onClick={() => handleSelectAnswer(q.id, optIdx)}
                          className={`w-full p-3 rounded-xl border text-sm text-left transition-all ${btnStyle}`}
                        >
                          {opt}
                        </button>
                      );
                    })}
                  </div>

                  {quizSubmitted && (
                    <div
                      className={`p-3 rounded-xl text-xs ${
                        isCorrect
                          ? 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                          : 'bg-red-50 text-red-800 border border-red-200'
                      }`}
                    >
                      <strong>{isCorrect ? '¡Correcto!' : 'Incorrecto.'}</strong> {q.explanation}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {!quizSubmitted && (
            <div className="flex justify-end">
              <button
                onClick={() => setQuizSubmitted(true)}
                disabled={Object.keys(userAnswers).length < activeArticle.questions.length}
                className="py-3 px-6 rounded-xl font-bold bg-navy-800 hover:bg-navy-900 text-white text-xs disabled:opacity-50 transition-all shadow-md"
              >
                Comprobar Comprensión Lectora
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
