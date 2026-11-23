// ==============================================================================
// KOREAN ACADEMY - VOCABULARY FLASHCARDS WITH SRS (플래시카드)
// ==============================================================================
import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import {
  BrainCircuit,
  RotateCw,
  CheckCircle2,
  XCircle,
  Volume2,
  Sparkles,
  ArrowRight,
  Filter,
  Check,
  RotateCcw
} from 'lucide-react';
import { VOCABULARY_DATABASE } from '../data/vocabularyData';
import { useProgress } from '../context/ProgressContext';
import { AudioButton } from '../components/AudioButton';

export const FlashcardsView: React.FC = () => {
  const { masteredWordIds, markWordMastered } = useProgress();

  const [selectedLevel, setSelectedLevel] = useState<number | 'all'>('all');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  // Filtered vocabulary list
  const activeDeck = VOCABULARY_DATABASE.filter(
    (w) => selectedLevel === 'all' || w.level === selectedLevel
  );

  const currentWord = activeDeck[currentIndex] || activeDeck[0];
  const isMastered = currentWord ? masteredWordIds.includes(currentWord.id) : false;

  const handleNext = () => {
    setIsFlipped(false);
    setCurrentIndex((prev) => (prev + 1) % activeDeck.length);
  };

  const handlePrev = () => {
    setIsFlipped(false);
    setCurrentIndex((prev) => (prev - 1 + activeDeck.length) % activeDeck.length);
  };

  const handleMarkLearned = async () => {
    if (currentWord) {
      await markWordMastered(currentWord.id);
      confetti({ particleCount: 30, spread: 40, origin: { y: 0.6 } });
    }
    handleNext();
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 animate-fade-in">
      {/* Header */}
      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 text-amber-800 text-xs font-semibold border border-amber-200">
          <BrainCircuit className="w-3.5 h-3.5 text-amber-600" />
          <span>Sistema de Repetición Espaciada (SRS)</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
          Tarjetas de Memoria (Flashcards)
        </h1>
        <p className="text-sm text-slate-600 max-w-xl leading-relaxed">
          Entrena la retención a largo plazo. Voltea la tarjeta para comprobar el significado, escucha la pronunciación y marca las palabras dominadas.
        </p>
      </div>

      {/* Level Filters & Stats Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-5 rounded-3xl border border-slate-200 shadow-sm">
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
            Nivel del Mazo:
          </span>
          <select
            value={selectedLevel}
            onChange={(e) => {
              setSelectedLevel(e.target.value === 'all' ? 'all' : Number(e.target.value));
              setCurrentIndex(0);
              setIsFlipped(false);
            }}
            className="py-1.5 px-3 rounded-xl border border-slate-200 bg-slate-50 text-xs font-bold text-slate-800"
          >
            <option value="all">Todas ({VOCABULARY_DATABASE.length} palabras)</option>
            <option value="0">Nivel 0: Fundamentos</option>
            <option value="1">Nivel 1: A1</option>
            <option value="2">Nivel 2: A2</option>
            <option value="3">Nivel 3: B1</option>
            <option value="4">Nivel 4: B2</option>
            <option value="5">Nivel 5: C1-C2</option>
          </select>
        </div>

        <div className="flex items-center gap-4 text-xs font-semibold text-slate-600">
          <span>
            Tarjeta {currentIndex + 1} de {activeDeck.length}
          </span>
          <span>•</span>
          <span className="text-emerald-700 font-bold bg-emerald-50 px-2.5 py-1 rounded-lg">
            Dominadas: {masteredWordIds.length}
          </span>
        </div>
      </div>

      {/* Flashcard Area */}
      {currentWord && (
        <div className="space-y-6">
          <div
            onClick={() => setIsFlipped(!isFlipped)}
            className="min-h-[340px] sm:min-h-[380px] bg-white rounded-3xl p-8 border-2 border-slate-200 hover:border-navy-400 shadow-md transition-all cursor-pointer flex flex-col justify-between relative group select-none"
          >
            {/* Top row */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-md text-[10px] font-black uppercase text-white bg-navy-800">
                  Nivel {currentWord.level}
                </span>
                <span className="text-xs font-bold text-slate-400 capitalize">
                  {currentWord.topic}
                </span>
              </div>
              <span className="text-xs font-bold text-slate-400 group-hover:text-navy-800 flex items-center gap-1">
                <RotateCw className="w-3.5 h-3.5" /> Clic para voltear
              </span>
            </div>

            {/* Middle Content: Front (Hangul) vs Back (Spanish & Example) */}
            <div className="text-center py-8 space-y-4">
              {!isFlipped ? (
                // FRONT
                <div className="space-y-2 animate-fade-in">
                  <div className="text-5xl sm:text-7xl font-black font-hangul text-slate-900 tracking-tight">
                    {currentWord.hangul}
                  </div>
                  {currentWord.hanja && (
                    <div className="text-sm text-slate-400 font-serif">
                      ({currentWord.hanja})
                    </div>
                  )}
                  <p className="text-xs text-slate-400 mt-2">¿Recuerdas qué significa?</p>
                </div>
              ) : (
                // BACK
                <div className="space-y-3 animate-fade-in">
                  <div className="text-3xl sm:text-4xl font-extrabold text-navy-950">
                    {currentWord.spanish}
                  </div>
                  <div className="text-sm font-mono text-amber-700">
                    [{currentWord.romanization}]
                  </div>
                  <div className="text-xs font-semibold text-slate-400 uppercase">
                    Categoría: {currentWord.partOfSpeech}
                  </div>

                  <div className="max-w-md mx-auto p-4 rounded-2xl bg-slate-50 border border-slate-100 text-xs space-y-1 text-left mt-4">
                    <div className="font-hangul font-bold text-slate-900 text-sm">
                      {currentWord.exampleKorean}
                    </div>
                    <div className="text-slate-500">{currentWord.exampleSpanish}</div>
                  </div>
                </div>
              )}
            </div>

            {/* Bottom Row */}
            <div className="flex items-center justify-between pt-4 border-t border-slate-100">
              <AudioButton text={currentWord.hangul} size="md" showSlowToggle />
              {isMastered && (
                <span className="text-xs font-bold text-emerald-600 flex items-center gap-1">
                  <CheckCircle2 className="w-4 h-4" /> Ya dominada
                </span>
              )}
            </div>
          </div>

          {/* Action Buttons: Still learning vs Mastered */}
          <div className="grid grid-cols-2 gap-4">
            <button
              onClick={handleNext}
              className="py-4 px-6 rounded-2xl font-bold bg-slate-100 hover:bg-slate-200 text-slate-800 text-sm transition-colors flex items-center justify-center gap-2"
            >
              <RotateCcw className="w-4 h-4 text-slate-500" />
              <span>Aún Aprendiendo</span>
            </button>

            <button
              onClick={handleMarkLearned}
              className="py-4 px-6 rounded-2xl font-bold bg-emerald-600 hover:bg-emerald-500 text-white text-sm transition-all shadow-md shadow-emerald-600/20 flex items-center justify-center gap-2"
            >
              <Check className="w-4 h-4" />
              <span>¡La Dominé! (+1)</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
