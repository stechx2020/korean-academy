// ==============================================================================
// KOREAN ACADEMY - HANGUL (한글) COMPREHENSIVE DATA
// ==============================================================================

export interface HangulChar {
  char: string;
  name: string;
  romanization: string;
  soundDescription: string;
  category: 'basic_consonant' | 'double_consonant' | 'basic_vowel' | 'compound_vowel';
  position?: 'vertical' | 'horizontal';
  sampleWord: {
    hangul: string;
    spanish: string;
    romanization: string;
  };
}

export const BASIC_CONSONANTS: HangulChar[] = [
  {
    char: 'ㄱ',
    name: '기역 (Gi-yeok)',
    romanization: 'g / k',
    soundDescription: 'Sonido entre "g" suave (como en gato) y "k" suave según su posición.',
    category: 'basic_consonant',
    sampleWord: { hangul: '가방', romanization: 'gabang', spanish: 'mochila / bolso' }
  },
  {
    char: 'ㄴ',
    name: '니은 (Ni-eun)',
    romanization: 'n',
    soundDescription: 'Sonido "n" limpio como en "nube", la lengua toca los alvéolos superiores.',
    category: 'basic_consonant',
    sampleWord: { hangul: '나무', romanization: 'namu', spanish: 'árbol' }
  },
  {
    char: 'ㄷ',
    name: '디귿 (Di-geut)',
    romanization: 'd / t',
    soundDescription: 'Sonido entre "d" y "t" dental suave. Como en "dedo".',
    category: 'basic_consonant',
    sampleWord: { hangul: '다리', romanization: 'dari', spanish: 'pierna / puente' }
  },
  {
    char: 'ㄹ',
    name: '리을 (Ri-eul)',
    romanization: 'r / l',
    soundDescription: 'Como una "r" suave española entre vocales (como en "pero") o "l" clara al final.',
    category: 'basic_consonant',
    sampleWord: { hangul: '라디오', romanization: 'radio', spanish: 'radio' }
  },
  {
    char: 'ㅁ',
    name: '미음 (Mi-eum)',
    romanization: 'm',
    soundDescription: 'Sonido "m" bilabial idéntico al español "mamá". Representa los labios cerrados.',
    category: 'basic_consonant',
    sampleWord: { hangul: '모자', romanization: 'moja', spanish: 'sombrero' }
  },
  {
    char: 'ㅂ',
    name: '비읍 (Bi-eup)',
    romanization: 'b / p',
    soundDescription: 'Entre "b" y "p" bilabial suave, como en "barco".',
    category: 'basic_consonant',
    sampleWord: { hangul: '바다', romanization: 'bada', spanish: 'mar' }
  },
  {
    char: 'ㅅ',
    name: '시옷 (Si-ot)',
    romanization: 's',
    soundDescription: 'Sonido "s" suave. Ante "i" o vocales con "y" se pronuncia como "sh" en inglés.',
    category: 'basic_consonant',
    sampleWord: { hangul: '사과', romanization: 'sagwa', spanish: 'manzana' }
  },
  {
    char: 'ㅇ',
    name: '이응 (I-eung)',
    romanization: 'muda / ng',
    soundDescription: 'Muda al inicio de sílaba (soporte de vocal). Al final (batchim) suena como "ng" nasal.',
    category: 'basic_consonant',
    sampleWord: { hangul: '아이', romanization: 'ai', spanish: 'niño / infante' }
  },
  {
    char: 'ㅈ',
    name: '지읒 (Ji-eut)',
    romanization: 'j / ch',
    soundDescription: 'Sonido suave similar a la "j" inglesa en "juice" o "ch" suave.',
    category: 'basic_consonant',
    sampleWord: { hangul: '지도', romanization: 'jido', spanish: 'mapa' }
  },
  {
    char: 'ㅊ',
    name: '치읓 (Chi-eut)',
    romanization: 'ch (aspirada)',
    soundDescription: 'Como la "ch" de chocolate pero con una fuerte ráfaga de aire (aspirada).',
    category: 'basic_consonant',
    sampleWord: { hangul: '치마', romanization: 'chima', spanish: 'falda' }
  },
  {
    char: 'ㅋ',
    name: '키읔 (Ki-euk)',
    romanization: 'k (aspirada)',
    soundDescription: 'Como la "k" en "kilo" con fuerte expulsión de aire.',
    category: 'basic_consonant',
    sampleWord: { hangul: '커피', romanization: 'keopi', spanish: 'café' }
  },
  {
    char: 'ㅌ',
    name: '티읕 (Ti-eut)',
    romanization: 't (aspirada)',
    soundDescription: 'Como la "t" en "té" con fuerte expulsión de aire.',
    category: 'basic_consonant',
    sampleWord: { hangul: '토마토', romanization: 'tomato', spanish: 'tomate' }
  },
  {
    char: 'ㅍ',
    name: '피읖 (Pi-eup)',
    romanization: 'p (aspirada)',
    soundDescription: 'Como la "p" en "papel" con fuerte expulsión de aire.',
    category: 'basic_consonant',
    sampleWord: { hangul: '피아노', romanization: 'piano', spanish: 'piano' }
  },
  {
    char: 'ㅎ',
    name: '히읗 (Hi-eut)',
    romanization: 'h',
    soundDescription: 'Sonido aspirado suave como la "h" inglesa en "house" o "j" muy suave.',
    category: 'basic_consonant',
    sampleWord: { hangul: '하늘', romanization: 'haneul', spanish: 'cielo' }
  }
];

