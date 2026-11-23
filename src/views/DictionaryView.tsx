// ==============================================================================
// KOREAN ACADEMY - SMART DICTIONARY VIEW (스마트 사전)
// ==============================================================================
import React, { useState, useMemo } from 'react';
import {
  Search,
  BookOpen,
  Star,
  Volume2,
  Filter,
  Sparkles,
  Tag,
  Check
} from 'lucide-react';
import { VOCABULARY_DATABASE } from '../data/vocabularyData';
import { useProgress } from '../context/ProgressContext';
import { AudioButton } from '../components/AudioButton';
import { VocabularyWord } from '../types';

export const DictionaryView: React.FC = () => {
  const { favoriteWordIds, toggleFavoriteWord } = useProgress();

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLevel, setSelectedLevel] = useState<number | 'all'>('all');
  const [selectedPos, setSelectedPos] = useState<string>('all');
  const [onlyFavorites, setOnlyFavorites] = useState(false);

  const filteredWords = useMemo(() => {
    return VOCABULARY_DATABASE.filter((w) => {
      // Search matches Hangul, Spanish or Romanization
      const matchesSearch =
        !searchQuery.trim() ||
        w.hangul.toLowerCase().includes(searchQuery.toLowerCase()) ||
        w.spanish.toLowerCase().includes(searchQuery.toLowerCase()) ||
        w.romanization.toLowerCase().includes(searchQuery.toLowerCase());

      // Level filter
      const matchesLevel = selectedLevel === 'all' || w.level === selectedLevel;

      // Part of speech filter
      const matchesPos = selectedPos === 'all' || w.partOfSpeech === selectedPos;

      // Favorites filter
      const matchesFav = !onlyFavorites || favoriteWordIds.includes(w.id);

      return matchesSearch && matchesLevel && matchesPos && matchesFav;
    });
  }, [searchQuery, selectedLevel, selectedPos, onlyFavorites, favoriteWordIds]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 animate-fade-in">
      {/* Header */}
      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 text-korean-blue text-xs font-semibold border border-sky-200">
          <BookOpen className="w-3.5 h-3.5" />
          <span>Diccionario Bilingüe Inteligente</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
          Diccionario Coreano — Español
        </h1>
        <p className="text-sm text-slate-600 max-w-2xl leading-relaxed">
          Consulta términos con caracteres Hanja de origen, pronunciación en audio con velocidad ajustable, oraciones contextuales reales y guarda palabras en tus favoritos.
        </p>
      </div>

      {/* Search & Filters Bar */}
      <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-4">
        {/* Main Search Input */}
        <div className="relative">
          <Search className="w-5 h-5 text-slate-400 absolute left-4 top-3.5" />
          <input
            type="text"
            placeholder="Buscar en Hangul, español o pronunciación (ej. 학교, escuela, hakgyo)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3.5 text-sm rounded-2xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-navy-600 bg-slate-50 focus:bg-white transition-all"
          />
        </div>

        {/* Filter Badges */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-2 text-xs">
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1">
              <Filter className="w-3 h-3" /> Filtrar:
            </span>

            {/* Level Selector */}
            <select
              value={selectedLevel}
              onChange={(e) => setSelectedLevel(e.target.value === 'all' ? 'all' : Number(e.target.value))}
              className="py-1.5 px-3 rounded-xl border border-slate-200 bg-white font-semibold text-slate-700"
            >
              <option value="all">Todos los niveles (0 a 5)</option>
              <option value="0">Nivel 0: Fundamentos</option>
              <option value="1">Nivel 1: A1</option>
              <option value="2">Nivel 2: A2</option>
              <option value="3">Nivel 3: B1</option>
              <option value="4">Nivel 4: B2</option>
              <option value="5">Nivel 5: C1-C2</option>
            </select>

            {/* POS Selector */}
            <select
              value={selectedPos}
              onChange={(e) => setSelectedPos(e.target.value)}
              className="py-1.5 px-3 rounded-xl border border-slate-200 bg-white font-semibold text-slate-700"
            >
              <option value="all">Todas las categorías</option>
              <option value="sustantivo">Sustantivos</option>
              <option value="verbo">Verbos</option>
              <option value="adjetivo">Adjetivos</option>
              <option value="expresión">Expresiones</option>
              <option value="conector">Conectores</option>
            </select>
          </div>

          {/* Favorites only button */}
          <button
            onClick={() => setOnlyFavorites(!onlyFavorites)}
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl font-bold transition-all ${
              onlyFavorites
                ? 'bg-amber-100 text-amber-900 border border-amber-300'
                : 'bg-slate-100 text-slate-600 border border-slate-200 hover:bg-slate-200'
            }`}
          >
            <Star className={`w-3.5 h-3.5 ${onlyFavorites ? 'fill-amber-500 text-amber-500' : ''}`} />
            <span>Mis Favoritos ({favoriteWordIds.length})</span>
          </button>
        </div>
      </div>

      {/* Results Count */}
      <div className="flex items-center justify-between text-xs text-slate-400 px-1">
        <span>Mostrando {filteredWords.length} términos</span>
        {searchQuery && (
          <button
            onClick={() => setSearchQuery('')}
            className="text-navy-700 font-bold hover:underline"
          >
            Limpiar búsqueda
          </button>
        )}
      </div>

      {/* Words Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredWords.map((word) => {
          const isFav = favoriteWordIds.includes(word.id);

          return (
            <div
              key={word.id}
              className="bg-white rounded-3xl p-5 border border-slate-200 hover:border-navy-300 shadow-sm hover:shadow-md transition-all flex flex-col justify-between space-y-4 group"
            >
              <div className="space-y-3">
                <div className="flex items-start justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded-md text-[10px] font-black uppercase text-white bg-navy-800">
                      Nivel {word.level}
                    </span>
                    <span className="px-2 py-0.5 rounded-md text-[10px] font-semibold text-slate-600 bg-slate-100">
                      {word.partOfSpeech}
                    </span>
                  </div>

                  <button
                    onClick={() => toggleFavoriteWord(word.id)}
                    title={isFav ? 'Quitar de favoritos' : 'Guardar en favoritos'}
                    className="p-1.5 rounded-xl hover:bg-slate-100 transition-colors"
                  >
                    <Star
                      className={`w-4 h-4 ${
                        isFav ? 'fill-amber-400 text-amber-500' : 'text-slate-300 hover:text-amber-400'
                      }`}
                    />
                  </button>
                </div>

                <div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-black font-hangul text-slate-900 group-hover:text-navy-900 transition-colors">
                      {word.hangul}
                    </span>
                    {word.hanja && (
                      <span className="text-xs text-slate-400 font-serif">
                        ({word.hanja})
                      </span>
                    )}
                  </div>
                  <div className="text-xs font-mono text-amber-800 mt-0.5">
                    [{word.romanization}]
                  </div>
                  <div className="text-sm font-bold text-slate-800 mt-1">
                    {word.spanish}
                  </div>
                </div>

                {/* Example sentence */}
                <div className="p-3 rounded-2xl bg-slate-50 border border-slate-100 space-y-1 text-xs">
                  <div className="font-hangul font-bold text-slate-900">
                    {word.exampleKorean}
                  </div>
                  <div className="text-slate-500">{word.exampleSpanish}</div>
                </div>
              </div>

              <div className="pt-2 flex items-center justify-between">
                <span className="text-[11px] text-slate-400">
                  Tema: <strong className="capitalize text-slate-600">{word.topic}</strong>
                </span>
                <AudioButton text={word.hangul} size="sm" showSlowToggle />
              </div>
            </div>
          );
        })}
      </div>

      {filteredWords.length === 0 && (
        <div className="bg-white rounded-3xl p-12 border border-slate-200 text-center space-y-3">
          <BookOpen className="w-10 h-10 text-slate-300 mx-auto" />
          <h3 className="text-base font-bold text-slate-800">No se encontraron palabras</h3>
          <p className="text-xs text-slate-400 max-w-sm mx-auto">
            Prueba ajustando los filtros de nivel o revisando los términos de búsqueda.
          </p>
        </div>
      )}
    </div>
  );
};
