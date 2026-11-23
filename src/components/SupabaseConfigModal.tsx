// ==============================================================================
// KOREAN ACADEMY - SUPABASE CONFIGURATION MODAL
// ==============================================================================
import React, { useState } from 'react';
import { Database, Key, CheckCircle, ExternalLink, ShieldCheck, X, Copy, RefreshCw } from 'lucide-react';
import { getSupabaseConfig, saveSupabaseConfig, clearSupabaseConfig, refreshSupabaseClient } from '../lib/supabase';

interface SupabaseConfigModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SupabaseConfigModal: React.FC<SupabaseConfigModalProps> = ({ isOpen, onClose }) => {
  const currentConfig = getSupabaseConfig();
  const [url, setUrl] = useState(currentConfig.url || '');
  const [anonKey, setAnonKey] = useState(currentConfig.anonKey || '');
  const [isSaved, setIsSaved] = useState(false);
  const [copiedSchema, setCopiedSchema] = useState(false);

  if (!isOpen) return null;

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (!url.trim() || !anonKey.trim()) {
      alert('Por favor ingresa tanto la URL de Supabase como la Anon Public Key.');
      return;
    }
    saveSupabaseConfig(url, anonKey);
    refreshSupabaseClient();
    setIsSaved(true);
    setTimeout(() => {
      setIsSaved(false);
      onClose();
      window.location.reload();
    }, 1200);
  };

  const handleClear = () => {
    if (confirm('¿Deseas desvincular Supabase y utilizar el modo local (almacenamiento en navegador)?')) {
      clearSupabaseConfig();
      refreshSupabaseClient();
      setUrl('');
      setAnonKey('');
      window.location.reload();
    }
  };

  const handleCopySchemaNotice = () => {
    navigator.clipboard.writeText('-- Ejecuta el archivo supabase/schema.sql en el SQL Editor de tu dashboard de Supabase.');
    setCopiedSchema(true);
    setTimeout(() => setCopiedSchema(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in">
      <div className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-slate-100 max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between pb-4 border-b border-slate-100">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
              <Database className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-900">Conexión con Supabase BaaS</h2>
              <p className="text-xs text-slate-500">Autenticación RLS, base de datos y persistencia en la nube</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-700 rounded-xl hover:bg-slate-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="mt-5 space-y-4 text-sm text-slate-600">
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
            <div className="flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-navy-700 shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-slate-900">100% Compatible con GitHub Pages</p>
                <p className="text-xs text-slate-500 mt-0.5">
                  Al ser una plataforma alojada en GitHub Pages (frontend estático), la base de datos y autenticación se conectan de forma segura directamente a Supabase mediante claves públicas con políticas de seguridad a nivel de fila (RLS).
                </p>
              </div>
            </div>
          </div>

          <form onSubmit={handleSave} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Project URL (ej. https://xyzcompany.supabase.co)
              </label>
              <div className="relative">
                <Database className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                <input
                  type="url"
                  placeholder="https://xyzcompany.supabase.co"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-navy-600 bg-white"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Anon Public API Key
              </label>
              <div className="relative">
                <Key className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                <input
                  type="password"
                  placeholder="eyJhbGciOiJIUzI1NiIsInR5cCI6..."
                  value={anonKey}
                  onChange={(e) => setAnonKey(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-navy-600 bg-white"
                  required
                />
              </div>
              <p className="text-[11px] text-slate-400 mt-1">
                Disponible en Supabase Dashboard &gt; Project Settings &gt; API &gt; anon public.
              </p>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <button
                type="submit"
                className="flex-1 py-3 px-4 rounded-xl font-semibold bg-navy-800 hover:bg-navy-900 text-white transition-all shadow-md shadow-navy-800/20 flex items-center justify-center gap-2"
              >
                {isSaved ? (
                  <>
                    <CheckCircle className="w-4 h-4 text-emerald-400" />
                    ¡Credenciales Guardadas!
                  </>
                ) : (
                  <>
                    <RefreshCw className="w-4 h-4" />
                    Conectar y Guardar
                  </>
                )}
              </button>

              {currentConfig.isConfigured && (
                <button
                  type="button"
                  onClick={handleClear}
                  className="py-3 px-4 rounded-xl font-medium bg-red-50 hover:bg-red-100 text-red-600 border border-red-200 transition-colors"
                >
                  Desconectar
                </button>
              )}
            </div>
          </form>

          <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
            <span className="text-xs text-slate-500">
              ¿Aún no tienes cuenta en Supabase?
            </span>
            <a
              href="https://supabase.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-semibold text-navy-700 hover:text-navy-900 inline-flex items-center gap-1"
            >
              Crear proyecto gratis <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          <div className="p-3 bg-amber-50 rounded-xl border border-amber-200 text-xs text-amber-800 flex items-center justify-between">
            <span>Incluye script SQL listo: <code>supabase/schema.sql</code></span>
            <button
              onClick={handleCopySchemaNotice}
              className="font-semibold text-amber-900 hover:underline inline-flex items-center gap-1"
            >
              {copiedSchema ? '¡Copiado!' : <><Copy className="w-3 h-3" /> Ver archivo SQL</>}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