export const DOUBLE_CONSONANTS: HangulChar[] = [
  {
    char: 'ㄲ',
    name: '쌍기역 (Ssang-giyeok)',
    romanization: 'kk',
    soundDescription: 'Consonante tensa / glotal. Sin expulsión de aire, tensando la garganta.',
    category: 'double_consonant',
    sampleWord: { hangul: '꼬리', romanization: 'kkori', spanish: 'cola / rabo' }
  },
  {
    char: 'ㄸ',
    name: '쌍디귿 (Ssang-digeut)',
    romanization: 'tt',
    soundDescription: 'Consonante tensa dental. Tensa, sin aire aspirado.',
    category: 'double_consonant',
    sampleWord: { hangul: '딸기', romanization: 'ttalgi', spanish: 'fresa' }
  },
  {
    char: 'ㅃ',
    name: '쌍비읍 (Ssang-bieup)',
    romanization: 'pp',
    soundDescription: 'Consonante tensa bilabial. Bloqueo firme de labios sin aire.',
    category: 'double_consonant',
    sampleWord: { hangul: '빵', romanization: 'ppang', spanish: 'pan' }
  },
  {
    char: 'ㅆ',
    name: '쌍시옷 (Ssang-siot)',
    romanization: 'ss',
    soundDescription: 'Consonante tensa silbante. Fricción nítida y tensa.',
    category: 'double_consonant',
    sampleWord: { hangul: '쌀', romanization: 'ssal', spanish: 'arroz crudo' }
  },
  {
    char: 'ㅉ',
    name: '쌍지읒 (Ssang-jieut)',
    romanization: 'jj',
    soundDescription: 'Consonante tensa palatal. Fuerte y sin aire expulsado.',
    category: 'double_consonant',
    sampleWord: { hangul: '찌개', romanization: 'jjigae', spanish: 'guiso / estofado' }
  }
];

