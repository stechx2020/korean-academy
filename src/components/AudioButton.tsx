// ==============================================================================
// KOREAN ACADEMY - AUDIO BUTTON COMPONENT
// ==============================================================================
import React, { useState } from 'react';
import { Volume2, VolumeX, Play, RotateCcw } from 'lucide-react';
import { tts } from '../lib/tts';

interface AudioButtonProps {
  text: string;
  size?: 'sm' | 'md' | 'lg';
  rate?: number; // 0.7 for slow, 1.0 for normal
  label?: string;
  className?: string;
  showSlowToggle?: boolean;
}

export const AudioButton: React.FC<AudioButtonProps> = ({
  text,
  size = 'md',
  rate = 0.9,
  label,
  className = '',
  showSlowToggle = false,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentRate, setCurrentRate] = useState(rate);

  const handleSpeak = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isPlaying) {
      tts.stop();
      setIsPlaying(false);
      return;
    }

    setIsPlaying(true);
    tts.speak(text, {
      rate: currentRate,
      onStart: () => setIsPlaying(true),
      onEnd: () => setIsPlaying(false),
      onError: () => setIsPlaying(false),
    });
  };

  const toggleSpeed = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentRate((prev) => (prev <= 0.75 ? 1.0 : 0.7));
  };

  const sizeClasses = {
    sm: 'p-1.5 text-xs rounded-lg',
    md: 'p-2 text-sm rounded-xl',
    lg: 'px-4 py-2.5 text-base rounded-2xl',
  };

  const iconSizes = {
    sm: 'w-3.5 h-3.5',
    md: 'w-4 h-4',
    lg: 'w-5 h-5',
  };

  return (
    <div className={`inline-flex items-center gap-1.5 ${className}`}>
      <button
        onClick={handleSpeak}
        title={isPlaying ? 'Detener audio' : 'Escuchar pronunciación nativa'}
        className={`inline-flex items-center gap-1.5 font-medium transition-all shadow-sm ${
          isPlaying
            ? 'bg-crimson-600 text-white animate-pulse'
            : 'bg-navy-50 hover:bg-navy-100 text-navy-800 border border-navy-200 hover:border-navy-300'
        } ${sizeClasses[size]}`}
      >
        <Volume2 className={`${iconSizes[size]} ${isPlaying ? 'animate-bounce' : ''}`} />
        {label && <span>{label}</span>}
      </button>

      {showSlowToggle && (
        <button
          onClick={toggleSpeed}
          title={`Velocidad actual: ${currentRate === 0.7 ? 'Lenta (0.7x)' : 'Normal (1.0x)'}`}
          className="px-2 py-1 text-xs font-semibold rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200 transition-colors"
        >
          {currentRate === 0.7 ? '0.7x 🐢' : '1.0x ⚡'}
        </button>
      )}
    </div>
  );
};
