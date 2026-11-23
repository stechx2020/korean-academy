// ==============================================================================
// KOREAN ACADEMY - MAIN APPLICATION & ROUTER (GITHUB PAGES READY)
// ==============================================================================
import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { ProgressProvider } from './context/ProgressContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';

// Views
import { LandingView } from './views/LandingView';
import { AuthView } from './views/AuthView';
import { DashboardView } from './views/DashboardView';
import { CurriculumView } from './views/CurriculumView';
import { LessonView } from './views/LessonView';
import { HangulView } from './views/HangulView';
import { DictionaryView } from './views/DictionaryView';
import { FlashcardsView } from './views/FlashcardsView';
import { GrammarLabView } from './views/GrammarLabView';
import { ListeningView } from './views/ListeningView';
import { ReadingView } from './views/ReadingView';
import { WritingView } from './views/WritingView';
import { PronunciationView } from './views/PronunciationView';
import { TopikHubView } from './views/TopikHubView';
import { TopikExamView } from './views/TopikExamView';
import { TopikResultsView } from './views/TopikResultsView';
import { ProfileView } from './views/ProfileView';

export const App: React.FC = () => {
  return (
    <HashRouter>
      <AuthProvider>
        <ProgressProvider>
          <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 selection:bg-navy-900 selection:text-white font-sans">
            <Navbar />
            <main className="flex-1">
              <Routes>
                {/* Public Home */}
                <Route path="/" element={<LandingView />} />

                {/* Authentication Screens */}
                <Route path="/login" element={<AuthView initialMode="login" />} />
                <Route path="/registro" element={<AuthView initialMode="register" />} />
                <Route path="/recuperar-password" element={<AuthView initialMode="forgot" />} />
                <Route path="/reset-password" element={<AuthView initialMode="reset" />} />

                {/* Student Dashboard */}
                <Route path="/dashboard" element={<DashboardView />} />

                {/* Curriculum & Classes */}
                <Route path="/curriculum" element={<CurriculumView />} />
                <Route path="/clase/:slug" element={<LessonView />} />

                {/* Interactive Learning Tools */}
                <Route path="/hangul" element={<HangulView />} />
                <Route path="/diccionario" element={<DictionaryView />} />
                <Route path="/flashcards" element={<FlashcardsView />} />
                <Route path="/gramatica" element={<GrammarLabView />} />
                <Route path="/escucha" element={<ListeningView />} />
                <Route path="/lectura" element={<ReadingView />} />
                <Route path="/escritura" element={<WritingView />} />
                <Route path="/pronunciacion" element={<PronunciationView />} />

                {/* TOPIK Center & Simulations */}
                <Route path="/topik" element={<TopikHubView />} />
                <Route path="/simulacros" element={<TopikExamView />} />
                <Route path="/topik-resultado/:id" element={<TopikResultsView />} />

                {/* Student Profile & Settings */}
                <Route path="/perfil" element={<ProfileView />} />

                {/* Catch-all fallback */}
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </ProgressProvider>
      </AuthProvider>
    </HashRouter>
  );
};

export default App;