export const BASIC_VOWELS: HangulChar[] = [
  {
    char: 'ㅏ',
    name: '아 (A)',
    romanization: 'a',
    soundDescription: 'Como la "a" abierta en español. Vocal vertical (se coloca a la derecha).',
    category: 'basic_vowel',
    position: 'vertical',
    sampleWord: { hangul: '아침', romanization: 'achim', spanish: 'mañana / desayuno' }
  },
  {
    char: 'ㅑ',
    name: '야 (Ya)',
    romanization: 'ya',
    soundDescription: 'Sonido diptongado "ia" o "ya". Vocal vertical.',
    category: 'basic_vowel',
    position: 'vertical',
    sampleWord: { hangul: '야구', romanization: 'yagu', spanish: 'béisbol' }
  },
  {
    char: 'ㅓ',
    name: '어 (Eo)',
    romanization: 'eo',
    soundDescription: 'Vocal media abierta. Pronuncia una "o" con la boca abierta en posición de "a".',
    category: 'basic_vowel',
    position: 'vertical',
    sampleWord: { hangul: '어머니', romanization: 'eomeoni', spanish: 'madre' }
  },
  {
    char: 'ㅕ',
    name: '여 (Yeo)',
    romanization: 'yeo',
    soundDescription: 'Diptongo "y" + "eo". Boca abierta.',
    category: 'basic_vowel',
    position: 'vertical',
    sampleWord: { hangul: '여자', romanization: 'yeoja', spanish: 'mujer' }
  },
  {
    char: 'ㅗ',
    name: '오 (O)',
    romanization: 'o',
    soundDescription: 'Como la "o" cerrada y redondeada en español. Vocal horizontal (se coloca abajo).',
    category: 'basic_vowel',
    position: 'horizontal',
    sampleWord: { hangul: '오이', romanization: 'oi', spanish: 'pepino' }
  },
  {
    char: 'ㅛ',
    name: '요 (Yo)',
    romanization: 'yo',
    soundDescription: 'Diptongo "io" o "yo" redondeado. Vocal horizontal.',
    category: 'basic_vowel',
    position: 'horizontal',
    sampleWord: { hangul: '요리', romanization: 'yori', spanish: 'cocina / plato' }
  },
  {
    char: 'ㅜ',
    name: '우 (U)',
    romanization: 'u',
    soundDescription: 'Como la "u" redondeada en español. Vocal horizontal.',
    category: 'basic_vowel',
    position: 'horizontal',
    sampleWord: { hangul: '우유', romanization: 'uyu', spanish: 'leche' }
  },
  {
    char: 'ㅠ',
    name: '유 (Yu)',
    romanization: 'yu',
    soundDescription: 'Diptongo "iu" o "yu". Vocal horizontal.',
    category: 'basic_vowel',
    position: 'horizontal',
    sampleWord: { hangul: '유리', romanization: 'yuri', spanish: 'vidrio / cristal' }
  },
  {
    char: 'ㅡ',
    name: '으 (Eu)',
    romanization: 'eu',
    soundDescription: 'Sonido "u" no redondeado. Pon la boca en sonrisa estirada e intenta decir "u".',
    category: 'basic_vowel',
    position: 'horizontal',
    sampleWord: { hangul: '은행', romanization: 'eunhaeng', spanish: 'banco' }
  },
  {
    char: 'ㅣ',
    name: '이 (I)',
    romanization: 'i',
    soundDescription: 'Como la "i" clara en español. Vocal vertical.',
    category: 'basic_vowel',
    position: 'vertical',
    sampleWord: { hangul: '이름', romanization: 'ireum', spanish: 'nombre' }
  }
];

