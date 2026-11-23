// ==============================================================================
// KOREAN ACADEMY - SMART DICTIONARY & FLASHCARD DATABASE
// ==============================================================================
import { VocabularyWord } from '../types';

export const VOCABULARY_DATABASE: VocabularyWord[] = [
  // NIVEL 0 - Fundamentos & Saludos
  {
    id: 'voc-001',
    hangul: '안녕하세요',
    romanization: 'annyeonghaseyo',
    spanish: 'Hola / Buenos días / Buenas tardes',
    partOfSpeech: 'expresión',
    level: 0,
    topic: 'saludos',
    exampleKorean: '선생님, 안녕하세요!',
    exampleSpanish: '¡Profesor, buenos días!'
  },
  {
    id: 'voc-002',
    hangul: '감사합니다',
    romanization: 'gamsahamnida',
    spanish: 'Muchas gracias (formal)',
    partOfSpeech: 'expresión',
    level: 0,
    topic: 'cortesía',
    exampleKorean: '정말 감사합니다.',
    exampleSpanish: 'Muchas gracias en verdad.'
  },
  {
    id: 'voc-003',
    hangul: '죄송합니다',
    romanization: 'joesonghamnida',
    spanish: 'Lo siento / Perdón',
    partOfSpeech: 'expresión',
    level: 0,
    topic: 'cortesía',
    exampleKorean: '늦어서 죄송합니다.',
    exampleSpanish: 'Perdón por llegar tarde.'
  },
  {
    id: 'voc-004',
    hangul: '네',
    romanization: 'ne',
    spanish: 'Sí / De acuerdo',
    partOfSpeech: 'expresión',
    level: 0,
    topic: 'básico',
    exampleKorean: '네, 알겠습니다.',
    exampleSpanish: 'Sí, de acuerdo.'
  },
  {
    id: 'voc-005',
    hangul: '아니요',
    romanization: 'aniyo',
    spanish: 'No',
    partOfSpeech: 'expresión',
    level: 0,
    topic: 'básico',
    exampleKorean: '아니요, 저는 학생이 아니에요.',
    exampleSpanish: 'No, no soy estudiante.'
  },
  {
    id: 'voc-006',
    hangul: '안녕히 계세요',
    romanization: 'annyeonghi gyeseyo',
    spanish: 'Adiós (dicho a quien se queda)',
    partOfSpeech: 'expresión',
    level: 0,
    topic: 'saludos',
    exampleKorean: '선생님, 안녕히 계세요.',
    exampleSpanish: 'Profesor, quédese en paz (adiós).'
  },
  {
    id: 'voc-007',
    hangul: '안녕히 가세요',
    romanization: 'annyeonghi gaseyo',
    spanish: 'Adiós (dicho a quien se marcha)',
    partOfSpeech: 'expresión',
    level: 0,
    topic: 'saludos',
    exampleKorean: '친구에게: 안녕히 가세요.',
    exampleSpanish: 'Al amigo: que te vaya bien (adiós).'
  },
  {
    id: 'voc-008',
    hangul: '한글',
    hanja: '韓契',
    romanization: 'hangeul',
    spanish: 'Hangul (alfabeto coreano)',
    partOfSpeech: 'sustantivo',
    level: 0,
    topic: 'lengua',
    exampleKorean: '한글을 읽을 수 있어요.',
    exampleSpanish: 'Sé leer Hangul.'
  },

  // NIVEL 1 - A1 Principiante
  {
    id: 'voc-101',
    hangul: '사람',
    romanization: 'saram',
    spanish: 'Persona / Ser humano',
    partOfSpeech: 'sustantivo',
    level: 1,
    topic: 'identidad',
    exampleKorean: '좋은 사람이에요.',
    exampleSpanish: 'Es una buena persona.'
  },
  {
    id: 'voc-102',
    hangul: '학생',
    hanja: '學生',
    romanization: 'haksaeng',
    spanish: 'Estudiante',
    partOfSpeech: 'sustantivo',
    level: 1,
    topic: 'escuela',
    exampleKorean: '저는 한국어 학생이에요.',
    exampleSpanish: 'Soy estudiante de coreano.'
  },
  {
    id: 'voc-103',
    hangul: '선생님',
    romanization: 'seonsaengnim',
    spanish: 'Profesor / Maestro / Señor',
    partOfSpeech: 'sustantivo',
    level: 1,
    topic: 'escuela',
    exampleKorean: '선생님이 친절해요.',
    exampleSpanish: 'El profesor es amable.'
  },
  {
    id: 'voc-104',
    hangul: '친구',
    hanja: '親舊',
    romanization: 'chingu',
    spanish: 'Amigo / amiga',
    partOfSpeech: 'sustantivo',
    level: 1,
    topic: 'relaciones',
    exampleKorean: '친구를 만나요.',
    exampleSpanish: 'Me reúno con un amigo.'
  },
  {
    id: 'voc-105',
    hangul: '가족',
    hanja: '家族',
    romanization: 'gajok',
    spanish: 'Familia',
    partOfSpeech: 'sustantivo',
    level: 1,
    topic: 'familia',
    exampleKorean: '우리 가족은 네 명이에요.',
    exampleSpanish: 'Nuestra familia tiene 4 personas.'
  },
  {
    id: 'voc-106',
    hangul: '물',
    romanization: 'mul',
    spanish: 'Agua',
    partOfSpeech: 'sustantivo',
    level: 1,
    topic: 'comida',
    exampleKorean: '시원한 물을 마셔요.',
    exampleSpanish: 'Bebo agua fresca.'
  },
  {
    id: 'voc-107',
    hangul: '밥',
    romanization: 'bap',
    spanish: 'Arroz cocido / Comida',
    partOfSpeech: 'sustantivo',
    level: 1,
    topic: 'comida',
    exampleKorean: '밥 먹었어요?',
    exampleSpanish: '¿Ya comiste? (saludo afectuoso)'
  },
  {
    id: 'voc-108',
    hangul: '책',
    hanja: '冊',
    romanization: 'chaek',
    spanish: 'Libro',
    partOfSpeech: 'sustantivo',
    level: 1,
    topic: 'estudio',
    exampleKorean: '책을 읽어요.',
    exampleSpanish: 'Leo un libro.'
  },
  {
    id: 'voc-109',
    hangul: '가다',
    romanization: 'gada',
    spanish: 'Ir',
    partOfSpeech: 'verbo',
    level: 1,
    topic: 'acciones',
    exampleKorean: '학교에 가요.',
    exampleSpanish: 'Voy a la escuela.'
  },
  {
    id: 'voc-110',
    hangul: '오다',
    romanization: 'oda',
    spanish: 'Venir',
    partOfSpeech: 'verbo',
    level: 1,
    topic: 'acciones',
    exampleKorean: '집에 와요.',
    exampleSpanish: 'Vengo a casa.'
  },
  {
    id: 'voc-111',
    hangul: '먹다',
    romanization: 'meokda',
    spanish: 'Comer',
    partOfSpeech: 'verbo',
    level: 1,
    topic: 'acciones',
    exampleKorean: '사과를 먹어요.',
    exampleSpanish: 'Como una manzana.'
  },
  {
    id: 'voc-112',
    hangul: '마시다',
    romanization: 'masida',
    spanish: 'Beber / Tomar',
    partOfSpeech: 'verbo',
    level: 1,
    topic: 'acciones',
    exampleKorean: '따뜻한 차를 마셔요.',
    exampleSpanish: 'Bebo té caliente.'
  },
  {
    id: 'voc-113',
    hangul: '보다',
    romanization: 'boda',
    spanish: 'Ver / Mirar / Presentar examen',
    partOfSpeech: 'verbo',
    level: 1,
    topic: 'acciones',
    exampleKorean: '시험을 봐요.',
    exampleSpanish: 'Presento un examen.'
  },
  {
    id: 'voc-114',
    hangul: '좋다',
    romanization: 'jota',
    spanish: 'Ser bueno / gustar',
    partOfSpeech: 'adjetivo',
    level: 1,
    topic: 'cualidades',
    exampleKorean: '기분이 아주 좋아요.',
    exampleSpanish: 'Me siento de muy buen humor.'
  },
  {
    id: 'voc-115',
    hangul: '크다',
    romanization: 'keuda',
    spanish: 'Ser grande',
    partOfSpeech: 'adjetivo',
    level: 1,
    topic: 'cualidades',
    exampleKorean: '가방이 커요.',
    exampleSpanish: 'La mochila es grande.'
  },
  {
    id: 'voc-116',
    hangul: '작다',
    romanization: 'jakda',
    spanish: 'Ser pequeño',
    partOfSpeech: 'adjetivo',
    level: 1,
    topic: 'cualidades',
    exampleKorean: '방이 조금 작아요.',
    exampleSpanish: 'La habitación es un poco pequeña.'
  },

  // NIVEL 2 - A2 Principiante Superior
  {
    id: 'voc-201',
    hangul: '어제',
    romanization: 'eoje',
    spanish: 'Ayer',
    partOfSpeech: 'sustantivo',
    level: 2,
    topic: 'tiempo',
    exampleKorean: '어제는 비가 왔어요.',
    exampleSpanish: 'Ayer llovió.'
  },
  {
    id: 'voc-202',
    hangul: '내일',
    hanja: '來日',
    romanization: 'naeil',
    spanish: 'Mañana (día siguiente)',
    partOfSpeech: 'sustantivo',
    level: 2,
    topic: 'tiempo',
    exampleKorean: '내일 시험이 있어요.',
    exampleSpanish: 'Mañana tengo examen.'
  },
  {
    id: 'voc-203',
    hangul: '약속',
    hanja: '約束',
    romanization: 'yaksok',
    spanish: 'Cita / Promesa / Compromiso',
    partOfSpeech: 'sustantivo',
    level: 2,
    topic: 'vida diaria',
    exampleKorean: '친구와 약속을 했어요.',
    exampleSpanish: 'Hice una cita con un amigo.'
  },
  {
    id: 'voc-204',
    hangul: '여행',
    hanja: '旅行',
    romanization: 'yeohaeng',
    spanish: 'Viaje',
    partOfSpeech: 'sustantivo',
    level: 2,
    topic: 'ocio',
    exampleKorean: '제주도로 여행을 가요.',
    exampleSpanish: 'Voy de viaje a la isla Jeju.'
  },
  {
    id: 'voc-205',
    hangul: '배우다',
    romanization: 'baeuda',
    spanish: 'Aprender',
    partOfSpeech: 'verbo',
    level: 2,
    topic: 'estudio',
    exampleKorean: '한국어를 열심히 배워요.',
    exampleSpanish: 'Aprendo coreano con empeño.'
  },
  {
    id: 'voc-206',
    hangul: '가르치다',
    romanization: 'gareuchida',
    spanish: 'Enseñar',
    partOfSpeech: 'verbo',
    level: 2,
    topic: 'estudio',
    exampleKorean: '선생님이 문법을 가르쳐요.',
    exampleSpanish: 'El profesor enseña la gramática.'
  },
  {
    id: 'voc-207',
    hangul: '어렵다',
    romanization: 'eoryeopda',
    spanish: 'Ser difícil',
    partOfSpeech: 'adjetivo',
    level: 2,
    topic: 'cualidades',
    exampleKorean: '시험이 어려웠어요.',
    exampleSpanish: 'El examen estuvo difícil.'
  },
  {
    id: 'voc-208',
    hangul: '쉽다',
    romanization: 'swipda',
    spanish: 'Ser fácil',
    partOfSpeech: 'adjetivo',
    level: 2,
    topic: 'cualidades',
    exampleKorean: '발음이 쉬워요.',
    exampleSpanish: 'La pronunciación es fácil.'
  },
  {
    id: 'voc-209',
    hangul: '하지만',
    romanization: 'hajiman',
    spanish: 'Pero / Sin embargo',
    partOfSpeech: 'conector',
    level: 2,
    topic: 'conectores',
    exampleKorean: '어려워요. 하지만 재미있어요.',
    exampleSpanish: 'Es difícil. Pero es divertido.'
  },

  // NIVEL 3 - B1 Intermedio
  {
    id: 'voc-301',
    hangul: '경험',
    hanja: '經驗',
    romanization: 'gyeongheom',
    spanish: 'Experiencia',
    partOfSpeech: 'sustantivo',
    level: 3,
    topic: 'vida y sociedad',
    exampleKorean: '다양한 경험을 쌓아야 해요.',
    exampleSpanish: 'Debes acumular diversas experiencias.'
  },
  {
    id: 'voc-302',
    hangul: '문화',
    hanja: '文化',
    romanization: 'munhwa',
    spanish: 'Cultura',
    partOfSpeech: 'sustantivo',
    level: 3,
    topic: 'cultura',
    exampleKorean: '한국 문화를 이해하고 싶어요.',
    exampleSpanish: 'Quiero comprender la cultura coreana.'
  },
  {
    id: 'voc-303',
    hangul: '인터뷰',
    romanization: 'inteobyu',
    spanish: 'Entrevista',
    partOfSpeech: 'sustantivo',
    level: 3,
    topic: 'sociedad',
    exampleKorean: '취업 인터뷰를 준비해요.',
    exampleSpanish: 'Preparo una entrevista de trabajo.'
  },
  {
    id: 'voc-304',
    hangul: '해결하다',
    hanja: '解決하다',
    romanization: 'haegyeolhada',
    spanish: 'Resolver / solucionar',
    partOfSpeech: 'verbo',
    level: 3,
    topic: 'sociedad',
    exampleKorean: '문제를 빨리 해결해야 합니다.',
    exampleSpanish: 'Hay que resolver el problema pronto.'
  },
  {
    id: 'voc-305',
    hangul: '비록',
    romanization: 'birok',
    spanish: 'Aunque / a pesar de que',
    partOfSpeech: 'adverbio',
    level: 3,
    topic: 'conectores',
    exampleKorean: '비록 힘들지만 포기하지 않아요.',
    exampleSpanish: 'Aunque sea difícil, no me rindo.'
  },

  // NIVEL 4 - B2 Intermedio Alto
  {
    id: 'voc-401',
    hangul: '경제',
    hanja: '經濟',
    romanization: 'gyeongje',
    spanish: 'Economía',
    partOfSpeech: 'sustantivo',
    level: 4,
    topic: 'académico',
    exampleKorean: '세계 경제가 변화하고 있습니다.',
    exampleSpanish: 'La economía mundial está cambiando.'
  },
  {
    id: 'voc-402',
    hangul: '설문조사',
    hanja: '設問調査',
    romanization: 'seolmunjosa',
    spanish: 'Encuesta / Sondeo de opinión',
    partOfSpeech: 'sustantivo',
    level: 4,
    topic: 'topik_escritura',
    exampleKorean: '설문조사 결과에 따르면...',
    exampleSpanish: 'De acuerdo con los resultados de la encuesta... (fórmula TOPIK 53)'
  },
  {
    id: 'voc-403',
    hangul: '증가하다',
    hanja: '增加하다',
    romanization: 'jeunggajada',
    spanish: 'Aumentar / incrementarse',
    partOfSpeech: 'verbo',
    level: 4,
    topic: 'topik_escritura',
    exampleKorean: '이용자 수가 크게 증가했습니다.',
    exampleSpanish: 'El número de usuarios aumentó notablemente.'
  },
  {
    id: 'voc-404',
    hangul: '감소하다',
    hanja: '減少하다',
    romanization: 'gamsohada',
    spanish: 'Disminuir / reducirse',
    partOfSpeech: 'verbo',
    level: 4,
    topic: 'topik_escritura',
    exampleKorean: '출산율이 감소하는 추세입니다.',
    exampleSpanish: 'La tasa de natalidad tiene tendencia a disminuir.'
  },

  // NIVEL 5 - C1-C2 Avanzado
  {
    id: 'voc-501',
    hangul: '일석이조',
    hanja: '一石二鳥',
    romanization: 'ilseok-ijo',
    spanish: 'Matar dos pájaros de un tiro (proverbio)',
    partOfSpeech: 'expresión',
    level: 5,
    topic: 'sajaseongeo',
    exampleKorean: '책도 읽고 한국어도 배우니 일석이조다.',
    exampleSpanish: 'Leo un libro y aprendo coreano, así que mato dos pájaros de un tiro.'
  },
  {
    id: 'voc-502',
    hangul: '작심삼일',
    hanja: '作心三日',
    romanization: 'jaksim-samil',
    spanish: 'Resolución de 3 días / falta de constancia',
    partOfSpeech: 'expresión',
    level: 5,
    topic: 'sajaseongeo',
    exampleKorean: '공부 계획이 작심삼일이 되지 않도록 하자.',
    exampleSpanish: 'Asegurémonos de que el plan de estudio no sea una resolución de tres días.'
  },
  {
    id: 'voc-503',
    hangul: '고진감래',
    hanja: '苦盡甘來',
    romanization: 'gojin-gamrae',
    spanish: 'Tras lo amargo llega lo dulce / El fruto del esfuerzo',
    partOfSpeech: 'expresión',
    level: 5,
    topic: 'sajaseongeo',
    exampleKorean: '끝까지 버티면 고진감래의 날이 올 것이다.',
    exampleSpanish: 'Si perseveras hasta el final, llegará el día de la dulce recompensa.'
  },
  {
    id: 'voc-504',
    hangul: '역지사지',
    hanja: '易地思之',
    romanization: 'yeokji-saji',
    spanish: 'Ponerse en el lugar de la otra persona / empatía profunda',
    partOfSpeech: 'expresión',
    level: 5,
    topic: 'sajaseongeo',
    exampleKorean: '갈등 해결을 위해서는 역지사지의 태도가 필수적이다.',
    exampleSpanish: 'Para resolver conflictos, una actitud de ponerse en el lugar ajeno es esencial.'
  }
];
