// ==============================================================================
// KOREAN ACADEMY - INTERACTIVE HANGUL LAB (한글 마당)
// ==============================================================================
import React, { useState } from 'react';
import {
  Volume2,
  Sparkles,
  Layers,
  BookOpen,
  RotateCcw,
  CheckCircle2,
  HelpCircle,
  Play
} from 'lucide-react';
import {
  BASIC_CONSONANTS,
  DOUBLE_CONSONANTS,
  BASIC_VOWELS,
  COMPOUND_VOWELS,
  BATCHIM_RULES,
  CHOSUNG_LIST,
  JUNGSUNG_LIST,
  JONGSUNG_LIST,
  composeHangul,
  HangulChar
} from '../data/hangulData';
import { AudioButton } from '../components/AudioButton';

export const HangulView: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'alphabet' | 'builder' | 'batchim' | 'quiz'>('alphabet');
  const [selectedChar, setSelectedChar] = useState<HangulChar | null>(BASIC_CONSONANTS[0]);

  // Syllable Builder State
  const [selectedCho, setSelectedCho] = useState<number>(11); // 'ㅇ' index 11
  const [selectedJung, setSelectedJung] = useState<number>(0);  // 'ㅏ' index 0
  const [selectedJong, setSelectedJong] = useState<number>(0);  // none index 0

  const assembledChar = composeHangul(selectedCho, selectedJung, selectedJong);

  // Quiz State
  const [quizScore, setQuizScore] = useState<number>(0);
  const [quizIndex, setQuizIndex] = useState<number>(0);
  const [selectedQuizOption, setSelectedQuizOption] = useState<string | null>(null);
  const [quizAnswered, setQuizAnswered] = useState<boolean>(false);

  const quizQuestions = [
    {
      prompt: '¿Cuál es la consonante muda al inicio de una sílaba?',
      options: ['ㄱ', 'ㅁ', 'ㅇ', 'ㅎ'],
      correct: 'ㅇ',
      explanation: 'ㅇ (I-eung) es muda al inicio de una sílaba y sirve de soporte estético para la vocal.'
    },
    {
      prompt: '¿Cómo suena la vocal ㅓ (eo)?',
      options: [
        'Como una "o" cerrada con labios en círculo.',
        'Como una "o" emitida con la boca abierta en posición de "a".',
        'Exactamente igual a la "i" en español.',
        'Como una "u" francesa.'
      ],
      correct: 'Como una "o" emitida con la boca abierta en posición de "a".',
      explanation: 'ㅓ es una vocal media abierta no redondeada.'
    },
    {
      prompt: '¿A cuál de los 7 sonidos representativos corresponde la palabra "옷" (ropa)?',
      options: ['[옥]', '[옫]', '[옷]', '[올]'],
      correct: '[옫]',
      explanation: 'La consonante ㅅ al final como batchim se pronuncia siempre como el sonido seco [ㄷ].'
    }
  ];

  const handleQuizAnswer = (opt: string) => {
    if (quizAnswered) return;
    setSelectedQuizOption(opt);
    setQuizAnswered(true);
    if (opt === quizQuestions[quizIndex].correct) {
      setQuizScore((prev) => prev + 1);
    }
  };

  const nextQuiz = () => {
    setQuizAnswered(false);
    setSelectedQuizOption(null);
    setQuizIndex((prev) => (prev + 1) % quizQuestions.length);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 animate-fade-in">
      {/* Header */}
      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-50 text-crimson-600 text-xs font-semibold border border-rose-200">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Laboratorio del Alfabeto Coreano</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
          Hangul Interactivo (한글)
        </h1>
        <p className="text-sm text-slate-600 max-w-2xl leading-relaxed">
          Aprende el sistema de escritura más científico del mundo: escucha cada letra, ensambla bloques silábicos y domina las reglas del Batchim.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-2 border-b border-slate-200 overflow-x-auto pb-2 scrollbar-none">
        {[
          { id: 'alphabet', label: '1. Tabla Completa de Letras' },
          { id: 'builder', label: '2. Constructor de Sílabas' },
          { id: 'batchim', label: '3. Reglas del Batchim' },
          { id: 'quiz', label: '4. Práctica de Reconocimiento' },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)}
            className={`px-4 py-2.5 rounded-2xl text-xs font-bold transition-all whitespace-nowrap ${
              activeTab === tab.id
                ? 'bg-navy-800 text-white shadow-sm'
                : 'bg-white text-slate-600 hover:text-slate-900 hover:bg-slate-50 border border-slate-200'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* TAB 1: ALPHABET GRID */}
      {activeTab === 'alphabet' && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            {/* 14 Basic Consonants */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-slate-900 text-sm">
                  14 Consonantes Básicas (기본 자음)
                </h3>
                <span className="text-xs text-slate-400">Clic para escuchar</span>
              </div>
              <div className="grid grid-cols-4 sm:grid-cols-7 gap-2.5">
                {BASIC_CONSONANTS.map((c) => (
                  <button
                    key={c.char}
                    onClick={() => setSelectedChar(c)}
                    className={`p-3 rounded-2xl border text-center transition-all flex flex-col items-center justify-center gap-1 ${
                      selectedChar?.char === c.char
                        ? 'bg-navy-800 text-white border-navy-800 shadow-md scale-105'
                        : 'bg-slate-50 border-slate-200 hover:border-navy-300 text-slate-800'
                    }`}
                  >
                    <span className="text-2xl font-bold font-hangul">{c.char}</span>
                    <span className="text-[10px] opacity-70 font-mono">{c.romanization}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* 5 Double Consonants */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-4">
              <h3 className="font-bold text-slate-900 text-sm">
                5 Consonantes Dobles / Tensas (쌍자음)
              </h3>
              <div className="grid grid-cols-5 gap-2.5">
                {DOUBLE_CONSONANTS.map((c) => (
                  <button
                    key={c.char}
                    onClick={() => setSelectedChar(c)}
                    className={`p-3 rounded-2xl border text-center transition-all flex flex-col items-center justify-center gap-1 ${
                      selectedChar?.char === c.char
                        ? 'bg-navy-800 text-white border-navy-800 shadow-md scale-105'
                        : 'bg-slate-50 border-slate-200 hover:border-navy-300 text-slate-800'
                    }`}
                  >
                    <span className="text-2xl font-bold font-hangul text-crimson-600">{c.char}</span>
                    <span className="text-[10px] opacity-70 font-mono">{c.romanization}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* 10 Basic Vowels */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-4">
              <h3 className="font-bold text-slate-900 text-sm">
                10 Vocales Básicas (기본 모음)
              </h3>
              <div className="grid grid-cols-5 gap-2.5">
                {BASIC_VOWELS.map((v) => (
                  <button
                    key={v.char}
                    onClick={() => setSelectedChar(v)}
                    className={`p-3 rounded-2xl border text-center transition-all flex flex-col items-center justify-center gap-1 ${
                      selectedChar?.char === v.char
                        ? 'bg-navy-800 text-white border-navy-800 shadow-md scale-105'
                        : 'bg-slate-50 border-slate-200 hover:border-navy-300 text-slate-800'
                    }`}
                  >
                    <span className="text-2xl font-bold font-hangul text-korean-blue">{v.char}</span>
                    <span className="text-[10px] opacity-70 font-mono">{v.romanization}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* 11 Compound Vowels */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-4">
              <h3 className="font-bold text-slate-900 text-sm">
                11 Vocales Compuestas (이중 모음)
              </h3>
              <div className="grid grid-cols-4 sm:grid-cols-6 gap-2.5">
                {COMPOUND_VOWELS.map((v) => (
                  <button
                    key={v.char}
                    onClick={() => setSelectedChar(v)}
                    className={`p-3 rounded-2xl border text-center transition-all flex flex-col items-center justify-center gap-1 ${
                      selectedChar?.char === v.char
                        ? 'bg-navy-800 text-white border-navy-800 shadow-md scale-105'
                        : 'bg-slate-50 border-slate-200 hover:border-navy-300 text-slate-800'
                    }`}
                  >
                    <span className="text-2xl font-bold font-hangul text-indigo-600">{v.char}</span>
                    <span className="text-[10px] opacity-70 font-mono">{v.romanization}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Letter Detail Card */}
          <div className="space-y-4">
            {selectedChar && (
              <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-6 sticky top-24">
                <div className="text-center space-y-3 pb-6 border-b border-slate-100">
                  <div className="w-24 h-24 mx-auto rounded-3xl bg-slate-50 border border-slate-200 flex items-center justify-center shadow-inner">
                    <span className="text-6xl font-black font-hangul text-slate-900">
                      {selectedChar.char}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">{selectedChar.name}</h3>
                    <span className="text-xs font-mono text-slate-400">
                      Sonido: [{selectedChar.romanization}]
                    </span>
                  </div>
                  <AudioButton
                    text={
                      selectedChar.category.includes('vowel')
                        ? `ㅇ${selectedChar.char}`
                        : `${selectedChar.char}ㅏ`
                    }
                    size="lg"
                    label="Reproducir Sonido"
                    showSlowToggle
                  />
                </div>

                <div className="space-y-4 text-xs">
                  <div>
                    <div className="font-bold text-slate-400 uppercase tracking-wider mb-1">
                      Articulación y Fonética
                    </div>
                    <p className="text-slate-600 leading-relaxed bg-slate-50 p-3 rounded-xl border border-slate-100">
                      {selectedChar.soundDescription}
                    </p>
                  </div>

                  <div>
                    <div className="font-bold text-slate-400 uppercase tracking-wider mb-1">
                      Ejemplo en Palabra Real
                    </div>
                    <div className="p-3 bg-navy-50 border border-navy-100 rounded-xl flex items-center justify-between">
                      <div>
                        <div className="text-base font-bold font-hangul text-navy-950">
                          {selectedChar.sampleWord.hangul}
                        </div>
                        <div className="text-[11px] text-slate-500">
                          {selectedChar.sampleWord.spanish} ({selectedChar.sampleWord.romanization})
                        </div>
                      </div>
                      <AudioButton text={selectedChar.sampleWord.hangul} size="sm" />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* TAB 2: SYLLABLE BUILDER */}
      {activeTab === 'builder' && (
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm space-y-8">
          <div className="max-w-2xl space-y-2">
            <h3 className="text-xl font-bold text-slate-900">Constructor de Bloques Silábicos</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              En coreano las letras no se colocan en línea: se combinan en bloques cuadrados.
              Selecciona una Consonante Inicial (초성), una Vocal Medial (중성) y opcionalmente un Batchim Final (종성).
            </p>
          </div>

          {/* Assembled Big Preview */}
          <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-center justify-center gap-8">
            <div className="w-36 h-36 rounded-3xl bg-white border-2 border-navy-800 shadow-xl flex items-center justify-center">
              <span className="text-7xl font-black font-hangul text-navy-950">
                {assembledChar}
              </span>
            </div>
            <div className="space-y-3 text-center sm:text-left">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Estructura del Bloque
              </div>
              <div className="text-sm font-semibold text-slate-700 space-y-1">
                <div>Inicial (초성): <strong className="text-slate-900">{CHOSUNG_LIST[selectedCho]}</strong></div>
                <div>Medial (중성): <strong className="text-slate-900">{JUNGSUNG_LIST[selectedJung]}</strong></div>
                <div>Final (종성): <strong className="text-slate-900">{JONGSUNG_LIST[selectedJong] || '(Ninguno)'}</strong></div>
              </div>
              <AudioButton text={assembledChar} size="lg" label="Escuchar Sílaba" showSlowToggle />
            </div>
          </div>

          {/* Selectors Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-slate-100">
            {/* Initial */}
            <div className="space-y-3">
              <div className="text-xs font-bold uppercase text-slate-500">
                1. Consonante Inicial (초성)
              </div>
              <div className="grid grid-cols-5 gap-1.5 max-h-56 overflow-y-auto p-1 border border-slate-200 rounded-2xl">
                {CHOSUNG_LIST.map((c, i) => (
                  <button
                    key={c}
                    onClick={() => setSelectedCho(i)}
                    className={`p-2 rounded-xl text-center font-hangul font-bold text-sm transition-colors ${
                      selectedCho === i ? 'bg-navy-800 text-white' : 'bg-slate-50 hover:bg-slate-100 text-slate-800'
                    }`}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>

            {/* Medial */}
            <div className="space-y-3">
              <div className="text-xs font-bold uppercase text-slate-500">
                2. Vocal Medial (중성)
              </div>
              <div className="grid grid-cols-5 gap-1.5 max-h-56 overflow-y-auto p-1 border border-slate-200 rounded-2xl">
                {JUNGSUNG_LIST.map((v, i) => (
                  <button
                    key={v}
                    onClick={() => setSelectedJung(i)}
                    className={`p-2 rounded-xl text-center font-hangul font-bold text-sm transition-colors ${
                      selectedJung === i ? 'bg-navy-800 text-white' : 'bg-slate-50 hover:bg-slate-100 text-slate-800'
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Final Batchim */}
            <div className="space-y-3">
              <div className="text-xs font-bold uppercase text-slate-500">
                3. Consonante Final (종성 / 받침)
              </div>
              <div className="grid grid-cols-5 gap-1.5 max-h-56 overflow-y-auto p-1 border border-slate-200 rounded-2xl">
                {JONGSUNG_LIST.map((f, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedJong(i)}
                    className={`p-2 rounded-xl text-center font-hangul font-bold text-sm transition-colors ${
                      selectedJong === i ? 'bg-navy-800 text-white' : 'bg-slate-50 hover:bg-slate-100 text-slate-800'
                    }`}
                  >
                    {f || '∅'}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 3: BATCHIM RULES */}
      {activeTab === 'batchim' && (
        <div className="space-y-6">
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-3">
            <h3 className="text-xl font-bold text-slate-900">Las 7 Reglas de Sonido del Batchim</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Aunque muchas consonantes pueden escribirse al final de la sílaba, cuando se pronuncian de forma aislada solo existen 7 sonidos posibles en coreano:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {BATCHIM_RULES.map((rule, idx) => (
              <div key={idx} className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-lg font-black font-hangul text-crimson-600">
                    {rule.representativeSound}
                  </span>
                  <div className="flex items-center gap-1 font-hangul text-xs font-bold text-slate-700 bg-slate-100 px-2.5 py-1 rounded-xl">
                    {rule.consonants.join(', ')}
                  </div>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed">{rule.explanation}</p>

                <div className="space-y-2 pt-2 border-t border-slate-100">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                    Palabras de Ejemplo
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {rule.examples.map((ex, eIdx) => (
                      <div
                        key={eIdx}
                        className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between"
                      >
                        <div>
                          <div className="text-sm font-bold font-hangul text-slate-900">
                            {ex.hangul} <span className="text-xs text-crimson-600">{ex.pronunciation}</span>
                          </div>
                          <div className="text-[11px] text-slate-500">{ex.spanish}</div>
                        </div>
                        <AudioButton text={ex.hangul} size="sm" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 4: QUIZ */}
      {activeTab === 'quiz' && (
        <div className="max-w-xl mx-auto bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
          <div className="flex items-center justify-between pb-4 border-b border-slate-100">
            <span className="text-xs font-bold text-slate-400">
              Pregunta {quizIndex + 1} de {quizQuestions.length}
            </span>
            <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full">
              Puntos: {quizScore}
            </span>
          </div>

          <h3 className="text-base font-bold text-slate-900">
            {quizQuestions[quizIndex].prompt}
          </h3>

          <div className="space-y-2">
            {quizQuestions[quizIndex].options.map((opt) => {
              const isSelected = selectedQuizOption === opt;
              const isCorrect = opt === quizQuestions[quizIndex].correct;

              let style = 'bg-slate-50 border-slate-200 text-slate-800 hover:bg-slate-100';
              if (quizAnswered) {
                if (isCorrect) style = 'bg-emerald-100 border-emerald-400 text-emerald-900 font-bold';
                else if (isSelected) style = 'bg-red-100 border-red-300 text-red-900';
              }

              return (
                <button
                  key={opt}
                  disabled={quizAnswered}
                  onClick={() => handleQuizAnswer(opt)}
                  className={`w-full p-3.5 rounded-2xl border text-sm text-left transition-all ${style}`}
                >
                  {opt}
                </button>
              );
            })}
          </div>

          {quizAnswered && (
            <div className="p-4 rounded-2xl bg-sky-50 border border-sky-100 text-xs text-sky-900 space-y-3">
              <p>{quizQuestions[quizIndex].explanation}</p>
              <button
                onClick={nextQuiz}
                className="w-full py-2.5 rounded-xl font-bold bg-navy-800 hover:bg-navy-900 text-white text-xs transition-colors"
              >
                Siguiente Pregunta
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
