// ==============================================================================
// KOREAN ACADEMY - LANDING PAGE VIEW
// ==============================================================================
import React from 'react';
import { Link } from 'react-router-dom';
import {
  Sparkles,
  BookOpen,
  GraduationCap,
  Award,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  BrainCircuit,
  Volume2,
  Users,
  Compass,
  ChevronRight,
  Layers,
  Flame,
  Globe2
} from 'lucide-react';
import { CURRICULUM_LEVELS } from '../data/curriculumData';
import { AudioButton } from '../components/AudioButton';

export const LandingView: React.FC = () => {
  return (
    <div className="space-y-20 pb-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-navy-950 via-navy-900 to-slate-900 text-white pt-16 pb-24 px-4 sm:px-6 lg:px-8">
        {/* Decorative background glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-crimson-600/20 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute top-1/3 left-1/3 w-80 h-80 bg-korean-blue/20 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-6xl mx-auto relative z-10 text-center space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-semibold text-sky-300">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Academia Virtual Integral de Lengua Coreana</span>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
            <span className="text-slate-300">De 0 a TOPIK II</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white max-w-4xl mx-auto leading-tight">
            Aprende coreano con rigor, domina el{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-rose-300 to-sky-400 font-hangul">
              한글
            </span>{' '}
            y certifícate en el{' '}
            <span className="underline decoration-crimson-500 underline-offset-8">
              TOPIK
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed">
            Una plataforma educativa diseñada para hispanohablantes: 6 niveles curriculares estructurados, 11 pasos pedagógicos por clase, herramientas interactivas y simulacros oficiales de examen.
          </p>

          {/* Interactive audio preview banner */}
          <div className="inline-flex items-center gap-3 p-3 px-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md text-left shadow-xl">
            <div className="w-10 h-10 rounded-xl bg-crimson-600/30 border border-crimson-500/40 flex items-center justify-center">
              <span className="font-hangul font-black text-lg text-white">가</span>
            </div>
            <div>
              <div className="text-xs font-semibold text-slate-200">Prueba la pronunciación nativa interactiva:</div>
              <div className="text-sm font-bold text-amber-300 font-hangul flex items-center gap-2">
                "안녕하세요! 한국어 공부를 시작해 봐요."
              </div>
            </div>
            <AudioButton text="안녕하세요! 한국어 공부를 시작해 봐요." size="sm" label="Escuchar" />
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              to="/curriculum"
              className="w-full sm:w-auto px-8 py-4 rounded-2xl font-bold bg-crimson-600 hover:bg-crimson-500 text-white text-base shadow-lg shadow-crimson-600/30 transition-all flex items-center justify-center gap-2 group hover:scale-[1.02]"
            >
              <span>Comenzar en el Nivel 0</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/topik"
              className="w-full sm:w-auto px-8 py-4 rounded-2xl font-bold bg-white/10 hover:bg-white/20 text-white border border-white/20 text-base backdrop-blur-md transition-all flex items-center justify-center gap-2"
            >
              <GraduationCap className="w-5 h-5 text-sky-400" />
              <span>Ruta Oficial TOPIK I & II</span>
            </Link>
          </div>

          {/* Feature Highlights Banner */}
          <div className="pt-12 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto text-left border-t border-white/10">
            <div className="p-3">
              <div className="text-2xl font-black text-white">6 Niveles</div>
              <div className="text-xs text-slate-400">Desde Hangul hasta C2 avanzado</div>
            </div>
            <div className="p-3">
              <div className="text-2xl font-black text-sky-400">11 Pasos</div>
              <div className="text-xs text-slate-400">Estructura pedagógica por lección</div>
            </div>
            <div className="p-3">
              <div className="text-2xl font-black text-emerald-400">100% BaaS</div>
              <div className="text-xs text-slate-400">Persistencia RLS en Supabase</div>
            </div>
            <div className="p-3">
              <div className="text-2xl font-black text-amber-400">TOPIK I & II</div>
              <div className="text-xs text-slate-400">Simulacros cronometrados reales</div>
            </div>
          </div>
        </div>
      </section>

      {/* 6 Levels Curricular Journey */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="text-xs font-bold uppercase tracking-wider text-crimson-600">Ruta Progresiva</div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
            De Principiante Absoluto a Experto Bilingüe
          </h2>
          <p className="text-base text-slate-600">
            El currículo se encuentra dividido en 6 niveles rigurosos, garantizando que no avances sin consolidar los fundamentos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CURRICULUM_LEVELS.map((lvl) => (
            <div
              key={lvl.levelNumber}
              className="bg-white rounded-3xl p-6 border border-slate-200 hover:border-slate-300 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span
                    className="px-3 py-1 rounded-xl text-xs font-black uppercase text-white shadow-sm"
                    style={{ backgroundColor: lvl.colorAccent }}
                  >
                    Nivel {lvl.levelNumber}
                  </span>
                  <span className="text-xs font-semibold text-slate-500 font-hangul bg-slate-100 px-2.5 py-1 rounded-lg">
                    {lvl.badge}
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-navy-900 transition-colors">
                    {lvl.title}
                  </h3>
                  <p className="text-xs text-slate-500 font-medium mt-1">{lvl.subTitle}</p>
                </div>

                <p className="text-sm text-slate-600 line-clamp-3 leading-relaxed">
                  {lvl.description}
                </p>

                <div className="p-3 bg-slate-50 rounded-2xl border border-slate-100 space-y-1">
                  <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                    Objetivo Oficial
                  </div>
                  <div className="text-xs font-semibold text-navy-800 flex items-center gap-1.5">
                    <GraduationCap className="w-3.5 h-3.5 text-navy-600" />
                    {lvl.targetExam}
                  </div>
                </div>
              </div>

              <div className="pt-6 mt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-medium text-slate-400">
                  {lvl.modules.length} módulos académicos
                </span>
                <Link
                  to="/curriculum"
                  className="text-xs font-bold text-navy-800 hover:text-crimson-600 flex items-center gap-1 group-hover:translate-x-1 transition-all"
                >
                  Explorar clases <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 11 Pedagogical Steps Method */}
      <section className="bg-slate-100 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-12 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-navy-700 bg-white px-3 py-1 rounded-full border border-slate-200">
              Metodología Rigurosa
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
              La Anatomía de una Clase Perfecta
            </h2>
            <p className="text-base text-slate-600">
              Cada lección en Korean Academy cumple con un estándar pedagógico invariable de 11 pasos consecutivos.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {[
              { num: '01', title: 'Objetivos de Aprendizaje', desc: 'Metas claras antes de iniciar.' },
              { num: '02', title: 'Explicación Teórica', desc: 'Fundamento lingüístico riguroso.' },
              { num: '03', title: 'Vocabulario Nuevo', desc: 'Hangul, Hanja, audio y español.' },
              { num: '04', title: 'Gramática Paso a Paso', desc: 'Fórmulas y reglas de conjugación.' },
              { num: '05', title: 'Ejemplos en Hangul', desc: 'Oraciones contextuales reales.' },
              { num: '06', title: 'Romanización Opcional', desc: 'Apoyo fonético conmutador.' },
              { num: '07', title: 'Traducción al Español', desc: 'Equivalencias idiomáticas exactas.' },
              { num: '08', title: 'Uso Cotidiano', desc: 'Diálogos de situaciones reales.' },
              { num: '09', title: 'Ejercicios Interactivos', desc: 'Práctica guiada inmediata.' },
              { num: '10', title: 'Evaluación Corta', desc: 'Examen de control con puntaje.' },
              { num: '11', title: 'Resumen y Checklist', desc: 'Consolidación de competencias.' },
            ].map((step) => (
              <div
                key={step.num}
                className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-2 hover:border-navy-300 transition-colors"
              >
                <div className="text-2xl font-black text-navy-800/30">{step.num}</div>
                <div className="font-bold text-slate-900 text-sm">{step.title}</div>
                <p className="text-xs text-slate-500 leading-relaxed">{step.desc}</p>
              </div>
            ))}
            <div className="bg-navy-900 p-5 rounded-2xl text-white flex flex-col justify-between">
              <div>
                <CheckCircle2 className="w-6 h-6 text-emerald-400 mb-2" />
                <div className="font-bold text-sm">Desbloqueo Progresivo</div>
                <p className="text-xs text-slate-300 mt-1">
                  El sistema no permite saltar a contenidos complejos sin aprobar los fundamentos previos.
                </p>
              </div>
              <Link
                to="/curriculum"
                className="mt-4 text-xs font-bold text-sky-400 hover:underline inline-flex items-center gap-1"
              >
                Ver lecciones <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Learning Tools Suite */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="text-xs font-bold uppercase tracking-wider text-crimson-600">Herramientas Especializadas</div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
            Ecosistema de Inmersión y Práctica
          </h2>
          <p className="text-base text-slate-600">
            Aprende todas las dimensiones del idioma: alfabeto, vocabulario, audios, lectura, escritura y pronunciación.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Link
            to="/hangul"
            className="p-6 rounded-3xl bg-white border border-slate-200 hover:border-navy-300 shadow-sm hover:shadow-md transition-all group"
          >
            <div className="w-12 h-12 rounded-2xl bg-rose-50 text-crimson-600 flex items-center justify-center font-bold text-lg mb-4 group-hover:scale-110 transition-transform">
              한
            </div>
            <h3 className="font-bold text-slate-900 text-lg mb-1">Hangul Interactivo</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Consonantes, vocales, constructor de sílabas silábicas y reglas de los 7 sonidos del Batchim.
            </p>
          </Link>

          <Link
            to="/diccionario"
            className="p-6 rounded-3xl bg-white border border-slate-200 hover:border-navy-300 shadow-sm hover:shadow-md transition-all group"
          >
            <div className="w-12 h-12 rounded-2xl bg-sky-50 text-korean-blue flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <BookOpen className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-slate-900 text-lg mb-1">Diccionario Inteligente</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Búsqueda en Hangul y español, caracteres Hanja asociados, audio nativo y favoritos.
            </p>
          </Link>

          <Link
            to="/flashcards"
            className="p-6 rounded-3xl bg-white border border-slate-200 hover:border-navy-300 shadow-sm hover:shadow-md transition-all group"
          >
            <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <BrainCircuit className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-slate-900 text-lg mb-1">Flashcards con SRS</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Sistema de repetición espaciada que optimiza la memoria a largo plazo según tu curva de olvido.
            </p>
          </Link>

          <Link
            to="/gramatica"
            className="p-6 rounded-3xl bg-white border border-slate-200 hover:border-navy-300 shadow-sm hover:shadow-md transition-all group"
          >
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Layers className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-slate-900 text-lg mb-1">Laboratorio Gramatical</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Comparaciones cara a cara: 은/는 vs 이/가, 에 vs 에서, -아서/어서 vs -(으)니까 con autocorregido.
            </p>
          </Link>

          <Link
            to="/escucha"
            className="p-6 rounded-3xl bg-white border border-slate-200 hover:border-navy-300 shadow-sm hover:shadow-md transition-all group"
          >
            <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Volume2 className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-slate-900 text-lg mb-1">Comprensión Auditiva</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Diálogos graduados por nivel, control de velocidad lento/normal, dictados y preguntas de comprensión.
            </p>
          </Link>

          <Link
            to="/lectura"
            className="p-6 rounded-3xl bg-white border border-slate-200 hover:border-navy-300 shadow-sm hover:shadow-md transition-all group"
          >
            <div className="w-12 h-12 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Globe2 className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-slate-900 text-lg mb-1">Lectura Graduada</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Textos de dificultad creciente con anotaciones interactivas sobre vocabulario y gramática.
            </p>
          </Link>

          <Link
            to="/escritura"
            className="p-6 rounded-3xl bg-white border border-slate-200 hover:border-navy-300 shadow-sm hover:shadow-md transition-all group"
          >
            <div className="w-12 h-12 rounded-2xl bg-cyan-50 text-cyan-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-slate-900 text-lg mb-1">Taller de Escritura</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Construcción sintáctica SOV, orden de párrafos y entrenamiento para las preguntas 51-54 de TOPIK II.
            </p>
          </Link>

          <Link
            to="/pronunciacion"
            className="p-6 rounded-3xl bg-white border border-slate-200 hover:border-navy-300 shadow-sm hover:shadow-md transition-all group"
          >
            <div className="w-12 h-12 rounded-2xl bg-rose-50 text-rose-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Volume2 className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-slate-900 text-lg mb-1">Pronunciación por Voz</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Reconocimiento de voz en tiempo real con puntuación fonética y retroalimentación acústica.
            </p>
          </Link>
        </div>
      </section>

      {/* TOPIK Preparation Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-r from-navy-950 via-navy-900 to-navy-800 text-white p-8 sm:p-12 lg:p-16 border border-navy-700 shadow-2xl relative overflow-hidden">
          <div className="max-w-2xl relative z-10 space-y-6">
            <span className="px-3 py-1 rounded-full bg-crimson-600 text-white text-xs font-bold uppercase tracking-wider">
              Módulo Central TOPIK
            </span>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
              Prepárate para los Exámenes Oficiales TOPIK I & II
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Simulacros cronometrados que reproducen la estructura, tiempos y distribución de puntuaciones oficiales. Al finalizar obtendrás un reporte detallado con puntaje por sección, nivel estimado alcanzado y recomendaciones de estudio.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                to="/simulacros"
                className="px-6 py-3.5 rounded-xl font-bold bg-white text-navy-950 hover:bg-slate-100 transition-colors shadow-md flex items-center gap-2"
              >
                <Award className="w-5 h-5 text-crimson-600" />
                <span>Presentar Simulacro TOPIK I</span>
              </Link>
              <Link
                to="/topik"
                className="px-6 py-3.5 rounded-xl font-semibold bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-colors"
              >
                Conocer la Guía de Exámenes
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
