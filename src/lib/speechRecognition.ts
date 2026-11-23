// ==============================================================================
// KOREAN ACADEMY - SPEECH RECOGNITION (PRONUNCIATION EVALUATION)
// ==============================================================================

// Declare global webkitSpeechRecognition
declare global {
  interface Window {
    SpeechRecognition: any;
    webkitSpeechRecognition: any;
  }
}

export interface RecognitionResult {
  transcript: string;
  confidence: number;
  accuracyScore: number; // 0 to 100
  isMatch: boolean;
  feedback: string;
}

export const isSpeechRecognitionSupported = (): boolean => {
  if (typeof window === 'undefined') return false;
  return Boolean(window.SpeechRecognition || window.webkitSpeechRecognition);
};

// Calculate similarity between spoken Hangul and target Hangul
export const calculateHangulSimilarity = (spoken: string, target: string): number => {
  const cleanSpoken = spoken.replace(/\s+/g, '').trim();
  const cleanTarget = target.replace(/\s+/g, '').trim();

  if (cleanSpoken === cleanTarget) return 100;
  if (!cleanSpoken || !cleanTarget) return 0;

  // Levenshtein distance
  const matrix: number[][] = [];
  const sLen = cleanSpoken.length;
  const tLen = cleanTarget.length;

  for (let i = 0; i <= sLen; i++) matrix[i] = [i];
  for (let j = 0; j <= tLen; j++) matrix[0][j] = j;

  for (let i = 1; i <= sLen; i++) {
    for (let j = 1; j <= tLen; j++) {
      const cost = cleanSpoken[i - 1] === cleanTarget[j - 1] ? 0 : 1;
      matrix[i][j] = Math.min(
        matrix[i - 1][j] + 1,
        matrix[i][j - 1] + 1,
        matrix[i - 1][j - 1] + cost
      );
    }
  }

  const distance = matrix[sLen][tLen];
  const maxLen = Math.max(sLen, tLen);
  const similarity = Math.max(0, Math.round((1 - distance / maxLen) * 100));
  return similarity;
};

export class KoreanSpeechRecognizer {
  private recognition: any = null;
  private isListening = false;

  constructor() {
    if (typeof window !== 'undefined') {
      const SpeechRecognitionClass =
        window.SpeechRecognition || window.webkitSpeechRecognition;
      if (SpeechRecognitionClass) {
        this.recognition = new SpeechRecognitionClass();
        this.recognition.lang = 'ko-KR';
        this.recognition.continuous = false;
        this.recognition.interimResults = false;
        this.recognition.maxAlternatives = 3;
      }
    }
  }

  public listen(
    targetHangul: string,
    onResult: (res: RecognitionResult) => void,
    onError: (err: string) => void,
    onEnd: () => void
  ): void {
    if (!this.recognition) {
      onError('El reconocimiento de voz no está soportado en este navegador. Te recomendamos usar Google Chrome o Edge.');
      return;
    }

    if (this.isListening) {
      this.recognition.abort();
    }

    this.isListening = true;

    this.recognition.onresult = (event: any) => {
      const results = event.results[0];
      const transcript = results[0].transcript;
      const confidence = results[0].confidence || 0.85;

      const accuracyScore = calculateHangulSimilarity(transcript, targetHangul);
      const isMatch = accuracyScore >= 70;

      let feedback = '¡Excelente pronunciación nativa!';
      if (accuracyScore < 50) {
        feedback = 'Pronunciación distante. Intenta articular más lento y claro.';
      } else if (accuracyScore < 75) {
        feedback = 'Buena entonación, aunque se puede afinar la claridad de las vocales o el batchim.';
      } else if (accuracyScore < 90) {
        feedback = '¡Muy buena pronunciación! Comprensión clara.';
      }

      onResult({
        transcript,
        confidence,
        accuracyScore,
        isMatch,
        feedback
      });
    };

    this.recognition.onerror = (event: any) => {
      this.isListening = false;
      onError(event.error || 'Error al capturar el audio');
    };

    this.recognition.onend = () => {
      this.isListening = false;
      onEnd();
    };

    try {
      this.recognition.start();
    } catch (e: any) {
      this.isListening = false;
      onError(e.message || 'Error al iniciar reconocimiento');
    }
  }

  public stop(): void {
    if (this.recognition && this.isListening) {
      this.recognition.stop();
      this.isListening = false;
    }
  }
}
