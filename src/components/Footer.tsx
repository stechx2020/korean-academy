// ==============================================================================
// KOREAN ACADEMY - ACADEMIC FOOTER COMPONENT
// ==============================================================================
import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, BookOpen, ShieldCheck, Heart, Sparkles, Globe } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-navy-950 text-slate-400 border-t border-navy-900 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-navy-800 to-navy-700 flex items-center justify-center border border-navy-700 shadow-md">
                <div className="w-6 h-6 rounded-full relative flex items-center justify-center overflow-hidden">
                  <div className="absolute top-0 left-0 w-6 h-3 bg-crimson-600 rounded-t-full"></div>
                  <div className="absolute bottom-0 left-0 w-6 h-3 bg-korean-blue rounded-b-full"></div>
                </div>
              </div>
              <div>
                <span className="text-lg font-black tracking-tight text-white flex items-center gap-1">
                  KOREAN <span className="text-crimson-500">ACADEMY</span>
                </span>
                <span className="text-[10px] font-bold tracking-widest text-slate-400 block -mt-1 font-hangul">
                  대한민국 공인 한국어 교육 플랫폼
                </span>
              </div>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Plataforma virtual integral para el aprendizaje progresivo del idioma coreano, desde el dominio del alfabeto Hangul hasta la certificación oficial TOPIK I y TOPIK II.
            </p>
            <div className="flex items-center gap-2 text-xs text-slate-500 pt-2">
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
              <span>Arquitectura estática Jamstack con Supabase BaaS (Compatible con GitHub Pages)</span>
            </div>
          </div>

          {/* Curricular Routes */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-4 flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-sky-400" />
              Rutas Académicas
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/hangul" className="hover:text-white transition-colors">
                  Nivel 0: Hangul y Fonética
                </Link>
              </li>
              <li>
                <Link to="/curriculum" className="hover:text-white transition-colors">
                  Nivel 1: Principiante A1
                </Link>
              </li>
              <li>
                <Link to="/curriculum" className="hover:text-white transition-colors">
                  Nivel 2: Principiante A2
                </Link>
              </li>
              <li>
                <Link to="/curriculum" className="hover:text-white transition-colors">
                  Nivel 3: Intermedio B1
                </Link>
              </li>
              <li>
                <Link to="/curriculum" className="hover:text-white transition-colors">
                  Nivel 4: Intermedio Alto B2
                </Link>
              </li>
              <li>
                <Link to="/curriculum" className="hover:text-white transition-colors">
                  Nivel 5: Avanzado C1-C2
                </Link>
              </li>
            </ul>
          </div>

          {/* TOPIK Center */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-4 flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-amber-400" />
              Centro TOPIK
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/topik" className="hover:text-white transition-colors">
                  Preparación TOPIK I (Niveles 1 y 2)
                </Link>
              </li>
              <li>
                <Link to="/topik" className="hover:text-white transition-colors">
                  Preparación TOPIK II (Niveles 3 a 6)
                </Link>
              </li>
              <li>
                <Link to="/simulacros" className="hover:text-white transition-colors">
                  Simulador de Exámenes Reales
                </Link>
              </li>
              <li>
                <Link to="/escritura" className="hover:text-white transition-colors">
                  Taller de Redacción (Preguntas 51-54)
                </Link>
              </li>
              <li>
                <Link to="/gramatica" className="hover:text-white transition-colors">
                  Laboratorio de Comparación Gramatical
                </Link>
              </li>
            </ul>
          </div>

          {/* Tools */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-4 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-crimson-400" />
              Herramientas
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/diccionario" className="hover:text-white transition-colors">
                  Diccionario Inteligente
                </Link>
              </li>
              <li>
                <Link to="/flashcards" className="hover:text-white transition-colors">
                  Flashcards con Repetición Espaciada
                </Link>
              </li>
              <li>
                <Link to="/escucha" className="hover:text-white transition-colors">
                  Comprensión Auditiva
                </Link>
              </li>
              <li>
                <Link to="/lectura" className="hover:text-white transition-colors">
                  Lectura Graduada
                </Link>
              </li>
              <li>
                <Link to="/pronunciacion" className="hover:text-white transition-colors">
                  Práctica de Pronunciación
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Disclaimer & Copyright */}
        <div className="pt-8 mt-8 border-t border-navy-900/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} Korean Academy. Plataforma educativa abierta para hispanohablantes.
          </p>
          <div className="p-2 bg-navy-900/60 rounded-xl border border-navy-800 text-[11px] text-slate-400 max-w-xl text-center sm:text-right">
            Nota académica: Los simulacros TOPIK reproducen fielmente los esquemas del Instituto Nacional para la Educación Internacional de Corea (NIIED). Los resultados reflejan una estimación pedagógica y no constituyen una certificación gubernamental oficial.
          </div>
        </div>
      </div>
    </footer>
  );
};
