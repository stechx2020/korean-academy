// ==============================================================================
// KOREAN ACADEMY - PRONUNCIATION PRACTICE (발음 연습 & 음성 인식)
// ==============================================================================
import React, { useState, useEffect } from 'react';
import {
  Mic,
  MicOff,
  Volume2,
  Sparkles,
  Award,
  RotateCcw,
  AlertCircle,
  CheckCircle2,
  ChevronRight
} from 'lucide-react';
import {
  KoreanSpeechRecognizer,
  isSpeechRecognitionSupported,
  RecognitionResult
} from '../lib/speechRecognition';
import { AudioButton } from '../components/AudioButton';

export const PronunciationView: React.FC = () => {
  const isSupported = isSpeechRecognitionSupported();

  const phraseList = [
    { hangul: '안녕하세요', spanish: 'Hola / Buenos días', romanization: 'annyeonghaseyo', level: 0 },
    { hangul: '감사합니다', spanish: 'Muchas gracias', romanization: 'gamsahamnida', level: 0 },
    { hangul: '저는 학생이에요', spanish: 'Soy estudiante', romanization: 'jeoneun haksaeng-ieyo', level: 1 },
    { hangul: '한국어를 배워요', spanish: 'Aprendo coreano', romanization: 'hangugeoreul baewoyo', level: 1 },
    { hangul: '시간이 있으면 만나요', spanish: 'Si tienes tiempo nos vemos', romanization: 'sigani isseumyeon mannayo', level: 2 },
    { hangul: '일석이조예요', spanish: 'Matamos dos pájaros de un tiro', romanization: 'ilseok-ijoyeyo', level: 5 },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const activePhrase = phraseList[currentIndex];

  const [isRecording, setIsRecording] = useState(false);
  const [result, setResult] = useState<RecognitionResult | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const [recognizer, setRecognizer] = useState<KoreanSpeechRecognizer | null>(null);

  useEffect(() => {
    setRecognizer(new KoreanSpeechRecognizer());
  }, []);

  const handleStartRecording = () => {
    if (!recognizer) return;
    setErrorMessage(null);
    setResult(null);
    setIsRecording(true);

    recognizer.listen(
      activePhrase.hangul,
      (res) => {
        setResult(res);
      },
      (err) => {
        setErrorMessage(err);
        setIsRecording(false);
      },
      () => {
        setIsRecording(false);
      }
    );
  };

  const handleStopRecording = () => {
    if (recognizer) {
      recognizer.stop();
      setIsRecording(false);
    }
  };

  const handleNextPhrase = () => {
    setResult(null);
    setErrorMessage(null);
    setIsRecording(false);
    setCurrentIndex((prev) => (prev + 1) % phraseList.length);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 animate-fade-in">
      {/* Header */}
      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-50 text-rose-800 text-xs font-semibold border border-rose-200">
          <Mic className="w-3.5 h-3.5 text-rose-600" />
          <span>Laboratorio de Fonética por Voz</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
          Práctica y Evaluación de Pronunciación
        </h1>
        <p className="text-sm text-slate-600 max-w-2xl leading-relaxed">
          Escucha la dicción nativa en Hangul, graba tu voz con el micrófono y recibe una calificación de precisión acústica inmediata.
        </p>
      </div>

      {!isSupported && (
        <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900 text-xs flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
          <div>
            <strong>Navegador sin soporte de reconocimiento de voz:</strong> La API de reconocimiento de voz Web Speech funciona de manera óptima en Google Chrome, Microsoft Edge y navegadores Chromium. Aún puedes escuchar el modelo de audio nativo.
          </div>
        </div>
      )}

      {/* Main Pronunciation Card */}
      <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm space-y-8 text-center">
        <div className="flex items-center justify-between pb-4 border-b border-slate-100 text-xs">
          <span className="font-bold text-slate-400">
            Frase {currentIndex + 1} de {phraseList.length}
          </span>
          <span className="px-2.5 py-0.5 rounded-md font-bold uppercase text-white bg-navy-800 text-[10px]">
            Nivel {activePhrase.level}
          </span>
        </div>

        {/* Big Korean Text */}
        <div className="space-y-2 py-4">
          <div className="text-4xl sm:text-6xl font-black font-hangul text-slate-900 tracking-tight">
            {activePhrase.hangul}
          </div>
          <div className="text-sm font-mono text-amber-800">
            [{activePhrase.romanization}]
          </div>
          <div className="text-base font-bold text-slate-600">
            {activePhrase.spanish}
          </div>
        </div>

        {/* Listen Model */}
        <div className="flex items-center justify-center gap-3">
          <AudioButton
            text={activePhrase.hangul}
            size="lg"
            label="Escuchar Modelo Nativo"
            showSlowToggle
          />
        </div>

        {/* Recording Controls */}
        <div className="pt-6 border-t border-slate-100 space-y-4">
          <div className="flex items-center justify-center">
            {!isRecording ? (
              <button
                onClick={handleStartRecording}
                disabled={!isSupported}
                className="w-20 h-20 rounded-full bg-crimson-600 hover:bg-crimson-500 text-white shadow-xl shadow-crimson-600/30 flex items-center justify-center transition-transform hover:scale-105 disabled:opacity-50"
                title="Presiona para comenzar a hablar"
              >
                <Mic className="w-8 h-8" />
              </button>
            ) : (
              <button
                onClick={handleStopRecording}
                className="w-20 h-20 rounded-full bg-red-700 text-white shadow-xl flex items-center justify-center animate-pulse"
                title="Presiona para detener"
              >
                <MicOff className="w-8 h-8" />
              </button>
            )}
          </div>

          <div className="text-xs font-semibold text-slate-500">
            {isRecording
              ? '🎙️ Escuchando tu pronunciación... Habla claro hacia el micrófono.'
              : 'Presiona el micrófono para hablar en coreano.'}
          </div>
        </div>

        {/* Error message */}
        {errorMessage && (
          <div className="p-3.5 bg-red-50 text-red-700 rounded-2xl text-xs max-w-md mx-auto">
            {errorMessage}
          </div>
        )}

        {/* Results Feedback Card */}
        {result && (
          <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200 text-left space-y-4 max-w-lg mx-auto animate-fade-in">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Resultado Acústico
              </span>
              <span
                className={`text-sm font-black px-3 py-1 rounded-full ${
                  result.accuracyScore >= 80
                    ? 'bg-emerald-100 text-emerald-800'
                    : result.accuracyScore >= 60
                    ? 'bg-amber-100 text-amber-800'
                    : 'bg-red-100 text-red-800'
                }`}
              >
                Precisión: {result.accuracyScore}%
              </span>
            </div>

            <div className="space-y-1">
              <div className="text-xs text-slate-400">Lo que el sistema detectó:</div>
              <div className="text-lg font-bold font-hangul text-slate-900">
                "{result.transcript}"
              </div>
            </div>

            <div className="p-3.5 bg-white rounded-xl border border-slate-200 text-xs font-medium text-slate-700 flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span>{result.feedback}</span>
            </div>
          </div>
        )}

        {/* Next Phrase Button */}
        <div className="pt-4 flex justify-end">
          <button
            onClick={handleNextPhrase}
            className="py-2.5 px-5 rounded-xl font-bold bg-navy-800 hover:bg-navy-900 text-white text-xs transition-colors flex items-center gap-1.5"
          >
            <span>Siguiente Frase</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
