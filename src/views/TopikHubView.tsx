// ==============================================================================
// KOREAN ACADEMY - TOPIK PREPARATION CENTER (TOPIK 대비 센터)
// ==============================================================================
import React from 'react';
import { Link } from 'react-router-dom';
import {
  GraduationCap,
  Award,
  Clock,
  BookOpen,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  TrendingUp,
  FileCheck,
  ShieldCheck
} from 'lucide-react';
import { TOPIK_EXAMS } from '../data/topikExamData';

export const TopikHubView: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12 animate-fade-in">
      {/* Header */}
      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-crimson-50 text-crimson-700 text-xs font-semibold border border-crimson-200">
          <GraduationCap className="w-3.5 h-3.5" />
          <span>Centro de Entrenamiento y Certificación</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
          Preparación Oficial TOPIK (한국어능력시험)
        </h1>
        <p className="text-sm sm:text-base text-slate-600 max-w-3xl leading-relaxed">
          El TOPIK (Test of Proficiency in Korean) es el examen oficial administrado por el Instituto Nacional para la Educación Internacional (NIIED) del Ministerio de Educación de Corea del Sur. Nuestra academia te prepara con dos rutas independientes y simulacros cronometrados.
        </p>
      </div>

      {/* Two Independent Routes: TOPIK I vs TOPIK II */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* TOPIK I CARD */}
        <div className="bg-white rounded-3xl p-8 border-2 border-slate-200 hover:border-navy-400 shadow-md transition-all flex flex-col justify-between space-y-6">
          <div className="space-y-5">
            <div className="flex items-center justify-between">
              <span className="px-3.5 py-1 rounded-xl text-xs font-black uppercase text-white bg-korean-blue">
                TOPIK I • Niveles 1 y 2
              </span>
              <span className="text-xs font-bold text-slate-400">Total: 200 Puntos</span>
            </div>

            <div>
              <h2 className="text-2xl font-black text-slate-900">Ruta TOPIK I (Básico)</h2>
              <p className="text-xs text-slate-500 mt-1">
                Para estudiantes principiantes que buscan certificar su capacidad de desenvolverse en la vida cotidiana en Corea.
              </p>
            </div>

            {/* Sections Breakdown */}
            <div className="space-y-3 pt-2">
              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-between text-xs">
                <div>
                  <span className="font-bold text-slate-800">Comprensión Auditiva (듣기)</span>
                  <div className="text-[11px] text-slate-400">30 preguntas • 40 minutos</div>
                </div>
                <span className="font-bold text-navy-800">100 puntos</span>
              </div>

              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-between text-xs">
                <div>
                  <span className="font-bold text-slate-800">Comprensión Lectora (읽기)</span>
                  <div className="text-[11px] text-slate-400">40 preguntas • 60 minutos</div>
                </div>
                <span className="font-bold text-navy-800">100 puntos</span>
              </div>
            </div>

            {/* Thresholds */}
            <div className="space-y-2 pt-2 border-t border-slate-100">
              <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                Umbrales de Calificación Oficial:
              </div>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="p-2.5 rounded-xl bg-sky-50 text-sky-950 font-semibold border border-sky-100">
                  <div className="font-bold">Nivel 1</div>
                  <div className="text-[11px] text-sky-700">80 - 139 puntos</div>
                </div>
                <div className="p-2.5 rounded-xl bg-emerald-50 text-emerald-950 font-semibold border border-emerald-100">
                  <div className="font-bold">Nivel 2</div>
                  <div className="text-[11px] text-emerald-700">140 - 200 puntos</div>
                </div>
              </div>
            </div>
          </div>

          <Link
            to="/simulacros?exam=TOPIK_I"
            className="w-full py-3.5 px-6 rounded-2xl font-bold bg-navy-800 hover:bg-navy-900 text-white text-xs transition-all shadow-md flex items-center justify-center gap-2"
          >
            <Award className="w-4 h-4 text-amber-400" />
            <span>Presentar Simulacro TOPIK I</span>
          </Link>
        </div>

        {/* TOPIK II CARD */}
        <div className="bg-white rounded-3xl p-8 border-2 border-slate-200 hover:border-crimson-400 shadow-md transition-all flex flex-col justify-between space-y-6">
          <div className="space-y-5">
            <div className="flex items-center justify-between">
              <span className="px-3.5 py-1 rounded-xl text-xs font-black uppercase text-white bg-crimson-600">
                TOPIK II • Niveles 3, 4, 5 y 6
              </span>
              <span className="text-xs font-bold text-slate-400">Total: 300 Puntos</span>
            </div>

            <div>
              <h2 className="text-2xl font-black text-slate-900">Ruta TOPIK II (Intermedio - Avanzado)</h2>
              <p className="text-xs text-slate-500 mt-1">
                Para estudiantes intermedios y avanzados que aspiran a estudios universitarios o empleo profesional en Corea.
              </p>
            </div>

            {/* Sections Breakdown */}
            <div className="space-y-3 pt-2">
              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-between text-xs">
                <div>
                  <span className="font-bold text-slate-800">Comprensión Auditiva (듣기)</span>
                  <div className="text-[11px] text-slate-400">50 preguntas • 60 minutos</div>
                </div>
                <span className="font-bold text-navy-800">100 puntos</span>
              </div>

              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-between text-xs">
                <div>
                  <span className="font-bold text-slate-800">Expresión Escrita (쓰기)</span>
                  <div className="text-[11px] text-slate-400">4 preguntas (51 a 54) • 50 minutos</div>
                </div>
                <span className="font-bold text-navy-800">100 puntos</span>
              </div>

              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-between text-xs">
                <div>
                  <span className="font-bold text-slate-800">Comprensión Lectora (읽기)</span>
                  <div className="text-[11px] text-slate-400">50 preguntas • 70 minutos</div>
                </div>
                <span className="font-bold text-navy-800">100 puntos</span>
              </div>
            </div>

            {/* Thresholds */}
            <div className="space-y-2 pt-2 border-t border-slate-100">
              <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                Umbrales de Calificación Oficial:
              </div>
              <div className="grid grid-cols-4 gap-1.5 text-center text-xs">
                <div className="p-2 rounded-xl bg-slate-100">
                  <div className="font-bold text-slate-900">Nivel 3</div>
                  <div className="text-[10px] text-slate-500">120+</div>
                </div>
                <div className="p-2 rounded-xl bg-slate-100">
                  <div className="font-bold text-slate-900">Nivel 4</div>
                  <div className="text-[10px] text-slate-500">150+</div>
                </div>
                <div className="p-2 rounded-xl bg-slate-100">
                  <div className="font-bold text-slate-900">Nivel 5</div>
                  <div className="text-[10px] text-slate-500">190+</div>
                </div>
                <div className="p-2 rounded-xl bg-amber-50 text-amber-900 border border-amber-200">
                  <div className="font-bold">Nivel 6</div>
                  <div className="text-[10px] text-amber-700">230+</div>
                </div>
              </div>
            </div>
          </div>

          <Link
            to="/simulacros?exam=TOPIK_II"
            className="w-full py-3.5 px-6 rounded-2xl font-bold bg-crimson-600 hover:bg-crimson-500 text-white text-xs transition-all shadow-md flex items-center justify-center gap-2"
          >
            <Award className="w-4 h-4 text-white" />
            <span>Presentar Simulacro TOPIK II</span>
          </Link>
        </div>
      </div>

      {/* Strategies and Test Tips Banner */}
      <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm space-y-6">
        <h3 className="text-xl font-bold text-slate-900">
          Estrategias y Claves para Aprobar el TOPIK
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100 space-y-2">
            <div className="text-sm font-bold text-slate-900 flex items-center gap-2">
              <Clock className="w-4 h-4 text-navy-800" />
              Gestión del Tiempo
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              En la sección de lectura de TOPIK II dispones de menos de 1.4 minutos por texto extenso. Aprende a escanear primero las preguntas y las opciones antes del cuerpo del párrafo.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100 space-y-2">
            <div className="text-sm font-bold text-slate-900 flex items-center gap-2">
              <FileCheck className="w-4 h-4 text-crimson-600" />
              Redacción de la Pregunta 53
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Nunca des opiniones personales en la pregunta 53 (análisis de gráficos y encuestas). Limítate a redactar objetivamente los datos en el registro escrito formal 해라체 (-ㄴ/는다).
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100 space-y-2">
            <div className="text-sm font-bold text-slate-900 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              Evitar Penalizaciones de Vacio
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              En el TOPIK no se descuentan puntos por respuestas erróneas en las preguntas de selección múltiple. Nunca dejes un óvalo sin marcar en tu hoja de respuestas.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
