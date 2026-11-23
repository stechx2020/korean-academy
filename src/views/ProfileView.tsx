// ==============================================================================
// KOREAN ACADEMY - STUDENT PROFILE & SETTINGS VIEW (내 프로필)
// ==============================================================================
import React, { useState } from 'react';
import {
  User,
  GraduationCap,
  Calendar,
  Clock,
  BookOpen,
  Award,
  Database,
  RotateCcw,
  ShieldCheck,
  Check,
  Mail,
  Flame,
  BrainCircuit
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useProgress } from '../context/ProgressContext';
import { SupabaseConfigModal } from '../components/SupabaseConfigModal';

export const ProfileView: React.FC = () => {
  const { user, updateProfile, isConfigured } = useAuth();
  const {
    progressMap,
    activeLevel,
    streakDays,
    totalStudySeconds,
    masteredWordIds,
    topikHistory,
    getGlobalProgressPercentage,
    resetAllProgress
  } = useProgress();

  const [fullNameInput, setFullNameInput] = useState(user?.fullName || '');
  const [goalInput, setGoalInput] = useState(user?.certificationGoal || 'TOPIK I (Nivel 2)');
  const [isSaved, setIsSaved] = useState(false);
  const [configModalOpen, setConfigModalOpen] = useState(false);

  const completedCount = Object.values(progressMap).filter((p) => p.status === 'completed').length;
  const globalPct = getGlobalProgressPercentage();

  const formatStudyTime = (secs: number) => {
    const mins = Math.floor(secs / 60);
    const hrs = Math.floor(mins / 60);
    const remMins = mins % 60;
    return `${hrs} horas ${remMins} minutos`;
  };

  const handleSaveProfile = async (e: React.FormEvent) => {
    e.preventDefault();
    await updateProfile({
      fullName: fullNameInput,
      certificationGoal: goalInput
    });
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 2000);
  };

  const handleReset = () => {
    if (
      confirm(
        '¿Estás seguro de que deseas reiniciar todo tu progreso académico? Esta acción borrará tus lecciones completadas y registros de exámenes.'
      )
    ) {
      resetAllProgress();
      alert('Tu progreso ha sido reiniciado.');
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 animate-fade-in">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-3xl font-black text-slate-900 tracking-tight">
          Perfil del Estudiante
        </h1>
        <p className="text-xs text-slate-500">
          Gestiona tu información académica, tus metas de certificación y tu sincronización de datos.
        </p>
      </div>

      {/* Main Profile Card */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-8">
        {/* User Hero Banner */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pb-6 border-b border-slate-100">
          <div className="flex items-center gap-4">
            <img
              src={user?.avatarUrl || `https://api.dicebear.com/7.x/bottts/svg?seed=${user?.id || 'guest'}`}
              alt={user?.fullName || 'Avatar'}
              className="w-16 h-16 rounded-2xl bg-slate-100 border-2 border-slate-200"
            />
            <div className="space-y-1">
              <h2 className="text-xl font-bold text-slate-900">
                {user?.fullName || 'Estudiante'}
              </h2>
              <div className="text-xs text-slate-400 font-mono">@{user?.username || 'usuario'}</div>
              <div className="flex items-center gap-2 text-xs text-slate-500 pt-1">
                <Calendar className="w-3.5 h-3.5 text-slate-400" />
                <span>
                  Miembro desde{' '}
                  {user?.createdAt ? new Date(user.createdAt).toLocaleDateString() : 'hoy'}
                </span>
              </div>
            </div>
          </div>

          <div className="text-right flex flex-col items-start sm:items-end gap-1">
            <span className="px-3 py-1 rounded-full text-xs font-black uppercase text-white bg-navy-800">
              Nivel Curricular: {activeLevel}
            </span>
            <span className="text-xs font-semibold text-slate-500">
              Objetivo: {user?.certificationGoal || 'TOPIK I (Nivel 2)'}
            </span>
          </div>
        </div>

        {/* Academic Stats Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 text-center space-y-1">
            <div className="text-2xl font-black text-navy-950">{globalPct}%</div>
            <div className="text-[11px] font-bold text-slate-400 uppercase">Avance General</div>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 text-center space-y-1">
            <div className="text-2xl font-black text-emerald-700">{completedCount}</div>
            <div className="text-[11px] font-bold text-slate-400 uppercase">Lecciones Hechas</div>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 text-center space-y-1">
            <div className="text-2xl font-black text-amber-500">{streakDays} días</div>
            <div className="text-[11px] font-bold text-slate-400 uppercase">Racha de Estudio</div>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 text-center space-y-1">
            <div className="text-2xl font-black text-indigo-700">
              {masteredWordIds.length + 8}
            </div>
            <div className="text-[11px] font-bold text-slate-400 uppercase">Vocabulario</div>
          </div>
        </div>

        {/* Edit Goals & Profile Form */}
        <form onSubmit={handleSaveProfile} className="space-y-4 pt-4 border-t border-slate-100">
          <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
            Ajustes Académicos y de Cuenta
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Nombre Completo
              </label>
              <input
                type="text"
                value={fullNameInput}
                onChange={(e) => setFullNameInput(e.target.value)}
                className="w-full p-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-navy-600"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Meta de Certificación TOPIK
              </label>
              <select
                value={goalInput}
                onChange={(e) => setGoalInput(e.target.value)}
                className="w-full p-3 rounded-xl border border-slate-200 text-sm font-semibold bg-white focus:outline-none focus:ring-2 focus:ring-navy-600"
              >
                <option value="TOPIK I (Nivel 1)">TOPIK I (Nivel 1 — Principiante Básico)</option>
                <option value="TOPIK I (Nivel 2)">TOPIK I (Nivel 2 — Principiante Superior)</option>
                <option value="TOPIK II (Nivel 3)">TOPIK II (Nivel 3 — Intermedio)</option>
                <option value="TOPIK II (Nivel 4)">TOPIK II (Nivel 4 — Intermedio Alto)</option>
                <option value="TOPIK II (Nivel 5)">TOPIK II (Nivel 5 — Avanzado)</option>
                <option value="TOPIK II (Nivel 6)">TOPIK II (Nivel 6 — Maestría)</option>
              </select>
            </div>
          </div>

          <div className="flex items-center justify-between pt-2">
            <span className="text-xs text-slate-400">
              {isSaved ? '¡Cambios guardados con éxito!' : ''}
            </span>
            <button
              type="submit"
              className="py-2.5 px-6 rounded-xl font-bold bg-navy-800 hover:bg-navy-900 text-white text-xs transition-colors shadow-sm"
            >
              Guardar Cambios
            </button>
          </div>
        </form>

        {/* Database & Supabase BaaS Connection Section */}
        <div className="pt-6 border-t border-slate-100 space-y-3">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-sm font-bold text-slate-900">
                Sincronización de Base de Datos Supabase
              </h3>
              <p className="text-xs text-slate-500">
                {isConfigured
                  ? 'Conectado a tu proyecto de Supabase en la nube con políticas RLS.'
                  : 'Modo local activo (los datos se almacenan en el navegador). Conéctalo a Supabase para sincronizar entre dispositivos.'}
              </p>
            </div>
            <button
              onClick={() => setConfigModalOpen(true)}
              className="py-2 px-4 rounded-xl text-xs font-bold bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors shrink-0"
            >
              {isConfigured ? 'Ver Conexión' : 'Conectar Supabase'}
            </button>
          </div>
        </div>

        {/* Reset Progress Caution */}
        <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
          <div>
            <h3 className="text-xs font-bold text-red-700 uppercase tracking-wider">
              Zona de Peligro
            </h3>
            <p className="text-xs text-slate-400">
              Reiniciar lecciones completadas, flashcards y resultados de simulacros.
            </p>
          </div>
          <button
            onClick={handleReset}
            className="py-2 px-4 rounded-xl text-xs font-semibold bg-red-50 hover:bg-red-100 text-red-600 border border-red-200 transition-colors"
          >
            Reiniciar Progreso
          </button>
        </div>
      </div>

      <SupabaseConfigModal
        isOpen={configModalOpen}
        onClose={() => setConfigModalOpen(false)}
      />
    </div>
  );
};
