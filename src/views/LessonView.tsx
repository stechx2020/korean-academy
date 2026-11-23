// ==============================================================================
// KOREAN ACADEMY - 11-STEP PEDAGOGICAL LESSON PLAYER
// ==============================================================================
import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import confetti from 'canvas-confetti';
import {
  ChevronLeft,
  ChevronRight,
  BookOpen,
  CheckCircle2,
  Sparkles,
  HelpCircle,
  Eye,
  EyeOff,
  Check,
  RotateCcw,
  Volume2,
  ArrowRight,
  Award,
  Layers,
  Info
} from 'lucide-react';
import { getLessonBySlug } from '../data/curriculumData';
import { useProgress } from '../context/ProgressContext';
import { AudioButton } from '../components/AudioButton';

export const LessonView: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { completeLesson, progressMap } = useProgress();

  const lessonData = getLessonBySlug(slug || '');
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [showRomanization, setShowRomanization] = useState<boolean>(false);

  // Exercise states (Step 9)
  const [exerciseAnswers, setExerciseAnswers] = useState<Record<string, string>>({});
  const [exerciseSubmitted, setExerciseSubmitted] = useState<boolean>(false);

  // Quiz states (Step 10)
  const [quizAnswers, setQuizAnswers] = useState<Record<string, string>>({});
  const [quizSubmitted, setQuizSubmitted] = useState<boolean>(false);
  const [quizScore, setQuizScore] = useState<number>(0);

  // Checklist states (Step 11)
  const [checkedItems, setCheckedItems] = useState<Record<number, boolean>>({});

  if (!lessonData) {
    return (
      <div className="max-w-md mx-auto my-20 p-8 bg-white rounded-3xl border border-slate-200 text-center space-y-4">
        <h2 className="text-xl font-bold text-slate-900">Lección no encontrada</h2>
        <p className="text-sm text-slate-500">La lección solicitada no existe o fue movida.</p>
        <Link
          to="/curriculum"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold bg-navy-800 text-white text-xs"
        >
          Volver a la Ruta Curricular
        </Link>
      </div>
    );
  }

  const { lesson, module, level } = lessonData;

  const stepsList = [
    { id: 'objectives', title: '1. Objetivos' },
    { id: 'theory', title: '2. Teoría' },
    { id: 'vocab', title: '3. Vocabulario' },
    { id: 'grammar', title: '4. Gramática' },
    { id: 'examples', title: '5-7. Ejemplos y Traducción' },
    { id: 'dialogue', title: '8. Uso Cotidiano' },
    { id: 'exercises', title: '9. Ejercicios' },
    { id: 'quiz', title: '10. Evaluación' },
    { id: 'summary', title: '11. Resumen' },
  ];

  const handleExerciseSelect = (exId: string, val: string) => {
    if (exerciseSubmitted) return;
    setExerciseAnswers((prev) => ({ ...prev, [exId]: val }));
  };

  const handleQuizSelect = (qId: string, val: string) => {
    if (quizSubmitted) return;
    setQuizAnswers((prev) => ({ ...prev, [qId]: val }));
  };

  const handleQuizSubmit = () => {
    let score = 0;
    lesson.quiz.forEach((q) => {
      if (quizAnswers[q.id] === q.correctAnswer) {
        score += q.points;
      }
    });
    const totalMax = lesson.quiz.reduce((sum, q) => sum + q.points, 0);
    const percentage = totalMax > 0 ? Math.round((score / totalMax) * 100) : 100;
    setQuizScore(percentage);
    setQuizSubmitted(true);

    if (percentage >= 70) {
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.6 }
      });
    }
  };

  const handleFinishLesson = async () => {
    const finalScore = quizSubmitted ? quizScore : 100;
    await completeLesson(lesson.id, finalScore);
    confetti({
      particleCount: 120,
      spread: 80,
      origin: { y: 0.5 }
    });
    navigate('/curriculum');
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6 animate-fade-in">
      {/* Top Breadcrumb & Romanization Toggle Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200">
        <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
          <Link to="/curriculum" className="hover:text-navy-900 transition-colors">
            Nivel {level.levelNumber}
          </Link>
          <span>/</span>
          <span>Módulo {module.moduleNumber}</span>
          <span>/</span>
          <span className="text-slate-900 font-bold">Lección {lesson.lessonNumber}</span>
        </div>

        <div className="flex items-center gap-3">
          {/* Romanization Switch */}
          <button
            onClick={() => setShowRomanization(!showRomanization)}
            className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
              showRomanization
                ? 'bg-amber-100 text-amber-900 border border-amber-300'
                : 'bg-slate-100 text-slate-600 border border-slate-200 hover:bg-slate-200'
            }`}
            title="Alternar transliteración romanizada para principiantes"
          >
            {showRomanization ? <Eye className="w-3.5 h-3.5" /> : <EyeOff className="w-3.5 h-3.5" />}
            <span>Romanización: {showRomanization ? 'ON' : 'OFF'}</span>
          </button>

          <Link
            to="/curriculum"
            className="p-1.5 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100"
          >
            ✕
          </Link>
        </div>
      </div>

      {/* Lesson Header Banner */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-2">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase text-white bg-navy-800">
            Lección {lesson.lessonNumber}
          </span>
          <span className="text-xs font-semibold text-slate-400">
            Aprox. {lesson.estimatedMinutes} minutos
          </span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
          {lesson.title}
        </h1>
        <div className="text-base font-bold text-crimson-600 font-hangul">
          {lesson.koreanTitle}
        </div>
      </div>

      {/* 11 Steps Navigation Pills */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none">
        {stepsList.map((step, idx) => (
          <button
            key={step.id}
            onClick={() => setCurrentStep(idx)}
            className={`px-3 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all shrink-0 ${
              currentStep === idx
                ? 'bg-navy-800 text-white shadow-sm'
                : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
            }`}
          >
            {step.title}
          </button>
        ))}
      </div>

      {/* Main Step Content Container */}
      <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm min-h-[420px]">
        {/* STEP 1: OBJECTIVES */}
        {currentStep === 0 && (
          <div className="space-y-6 animate-fade-in">
            <div className="flex items-center gap-3 pb-4 border-b border-slate-100">
              <div className="w-10 h-10 rounded-2xl bg-indigo-50 text-indigo-700 flex items-center justify-center font-bold">
                1
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900">Objetivos de Aprendizaje</h3>
                <p className="text-xs text-slate-500">¿Qué serás capaz de dominar al finalizar esta lección?</p>
              </div>
            </div>

            <div className="space-y-3">
              {lesson.learningObjectives.map((obj, i) => (
                <div key={i} className="flex items-start gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="text-sm font-medium text-slate-700 leading-relaxed">{obj}</span>
                </div>
              ))}
            </div>

            <div className="p-4 rounded-2xl bg-sky-50 border border-sky-100 text-sky-900 text-xs flex items-start gap-3">
              <Info className="w-5 h-5 text-sky-600 shrink-0 mt-0.5" />
              <span>
                Consejo de estudio: Lee con atención cada sección teórica, escucha la pronunciación en audio al menos 2 veces y resuelve los ejercicios de comprobación.
              </span>
            </div>
          </div>
        )}

        {/* STEP 2: THEORY */}
        {currentStep === 1 && (
          <div className="space-y-6 animate-fade-in">
            <div className="flex items-center gap-3 pb-4 border-b border-slate-100">
              <div className="w-10 h-10 rounded-2xl bg-indigo-50 text-indigo-700 flex items-center justify-center font-bold">
                2
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900">Explicación Teórica Detallada</h3>
                <p className="text-xs text-slate-500">Fundamentos lingüísticos, históricos y estructurales</p>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 text-sm text-slate-700 leading-relaxed font-medium">
              {lesson.theoryContent.introduction}
            </div>

            <div className="space-y-6">
              {lesson.theoryContent.sections.map((sec, idx) => (
                <div key={idx} className="space-y-3">
                  <h4 className="text-base font-bold text-slate-900 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-crimson-600"></span>
                    {sec.heading}
                  </h4>
                  <p className="text-sm text-slate-600 leading-relaxed">{sec.content}</p>

                  {sec.koreanFocus && (
                    <div className="p-3.5 bg-navy-50 border border-navy-100 rounded-xl font-hangul font-bold text-navy-900 text-sm flex items-center justify-between">
                      <span>{sec.koreanFocus}</span>
                      <AudioButton text={sec.koreanFocus} size="sm" />
                    </div>
                  )}

                  {sec.culturalNote && (
                    <div className="p-3.5 bg-amber-50 border border-amber-200 rounded-xl text-xs text-amber-900">
                      <strong className="block font-bold text-amber-950 mb-0.5">Nota Cultural:</strong>
                      {sec.culturalNote}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* STEP 3: VOCABULARY */}
        {currentStep === 2 && (
          <div className="space-y-6 animate-fade-in">
            <div className="flex items-center gap-3 pb-4 border-b border-slate-100">
              <div className="w-10 h-10 rounded-2xl bg-indigo-50 text-indigo-700 flex items-center justify-center font-bold">
                3
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900">Vocabulario Nuevo</h3>
                <p className="text-xs text-slate-500">Palabras y expresiones indispensables con audio nativo</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {lesson.vocabularyList.map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-slate-50 border border-slate-200 hover:border-navy-300 transition-all flex flex-col justify-between space-y-3"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className="flex items-baseline gap-2">
                        <span className="text-xl font-bold font-hangul text-slate-900">
                          {item.hangul}
                        </span>
                        {item.hanja && (
                          <span className="text-xs text-slate-400 font-serif">
                            ({item.hanja})
                          </span>
                        )}
                      </div>
                      {showRomanization && (
                        <div className="text-xs text-amber-700 font-mono mt-0.5">
                          {item.romanization}
                        </div>
                      )}
                      <div className="text-sm font-semibold text-slate-700 mt-1">
                        {item.spanish}
                      </div>
                    </div>
                    <AudioButton text={item.hangul} size="sm" showSlowToggle />
                  </div>

                  {item.exampleKorean && (
                    <div className="pt-2 border-t border-slate-200/60 text-xs space-y-0.5">
                      <div className="font-hangul font-medium text-slate-800">
                        {item.exampleKorean}
                      </div>
                      <div className="text-slate-500">{item.exampleSpanish}</div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* STEP 4: GRAMMAR */}
        {currentStep === 3 && (
          <div className="space-y-6 animate-fade-in">
            <div className="flex items-center gap-3 pb-4 border-b border-slate-100">
              <div className="w-10 h-10 rounded-2xl bg-indigo-50 text-indigo-700 flex items-center justify-center font-bold">
                4
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900">Gramática Explicada Paso a Paso</h3>
                <p className="text-xs text-slate-500">Reglas morfológicas y fórmulas de conjugación</p>
              </div>
            </div>

            <div className="space-y-6">
              {lesson.grammarPoints.map((gp, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <h4 className="text-base font-bold text-slate-900">{gp.title}</h4>
                    <span className="px-3 py-1 rounded-xl text-xs font-mono font-bold bg-navy-800 text-white shrink-0">
                      {gp.structure}
                    </span>
                  </div>

                  <p className="text-sm text-slate-600 leading-relaxed">{gp.explanation}</p>

                  <div className="space-y-2 pt-2">
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                      Ejemplos Gramaticales
                    </div>
                    <div className="space-y-2">
                      {gp.examples.map((ex, eIdx) => (
                        <div
                          key={eIdx}
                          className="p-3 bg-white rounded-xl border border-slate-200 flex items-center justify-between gap-3"
                        >
                          <div>
                            <div className="text-sm font-bold font-hangul text-navy-950">
                              {ex.hangul}
                            </div>
                            {showRomanization && (
                              <div className="text-xs text-amber-700 font-mono">
                                {ex.romanization}
                              </div>
                            )}
                            <div className="text-xs text-slate-600">{ex.spanish}</div>
                          </div>
                          <AudioButton text={ex.hangul} size="sm" />
                        </div>
                      ))}
                    </div>
                  </div>

                  {gp.cautions && (
                    <div className="p-3 bg-red-50 border border-red-200 rounded-xl text-xs text-red-900">
                      <strong className="block font-bold mb-0.5">Precaución frecuente:</strong>
                      {gp.cautions}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* STEP 5-7: EXAMPLES & TRANSLATION */}
        {currentStep === 4 && (
          <div className="space-y-6 animate-fade-in">
            <div className="flex items-center gap-3 pb-4 border-b border-slate-100">
              <div className="w-10 h-10 rounded-2xl bg-indigo-50 text-indigo-700 flex items-center justify-center font-bold">
                5-7
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900">Ejemplos en Hangul y Traducción</h3>
                <p className="text-xs text-slate-500">Oraciones completas con equivalencias idiomáticas exactas</p>
              </div>
            </div>

            <div className="space-y-3">
              {lesson.grammarPoints.flatMap((gp) => gp.examples).map((ex, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-between gap-4"
                >
                  <div className="space-y-1">
                    <div className="text-lg font-bold font-hangul text-slate-900">
                      {ex.hangul}
                    </div>
                    {showRomanization && (
                      <div className="text-xs font-mono text-amber-800">
                        {ex.romanization}
                      </div>
                    )}
                    <div className="text-sm text-slate-600 font-medium">{ex.spanish}</div>
                  </div>
                  <AudioButton text={ex.hangul} size="md" showSlowToggle />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* STEP 8: DAILY CONVERSATION */}
        {currentStep === 5 && (
          <div className="space-y-6 animate-fade-in">
            <div className="flex items-center gap-3 pb-4 border-b border-slate-100">
              <div className="w-10 h-10 rounded-2xl bg-indigo-50 text-indigo-700 flex items-center justify-center font-bold">
                8
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900">Diálogos de la Vida Cotidiana</h3>
                <p className="text-xs text-slate-500">Conversaciones reales aplicadas en situaciones cotidianas</p>
              </div>
            </div>

            <div className="space-y-4">
              {lesson.dailyExamples.map((dia, idx) => (
                <div key={idx} className="p-6 rounded-3xl bg-slate-50 border border-slate-200 space-y-4">
                  {/* Speaker A */}
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-xl bg-navy-800 text-white font-bold text-xs flex items-center justify-center shrink-0">
                      A
                    </div>
                    <div className="flex-1 bg-white p-4 rounded-2xl border border-slate-200 shadow-sm space-y-1">
                      <div className="text-xs font-bold text-slate-400">{dia.speakerA}</div>
                      <div className="text-base font-bold font-hangul text-slate-900">{dia.hangulA}</div>
                      <div className="text-xs text-slate-500">{dia.spanishA}</div>
                    </div>
                    <AudioButton text={dia.hangulA} size="sm" />
                  </div>

                  {/* Speaker B */}
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-xl bg-crimson-600 text-white font-bold text-xs flex items-center justify-center shrink-0">
                      B
                    </div>
                    <div className="flex-1 bg-white p-4 rounded-2xl border border-slate-200 shadow-sm space-y-1">
                      <div className="text-xs font-bold text-slate-400">{dia.speakerB}</div>
                      <div className="text-base font-bold font-hangul text-slate-900">{dia.hangulB}</div>
                      <div className="text-xs text-slate-500">{dia.spanishB}</div>
                    </div>
                    <AudioButton text={dia.hangulB} size="sm" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* STEP 9: INTERACTIVE EXERCISES */}
        {currentStep === 6 && (
          <div className="space-y-6 animate-fade-in">
            <div className="flex items-center gap-3 pb-4 border-b border-slate-100">
              <div className="w-10 h-10 rounded-2xl bg-indigo-50 text-indigo-700 flex items-center justify-center font-bold">
                9
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900">Ejercicios Interactivos Guiados</h3>
                <p className="text-xs text-slate-500">Pon a prueba tu comprensión inmediata con retroalimentación</p>
              </div>
            </div>

            <div className="space-y-6">
              {lesson.exercises.map((ex, idx) => {
                const userSelected = exerciseAnswers[ex.id];
                const isCorrect = userSelected === ex.correctAnswer;

                return (
                  <div key={ex.id} className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-slate-400">Ejercicio {idx + 1}</span>
                      <span className="text-xs font-semibold text-slate-500">+{ex.points} pts</span>
                    </div>

                    <p className="text-sm font-bold text-slate-900">{ex.prompt}</p>

                    {ex.koreanText && (
                      <div className="text-2xl font-bold font-hangul text-navy-950 p-3 bg-white rounded-xl border border-slate-200 inline-block">
                        {ex.koreanText}
                      </div>
                    )}

                    {/* Options list */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {ex.options?.map((opt) => {
                        const selected = userSelected === opt;
                        let btnStyle = 'bg-white border-slate-200 text-slate-700 hover:border-navy-300';

                        if (exerciseSubmitted) {
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
                            disabled={exerciseSubmitted}
                            onClick={() => handleExerciseSelect(ex.id, opt)}
                            className={`p-3 rounded-xl border text-sm text-left transition-all font-hangul ${btnStyle}`}
                          >
                            {opt}
                          </button>
                        );
                      })}
                    </div>

                    {/* Explanation */}
                    {exerciseSubmitted && (
                      <div
                        className={`p-3 rounded-xl text-xs ${
                          isCorrect ? 'bg-emerald-50 text-emerald-800 border border-emerald-200' : 'bg-red-50 text-red-800 border border-red-200'
                        }`}
                      >
                        <strong>{isCorrect ? '¡Correcto!' : 'Respuesta incorrecta.'}</strong> {ex.explanation}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="pt-2 flex justify-end">
              {!exerciseSubmitted ? (
                <button
                  onClick={() => setExerciseSubmitted(true)}
                  disabled={Object.keys(exerciseAnswers).length === 0}
                  className="py-3 px-6 rounded-xl font-bold bg-navy-800 hover:bg-navy-900 text-white text-xs disabled:opacity-50 transition-all shadow-md"
                >
                  Comprobar Respuestas
                </button>
              ) : (
                <button
                  onClick={() => {
                    setExerciseSubmitted(false);
                    setExerciseAnswers({});
                  }}
                  className="py-2.5 px-4 rounded-xl font-semibold bg-slate-100 text-slate-700 hover:bg-slate-200 text-xs transition-colors flex items-center gap-1.5"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  Intentar de nuevo
                </button>
              )}
            </div>
          </div>
        )}

        {/* STEP 10: QUIZ / EVALUATION */}
        {currentStep === 7 && (
          <div className="space-y-6 animate-fade-in">
            <div className="flex items-center gap-3 pb-4 border-b border-slate-100">
              <div className="w-10 h-10 rounded-2xl bg-indigo-50 text-indigo-700 flex items-center justify-center font-bold">
                10
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900">Evaluación Corta de la Lección</h3>
                <p className="text-xs text-slate-500">Demuestra tu comprensión para desbloquear el siguiente contenido</p>
              </div>
            </div>

            <div className="space-y-6">
              {lesson.quiz.map((q, idx) => {
                const userSelected = quizAnswers[q.id];
                const isCorrect = userSelected === q.correctAnswer;

                return (
                  <div key={q.id} className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-slate-400">Pregunta {idx + 1}</span>
                      <span className="text-xs font-semibold text-slate-500">+{q.points} pts</span>
                    </div>

                    <p className="text-sm font-bold text-slate-900">{q.prompt}</p>

                    <div className="space-y-2">
                      {q.options?.map((opt) => {
                        const selected = userSelected === opt;
                        let btnStyle = 'bg-white border-slate-200 text-slate-700 hover:border-navy-300';

                        if (quizSubmitted) {
                          if (opt === q.correctAnswer) {
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
                            disabled={quizSubmitted}
                            onClick={() => handleQuizSelect(q.id, opt)}
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
                          isCorrect ? 'bg-emerald-50 text-emerald-800' : 'bg-red-50 text-red-800'
                        }`}
                      >
                        <strong>{isCorrect ? '¡Correcto!' : 'Incorrecto.'}</strong> {q.explanation}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Score & Submit bar */}
            <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
              {quizSubmitted ? (
                <div className="flex items-center gap-3">
                  <div className="text-2xl font-black text-slate-900">{quizScore}%</div>
                  <span
                    className={`text-xs font-bold px-3 py-1 rounded-full ${
                      quizScore >= 70 ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'
                    }`}
                  >
                    {quizScore >= 70 ? '¡Aprobado! Superaste el 70%' : 'Requiere repasar antes de avanzar'}
                  </span>
                </div>
              ) : (
                <span className="text-xs text-slate-400">Responde todas las preguntas para calificar.</span>
              )}

              {!quizSubmitted ? (
                <button
                  onClick={handleQuizSubmit}
                  disabled={Object.keys(quizAnswers).length < lesson.quiz.length}
                  className="py-3 px-6 rounded-xl font-bold bg-crimson-600 hover:bg-crimson-500 text-white text-xs disabled:opacity-50 transition-all shadow-md"
                >
                  Entregar Evaluación
                </button>
              ) : (
                <button
                  onClick={() => setCurrentStep(8)}
                  className="py-3 px-6 rounded-xl font-bold bg-navy-800 hover:bg-navy-900 text-white text-xs transition-all flex items-center gap-2"
                >
                  <span>Continuar al Resumen</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        )}

        {/* STEP 11: SUMMARY & CHECKLIST */}
        {currentStep === 8 && (
          <div className="space-y-6 animate-fade-in">
            <div className="flex items-center gap-3 pb-4 border-b border-slate-100">
              <div className="w-10 h-10 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold">
                11
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900">Resumen y Consolidación</h3>
                <p className="text-xs text-slate-500">Checklist de conceptos dominados en esta lección</p>
              </div>
            </div>

            <div className="space-y-3">
              {lesson.summaryChecklist.map((item, idx) => (
                <label
                  key={idx}
                  className="flex items-start gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-200 cursor-pointer hover:bg-slate-100/60 transition-colors"
                >
                  <input
                    type="checkbox"
                    checked={Boolean(checkedItems[idx])}
                    onChange={(e) =>
                      setCheckedItems((prev) => ({ ...prev, [idx]: e.target.checked }))
                    }
                    className="w-5 h-5 rounded text-navy-800 focus:ring-navy-600 mt-0.5"
                  />
                  <span className="text-sm font-medium text-slate-700 leading-relaxed">{item}</span>
                </label>
              ))}
            </div>

            <div className="p-6 rounded-3xl bg-emerald-50 border border-emerald-200 text-center space-y-4">
              <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-base font-bold text-emerald-950">¡Excelente trabajo!</h4>
                <p className="text-xs text-emerald-800 max-w-sm mx-auto mt-1">
                  Has completado todos los pasos pedagógicos de esta clase. Tu progreso se guardará automáticamente en tu perfil y base de datos.
                </p>
              </div>
              <button
                onClick={handleFinishLesson}
                className="py-3.5 px-8 rounded-xl font-bold bg-emerald-600 hover:bg-emerald-700 text-white text-sm shadow-md transition-all inline-flex items-center gap-2"
              >
                <Check className="w-4 h-4" />
                <span>Finalizar y Guardar Progreso</span>
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Footer Navigation Bar */}
      <div className="flex items-center justify-between pt-4">
        <button
          onClick={() => setCurrentStep((prev) => Math.max(0, prev - 1))}
          disabled={currentStep === 0}
          className="py-2.5 px-4 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 text-xs font-semibold disabled:opacity-40 transition-colors flex items-center gap-1.5"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>Paso Anterior</span>
        </button>

        <span className="text-xs font-semibold text-slate-400">
          Paso {currentStep + 1} de {stepsList.length}
        </span>

        <button
          onClick={() => setCurrentStep((prev) => Math.min(stepsList.length - 1, prev + 1))}
          disabled={currentStep === stepsList.length - 1}
          className="py-2.5 px-4 rounded-xl font-bold bg-navy-800 hover:bg-navy-900 text-white text-xs disabled:opacity-40 transition-all flex items-center gap-1.5 shadow-sm"
        >
          <span>Siguiente Paso</span>
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
