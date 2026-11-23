// ==============================================================================
// KOREAN ACADEMY - LISTENING COMPREHENSION VIEW (듣기 마당)
// ==============================================================================
import React, { useState } from 'react';
import {
  Volume2,
  Play,
  RotateCcw,
  CheckCircle2,
  Eye,
  EyeOff,
  Sparkles,
  HelpCircle,
  MessageSquare,
  PenTool
} from 'lucide-react';
import { LISTENING_DATABASE } from '../data/listeningData';
import { AudioButton } from '../components/AudioButton';

export const ListeningView: React.FC = () => {
  const [selectedItemIndex, setSelectedItemIndex] = useState(0);
  const activeItem = LISTENING_DATABASE[selectedItemIndex] || LISTENING_DATABASE[0];

  const [showScript, setShowScript] = useState(false);
  const [userAnswers, setUserAnswers] = useState<Record<string, number>>({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);

  // Dictation state
  const [dictationInput, setDictationInput] = useState('');
  const [dictationChecked, setDictationChecked] = useState(false);

  const handleSelectAnswer = (qId: string, optIdx: number) => {
    if (quizSubmitted) return;
    setUserAnswers((prev) => ({ ...prev, [qId]: optIdx }));
  };

  const handleSwitchAudio = (idx: number) => {
    setSelectedItemIndex(idx);
    setShowScript(false);
    setUserAnswers({});
    setQuizSubmitted(false);
    setDictationInput('');
    setDictationChecked(false);
  };

  // Play entire dialogue sequentially
  const fullDialogueText = activeItem.audioScript.map((s) => s.hangul).join('. ');

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 animate-fade-in">
      {/* Header */}
      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 text-indigo-800 text-xs font-semibold border border-indigo-200">
          <Volume2 className="w-3.5 h-3.5 text-indigo-600" />
          <span>Entrenamiento Auditivo Oficial</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
          Comprensión Auditiva (듣기)
        </h1>
        <p className="text-sm text-slate-600 max-w-2xl leading-relaxed">
          Entrena tu oído con diálogos graduados, control de velocidad lento y normal, dictados y preguntas de comprensión tipo TOPIK.
        </p>
      </div>

      {/* Audio Selectors */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        {LISTENING_DATABASE.map((item, idx) => (
          <button
            key={item.id}
            onClick={() => handleSwitchAudio(idx)}
            className={`px-4 py-2.5 rounded-2xl text-xs font-bold whitespace-nowrap transition-all ${
              selectedItemIndex === idx
                ? 'bg-navy-800 text-white shadow-sm'
                : 'bg-white text-slate-600 hover:text-slate-900 hover:bg-slate-50 border border-slate-200'
            }`}
          >
            Diálogo {idx + 1}: {item.title}
          </button>
        ))}
      </div>

      {/* Main Listening Player Card */}
      <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
          <div className="space-y-1">
            <span className="px-2.5 py-0.5 rounded-md text-[10px] font-black uppercase text-white bg-indigo-600">
              Nivel {activeItem.level}
            </span>
            <h2 className="text-xl font-bold text-slate-900">{activeItem.title}</h2>
            <p className="text-xs text-slate-500">{activeItem.situation}</p>
          </div>

          <div className="flex items-center gap-2">
            <AudioButton
              text={fullDialogueText}
              size="lg"
              label="Reproducir Diálogo Completo"
              showSlowToggle
            />
          </div>
        </div>

        {/* Script Toggle & Dialogue Box */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Transcripción del Diálogo
            </span>
            <button
              onClick={() => setShowScript(!showScript)}
              className="text-xs font-bold text-navy-800 hover:text-navy-950 flex items-center gap-1.5"
            >
              {showScript ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
              <span>{showScript ? 'Ocultar Texto' : 'Mostrar Transcripción'}</span>
            </button>
          </div>

          {showScript ? (
            <div className="space-y-3 bg-slate-50 p-6 rounded-3xl border border-slate-200 animate-fade-in">
              {activeItem.audioScript.map((line, idx) => (
                <div key={idx} className="flex items-start justify-between gap-3 p-3 bg-white rounded-2xl border border-slate-200">
                  <div className="space-y-0.5">
                    <div className="text-[11px] font-bold text-slate-400">{line.speaker}</div>
                    <div className="text-base font-bold font-hangul text-slate-900">{line.hangul}</div>
                    <div className="text-xs text-slate-500">{line.spanish}</div>
                  </div>
                  <AudioButton text={line.hangul} size="sm" />
                </div>
              ))}
            </div>
          ) : (
            <div className="p-8 rounded-3xl bg-slate-50 border border-dashed border-slate-200 text-center space-y-2">
              <Volume2 className="w-8 h-8 text-slate-400 mx-auto animate-pulse" />
              <div className="text-xs font-semibold text-slate-600">
                La transcripción está oculta para que entrenes tu comprensión auditiva pura.
              </div>
              <p className="text-[11px] text-slate-400">
                Escucha el audio varias veces y responde a las preguntas antes de revelar el texto.
              </p>
            </div>
          )}
        </div>

        {/* Comprehension Questions */}
        <div className="space-y-6 pt-4 border-t border-slate-100">
          <div className="flex items-center justify-between">
            <h3 className="text-base font-bold text-slate-900">
              Preguntas de Comprensión Auditiva
            </h3>
            {quizSubmitted && (
              <button
                onClick={() => {
                  setUserAnswers({});
                  setQuizSubmitted(false);
                }}
                className="text-xs font-bold text-navy-800 hover:underline flex items-center gap-1"
              >
                <RotateCcw className="w-3.5 h-3.5" /> Reintentar
              </button>
            )}
          </div>

          <div className="space-y-4">
            {activeItem.questions.map((q, qIdx) => {
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
                disabled={Object.keys(userAnswers).length < activeItem.questions.length}
                className="py-3 px-6 rounded-xl font-bold bg-navy-800 hover:bg-navy-900 text-white text-xs disabled:opacity-50 transition-all shadow-md"
              >
                Comprobar Respuestas
              </button>
            </div>
          )}
        </div>

        {/* Dictation Box */}
        {activeItem.dictationSentence && (
          <div className="pt-6 border-t border-slate-100 space-y-4">
            <div className="flex items-center gap-2">
              <PenTool className="w-4 h-4 text-crimson-600" />
              <h3 className="text-base font-bold text-slate-900">
                Ejercicio de Dictado por Escucha
              </h3>
            </div>
            <p className="text-xs text-slate-500">
              Escucha la siguiente oración y escribe exactamente lo que oyes en caracteres Hangul:
            </p>

            <div className="flex items-center gap-3">
              <AudioButton
                text={activeItem.dictationSentence.hangul}
                size="md"
                label="Escuchar Oración para Dictado"
                showSlowToggle
              />
            </div>

            <div className="space-y-2">
              <input
                type="text"
                placeholder="Escribe en Hangul lo que escuchas..."
                value={dictationInput}
                onChange={(e) => setDictationInput(e.target.value)}
                className="w-full p-3 text-sm font-hangul rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-navy-600"
              />

              <div className="flex items-center justify-between">
                <button
                  onClick={() => setDictationChecked(true)}
                  disabled={!dictationInput.trim()}
                  className="py-2 px-4 rounded-xl font-bold bg-navy-800 text-white text-xs disabled:opacity-50"
                >
                  Verificar Dictado
                </button>

                {dictationChecked && (
                  <button
                    onClick={() => {
                      setDictationChecked(false);
                      setDictationInput('');
                    }}
                    className="text-xs text-slate-400 hover:underline"
                  >
                    Borrar
                  </button>
                )}
              </div>
            </div>

            {dictationChecked && (
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs space-y-2">
                <div className="flex items-center gap-2 font-bold text-slate-900">
                  <span>Solución correcta:</span>
                  <span className="text-emerald-700 font-hangul text-sm">
                    {activeItem.dictationSentence.hangul}
                  </span>
                </div>
                <div className="text-slate-500 font-mono">
                  [{activeItem.dictationSentence.romanization}] — {activeItem.dictationSentence.spanish}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
