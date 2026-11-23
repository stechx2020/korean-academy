// ==============================================================================
// KOREAN ACADEMY - MAIN RESPONSIVE NAVBAR
// ==============================================================================
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  BookOpen,
  GraduationCap,
  Sparkles,
  Layers,
  Award,
  Menu,
  X,
  User,
  LogOut,
  Flame,
  Clock,
  Database,
  ChevronDown,
  Volume2,
  FileText,
  PenTool,
  Mic,
  BrainCircuit,
  Search
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useProgress } from '../context/ProgressContext';
import { SupabaseConfigModal } from './SupabaseConfigModal';

export const Navbar: React.FC = () => {
  const { user, signOut, isConfigured } = useAuth();
  const { totalStudySeconds, streakDays, activeLevel } = useProgress();
  const location = useLocation();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [toolsDropdownOpen, setToolsDropdownOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [configModalOpen, setConfigModalOpen] = useState(false);

  const formatStudyTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    if (mins < 60) return `${mins}m`;
    const hrs = Math.floor(mins / 60);
    const remMins = mins % 60;
    return `${hrs}h ${remMins}m`;
  };

  const navLinks = [
    { to: '/dashboard', label: 'Dashboard', icon: Layers },
    { to: '/curriculum', label: 'Ruta Académica', icon: BookOpen },
    { to: '/hangul', label: 'Hangul Lab', icon: Sparkles },
    { to: '/topik', label: 'Preparación TOPIK', icon: GraduationCap },
    { to: '/simulacros', label: 'Simulacros', icon: Award },
  ];

  const toolsLinks = [
    { to: '/diccionario', label: 'Diccionario Inteligente', desc: 'Búsqueda, audio y Hanja', icon: Search },
    { to: '/flashcards', label: 'Flashcards con SRS', desc: 'Repetición espaciada', icon: BrainCircuit },
    { to: '/gramatica', label: 'Laboratorio de Gramática', desc: 'Comparaciones clave', icon: BookOpen },
    { to: '/escucha', label: 'Comprensión Auditiva', desc: 'Diálogos y dictados', icon: Volume2 },
    { to: '/lectura', label: 'Lectura Graduada', desc: 'Textos con glosario', icon: FileText },
    { to: '/escritura', label: 'Taller de Escritura', desc: 'Oraciones y TOPIK 51-54', icon: PenTool },
    { to: '/pronunciacion', label: 'Práctica de Pronunciación', desc: 'Evaluación por voz', icon: Mic },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 transition-all">
        {/* Top bar for stats and Supabase status */}
        <div className="bg-navy-950 text-slate-300 px-4 py-1.5 text-xs">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1.5 font-medium text-amber-400">
                <Flame className="w-3.5 h-3.5 fill-amber-400" />
                Racha: {streakDays} {streakDays === 1 ? 'día' : 'días'}
              </span>
              <span className="hidden sm:flex items-center gap-1.5 text-slate-300">
                <Clock className="w-3.5 h-3.5 text-sky-400" />
                Estudio: {formatStudyTime(totalStudySeconds)}
              </span>
              <span className="hidden md:inline-flex px-2 py-0.5 rounded-full bg-navy-800 text-sky-300 text-[11px] font-semibold border border-navy-700">
                Nivel {activeLevel}
              </span>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => setConfigModalOpen(true)}
                className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-medium transition-all ${
                  isConfigured
                    ? 'bg-emerald-950/80 text-emerald-300 border border-emerald-800 hover:bg-emerald-900'
                    : 'bg-amber-950/80 text-amber-300 border border-amber-800 hover:bg-amber-900'
                }`}
                title="Configuración de base de datos Supabase"
              >
                <Database className="w-3 h-3" />
                <span>{isConfigured ? 'Supabase Conectado' : 'Modo Local (Configurar Supabase)'}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Main Header */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-navy-900 to-navy-700 flex items-center justify-center shadow-md shadow-navy-950/20 group-hover:scale-105 transition-transform relative overflow-hidden">
                {/* Taegeuk inspired swirl */}
                <div className="w-6 h-6 rounded-full relative flex items-center justify-center">
                  <div className="absolute top-0 left-0 w-6 h-3 bg-crimson-600 rounded-t-full"></div>
                  <div className="absolute bottom-0 left-0 w-6 h-3 bg-korean-blue rounded-b-full"></div>
                  <div className="absolute top-1.5 left-1.5 w-3 h-3 bg-white/20 rounded-full"></div>
                </div>
              </div>
              <div>
                <span className="text-lg font-black tracking-tight text-slate-900 flex items-center gap-1">
                  KOREAN <span className="text-crimson-600">ACADEMY</span>
                </span>
                <span className="text-[10px] font-bold tracking-widest text-navy-600 block -mt-1 font-hangul">
                  한국어 아카데미
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              {navLinks.map((link) => {
                const Icon = link.icon;
                const active = isActive(link.to);
                return (
                  <Link
                    key={link.to}
                    to={link.to}
                    className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-sm font-semibold transition-all ${
                      active
                        ? 'bg-navy-50 text-navy-900 border border-navy-200 shadow-sm'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                    }`}
                  >
                    <Icon className={`w-4 h-4 ${active ? 'text-crimson-600' : 'text-slate-400'}`} />
                    {link.label}
                  </Link>
                );
              })}

              {/* Tools Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setToolsDropdownOpen(!toolsDropdownOpen)}
                  onBlur={() => setTimeout(() => setToolsDropdownOpen(false), 200)}
                  className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-sm font-semibold transition-all ${
                    toolsDropdownOpen
                      ? 'bg-navy-50 text-navy-900'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                  }`}
                >
                  <Sparkles className="w-4 h-4 text-amber-500" />
                  <span>Herramientas</span>
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform ${toolsDropdownOpen ? 'rotate-180' : ''}`} />
                </button>

                {toolsDropdownOpen && (
                  <div className="absolute top-full right-0 mt-2 w-72 bg-white rounded-2xl shadow-xl border border-slate-100 p-2 z-50 animate-fade-in">
                    <div className="px-3 py-2 text-[11px] font-bold uppercase tracking-wider text-slate-400 border-b border-slate-100">
                      Módulos de Aprendizaje
                    </div>
                    <div className="space-y-1 mt-1">
                      {toolsLinks.map((tool) => {
                        const ToolIcon = tool.icon;
                        return (
                          <Link
                            key={tool.to}
                            to={tool.to}
                            onClick={() => setToolsDropdownOpen(false)}
                            className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-colors group"
                          >
                            <div className="p-2 rounded-lg bg-navy-50 text-navy-700 group-hover:bg-navy-900 group-hover:text-white transition-colors">
                              <ToolIcon className="w-4 h-4" />
                            </div>
                            <div>
                              <div className="text-sm font-semibold text-slate-800 group-hover:text-navy-900">
                                {tool.label}
                              </div>
                              <div className="text-xs text-slate-400">{tool.desc}</div>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            </nav>

            {/* Right User Action Menu */}
            <div className="hidden sm:flex items-center gap-3">
              {user ? (
                <div className="relative">
                  <button
                    onClick={() => setUserMenuOpen(!userMenuOpen)}
                    onBlur={() => setTimeout(() => setUserMenuOpen(false), 250)}
                    className="flex items-center gap-2 p-1.5 pr-3 rounded-2xl border border-slate-200 hover:border-slate-300 bg-white hover:bg-slate-50 transition-all shadow-sm"
                  >
                    <img
                      src={user.avatarUrl || `https://api.dicebear.com/7.x/bottts/svg?seed=${user.id}`}
                      alt={user.fullName}
                      className="w-8 h-8 rounded-xl bg-slate-100"
                    />
                    <div className="text-left">
                      <div className="text-xs font-bold text-slate-900 line-clamp-1">{user.fullName}</div>
                      <div className="text-[10px] text-slate-400 font-medium">{user.certificationGoal}</div>
                    </div>
                    <ChevronDown className="w-3.5 h-3.5 text-slate-400 ml-1" />
                  </button>

                  {userMenuOpen && (
                    <div className="absolute right-0 mt-2 w-56 bg-white rounded-2xl shadow-xl border border-slate-100 p-2 z-50 animate-fade-in">
                      <div className="px-3 py-2 border-b border-slate-100">
                        <div className="text-xs font-bold text-slate-900">{user.username}</div>
                        <div className="text-[11px] text-slate-400 truncate">{user.email}</div>
                      </div>
                      <div className="py-1">
                        <Link
                          to="/perfil"
                          onClick={() => setUserMenuOpen(false)}
                          className="flex items-center gap-2 px-3 py-2 text-sm text-slate-700 hover:bg-slate-50 rounded-xl transition-colors"
                        >
                          <User className="w-4 h-4 text-slate-400" />
                          Mi Perfil y Metas
                        </Link>
                        <button
                          onClick={() => {
                            setUserMenuOpen(false);
                            setConfigModalOpen(true);
                          }}
                          className="w-full flex items-center gap-2 px-3 py-2 text-sm text-slate-700 hover:bg-slate-50 rounded-xl transition-colors"
                        >
                          <Database className="w-4 h-4 text-slate-400" />
                          Configuración Supabase
                        </button>
                      </div>
                      <div className="pt-1 border-t border-slate-100">
                        <button
                          onClick={() => signOut()}
                          className="w-full flex items-center gap-2 px-3 py-2 text-sm text-red-600 hover:bg-red-50 rounded-xl transition-colors"
                        >
                          <LogOut className="w-4 h-4" />
                          Cerrar Sesión
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <Link
                    to="/login"
                    className="px-4 py-2 text-sm font-semibold text-slate-700 hover:text-navy-900 hover:bg-slate-100 rounded-xl transition-colors"
                  >
                    Iniciar Sesión
                  </Link>
                  <Link
                    to="/registro"
                    className="px-4 py-2 text-sm font-semibold text-white bg-navy-800 hover:bg-navy-900 rounded-xl transition-all shadow-md shadow-navy-800/20"
                  >
                    Registrarme Gratis
                  </Link>
                </div>
              )}
            </div>

            {/* Mobile Hamburger Button */}
            <div className="lg:hidden flex items-center gap-2">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-xl transition-colors"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 space-y-3">
            <div className="space-y-1">
              {navLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <Link
                    key={link.to}
                    to={link.to}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-semibold ${
                      isActive(link.to)
                        ? 'bg-navy-50 text-navy-900'
                        : 'text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    <Icon className="w-4 h-4 text-crimson-600" />
                    {link.label}
                  </Link>
                );
              })}
            </div>

            <div className="pt-2 border-t border-slate-100">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-400 px-3 py-1">
                Herramientas de Estudio
              </div>
              <div className="grid grid-cols-2 gap-1 mt-1">
                {toolsLinks.map((t) => (
                  <Link
                    key={t.to}
                    to={t.to}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center gap-2 p-2 rounded-lg text-xs font-medium text-slate-700 hover:bg-slate-100"
                  >
                    <t.icon className="w-3.5 h-3.5 text-navy-700" />
                    <span className="truncate">{t.label}</span>
                  </Link>
                ))}
              </div>
            </div>

            <div className="pt-3 border-t border-slate-100">
              {user ? (
                <div className="space-y-2">
                  <div className="flex items-center gap-2 px-3 py-1">
                    <img
                      src={user.avatarUrl || `https://api.dicebear.com/7.x/bottts/svg?seed=${user.id}`}
                      alt={user.fullName}
                      className="w-8 h-8 rounded-xl bg-slate-100"
                    />
                    <div>
                      <div className="text-xs font-bold text-slate-900">{user.fullName}</div>
                      <div className="text-[10px] text-slate-400">{user.email}</div>
                    </div>
                  </div>
                  <Link
                    to="/perfil"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block w-full py-2 px-3 text-center text-xs font-semibold rounded-xl bg-slate-100 text-slate-800"
                  >
                    Ver Mi Perfil
                  </Link>
                  <button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      signOut();
                    }}
                    className="block w-full py-2 px-3 text-center text-xs font-semibold rounded-xl bg-red-50 text-red-600"
                  >
                    Cerrar Sesión
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-2 gap-2">
                  <Link
                    to="/login"
                    onClick={() => setMobileMenuOpen(false)}
                    className="py-2.5 text-center text-xs font-semibold rounded-xl bg-slate-100 text-slate-800"
                  >
                    Iniciar Sesión
                  </Link>
                  <Link
                    to="/registro"
                    onClick={() => setMobileMenuOpen(false)}
                    className="py-2.5 text-center text-xs font-semibold rounded-xl bg-navy-800 text-white"
                  >
                    Registrarme
                  </Link>
                </div>
              )}
            </div>
          </div>
        )}
      </header>

      {/* Supabase Config Modal */}
      <SupabaseConfigModal
        isOpen={configModalOpen}
        onClose={() => setConfigModalOpen(false)}
      />
    </>
  );
};
