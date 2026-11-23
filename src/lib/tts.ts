// ==============================================================================
// KOREAN ACADEMY - WEB SPEECH API TEXT-TO-SPEECH (TTS)
// ==============================================================================

class TTSService {
  private synth: SpeechSynthesis | null = null;
  private koreanVoice: SpeechSynthesisVoice | null = null;
  private isInitialized = false;

  constructor() {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      this.synth = window.speechSynthesis;
      this.initVoice();
      if (this.synth.onvoiceschanged !== undefined) {
        this.synth.onvoiceschanged = () => this.initVoice();
      }
    }
  }

  private initVoice() {
    if (!this.synth) return;
    const voices = this.synth.getVoices();
    // Prioritize high-quality Korean voices
    this.koreanVoice =
      voices.find((v) => v.lang === 'ko-KR' || v.lang === 'ko_KR') ||
      voices.find((v) => v.lang.startsWith('ko')) ||
      null;
    this.isInitialized = true;
  }

  public isSupported(): boolean {
    return Boolean(this.synth);
  }

  public speak(
    text: string,
    options: {
      rate?: number; // 0.7 for slow, 1.0 for normal
      pitch?: number;
      onStart?: () => void;
      onEnd?: () => void;
      onError?: (err: any) => void;
    } = {}
  ): void {
    if (!this.synth) {
      console.warn('SpeechSynthesis is not supported on this browser.');
      options.onEnd?.();
      return;
    }

    // Cancel any previous speech
    this.synth.cancel();

    // Clean up Hangul text: remove markdown brackets or parens if present
    const cleanText = text.replace(/\[.*?\]|\(.*?\)/g, '').trim();
    if (!cleanText) return;

    const utterance = new SpeechSynthesisUtterance(cleanText);
    utterance.lang = 'ko-KR';
    utterance.rate = options.rate ?? 0.9; // natural, slightly clear pace for learners
    utterance.pitch = options.pitch ?? 1.0;

    if (!this.koreanVoice) {
      this.initVoice();
    }
    if (this.koreanVoice) {
      utterance.voice = this.koreanVoice;
    }

    if (options.onStart) utterance.onstart = options.onStart;
    if (options.onEnd) utterance.onend = options.onEnd;
    if (options.onError) utterance.onerror = options.onError;

    this.synth.speak(utterance);
  }

  public stop(): void {
    if (this.synth) {
      this.synth.cancel();
    }
  }
}

export const tts = new TTSService();
