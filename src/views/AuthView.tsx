// ==============================================================================
// KOREAN ACADEMY - AUTHENTICATION VIEW (LOGIN, REGISTER, RECOVERY)
// ==============================================================================
import React, { useState } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import {
  Lock,
  Mail,
  User,
  ArrowRight,
  Sparkles,
  CheckCircle,
  AlertCircle,
  KeyRound,
  ShieldCheck,
  ChevronLeft
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';

interface AuthViewProps {
  initialMode?: 'login' | 'register' | 'forgot' | 'reset';
}

export const AuthView: React.FC<AuthViewProps> = ({ initialMode = 'login' }) => {
  const [mode, setMode] = useState<'login' | 'register' | 'forgot' | 'reset'>(initialMode);
  const { signIn, signUp, resetPassword, updatePassword, isConfigured } = useAuth();
  const navigate = useNavigate();

  // Form states
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [fullName, setFullName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(true);

  // Status feedback
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);
    setSuccessMsg(null);
    setIsSubmitting(true);

    try {
      if (mode === 'login') {
        if (!email.trim() || !password) {
          setErrorMsg('Por favor completa todos los campos.');
          setIsSubmitting(false);
          return;
        }
        const res = await signIn(email, password, rememberMe);
        if (res.success) {
          navigate('/dashboard');
        } else {
          setErrorMsg(res.error || 'Credenciales inválidas. Verifica tu correo y contraseña.');
        }
      } else if (mode === 'register') {
        if (!email.trim() || !username.trim() || !password) {
          setErrorMsg('Por favor ingresa usuario, correo y contraseña.');
          setIsSubmitting(false);
          return;
        }
        if (password.length < 6) {
          setErrorMsg('La contraseña debe tener al menos 6 caracteres.');
          setIsSubmitting(false);
          return;
        }
        if (password !== confirmPassword) {
          setErrorMsg('Las contraseñas no coinciden. Por favor verifícalas.');
          setIsSubmitting(false);
          return;
        }
        const res = await signUp(email, password, username, fullName || username);
        if (res.success) {
          setSuccessMsg('¡Cuenta creada exitosamente! Ingresando a la academia...');
          setTimeout(() => navigate('/dashboard'), 1200);
        } else {
          setErrorMsg(res.error || 'Error al registrar usuario.');
        }
      } else if (mode === 'forgot') {
        if (!email.trim()) {
          setErrorMsg('Por favor introduce tu correo electrónico.');
          setIsSubmitting(false);
          return;
        }
        const res = await resetPassword(email);
        if (res.success) {
          setSuccessMsg(
            'Hemos enviado un enlace de recuperación a tu correo electrónico. Por favor revisa tu bandeja de entrada o spam.'
          );
        } else {
          setErrorMsg(res.error || 'No se pudo enviar el correo de recuperación.');
        }
      } else if (mode === 'reset') {
        if (!password || password.length < 6) {
          setErrorMsg('La nueva contraseña debe tener al menos 6 caracteres.');
          setIsSubmitting(false);
          return;
        }
        if (password !== confirmPassword) {
          setErrorMsg('Las contraseñas no coinciden.');
          setIsSubmitting(false);
          return;
        }
        const res = await updatePassword(password);
        if (res.success) {
          setSuccessMsg('¡Contraseña actualizada con éxito! Ya puedes iniciar sesión.');
          setTimeout(() => setMode('login'), 2000);
        } else {
          setErrorMsg(res.error || 'Error al actualizar la contraseña.');
        }
      }
    } catch (err: any) {
      setErrorMsg(err.message || 'Ocurrió un error inesperado.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-[85vh] flex items-center justify-center px-4 py-12">
      <div className="max-w-md w-full bg-white rounded-3xl shadow-xl border border-slate-200 p-8 space-y-6 animate-fade-in relative overflow-hidden">
        {/* Decorative subtle stripe */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-navy-800 via-crimson-600 to-korean-blue"></div>

        {/* Header */}
        <div className="text-center space-y-2">
          <Link to="/" className="inline-flex items-center gap-2 group mb-2">
            <div className="w-8 h-8 rounded-xl bg-navy-900 flex items-center justify-center">
              <span className="font-hangul font-bold text-white text-xs">한</span>
            </div>
            <span className="font-extrabold text-sm tracking-tight text-slate-800">
              KOREAN <span className="text-crimson-600">ACADEMY</span>
            </span>
          </Link>

          <h2 className="text-2xl font-black text-slate-900">
            {mode === 'login' && 'Iniciar Sesión'}
            {mode === 'register' && 'Crear Cuenta de Estudiante'}
            {mode === 'forgot' && 'Recuperar Contraseña'}
            {mode === 'reset' && 'Establecer Nueva Contraseña'}
          </h2>

          <p className="text-xs text-slate-500">
            {mode === 'login' && 'Accede a tus lecciones, vocabulario y progreso guardado.'}
            {mode === 'register' && 'Regístrate e inicia directamente tu aprendizaje de coreano.'}
            {mode === 'forgot' && 'Te enviaremos un enlace a tu correo para restablecer tu acceso.'}
            {mode === 'reset' && 'Introduce y confirma tu nueva contraseña de acceso.'}
          </p>
        </div>

        {/* Feedback Alerts */}
        {errorMsg && (
          <div className="p-3.5 rounded-2xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-start gap-2.5">
            <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-red-600" />
            <span>{errorMsg}</span>
          </div>
        )}

        {successMsg && (
          <div className="p-3.5 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs flex items-start gap-2.5">
            <CheckCircle className="w-4 h-4 shrink-0 mt-0.5 text-emerald-600" />
            <span>{successMsg}</span>
          </div>
        )}

        {/* Main Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {mode === 'register' && (
            <>
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Nombre de Usuario
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                  <input
                    type="text"
                    required
                    placeholder="ej. minsu_corea"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-navy-600"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Nombre Completo (Opcional)
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                  <input
                    type="text"
                    placeholder="ej. Sofía Martínez"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-navy-600"
                  />
                </div>
              </div>
            </>
          )}

          {mode !== 'reset' && (
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Correo Electrónico
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                <input
                  type="email"
                  required
                  placeholder="ej. estudiante@correo.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-navy-600"
                />
              </div>
            </div>
          )}

          {mode !== 'forgot' && (
            <div>
              <div className="flex items-center justify-between mb-1">
                <label className="block text-xs font-bold text-slate-700">
                  {mode === 'reset' ? 'Nueva Contraseña' : 'Contraseña'}
                </label>
                {mode === 'login' && (
                  <button
                    type="button"
                    onClick={() => {
                      setErrorMsg(null);
                      setSuccessMsg(null);
                      setMode('forgot');
                    }}
                    className="text-xs font-semibold text-navy-700 hover:text-crimson-600 transition-colors"
                  >
                    ¿Olvidaste tu contraseña?
                  </button>
                )}
              </div>
              <div className="relative">
                <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                <input
                  type="password"
                  required
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-navy-600"
                />
              </div>
            </div>
          )}

          {(mode === 'register' || mode === 'reset') && (
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Confirmar Contraseña
              </label>
              <div className="relative">
                <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                <input
                  type="password"
                  required
                  placeholder="••••••••"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-navy-600"
                />
              </div>
            </div>
          )}

          {mode === 'login' && (
            <div className="flex items-center">
              <label className="flex items-center gap-2 cursor-pointer text-xs text-slate-600">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="w-4 h-4 rounded text-navy-800 focus:ring-navy-600"
                />
                <span>Mantener sesión iniciada</span>
              </label>
            </div>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3 px-4 rounded-xl font-bold bg-navy-800 hover:bg-navy-900 text-white transition-all shadow-md shadow-navy-800/20 disabled:opacity-50 flex items-center justify-center gap-2"
          >
            {isSubmitting ? (
              <span className="inline-block animate-spin mr-2">⏳</span>
            ) : null}
            <span>
              {mode === 'login' && 'Ingresar a la Academia'}
              {mode === 'register' && 'Registrarme e Ingresar'}
              {mode === 'forgot' && 'Enviar Enlace de Recuperación'}
              {mode === 'reset' && 'Actualizar Contraseña'}
            </span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>

        {/* Toggle between Login and Register */}
        <div className="pt-4 border-t border-slate-100 text-center text-xs text-slate-500">
          {mode === 'login' && (
            <p>
              ¿Aún no tienes cuenta?{' '}
              <button
                type="button"
                onClick={() => {
                  setErrorMsg(null);
                  setSuccessMsg(null);
                  setMode('register');
                }}
                className="font-bold text-navy-800 hover:text-crimson-600 transition-colors"
              >
                Regístrate gratis
              </button>
            </p>
          )}

          {mode === 'register' && (
            <p>
              ¿Ya tienes una cuenta?{' '}
              <button
                type="button"
                onClick={() => {
                  setErrorMsg(null);
                  setSuccessMsg(null);
                  setMode('login');
                }}
                className="font-bold text-navy-800 hover:text-crimson-600 transition-colors"
              >
                Inicia sesión aquí
              </button>
            </p>
          )}

          {(mode === 'forgot' || mode === 'reset') && (
            <button
              type="button"
              onClick={() => {
                setErrorMsg(null);
                setSuccessMsg(null);
                setMode('login');
              }}
              className="font-bold text-navy-800 hover:text-crimson-600 inline-flex items-center gap-1"
            >
              <ChevronLeft className="w-3.5 h-3.5" />
              Volver al inicio de sesión
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
