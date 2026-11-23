// ==============================================================================
// KOREAN ACADEMY - TIMED TOPIK EXAM SIMULATOR VIEW (실전 모의고사)
// ==============================================================================
import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  Clock,
  AlertTriangle,
  Award,
  ChevronLeft,
  ChevronRight,
  CheckCircle,
  HelpCircle,
  Volume2,
  Send,
  Flag
} from 'lucide-react';
import { TOPIK_EXAMS } from '../data/topikExamData';
import { useProgress } from '../context/ProgressContext';
import { AudioButton } from '../components/AudioButton';
import { TopikSimulationResult, TopikQuestion } from '../types';

export const TopikExamView: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { saveTopikResult } = useProgress();

  // Determine exam type from query string: ?exam=TOPIK_II or default TOPIK_I
  const queryParams = new URLSearchParams(location.search);
  const requestedExam = queryParams.get('exam') === 'TOPIK_II' ? 'TOPIK_II' : 'TOPIK_I';

  const exam = TOPIK_EXAMS.find((e) => e.code === requestedExam) || TOPIK_EXAMS[0];

  // Flatten all questions across all sections
  const allQuestions: { question: TopikQuestion; sectionName: string }[] = [];
  exam.sections.forEach((sec) => {
    sec.questions.forEach((q) => {
      allQuestions.push({ question: q, sectionName: sec.name });
    });
  });

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number | string>>({});
  const [flaggedQuestions, setFlaggedQuestions] = useState<Record<string, boolean>>({});

  // Countdown timer state
  const totalExamSeconds = exam.durationMinutes * 60;
  const [secondsRemaining, setSecondsRemaining] = useState(totalExamSeconds);
  const [showSubmitModal, setShowSubmitModal] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setSecondsRemaining((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          handleSubmitExam();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTimer = (totalSec: number) => {
    const hrs = Math.floor(totalSec / 3600);
    const mins = Math.floor((totalSec % 3600) / 60);
    const secs = totalSec % 60;
    if (hrs > 0) {
      return `${hrs}:${mins < 10 ? '0' : ''}${mins}:${secs < 10 ? '0' : ''}${secs}`;
    }
    return `${mins < 10 ? '0' : ''}${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  const currentItem = allQuestions[currentQuestionIndex];
  const answeredCount = Object.keys(answers).length;

  const handleSelectAnswer = (qId: string, val: number | string) => {
    setAnswers((prev) => ({ ...prev, [qId]: val }));
  };

  const toggleFlag = (qId: string) => {
    setFlaggedQuestions((prev) => ({ ...prev, [qId]: !prev[qId] }));
  };

  const handleSubmitExam = async () => {
    // Calculate scores per section
    let listeningScore = 0;
    let readingScore = 0;
    let writingScore = 0;

    const strongTopics: string[] = [];
    const weakTopics: string[] = [];

    allQuestions.forEach(({ question }) => {
      const userAns = answers[question.id];
      const isCorrect = userAns === question.correctAnswer;

      if (isCorrect) {
        if (question.section === 'listening') listeningScore += question.points;
        else if (question.section === 'reading') readingScore += question.points;
        else if (question.section === 'writing') writingScore += question.points;

        if (!strongTopics.includes(question.topicTag)) {
          strongTopics.push(question.topicTag);
        }
      } else {
        if (!weakTopics.includes(question.topicTag)) {
          weakTopics.push(question.topicTag);
        }
      }
    });

    const totalScore = listeningScore + readingScore + writingScore;
    const maxPossible = exam.maxScore;
    const percentage = Math.round((totalScore / maxPossible) * 100);

    // Determine estimated level
    let estimatedLevel = 'No Clasificado';
    if (exam.code === 'TOPIK_I') {
      if (totalScore >= 140) estimatedLevel = 'TOPIK Nivel 2 (Avanzado Principiante)';
      else if (totalScore >= 80) estimatedLevel = 'TOPIK Nivel 1 (Principiante Básico)';
      else estimatedLevel = 'Bajo el umbral (Requiere consolidar Nivel 0 y 1)';
    } else {
      if (totalScore >= 230) estimatedLevel = 'TOPIK Nivel 6 (Maestría Superior)';
      else if (totalScore >= 190) estimatedLevel = 'TOPIK Nivel 5 (Avanzado)';
      else if (totalScore >= 150) estimatedLevel = 'TOPIK Nivel 4 (Intermedio Alto)';
      else if (totalScore >= 120) estimatedLevel = 'TOPIK Nivel 3 (Intermedio)';
      else estimatedLevel = 'Bajo el umbral TOPIK II (Requiere preparación previa)';
    }

    const recommendations: string[] = [];
    if (weakTopics.length > 0) {
      weakTopics.slice(0, 3).forEach((topic) => {
        recommendations.push(`Reforzar el área de: "${topic}" mediante el Laboratorio de Gramática y Lectura.`);
      });
    } else {
      recommendations.push('¡Desempeño excepcional! Mantén tu velocidad de resolución y lectura analítica.');
    }

    const timeSpent = totalExamSeconds - secondsRemaining;
    const resultId = 'sim-' + Date.now();

    const simulationResult: TopikSimulationResult = {
      id: resultId,
      examType: exam.code,
      completedAt: new Date().toISOString(),
      timeSpentSeconds: timeSpent,
      scores: {
        listening: listeningScore,
        reading: readingScore,
        writing: writingScore,
        total: totalScore,
        maxPossible,
        percentage
      },
      estimatedLevel,
      answers,
      strongTopics,
      weakTopics,
      recommendations
    };

    await saveTopikResult(simulationResult);
    sessionStorage.setItem('latest_topik_result', JSON.stringify(simulationResult));
    navigate(`/topik-resultado/${resultId}`);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6 animate-fade-in">
      {/* Top Fixed Floating Exam Banner */}
      <div className="bg-navy-950 text-white rounded-2xl p-4 shadow-xl flex flex-wrap items-center justify-between gap-4 sticky top-16 z-30 border border-navy-800">
        <div>
          <span className="text-[10px] font-bold uppercase tracking-widest text-sky-400">
            {exam.title}
          </span>
          <div className="text-sm font-bold text-white">
            {currentItem.sectionName} — Pregunta {currentItem.question.number} de {allQuestions.length}
          </div>
        </div>

        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2 bg-navy-900 px-3 py-1.5 rounded-xl border border-navy-800">
            <Clock className="w-4 h-4 text-amber-400" />
            <span className="font-mono font-bold text-amber-300 text-sm">
              {formatTimer(secondsRemaining)}
            </span>
          </div>

          <div className="hidden sm:block text-xs text-slate-300 font-semibold">
            Respondidas: <strong className="text-white">{answeredCount}</strong>/{allQuestions.length}
          </div>

          <button
            onClick={() => setShowSubmitModal(true)}
            className="py-2 px-4 rounded-xl font-bold bg-crimson-600 hover:bg-crimson-500 text-white text-xs transition-colors shadow-md flex items-center gap-1.5"
          >
            <Send className="w-3.5 h-3.5" />
            <span>Finalizar Examen</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Left / Center: Active Question Workspace */}
        <div className="lg:col-span-3 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
          {/* Question SubType Header */}
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-md text-[10px] font-black uppercase text-white bg-navy-800">
                P{currentItem.question.number}
              </span>
              <span className="text-xs font-bold text-slate-500">
                {currentItem.question.subType}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold text-slate-400">
                Valor: {currentItem.question.points} pts
              </span>
              <button
                onClick={() => toggleFlag(currentItem.question.id)}
                title="Marcar pregunta para revisar después"
                className={`p-1.5 rounded-lg border transition-colors ${
                  flaggedQuestions[currentItem.question.id]
                    ? 'bg-amber-100 text-amber-800 border-amber-300'
                    : 'bg-slate-50 text-slate-400 border-slate-200 hover:text-slate-600'
                }`}
              >
                <Flag className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Instructions */}
          <div className="text-xs font-bold text-navy-900 bg-navy-50/60 p-3 rounded-xl border border-navy-100">
            {currentItem.question.instructions}
          </div>

          {/* Audio section for listening */}
          {currentItem.question.audioText && (
            <div className="p-4 rounded-2xl bg-indigo-50 border border-indigo-100 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-indigo-950 flex items-center gap-1.5">
                  <Volume2 className="w-4 h-4 text-indigo-600" /> Audio Oficial de la Pregunta
                </span>
                <AudioButton
                  text={currentItem.question.audioText}
                  size="md"
                  label="Reproducir Audio"
                  showSlowToggle
                />
              </div>
              <p className="text-[11px] text-indigo-800/80">
                En el examen oficial escucharás la conversación antes de responder.
              </p>
            </div>
          )}

          {/* Reading passage if present */}
          {currentItem.question.passage && (
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 text-slate-900 font-hangul text-base leading-relaxed whitespace-pre-wrap">
              {currentItem.question.passage}
            </div>
          )}

          {/* Options List */}
          <div className="space-y-3 pt-2">
            {currentItem.question.options?.map((opt, optIdx) => {
              const isSelected = answers[currentItem.question.id] === optIdx;

              return (
                <button
                  key={optIdx}
                  onClick={() => handleSelectAnswer(currentItem.question.id, optIdx)}
                  className={`w-full p-4 rounded-2xl border text-sm text-left transition-all flex items-center gap-3 font-hangul ${
                    isSelected
                      ? 'bg-navy-800 border-navy-800 text-white font-bold shadow-md'
                      : 'bg-white border-slate-200 text-slate-800 hover:border-navy-300 hover:bg-slate-50'
                  }`}
                >
                  <span
                    className={`w-7 h-7 rounded-full flex items-center justify-center font-mono text-xs font-bold shrink-0 ${
                      isSelected
                        ? 'bg-white text-navy-900'
                        : 'bg-slate-100 text-slate-600'
                    }`}
                  >
                    {optIdx + 1}
                  </span>
                  <span>{opt}</span>
                </button>
              );
            })}
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between pt-6 border-t border-slate-100">
            <button
              onClick={() => setCurrentQuestionIndex((prev) => Math.max(0, prev - 1))}
              disabled={currentQuestionIndex === 0}
              className="py-2.5 px-4 rounded-xl border border-slate-200 text-xs font-semibold text-slate-700 hover:bg-slate-50 disabled:opacity-40 transition-colors flex items-center gap-1.5"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Pregunta Anterior</span>
            </button>

            <button
              onClick={() => setCurrentQuestionIndex((prev) => Math.min(allQuestions.length - 1, prev + 1))}
              disabled={currentQuestionIndex === allQuestions.length - 1}
              className="py-2.5 px-4 rounded-xl font-bold bg-navy-800 hover:bg-navy-900 text-white text-xs disabled:opacity-40 transition-all flex items-center gap-1.5 shadow-sm"
            >
              <span>Siguiente Pregunta</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Right: Question Navigation Palette */}
        <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-4 h-fit">
          <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
            Paleta de Preguntas ({allQuestions.length})
          </div>

          <div className="grid grid-cols-4 gap-2">
            {allQuestions.map((qItem, idx) => {
              const isAnswered = answers[qItem.question.id] !== undefined;
              const isCurrent = currentQuestionIndex === idx;
              const isFlagged = flaggedQuestions[qItem.question.id];

              let badgeStyle = 'bg-slate-100 text-slate-600 border-slate-200';
              if (isCurrent) {
                badgeStyle = 'bg-navy-900 text-white ring-2 ring-navy-700 font-bold';
              } else if (isAnswered) {
                badgeStyle = 'bg-emerald-100 text-emerald-800 border-emerald-300 font-bold';
              }

              return (
                <button
                  key={qItem.question.id}
                  onClick={() => setCurrentQuestionIndex(idx)}
                  className={`p-2.5 rounded-xl text-xs font-mono border relative transition-all ${badgeStyle}`}
                >
                  <span>{qItem.question.number}</span>
                  {isFlagged && (
                    <span className="w-2 h-2 rounded-full bg-amber-500 absolute top-1 right-1"></span>
                  )}
                </button>
              );
            })}
          </div>

          <div className="pt-3 border-t border-slate-100 space-y-1.5 text-[11px] text-slate-500">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-emerald-100 border border-emerald-300"></span>
              <span>Respondida</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-slate-100 border border-slate-200"></span>
              <span>Sin responder</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-amber-500"></span>
              <span>Marcada para revisión</span>
            </div>
          </div>
        </div>
      </div>

      {/* Submit Confirmation Dialog */}
      {showSubmitModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 space-y-4 shadow-2xl border border-slate-200">
            <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center font-bold">
              <AlertTriangle className="w-6 h-6" />
            </div>

            <div>
              <h3 className="text-xl font-bold text-slate-900">¿Deseas finalizar el simulacro?</h3>
              <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                Has respondido <strong className="text-slate-900">{answeredCount}</strong> de{' '}
                <strong className="text-slate-900">{allQuestions.length}</strong> preguntas.
                Al entregar, el sistema computará tus puntajes y emitirá el reporte de nivel alcanzado.
              </p>
            </div>

            <div className="flex items-center gap-3 pt-3">
              <button
                onClick={() => setShowSubmitModal(false)}
                className="flex-1 py-3 px-4 rounded-xl font-semibold bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs transition-colors"
              >
                Volver al Examen
              </button>
              <button
                onClick={handleSubmitExam}
                className="flex-1 py-3 px-4 rounded-xl font-bold bg-crimson-600 hover:bg-crimson-500 text-white text-xs transition-all shadow-md shadow-crimson-600/20"
              >
                Confirmar y Entregar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