export const COMPOUND_VOWELS: HangulChar[] = [
  {
    char: 'ㅐ',
    name: '애 (Ae)',
    romanization: 'ae',
    soundDescription: 'Suena como "e" abierta (actualmente idéntica a ㅔ en habla moderna).',
    category: 'compound_vowel',
    position: 'vertical',
    sampleWord: { hangul: '새', romanization: 'sae', spanish: 'pájaro / nuevo' }
  },
  {
    char: 'ㅒ',
    name: '얘 (Yae)',
    romanization: 'yae',
    soundDescription: 'Sonido "ye".',
    category: 'compound_vowel',
    position: 'vertical',
    sampleWord: { hangul: '얘기', romanization: 'yaegi', spanish: 'conversación / historia' }
  },
  {
    char: 'ㅔ',
    name: '에 (E)',
    romanization: 'e',
    soundDescription: 'Suena como la "e" española estándar.',
    category: 'compound_vowel',
    position: 'vertical',
    sampleWord: { hangul: '가게', romanization: 'gage', spanish: 'tienda' }
  },
  {
    char: 'ㅖ',
    name: '예 (Ye)',
    romanization: 'ye',
    soundDescription: 'Sonido "ye" (como "sí" en tono formal).',
    category: 'compound_vowel',
    position: 'vertical',
    sampleWord: { hangul: '예술', romanization: 'yesul', spanish: 'arte' }
  },
  {
    char: 'ㅘ',
    name: '와 (Wa)',
    romanization: 'wa',
    soundDescription: 'Diptongo "oa" o "wa" (ㅗ + ㅏ).',
    category: 'compound_vowel',
    sampleWord: { hangul: '화요일', romanization: 'hwayoil', spanish: 'martes' }
  },
  {
    char: 'ㅙ',
    name: '왜 (Wae)',
    romanization: 'wae',
    soundDescription: 'Diptongo "oe" o "we" (ㅗ + ㅐ). Significa "¿Por qué?".',
    category: 'compound_vowel',
    sampleWord: { hangul: '왜', romanization: 'wae', spanish: '¿por qué?' }
  },
  {
    char: 'ㅚ',
    name: '외 (Oe)',
    romanization: 'oe (we)',
    soundDescription: 'En coreano moderno se pronuncia prácticamente como "we".',
    category: 'compound_vowel',
    sampleWord: { hangul: '외국', romanization: 'oeguk', spanish: 'país extranjero' }
  },
  {
    char: 'ㅝ',
    name: '워 (Wo)',
    romanization: 'wo',
    soundDescription: 'Diptongo "uo" (ㅜ + ㅓ).',
    category: 'compound_vowel',
    sampleWord: { hangul: '월요일', romanization: 'woryoil', spanish: 'lunes' }
  },
  {
    char: 'ㅞ',
    name: '웨 (We)',
    romanization: 'we',
    soundDescription: 'Diptongo "ue" (ㅜ + ㅔ). Común en extranjerismos (wedding, etc.).',
    category: 'compound_vowel',
    sampleWord: { hangul: '웨딩', romanization: 'weding', spanish: 'boda' }
  },
  {
    char: 'ㅟ',
    name: '위 (Wi)',
    romanization: 'wi',
    soundDescription: 'Diptongo "ui" (ㅜ + ㅣ). Significa "arriba" o "estómago".',
    category: 'compound_vowel',
    sampleWord: { hangul: '위', romanization: 'wi', spanish: 'arriba / sobre' }
  },
  {
    char: 'ㅢ',
    name: '의 (Ui)',
    romanization: 'ui',
    soundDescription: 'Combinación de "eu" + "i". Actúa como partícula posesiva "de".',
    category: 'compound_vowel',
    sampleWord: { hangul: '의사', romanization: 'uisa', spanish: 'médico / doctor' }
  }
];

export interface BatchimRule {
  representativeSound: string;
  consonants: string[];
  explanation: string;
  examples: {
    hangul: string;
    pronunciation: string;
    spanish: string;
  }[];
}

export const BATCHIM_RULES: BatchimRule[] = [
  {
    representativeSound: '[ㄱ] (K final seco)',
    consonants: ['ㄱ', 'ㅋ', 'ㄲ', 'ㄳ', 'ㄺ'],
    explanation: 'Al final de la sílaba se cierra la garganta sin soltar aire.',
    examples: [
      { hangul: '책', pronunciation: '[책]', spanish: 'libro' },
      { hangul: '부엌', pronunciation: '[부억]', spanish: 'cocina' },
      { hangul: '밖', pronunciation: '[박]', spanish: 'afuera' },
      { hangul: '닭', pronunciation: '[닥]', spanish: 'pollo / gallina' }
    ]
  },
  {
    representativeSound: '[ㄴ] (N final)',
    consonants: ['ㄴ', 'ㄵ', 'ㄶ'],
    explanation: 'La lengua sella los alvéolos como en "pan".',
    examples: [
      { hangul: '눈', pronunciation: '[눈]', spanish: 'ojo / nieve' },
      { hangul: '앉다', pronunciation: '[안따]', spanish: 'sentarse' },
      { hangul: '많다', pronunciation: '[만타]', spanish: 'haber mucho' }
    ]
  },
  {
    representativeSound: '[ㄷ] (T final seco)',
    consonants: ['ㄷ', 'ㅌ', 'ㅅ', 'ㅆ', 'ㅈ', 'ㅊ', 'ㅎ'],
    explanation: '¡Regla crucial! Estas 7 consonantes suenan todas como una [ㄷ/T] cerrada al final de sílaba.',
    examples: [
      { hangul: '옷', pronunciation: '[옫]', spanish: 'ropa' },
      { hangul: '꽃', pronunciation: '[꼳]', spanish: 'flor' },
      { hangul: '낮', pronunciation: '[낟]', spanish: 'día (horas de sol)' },
      { hangul: '있다', pronunciation: '[읻따]', spanish: 'tener / estar' }
    ]
  },
  {
    representativeSound: '[ㄹ] (L final)',
    consonants: ['ㄹ', 'ㄼ', 'ㄽ', 'ㄾ', 'ㅀ'],
    explanation: 'Suena como una "l" suave, nunca vibrante múltiple española.',
    examples: [
      { hangul: '물', pronunciation: '[물]', spanish: 'agua' },
      { hangul: '길', pronunciation: '[길]', spanish: 'camino / calle' },
      { hangul: '여덟', pronunciation: '[여덜]', spanish: 'ocho' }
    ]
  },
  {
    representativeSound: '[ㅁ] (M final)',
    consonants: ['ㅁ', 'ㄻ'],
    explanation: 'Cierre total de labios resonante.',
    examples: [
      { hangul: '사람', pronunciation: '[사람]', spanish: 'persona' },
      { hangul: '삶', pronunciation: '[삼]', spanish: 'vida' }
    ]
  },
  {
    representativeSound: '[ㅂ] (P final seca)',
    consonants: ['ㅂ', 'ㅍ', 'ㄿ', 'ㅄ'],
    explanation: 'Los labios se cierran en seco sin explosión de aire.',
    examples: [
      { hangul: '밥', pronunciation: '[밥]', spanish: 'arroz cocido / comida' },
      { hangul: '숲', pronunciation: '[숩]', spanish: 'bosque' },
      { hangul: '값', pronunciation: '[갑]', spanish: 'precio' }
    ]
  },
  {
    representativeSound: '[ㅇ] (NG nasal)',
    consonants: ['ㅇ'],
    explanation: 'Sonido resonante como en "canto" o "king" en inglés.',
    examples: [
      { hangul: '강', pronunciation: '[강]', spanish: 'río' },
      { hangul: '사랑', pronunciation: '[사랑]', spanish: 'amor' },
      { hangul: '한국', pronunciation: '[한국]', spanish: 'Corea' }
    ]
  }
];

// Hangul Syllable Builder Unicode Math
export const CHOSUNG_LIST = [
  'ㄱ', 'ㄲ', 'ㄴ', 'ㄷ', 'ㄸ', 'ㄹ', 'ㅁ', 'ㅂ', 'ㅃ', 'ㅅ', 'ㅆ', 'ㅇ', 'ㅈ', 'ㅉ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ'
];

export const JUNGSUNG_LIST = [
  'ㅏ', 'ㅐ', 'ㅑ', 'ㅒ', 'ㅓ', 'ㅔ', 'ㅕ', 'ㅖ', 'ㅗ', 'ㅘ', 'ㅙ', 'ㅚ', 'ㅛ', 'ㅜ', 'ㅝ', 'ㅞ', 'ㅟ', 'ㅠ', 'ㅡ', 'ㅢ', 'ㅣ'
];

export const JONGSUNG_LIST = [
  '', 'ㄱ', 'ㄲ', 'ㄳ', 'ㄴ', 'ㄵ', 'ㄶ', 'ㄷ', 'ㄹ', 'ㄺ', 'ㄻ', 'ㄼ', 'ㄽ', 'ㄾ', 'ㄿ', 'ㅀ', 'ㅁ', 'ㅂ', 'ㅄ', 'ㅅ', 'ㅆ', 'ㅇ', 'ㅈ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ'
];

export const composeHangul = (choIndex: number, jungIndex: number, jongIndex = 0): string => {
  if (choIndex < 0 || choIndex >= CHOSUNG_LIST.length) return '';
  if (jungIndex < 0 || jungIndex >= JUNGSUNG_LIST.length) return '';
  const code = 0xac00 + (choIndex * 21 + jungIndex) * 28 + jongIndex;
  return String.fromCharCode(code);
};
