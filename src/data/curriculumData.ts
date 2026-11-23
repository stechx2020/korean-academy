// ==============================================================================
// KOREAN ACADEMY - CURRICULUM DATA (LEVELS 0 TO 5)
// ==============================================================================
import { LevelData } from '../types';

export const CURRICULUM_LEVELS: LevelData[] = [
  // ----------------------------------------------------------------------------
  // NIVEL 0: FUNDAMENTOS ABSOLUTOS
  // ----------------------------------------------------------------------------
  {
    levelNumber: 0,
    code: 'NIVEL_0',
    title: 'Nivel 0: Fundamentos Absolutos',
    subTitle: 'Aprende a leer, escribir y pronunciar el alfabeto Hangul desde cero',
    description: 'La base indispensable de todo estudiante de coreano: la historia del Rey Sejong, las 14 consonantes, 10 vocales, consonantes dobles, vocales compuestas, bloques silábicos y las reglas del Batchim.',
    targetExam: 'Iniciación sin requisitos previos',
    colorAccent: '#1e40af',
    badge: '한글 마스터',
    modules: [
      {
        id: 'mod-0-1',
        levelNumber: 0,
        moduleNumber: 1,
        title: 'Historia, Hangul y Fonética Básica',
        description: 'Domina los bloques constitutivos del alfabeto coreano más científico del mundo.',
        iconName: 'BookOpen',
        lessons: [
          {
            id: 'les-0-1-1',
            moduleId: 'mod-0-1',
            levelNumber: 0,
            lessonNumber: 1,
            title: 'Nacimiento del Hangul y las 14 Consonantes Básicas',
            koreanTitle: '한글의 창제와 기본 자음',
            slug: 'nacimiento-hangul-consonantes-basicas',
            description: 'Conoce por qué el Rey Sejong el Grande creó el Hangul en 1443 y aprende las 14 consonantes básicas con su punto de articulación.',
            orderIndex: 1,
            estimatedMinutes: 25,
            learningObjectives: [
              'Comprender el contexto histórico y el principio científico del Hangul (Hunminjeongeum).',
              'Reconocer, escribir y pronunciar las 14 consonantes simples (ㄱ, ㄴ, ㄷ, ㄹ, ㅁ, ㅂ, ㅅ, ㅇ, ㅈ, ㅊ, ㅋ, ㅌ, ㅍ, ㅎ).',
              'Comprender cómo la forma de cada consonante imita la posición de los órganos vocales (lengua, labios, garganta).'
            ],
            theoryContent: {
              introduction: 'Hasta el siglo XV, en Corea se utilizaban los caracteres chinos (Hanja). Debido a su extrema complejidad, la gran mayoría de la población era analfabeta. En 1443, el Rey Sejong el Grande lideró la creación de un alfabeto fonético y accesible para todo el pueblo: el Hangul (originalmente llamado Hunminjeongeum, "Los sonidos correctos para la instrucción del pueblo").',
              sections: [
                {
                  heading: '1. El principio de imitación anatómica',
                  content: 'A diferencia de los alfabetos occidentales o los jeroglíficos, las consonantes básicas del Hangul representan esquemáticamente la forma de la boca, lengua y garganta al pronunciarlas: ㄱ imita la base de la lengua bloqueando la garganta; ㄴ imita la punta de la lengua tocando el paladar superior; ㅁ imita la forma cuadrada de los labios cerrados; ㅅ representa los dientes; y ㅇ imita la forma redonda de la garganta abierta.',
                  koreanFocus: 'ㄱ, ㄴ, ㅁ, ㅅ, ㅇ (Consonantes cardinales anatómicas)',
                  culturalNote: 'La UNESCO creó el "Premio de Alfabetización Rey Sejong" en 1989 en honor al monarca creador del Hangul, reconocido como uno de los logros lingüísticos más brillantes de la humanidad.'
                },
                {
                  heading: '2. Las 14 consonantes básicas y sus sonidos',
                  content: 'Las consonantes coreanas no tienen equivalentes 100% idénticos al español, sino que se ubican entre sonidos sordos y sonoros. Por ejemplo, ㄱ suena como una "g" suave al inicio y como una "k" sutil si se encuentra al final. La letra ㅇ es completamente muda cuando se sitúa al inicio de una sílaba como soporte vocálico (ej. 아), pero produce el sonido "ng" nasal al final de una sílaba (ej. 강).'
                }
              ]
            },
            vocabularyList: [
              { hangul: '한글', hanja: '韓契', romanization: 'Hangeul', spanish: 'Hangul (alfabeto coreano)', partOfSpeech: 'sustantivo', exampleKorean: '한글은 과학적이에요.', exampleSpanish: 'El Hangul es científico.' },
              { hangul: '세종대왕', hanja: '世宗大王', romanization: 'Sejong Daewang', spanish: 'Rey Sejong el Grande', partOfSpeech: 'sustantivo', exampleKorean: '세종대왕이 한글을 만들었습니다.', exampleSpanish: 'El Rey Sejong creó el Hangul.' },
              { hangul: '자음', hanja: '子音', romanization: 'ja-eum', spanish: 'Consonante', partOfSpeech: 'sustantivo', exampleKorean: '기본 자음은 열네 개입니다.', exampleSpanish: 'Hay 14 consonantes básicas.' },
              { hangul: '소리', romanization: 'sori', spanish: 'Sonido / voz', partOfSpeech: 'sustantivo', exampleKorean: '소리가 맑아요.', exampleSpanish: 'El sonido es claro.' }
            ],
            grammarPoints: [
              {
                title: 'Naturaleza fonética de las consonantes coreanas',
                structure: 'Consonante básica (ㄱ, ㄴ, ㄷ, ㄹ...)',
                explanation: 'A diferencia de las lenguas romances que dividen tajantemente entre sordas (p, t, k) y sonoras (b, d, g), el coreano básico maneja grados de aspiración y tensión. Al inicio de una palabra, las consonantes básicas se pronuncian con mínima presión y sin vibración fuerte de cuerdas vocales.',
                examples: [
                  { hangul: '가방', romanization: 'gabang / kabang', spanish: 'Mochila o bolso (ㄱ suena suave entre k y g)' },
                  { hangul: '나무', romanization: 'namu', spanish: 'Árbol (ㄴ suena n nítida)' },
                  { hangul: '다리', romanization: 'dari', spanish: 'Pierna o puente (ㄷ suena entre d y t)' }
                ],
                cautions: 'Nunca pronuncies la letra ㄹ como una "rr" fuerte española vibrante múltiple. Es siempre una "r" suave con la punta de la lengua como en "pera".'
              }
            ],
            dailyExamples: [
              {
                speakerA: '민수 (Minsu)',
                hangulA: '이 글자가 뭐예요?',
                spanishA: '¿Qué letra es esta?',
                speakerB: '지우 (Jiwoo)',
                hangulB: '기역이에요. 소리는 [g/k]예요.',
                spanishB: 'Es Giyeok (ㄱ). El sonido es [g/k].'
              }
            ],
            exercises: [
              {
                id: 'ex-0-1-1-1',
                type: 'multiple_choice',
                prompt: '¿Cuál de las siguientes consonantes imita la forma de los labios cerrados?',
                options: ['ㄱ', 'ㅁ', 'ㅅ', 'ㅇ'],
                correctAnswer: 'ㅁ',
                explanation: 'La letra ㅁ (mieum) tiene forma cuadrada representando la forma de los labios juntos al emitir el sonido [m].',
                points: 10
              },
              {
                id: 'ex-0-1-1-2',
                type: 'hangul_match',
                prompt: 'Asocia la consonante con su nombre oficial en coreano:',
                koreanText: 'ㄱ',
                options: ['기역 (Giyeok)', '니은 (Nieun)', '디귿 (Digeut)', '리을 (Rieul)'],
                correctAnswer: '기역 (Giyeok)',
                explanation: 'ㄱ se llama oficialmente 기역 (Giyeok).',
                points: 10
              },
              {
                id: 'ex-0-1-1-3',
                type: 'multiple_choice',
                prompt: '¿En qué año fue creado originalmente el Hangul por el Rey Sejong?',
                options: ['1443', '1592', '1910', '1945'],
                correctAnswer: '1443',
                explanation: 'El Hangul fue completado en 1443 y promulgado oficialmente en 1446 bajo el título Hunminjeongeum.',
                points: 10
              }
            ],
            quiz: [
              {
                id: 'qz-0-1-1-1',
                type: 'multiple_choice',
                prompt: '¿Cuál de las siguientes consonantes es muda cuando está al principio de una sílaba?',
                options: ['ㅂ', 'ㅅ', 'ㅇ', 'ㅎ'],
                correctAnswer: 'ㅇ',
                explanation: 'La consonante ㅇ (I-eung) es muda al inicio de sílaba y sirve de soporte estético para la vocal (ej. 아 = "a").',
                points: 15
              },
              {
                id: 'qz-0-1-1-2',
                type: 'multiple_choice',
                prompt: '¿Qué consonante representa la lengua tocando el paladar superior?',
                options: ['ㄴ', 'ㅁ', 'ㅈ', 'ㅋ'],
                correctAnswer: 'ㄴ',
                explanation: 'La letra ㄴ (Nieun) representa la silueta de la punta de la lengua curvándose hacia arriba contra los alvéolos.',
                points: 15
              }
            ],
            summaryChecklist: [
              'Conozco la historia del Rey Sejong y el valor cultural del Hangul.',
              'Reconozco visualmente las 14 consonantes básicas: ㄱ, ㄴ, ㄷ, ㄹ, ㅁ, ㅂ, ㅅ, ㅇ, ㅈ, ㅊ, ㅋ, ㅌ, ㅍ, ㅎ.',
              'Comprendo que la consonante ㅇ al inicio de sílaba no tiene sonido propio.'
            ]
          },
          {
            id: 'les-0-1-2',
            moduleId: 'mod-0-1',
            levelNumber: 0,
            lessonNumber: 2,
            title: 'Las 10 Vocales Básicas y la Filosofía del Cosmos',
            koreanTitle: '기본 모음 10자와 천지인 철학',
            slug: 'vocales-basicas-filosofia-cosmos',
            description: 'Descubre cómo las vocales coreanas se basan en el Cielo (•), la Tierra (ㅡ) y el Hombre (ㅣ), y aprende su orientación espacial.',
            orderIndex: 2,
            estimatedMinutes: 25,
            learningObjectives: [
              'Comprender la filosofía de las tres fuerzas cósmicas (Cheon-Ji-In: Cielo, Tierra, Humano).',
              'Dominar las 10 vocales básicas (ㅏ, ㅑ, ㅓ, ㅕ, ㅗ, ㅛ, ㅜ, ㅠ, ㅡ, ㅣ).',
              'Diferenciar entre vocales verticales (a la derecha) y vocales horizontales (debajo de la consonante).',
              'Pronunciar correctamente la vocal ㅓ (eo) y la vocal ㅡ (eu).'
            ],
            theoryContent: {
              introduction: 'Mientras que las consonantes del Hangul se basan en la anatomía humana, las vocales se construyeron con una profunda base filosófica neoconfuciana: los tres elementos del universo (Cheon-Ji-In): el Cielo (representado antiguamente por un punto •, hoy un trazo corto), la Tierra (una línea plana horizontal ㅡ) y el Hombre (una línea vertical erguida ㅣ).',
              sections: [
                {
                  heading: '1. Vocales verticales vs Vocales horizontales',
                  content: 'La orientación de la vocal determina dónde se coloca respecto a la consonante inicial: Las vocales verticales (ㅏ, ㅑ, ㅓ, ㅕ, ㅣ) tienen como eje la línea vertical ㅣ (el Hombre) y se ubican SIEMPRE a la derecha de la consonante (ejemplo: 가, 나, 다). Las vocales horizontales (ㅗ, ㅛ, ㅜ, ㅠ, ㅡ) tienen como eje la línea horizontal ㅡ (la Tierra) y se ubican SIEMPRE debajo de la consonante (ejemplo: 고, 노, 도).',
                  koreanFocus: 'Derecha: ㅏ, ㅑ, ㅓ, ㅕ, ㅣ | Abajo: ㅗ, ㅛ, ㅜ, ㅠ, ㅡ'
                },
                {
                  heading: '2. El secreto de ㅓ (eo) vs ㅗ (o), y ㅡ (eu) vs ㅜ (u)',
                  content: 'Para hispanohablantes este es el mayor reto inicial: ㅗ (o) es una "o" redondeada muy cerrada, como en "oro"; en cambio ㅓ (eo) se produce abriendo la boca como para decir "a", pero emitiendo el sonido "o" desde la garganta. Para ㅡ (eu), estira los labios en una amplia sonrisa horizontal y trata de pronunciar una "u" sin redondear los labios.',
                  culturalNote: 'Las vocales que apuntan hacia arriba o hacia la derecha (ㅏ, ㅗ) eran consideradas vocales "claras o yang" (brillantes, ligeras), mientras que las que apuntan hacia abajo o hacia la izquierda (ㅓ, ㅜ) eran consideradas vocales "oscuras o yin" (profundas, pesadas).'
                }
              ]
            },
            vocabularyList: [
              { hangul: '아이', romanization: 'ai', spanish: 'Niño / bebé', partOfSpeech: 'sustantivo', exampleKorean: '아이가 웃어요.', exampleSpanish: 'El niño sonríe.' },
              { hangul: '오이', romanization: 'oi', spanish: 'Pepino', partOfSpeech: 'sustantivo', exampleKorean: '오이를 먹어요.', exampleSpanish: 'Como pepino.' },
              { hangul: '우유', romanization: 'uyu', spanish: 'Leche', partOfSpeech: 'sustantivo', exampleKorean: '우유를 마셔요.', exampleSpanish: 'Bebo leche.' },
              { hangul: '모음', hanja: '母音', romanization: 'mo-eum', spanish: 'Vocal', partOfSpeech: 'sustantivo', exampleKorean: '기본 모음은 열 개입니다.', exampleSpanish: 'Las vocales básicas son diez.' }
            ],
            grammarPoints: [
              {
                title: 'La regla del soporte mudo ㅇ para vocales aisladas',
                structure: 'ㅇ + Vocal (ej. ㅇ + ㅏ = 아)',
                explanation: 'En coreano una vocal NUNCA puede escribirse sola flotando en un texto. Cada bloque silábico debe tener obligatoriamente al menos una consonante inicial. Si una palabra o sílaba empieza con sonido vocálico, se antepone la consonante muda ㅇ.',
                examples: [
                  { hangul: '아', romanization: 'a', spanish: 'Sonido "a" (ㅇ es muda, solo da soporte)' },
                  { hangul: '오', romanization: 'o', spanish: 'Sonido "o"' },
                  { hangul: '이', romanization: 'i', spanish: 'Sonido "i" (también significa "dos" o "diente")' }
                ]
              }
            ],
            dailyExamples: [
              {
                speakerA: '선생님 (Profesor)',
                hangulA: '우유 좋아해요?',
                spanishA: '¿Te gusta la leche?',
                speakerB: '학생 (Estudiante)',
                hangulB: '네, 우유 아주 좋아해요.',
                spanishB: 'Sí, me gusta mucho la leche.'
              }
            ],
            exercises: [
              {
                id: 'ex-0-1-2-1',
                type: 'multiple_choice',
                prompt: '¿Cuál de las siguientes vocales es horizontal y debe escribirse DEBAJO de la consonante?',
                options: ['ㅏ', 'ㅓ', 'ㅗ', 'ㅣ'],
                correctAnswer: 'ㅗ',
                explanation: 'La vocal ㅗ (o) es horizontal, por lo que se coloca debajo de la consonante (ej. 고).',
                points: 10
              },
              {
                id: 'ex-0-1-2-2',
                type: 'multiple_choice',
                prompt: '¿Cómo se escribe correctamente en Hangul la palabra para "leche" (uyu)?',
                options: ['아이', '우유', '오이', '여우'],
                correctAnswer: '우유',
                explanation: '우유 (uyu) está compuesta por 우 (u) + 유 (yu).',
                points: 10
              }
            ],
            quiz: [
              {
                id: 'qz-0-1-2-1',
                type: 'multiple_choice',
                prompt: '¿Cómo se pronuncia la vocal ㅡ (eu)?',
                options: [
                  'Redondeando los labios con fuerza como una "u" española.',
                  'Con la boca estirada en una sonrisa horizontal y diciendo "u" sin redondear los labios.',
                  'Abriendo la boca al máximo como una "a".',
                  'Exactamente igual a la vocal "i".'
                ],
                correctAnswer: 'Con la boca estirada en una sonrisa horizontal y diciendo "u" sin redondear los labios.',
                explanation: 'ㅡ (eu) es una vocal no redondeada que se articula con los labios relajados en forma de sonrisa.',
                points: 15
              }
            ],
            summaryChecklist: [
              'Domino las 10 vocales básicas: ㅏ, ㅑ, ㅓ, ㅕ, ㅗ, ㅛ, ㅜ, ㅠ, ㅡ, ㅣ.',
              'Distingo de memoria entre vocales verticales (derecha) y horizontales (abajo).',
              'Sé escribir palabras con vocales iniciales usando el soporte ㅇ (아이, 오이, 우유).'
            ]
          },
          {
            id: 'les-0-1-3',
            moduleId: 'mod-0-1',
            levelNumber: 0,
            lessonNumber: 3,
            title: 'Consonantes Dobles y Vocales Compuestas',
            koreanTitle: '쌍자음과 이중모음',
            slug: 'consonantes-dobles-vocales-compuestas',
            description: 'Aprende las 5 consonantes tensas (ㄲ, ㄸ, ㅃ, ㅆ, ㅉ) y las 11 vocales compuestas o diptongadas.',
            orderIndex: 3,
            estimatedMinutes: 30,
            learningObjectives: [
              'Comprender la diferencia acústica entre consonantes suaves, aspiradas y tensas.',
              'Dominar las 5 consonantes dobles (ㄲ, ㄸ, ㅃ, ㅆ, ㅉ).',
              'Reconocer y pronunciar las 11 vocales compuestas (ㅐ, ㅒ, ㅔ, ㅖ, ㅘ, ㅙ, ㅚ, ㅝ, ㅞ, ㅟ, ㅢ).'
            ],
            theoryContent: {
              introduction: 'El coreano tiene un sistema de tres vías para las oclusivas y africadas: suave/plana (ㄱ, ㄷ, ㅂ, ㅈ), aspirada con golpe de aire (ㅋ, ㅌ, ㅍ, ㅊ) y doble/tensa sin aire con tensión glotal (ㄲ, ㄸ, ㅃ, ㅉ). Dominar esta trinidad es la clave para una pronunciación natural.',
              sections: [
                {
                  heading: '1. Las 5 consonantes dobles o tensas (쌍자음)',
                  content: 'Para pronunciar ㄲ, ㄸ, ㅃ, ㅆ, ㅉ, tensa la garganta y los músculos de la boca antes de emitir el sonido, evitando expulsar aire. Si pones un trozo de papel frente a tu boca: con una aspirada (ㅋ) el papel se moverá fuertemente; con una doble (ㄲ) el papel permanecerá casi completamente quieto.',
                  koreanFocus: 'ㄱ (suave) vs ㅋ (aspirada) vs ㄲ (tensa)'
                },
                {
                  heading: '2. Las 11 vocales compuestas',
                  content: 'Resultan de combinar vocales básicas: ㅐ (ae) y ㅔ (e) hoy suenan casi idénticas a una "e" española. Los diptongos con "w" combinan ㅗ o ㅜ con otra vocal: ㅘ (wa), ㅝ (wo), ㅙ / ㅚ / ㅞ (los tres suenan prácticamente como "we"). Finalmente ㅢ (ui) tiene matices según su función gramatical.'
                }
              ]
            },
            vocabularyList: [
              { hangul: '빵', romanization: 'ppang', spanish: 'Pan', partOfSpeech: 'sustantivo', exampleKorean: '맛있는 빵을 사요.', exampleSpanish: 'Compro un pan delicioso.' },
              { hangul: '딸기', romanization: 'ttalgi', spanish: 'Fresa', partOfSpeech: 'sustantivo', exampleKorean: '딸기가 달아요.', exampleSpanish: 'La fresa es dulce.' },
              { hangul: '사과', romanization: 'sagwa', spanish: 'Manzana / Disculpa', partOfSpeech: 'sustantivo', exampleKorean: '사과 하나 주세요.', exampleSpanish: 'Deme una manzana, por favor.' },
              { hangul: '의사', romanization: 'uisa', spanish: 'Médico / Doctor', partOfSpeech: 'sustantivo', exampleKorean: '저는 의사입니다.', exampleSpanish: 'Yo soy médico.' }
            ],
            grammarPoints: [
              {
                title: 'La triple distinción consonántica en coreano',
                structure: 'Suave -> Aspirada -> Tensa (Doble)',
                explanation: 'Compara: ㄱ (g/k relajado) -> ㅋ (k con mucho aire) -> ㄲ (kk tenso y seco). Cambiar este matiz cambia por completo el significado de la palabra.',
                examples: [
                  { hangul: '달 (dal)', romanization: 'dal', spanish: 'Luna (ㄷ suave)' },
                  { hangul: '탈 (tal)', romanization: 'tal', spanish: 'Máscara tradicional (ㅌ aspirada)' },
                  { hangul: '딸 (ttal)', romanization: 'ttal', spanish: 'Hija (ㄸ tensa)' }
                ]
              }
            ],
            dailyExamples: [
              {
                speakerA: '손님 (Cliente)',
                hangulA: '빵 얼마예요?',
                spanishA: '¿Cuánto cuesta el pan?',
                speakerB: '주인 (Dueño)',
                hangulB: '이천 원이에요.',
                spanishB: 'Son 2,000 wones.'
              }
            ],
            exercises: [
              {
                id: 'ex-0-1-3-1',
                type: 'multiple_choice',
                prompt: '¿Cuál de las siguientes palabras significa "pan" en coreano utilizando una consonante tensa?',
                options: ['방 (bang - habitación)', '팡 (pang)', '빵 (ppang - pan)', '망 (mang)'],
                correctAnswer: '빵 (ppang - pan)',
                explanation: '빵 (ppang) utiliza la consonante doble tensa ㅃ.',
                points: 10
              }
            ],
            quiz: [
              {
                id: 'qz-0-1-3-1',
                type: 'multiple_choice',
                prompt: '¿Cómo se pronuncian en el coreano moderno estándar las vocales ㅐ y ㅔ?',
                options: [
                  'De manera idéntica o prácticamente indistinguible como una "e" española.',
                  'ㅐ como una "a" alargada y ㅔ como una "i".',
                  'Una es muda y la otra siempre suena "o".',
                  'Totalmente diferentes con tonos musicales.'
                ],
                correctAnswer: 'De manera idéntica o prácticamente indistinguible como una "e" española.',
                explanation: 'En el coreano contemporáneo de Seúl, la distinción fonética entre ㅐ y ㅔ ha desaparecido en el habla cotidiana común.',
                points: 15
              }
            ],
            summaryChecklist: [
              'Reconozco las 5 consonantes dobles: ㄲ, ㄸ, ㅃ, ㅆ, ㅉ.',
              'Entiendo la prueba del papel para distinguir suave, aspirada y tensa.',
              'Sé reconocer y leer diptongos con "w" (ㅘ, ㅝ, ㅙ, ㅚ, ㅞ).'
            ]
          }
        ]
      },
      {
        id: 'mod-0-2',
        levelNumber: 0,
        moduleNumber: 2,
        title: 'Arquitectura Silábica y Reglas Fonológicas',
        description: 'Aprende a ensamblar sílabas en bloques cuadrados y domina el Batchim con sus reglas de enlace.',
        iconName: 'Layers',
        lessons: [
          {
            id: 'les-0-2-1',
            moduleId: 'mod-0-2',
            levelNumber: 0,
            lessonNumber: 4,
            title: 'Formación de Bloques Silábicos (초성, 중성, 종성)',
            koreanTitle: '음절의 구성: 초성, 중성, 종성',
            slug: 'formacion-bloques-silabicos',
            description: 'En coreano las letras no se escriben en línea como en español, sino agrupadas en bloques cuadrados geométricos.',
            orderIndex: 4,
            estimatedMinutes: 25,
            learningObjectives: [
              'Comprender la estructura de un bloque silábico en Hangul.',
              'Dominar los 4 patrones estructurales de ensamblaje silábico.',
              'Identificar la Consonante Inicial (Choseong), la Vocal Medial (Jungseong) y la Consonante Final (Jongseong).'
            ],
            theoryContent: {
              introduction: 'En español escribimos las letras secuencialmente de izquierda a derecha (C-A-S-A). En coreano, cada sílaba se empaqueta dentro de un cuadrado imaginario perfecto del mismo tamaño, similar a los caracteres de imprenta.',
              sections: [
                {
                  heading: '1. Los 4 tipos de bloques silábicos',
                  content: '1) Consonante + Vocal vertical: se colocan lado a lado (ej. 가, 나, 다). 2) Consonante + Vocal horizontal: la consonante arriba y la vocal abajo (ej. 고, 노, 두). 3) Consonante + Vocal vertical + Consonante final (Batchim): C a la izquierda, V a la derecha, y Batchim debajo abarcando todo el ancho (ej. 강, 한, 글). 4) Consonante + Vocal horizontal + Batchim: las tres capas apiladas verticalmente de arriba a abajo (ej. 곰, 문, 눈).'
                }
              ]
            },
            vocabularyList: [
              { hangul: '한국', hanja: '韓國', romanization: 'Hanguk', spanish: 'Corea', partOfSpeech: 'sustantivo', exampleKorean: '한국에 가고 싶어요.', exampleSpanish: 'Quiero ir a Corea.' },
              { hangul: '사람', romanization: 'saram', spanish: 'Persona / ser humano', partOfSpeech: 'sustantivo', exampleKorean: '한국 사람이에요.', exampleSpanish: 'Soy persona coreana.' },
              { hangul: '선생님', romanization: 'seonsaengnim', spanish: 'Profesor / Maestro', partOfSpeech: 'sustantivo', exampleKorean: '선생님, 안녕하세요.', exampleSpanish: 'Profesor, hola.' }
            ],
            grammarPoints: [
              {
                title: 'La regla del bloque cuadrado',
                structure: 'Inicial (초성) + Medial (중성) + [Final (종성)]',
                explanation: 'Una sílaba tiene mínimo 2 elementos (C + V) y máximo 4 letras (C + V + Batchim doble). El espacio visual de cada sílaba es uniforme.',
                examples: [
                  { hangul: '한', romanization: 'han', spanish: 'ㅎ (inicial) + ㅏ (medial) + ㄴ (final/batchim)' },
                  { hangul: '글', romanization: 'geul', spanish: 'ㄱ (inicial) + ㅡ (medial) + ㄹ (final/batchim)' }
                ]
              }
            ],
            dailyExamples: [
              {
                speakerA: '학생 (Alumno)',
                hangulA: '선생님, 제 이름은 어떻게 써요?',
                spanishA: 'Profesor, ¿cómo se escribe mi nombre?',
                speakerB: '선생님 (Profesor)',
                hangulB: '소리대로 음절을 맞춰 쓰면 돼요.',
                spanishB: 'Solo debes unir las sílabas según cómo suenan.'
              }
            ],
            exercises: [
              {
                id: 'ex-0-2-1-1',
                type: 'fill_in_blank',
                prompt: 'Une la consonante ㅎ con la vocal ㅏ y la consonante final ㄴ para formar la palabra coreana "Han":',
                options: ['한', '하', '헌', '호'],
                correctAnswer: '한',
                explanation: 'ㅎ + ㅏ + ㄴ = 한.',
                points: 10
              }
            ],
            quiz: [
              {
                id: 'qz-0-2-1-1',
                type: 'multiple_choice',
                prompt: '¿Cuántos elementos como mínimo y como máximo puede tener un bloque silábico en coreano?',
                options: [
                  'Mínimo 2 letras (C+V) y máximo 4 letras (C+V+Batchim doble).',
                  'Mínimo 1 letra y máximo 2 letras.',
                  'Siempre 3 letras fijas.',
                  'No hay límites de letras por bloque.'
                ],
                correctAnswer: 'Mínimo 2 letras (C+V) y máximo 4 letras (C+V+Batchim doble).',
                explanation: 'Cada sílaba requiere obligatoriamente una consonante y una vocal (2), y puede incluir hasta un batchim doble (4 letras en total, como en 닭 o 밟).',
                points: 15
              }
            ],
            summaryChecklist: [
              'Comprendo la distribución geométrica de los bloques silábicos.',
              'Identifico la posición de Choseong, Jungseong y Jongseong.',
              'Sé armar sílabas visualmente sin solapar caracteres.'
            ]
          },
          {
            id: 'les-0-2-2',
            moduleId: 'mod-0-2',
            levelNumber: 0,
            lessonNumber: 5,
            title: 'El Secreto del Batchim (받침) y las 7 Reglas de Sonido',
            koreanTitle: '받침의 비밀과 7대표음 원칙',
            slug: 'secreto-batchim-siete-reglas',
            description: 'Aprende las 7 pronunciaciones representativas de la consonante final y el fenómeno de ligadura (연음).',
            orderIndex: 5,
            estimatedMinutes: 30,
            learningObjectives: [
              'Comprender qué es el Batchim (la consonante de soporte en la base del bloque).',
              'Aprender los 7 sonidos representativos: [ㄱ], [ㄴ], [ㄷ], [ㄹ], [ㅁ], [ㅂ], [ㅇ].',
              'Dominar la regla de enlace fonético (연음 법칙) cuando a un batchim le sigue una vocal.'
            ],
            theoryContent: {
              introduction: 'La palabra 받침 (Batchim) proviene del verbo 받치다 (apoyar o sostener por debajo). Es cualquier consonante que se coloque en la parte inferior de una sílaba.',
              sections: [
                {
                  heading: '1. Los 7 sonidos representativos (7대표음)',
                  content: 'Aunque casi todas las consonantes pueden escribirse como batchim, cuando se pronuncian de forma aislada solo existen 7 sonidos posibles: 1) [ㄱ]: ㄱ, ㅋ, ㄲ -> k final cortada; 2) [ㄴ]: ㄴ -> n final; 3) [ㄷ]: ㄷ, ㅌ, ㅅ, ㅆ, ㅈ, ㅊ, ㅎ -> ¡todas estas suenan como [ㄷ] seco!; 4) [ㄹ]: ㄹ -> l suave; 5) [ㅁ]: ㅁ -> m; 6) [ㅂ]: ㅂ, ㅍ -> p final seca; 7) [ㅇ]: ㅇ -> ng nasal.'
                },
                {
                  heading: '2. La regla de enlace o Liaison (연음 법칙)',
                  content: 'Cuando una sílaba termina en Batchim y la siguiente sílaba empieza con la vocal ㅇ (que es muda), el sonido del Batchim se desplaza automáticamente para ocupar el lugar de esa ㅇ. Ejemplo: 한국어 (Hanguk-eo) se pronuncia fluidamente como [한구거] (Hangu-geo). ¡Esta regla es la razón por la que el coreano suena tan musical y conectado!'
                }
              ]
            },
            vocabularyList: [
              { hangul: '한국어', romanization: 'hangugeo', spanish: 'Idioma coreano', partOfSpeech: 'sustantivo', exampleKorean: '한국어를 배워요.', exampleSpanish: 'Aprendo idioma coreano.' },
              { hangul: '음악', romanization: 'eumak', spanish: 'Música', partOfSpeech: 'sustantivo', exampleKorean: '음악을 들어요 [으마글 드러요].', exampleSpanish: 'Escucho música.' },
              { hangul: '꽃', romanization: 'kkot', spanish: 'Flor', partOfSpeech: 'sustantivo', exampleKorean: '꽃이 예뻐요 [꼬치 예뻐요].', exampleSpanish: 'La flor es hermosa.' }
            ],
            grammarPoints: [
              {
                title: 'Fenómeno de Liaison (Ligadura fonética)',
                structure: 'Batchim + ㅇ (vocal) -> El batchim sube a la siguiente sílaba',
                explanation: 'Ahorra esfuerzo articulatorio uniendo la consonante final directamente a la vocal que sigue.',
                examples: [
                  { hangul: '밥이', romanization: 'bap + i', spanish: 'Se pronuncia [바비] (ba-bi)' },
                  { hangul: '옷이', romanization: 'ot + i', spanish: 'Se pronuncia [오시] (o-si)' },
                  { hangul: '앉아', romanization: 'anj + a', spanish: 'Se pronuncia [안자] (an-ja)' }
                ]
              }
            ],
            dailyExamples: [
              {
                speakerA: '유나 (Yuna)',
                hangulA: '한국어 공부 재미있어요?',
                spanishA: '¿Es divertido estudiar coreano?',
                speakerB: '카를로스 (Carlos)',
                hangulB: '네! 발음이 정말 신기하고 재미있어요.',
                spanishB: '¡Sí! La pronunciación es muy curiosa y divertida.'
              }
            ],
            exercises: [
              {
                id: 'ex-0-2-2-1',
                type: 'multiple_choice',
                prompt: '¿Cómo se pronuncia en coreano hablado la palabra "한국어" (Hanguk + eo)?',
                options: ['[한-국-어]', '[한구거]', '[한국고]', '[항구거]'],
                correctAnswer: '[한구거]',
                explanation: 'Debido a la regla de enlace (연음), la consonante ㄱ sube al espacio de la vocal ㅇ: [한구거].',
                points: 10
              },
              {
                id: 'ex-0-2-2-2',
                type: 'multiple_choice',
                prompt: '¿A cuál de los 7 sonidos representativos corresponde la palabra "옷" (ropa) de forma aislada?',
                options: ['[옥]', '[온]', '[옫]', '[올]'],
                correctAnswer: '[옫]',
                explanation: 'La consonante ㅅ al final como batchim se pronuncia siempre como el sonido representativo [ㄷ] seco: [옫].',
                points: 10
              }
            ],
            quiz: [
              {
                id: 'qz-0-2-2-1',
                type: 'multiple_choice',
                prompt: '¿Cuáles son los 7 sonidos representativos posibles en la pronunciación del Batchim en coreano?',
                options: [
                  '[ㄱ, ㄴ, ㄷ, ㄹ, ㅁ, ㅂ, ㅇ]',
                  '[ㄱ, ㅋ, ㄲ, ㄷ, ㅌ, ㅂ, ㅍ]',
                  '[ㅏ, ㅑ, ㅓ, ㅕ, ㅗ, ㅛ, ㅜ]',
                  '[ㅅ, ㅆ, ㅈ, ㅉ, ㅊ, ㅋ, ㅌ]'
                ],
                correctAnswer: '[ㄱ, ㄴ, ㄷ, ㄹ, ㅁ, ㅂ, ㅇ]',
                explanation: 'Cualquier consonante escrita como batchim se simplifica en uno de estos 7 sonidos exactos cuando no le sigue vocal.',
                points: 15
              }
            ],
            summaryChecklist: [
              'Conozco los 7 sonidos representativos del Batchim.',
              'Sé por qué palabras como 옷, 꽃 y 빛 terminan en sonido [t/d] seco.',
              'Aplico automáticamente la regla de Liaison al leer frases como 한국어 [한구거].'
            ]
          },
          {
            id: 'les-0-2-3',
            moduleId: 'mod-0-2',
            levelNumber: 0,
            lessonNumber: 6,
            title: 'Saludos y Expresiones Básicas de Supervivencia',
            koreanTitle: '기초 인사말과 필수 생활 표현',
            slug: 'saludos-expresiones-basicas',
            description: 'Aprende a saludar, despedirte, dar las gracias y pedir perdón con cortesía coreana.',
            orderIndex: 6,
            estimatedMinutes: 20,
            learningObjectives: [
              'Saludar correctamente de día y noche: 안녕하세요.',
              'Diferenciar entre 안녕히 계세요 (cuando tú te vas) y 안녕히 가세요 (cuando el otro se va).',
              'Agradecer con 감사합니다 y disculparse con 죄송합니다.',
              'Comprender la importancia de la inclinación reverencial (절) en la cultura coreana.'
            ],
            theoryContent: {
              introduction: 'En la cultura coreana, saludar va más allá de las palabras: es una señal de respeto mutuo y reconocimiento de la armonía comunitaria.',
              sections: [
                {
                  heading: '1. Los dos tipos de despedida',
                  content: '¡Cuidado con esta distinción! 1) 안녕히 계세요 (Annyeonghi gyeseyo): Si tú te marchas y la otra persona se queda en el lugar (계시다 es el verbo honorífico para quedarse). Significa "Quédese en paz". 2) 안녕히 가세요 (Annyeonghi gaseyo): Si tú te quedas y la otra persona se marcha, o si ambos se marchan por caminos diferentes (가다 es el verbo ir). Significa "Vaya en paz".'
                }
              ]
            },
            vocabularyList: [
              { hangul: '안녕하세요', romanization: 'annyeonghaseyo', spanish: 'Hola / Buenos días / Buenas tardes', partOfSpeech: 'expresión', exampleKorean: '안녕하세요! 만나서 반갑습니다.', exampleSpanish: '¡Hola! Gusto en conocerte.' },
              { hangul: '감사합니다', romanization: 'gamsahamnida', spanish: 'Muchas gracias (formal)', partOfSpeech: 'expresión', exampleKorean: '도와주셔서 감사합니다.', exampleSpanish: 'Muchas gracias por ayudarme.' },
              { hangul: '죄송합니다', romanization: 'joesonghamnida', spanish: 'Lo siento / Perdón (formal)', partOfSpeech: 'expresión', exampleKorean: '늦어서 죄송합니다.', exampleSpanish: 'Perdón por la tardanza.' },
              { hangul: '네', romanization: 'ne', spanish: 'Sí / De acuerdo', partOfSpeech: 'expresión', exampleKorean: '네, 알겠습니다.', exampleSpanish: 'Sí, comprendido.' },
              { hangul: '아니요', romanization: 'aniyo', spanish: 'No', partOfSpeech: 'expresión', exampleKorean: '아니요, 괜찮아요.', exampleSpanish: 'No, está bien.' }
            ],
            grammarPoints: [
              {
                title: 'Terminación cortés -세요 / -요',
                structure: 'Verbo/Expresión + -세요 / -요',
                explanation: 'Indica un trato educado, formal y amistoso hacia desconocidos o adultos.',
                examples: [
                  { hangul: '안녕하세요', romanization: 'annyeonghaseyo', spanish: '¿Está en paz? (saludo formal cortés)' }
                ]
              }
            ],
            dailyExamples: [
              {
                speakerA: '직원 (Empleado de tienda)',
                hangulA: '안녕히 가세요!',
                spanishA: '¡Que le vaya bien! (se queda el empleado)',
                speakerB: '손님 (Cliente)',
                hangulB: '감사합니다. 안녕히 계세요!',
                spanishB: '¡Gracias! ¡Quédese en paz! (el cliente sale)'
              }
            ],
            exercises: [
              {
                id: 'ex-0-2-3-1',
                type: 'multiple_choice',
                prompt: 'Estás saliendo de un restaurante tras comer. ¿Qué le dices al dueño que se queda en el local?',
                options: ['안녕히 계세요', '안녕히 가세요', '죄송합니다', '잘 먹겠습니다'],
                correctAnswer: '안녕히 계세요',
                explanation: 'Como tú te marchas y el dueño permanece en el local, le dices "안녕히 계세요" (Quédese en paz).',
                points: 10
              }
            ],
            quiz: [
              {
                id: 'qz-0-2-3-1',
                type: 'multiple_choice',
                prompt: '¿Cómo se dice "Muchas gracias" en coreano formal cortés?',
                options: ['감사합니다', '미안합니다', '천만에요', '실례합니다'],
                correctAnswer: '감사합니다',
                explanation: '감사합니다 (Gamsahamnida) es la forma cortés estándar más respetuosa y habitual de agradecer.',
                points: 15
              }
            ],
            summaryChecklist: [
              'Sé saludar correctamente a cualquier hora del día con 안녕하세요.',
              'Domino la diferencia entre 안녕히 계세요 y 안녕히 가세요.',
              'Sé agradecer con 감사합니다 y disculparme educadamente con 죄송합니다.'
            ]
          }
        ]
      }
    ]
  },

  // ----------------------------------------------------------------------------
  // NIVEL 1: PRINCIPIANTE A1
  // ----------------------------------------------------------------------------
  {
    levelNumber: 1,
    code: 'A1',
    title: 'Nivel 1: Principiante A1',
    subTitle: 'Construye tus primeras competencias comunicativas en coreano',
    description: 'Presentaciones personales, números, fechas y horas, comida, lugares, partículas indispensables (은/는, 이/가, 을/를, 에, 에서), verbos y adjetivos en presente.',
    targetExam: 'Objetivo intermedio hacia TOPIK I (Nivel 1)',
    colorAccent: '#059669',
    badge: '초급 1 탐험가',
    modules: [
      {
        id: 'mod-1-1',
        levelNumber: 1,
        moduleNumber: 3,
        title: 'Identidad y Estructura Oracional Básica',
        description: 'Aprende a formular oraciones completas y presentarte con naturalidad.',
        iconName: 'UserCheck',
        lessons: [
          {
            id: 'les-1-1-1',
            moduleId: 'mod-1-1',
            levelNumber: 1,
            lessonNumber: 7,
            title: 'Presentación Personal y la Cópula 이다 / 아니다',
            koreanTitle: '자기소개와 이에요/예요, 아니에요',
            slug: 'presentacion-personal-copula-ida-anida',
            description: 'Aprende a decir quién eres, tu nacionalidad y tu profesión usando el verbo ser (이에요/예요) y no ser (이/가 아니에요).',
            orderIndex: 7,
            estimatedMinutes: 25,
            learningObjectives: [
              'Presentarse con nombre, nacionalidad y ocupación.',
              'Aprender la conjugación de la cópula 이다 en presente cortés: 이에요 vs 예요.',
              'Aprender la forma negativa de la cópula: [Sujeto] 이/가 아니에요.'
            ],
            theoryContent: {
              introduction: 'En coreano, el verbo SIEMPRE se ubica al final estricto de la oración: Sujeto + Objeto/Complemento + Verbo (SOV). Para decir "Yo soy estudiante", el orden mental es: "Yo estudiante soy".',
              sections: [
                {
                  heading: '1. La cópula de identidad: 이에요 vs 예요',
                  content: 'Si el sustantivo termina en consonante (tiene Batchim), se añade 이에요. Si termina en vocal (sin Batchim), se añade 예요. Ejemplos: 학생 (termina en ㅇ) -> 학생이에요 ("Soy estudiante"). 의사 (termina en ㅏ) -> 의사예요 ("Soy médico").'
                },
                {
                  heading: '2. La negación: 이/가 아니에요',
                  content: 'Para decir que NO eres algo, se usa el patrón: Sustantivo + 이/가 아니에요. Si tiene batchim: 이 아니에요. Si no tiene batchim: 가 아니에요. Ejemplo: 저는 의사가 아니에요 ("Yo no soy médico").'
                }
              ]
            },
            vocabularyList: [
              { hangul: '저', romanization: 'jeo', spanish: 'Yo (humilde / cortés)', partOfSpeech: 'sustantivo', exampleKorean: '저는 학생이에요.', exampleSpanish: 'Yo soy estudiante.' },
              { hangul: '학생', hanja: '學生', romanization: 'haksaeng', spanish: 'Estudiante', partOfSpeech: 'sustantivo', exampleKorean: '대학생이에요.', exampleSpanish: 'Soy estudiante universitario.' },
              { hangul: '선생님', romanization: 'seonsaengnim', spanish: 'Profesor / Maestro', partOfSpeech: 'sustantivo', exampleKorean: '우리 선생님이에요.', exampleSpanish: 'Es nuestro profesor.' },
              { hangul: '스페인', romanization: 'seupein', spanish: 'España', partOfSpeech: 'sustantivo', exampleKorean: '스페인 사람이에요.', exampleSpanish: 'Soy español.' },
              { hangul: '멕시코', romanization: 'meksiko', spanish: 'México', partOfSpeech: 'sustantivo', exampleKorean: '멕시코 사람이에요.', exampleSpanish: 'Soy mexicano.' }
            ],
            grammarPoints: [
              {
                title: 'Conjugación de la cópula 이다 (Ser)',
                structure: 'Con Batchim -> 이에요 | Sin Batchim -> 예요',
                explanation: 'Equivale al verbo "ser" en español para identificar profesiones, nacionalidades y nombres.',
                examples: [
                  { hangul: '저는 페드로예요.', romanization: 'Jeoneun Pedror-yeyo.', spanish: 'Yo soy Pedro (vocal final -> 예요)' },
                  { hangul: '저는 선생님이에요.', romanization: 'Jeoneun seonsaengnim-ieyo.', spanish: 'Yo soy profesor (consonante final ㅁ -> 이에요)' }
                ]
              }
            ],
            dailyExamples: [
              {
                speakerA: '민호 (Minho)',
                hangulA: '어느 나라 사람이에요?',
                spanishA: '¿De qué país eres?',
                speakerB: '소피아 (Sofia)',
                hangulB: '저는 콜롬비아 사람이에요. 학생이에요.',
                spanishB: 'Soy colombiana. Soy estudiante.'
              }
            ],
            exercises: [
              {
                id: 'ex-1-1-1-1',
                type: 'fill_in_blank',
                prompt: 'Elige la forma correcta para completar la oración: "저는 학생____" (haksaeng = estudiante):',
                options: ['이에요', '예요', '있어요', '없어요'],
                correctAnswer: '이에요',
                explanation: '학생 termina en la consonante ㅇ (batchim), por lo que se une con 이에요.',
                points: 10
              }
            ],
            quiz: [
              {
                id: 'qz-1-1-1-1',
                type: 'multiple_choice',
                prompt: '¿Cómo se dice en coreano "Yo no soy médico" (의사 = uisa)?',
                options: [
                  '저는 의사가 아니에요.',
                  '저는 의사이 아니에요.',
                  '저는 의사예요.',
                  '저는 의사가 없어요.'
                ],
                correctAnswer: '저는 의사가 아니에요.',
                explanation: 'Como 의사 termina en vocal, toma la partícula 가 seguida de 아니에요: 의사가 아니에요.',
                points: 15
              }
            ],
            summaryChecklist: [
              'Sé presentarme con mi nombre y nacionalidad.',
              'Distingo perfectamente entre 이에요 y 예요 según el Batchim.',
              'Sé negar mi identidad o profesión con 이/가 아니에요.'
            ]
          },
          {
            id: 'les-1-1-2',
            moduleId: 'mod-1-1',
            levelNumber: 1,
            lessonNumber: 8,
            title: 'Partículas de Tema 은/는 vs Sujeto 이/가',
            koreanTitle: '주제 조사 은/는과 주격 조사 이/가',
            slug: 'particulas-tema-eun-neun-sujeto-i-ga',
            description: 'Desmitifica el tema más discutido del coreano básico: cuándo usar 은/는 (tema/énfasis/contraste) y cuándo usar 이/가 (sujeto gramatical/información nueva).',
            orderIndex: 8,
            estimatedMinutes: 30,
            learningObjectives: [
              'Comprender la función de las partículas en la gramática coreana.',
              'Dominar la partícula de tema 은/는 (consonante -> 은, vocal -> 는).',
              'Dominar la partícula de sujeto 이/가 (consonante -> 이, vocal -> 가).',
              'Resolver el dilema de cuándo enfatizar el tema frente al sujeto.'
            ],
            theoryContent: {
              introduction: 'En español el orden de las palabras suele marcar quién hace qué. En coreano, las partículas (조사) son pequeños sufijos que se pegan a las palabras para indicar su función exacta.',
              sections: [
                {
                  heading: '1. Partícula de tema o contraste: 은 / 는',
                  content: 'Indica de qué estamos hablando ("En cuanto a...", "Hablando de..."), o establece un contraste tácito con otras opciones. Ejemplo: 저는 학생이에요 ("En cuanto a mí, soy estudiante"). Con batchim: 은; sin batchim: 는.'
                },
                {
                  heading: '2. Partícula de sujeto: 이 / 가',
                  content: 'Señala quién ejecuta la acción o quién posee la característica, introduciendo información nueva o respondiendo a la pregunta "¿Quién?". Ejemplo: 누가 왔어요? - 민수가 왔어요 ("¿Quién vino? - Min-su vino"). Con batchim: 이; sin batchim: 가.'
                }
              ]
            },
            vocabularyList: [
              { hangul: '오늘', romanization: 'oneul', spanish: 'Hoy', partOfSpeech: 'sustantivo', exampleKorean: '오늘은 날씨가 좋아요.', exampleSpanish: 'Hoy (en cuanto a hoy) el clima está bueno.' },
              { hangul: '날씨', romanization: 'nalssi', spanish: 'Clima / tiempo', partOfSpeech: 'sustantivo', exampleKorean: '날씨가 추워요.', exampleSpanish: 'El clima está frío.' },
              { hangul: '친구', romanization: 'chingu', spanish: 'Amigo / amiga', partOfSpeech: 'sustantivo', exampleKorean: '친구가 많아요.', exampleSpanish: 'Tengo muchos amigos.' }
            ],
            grammarPoints: [
              {
                title: 'Diferencia pragmática esencial',
                structure: '은/는 (Tema / Conocido / Contraste) vs 이/가 (Sujeto / Información Nueva / Énfasis en el sujeto)',
                explanation: 'Regla de oro: En una oración con sujeto y tema combinados, el tema va con 은/는 y el sujeto subordinado con 이/가. Ejemplo: 저는 눈이 커요 ("En cuanto a mí, mis ojos son grandes").',
                examples: [
                  { hangul: '이것은 사과예요.', romanization: 'Igeoseun sagwayeyo.', spanish: 'Hablando de esto, es una manzana (은).' },
                  { hangul: '사과가 맛있어요.', romanization: 'Sagwaga masisseoyo.', spanish: 'La manzana está deliciosa (가 resalta la manzana).' }
                ]
              }
            ],
            dailyExamples: [
              {
                speakerA: '호세 (José)',
                hangulA: '누가 선생님이에요?',
                spanishA: '¿Quién es el profesor? (누가 = 누구 + 가)',
                speakerB: '민수 (Minsu)',
                hangulB: '김 선생님이 선생님이에요.',
                spanishB: 'El profesor Kim es el maestro.'
              }
            ],
            exercises: [
              {
                id: 'ex-1-1-2-1',
                type: 'multiple_choice',
                prompt: 'Completa con la partícula de tema adecuada para "저" (yo, sin batchim): "저___ 학생이에요."',
                options: ['는', '은', '이', '가'],
                correctAnswer: '는',
                explanation: 'Como 저 termina en vocal, se le añade 는: 저는.',
                points: 10
              }
            ],
            quiz: [
              {
                id: 'qz-1-1-2-1',
                type: 'multiple_choice',
                prompt: '¿Qué partícula de sujeto corresponde a "책" (libro, termina en batchim ㄱ)?',
                options: ['이', '가', '는', '를'],
                correctAnswer: '이',
                explanation: 'Como 책 termina en consonante (batchim), se le une la partícula de sujeto 이: 책이.',
                points: 15
              }
            ],
            summaryChecklist: [
              'Conozco la regla morfológica: consonante -> 은/이, vocal -> 는/가.',
              'Entiendo cuándo se usa 은/는 para introducir temas o contrastes.',
              'Entiendo cuándo se usa 이/가 para especificar el sujeto gramatical.'
            ]
          },
          {
            id: 'les-1-1-3',
            moduleId: 'mod-1-1',
            levelNumber: 1,
            lessonNumber: 9,
            title: 'El Tiempo Presente Cortés: Terminación -아요/어요',
            koreanTitle: '현재 시제: -아요/어요 활용법',
            slug: 'tiempo-presente-cortes-ayo-eoyo',
            description: 'Aprende a conjugar cualquier verbo y adjetivo en presente cortés informal (해요체), el registro más usado en la vida cotidiana en Corea.',
            orderIndex: 9,
            estimatedMinutes: 30,
            learningObjectives: [
              'Extraer la raíz verbal de un infinitivo terminado en -다.',
              'Aplicar la regla de armonía vocálica: raíces con ㅏ/ㅗ toman -아요.',
              'Aplicar la regla general: raíces con otras vocales toman -어요.',
              'Dominar la regla especial de los verbos en 하다 que se convierten en 해요.'
            ],
            theoryContent: {
              introduction: 'En los diccionarios coreanos, todos los verbos y adjetivos terminan en -다 (ejemplo: 가다 = ir, 먹다 = comer, 하다 = hacer). Para conjugar, quitamos -다 y observamos la última vocal de la raíz.',
              sections: [
                {
                  heading: '1. Regla de oro de conjugación en presente',
                  content: 'Paso 1: Quita -다. Paso 2: Si la última vocal es ㅏ o ㅗ -> añade -아요. Si la vocal se puede contraer, se contrae (가 + 아요 = 가요; 오 + 아요 = 와요). Paso 3: Si la última vocal NO es ㅏ ni ㅗ (es decir ㅓ, ㅜ, ㅣ, ㅡ, etc.) -> añade -어요 (먹 + 어요 = 먹어요; 마시 + 어요 = 마셔요). Paso 4: Todo verbo terminado en 하다 se convierte invariablemente en 해요 (공부하다 -> 공부해요).'
                }
              ]
            },
            vocabularyList: [
              { hangul: '가다', romanization: 'gada', spanish: 'Ir', partOfSpeech: 'verbo', exampleKorean: '학교에 가요.', exampleSpanish: 'Voy a la escuela.' },
              { hangul: '오다', romanization: 'oda', spanish: 'Venir', partOfSpeech: 'verbo', exampleKorean: '친구가 와요.', exampleSpanish: 'Viene un amigo.' },
              { hangul: '먹다', romanization: 'meokda', spanish: 'Comer', partOfSpeech: 'verbo', exampleKorean: '밥을 먹어요.', exampleSpanish: 'Como comida / arroz.' },
              { hangul: '마시다', romanization: 'masida', spanish: 'Beber / tomar', partOfSpeech: 'verbo', exampleKorean: '물을 마셔요.', exampleSpanish: 'Bebo agua.' },
              { hangul: '공부하다', romanization: 'gongbuhada', spanish: 'Estudiar', partOfSpeech: 'verbo', exampleKorean: '한국어를 공부해요.', exampleSpanish: 'Estudio coreano.' }
            ],
            grammarPoints: [
              {
                title: 'Resumen de la fórmula de presente -아요/어요',
                structure: 'Raíz + -아요 (vocales brillantes ㅏ, ㅗ) | Raíz + -어요 (demás vocales) | 하다 -> 해요',
                explanation: 'Esta misma forma sirve para oraciones afirmativas, e interrogativas simplemente elevando la entonación final (¿가요?).',
                examples: [
                  { hangul: '자다 -> 자요', romanization: 'jada -> jayo', spanish: 'Dormir -> Duermo / duerme' },
                  { hangul: '읽다 -> 읽어요', romanization: 'ikda -> ilgeoyo', spanish: 'Leer -> Leo / lee' },
                  { hangul: '일하다 -> 일해요', romanization: 'ilhada -> ilhaeyo', spanish: 'Trabajar -> Trabajo / trabaja' }
                ]
              }
            ],
            dailyExamples: [
              {
                speakerA: '지우 (Jiwoo)',
                hangulA: '지금 뭐 해요?',
                spanishA: '¿Qué haces ahora?',
                speakerB: '민수 (Minsu)',
                hangulB: '한국어 책을 읽어요.',
                spanishB: 'Leo un libro de coreano.'
              }
            ],
            exercises: [
              {
                id: 'ex-1-1-3-1',
                type: 'fill_in_blank',
                prompt: 'Conjuga el verbo 먹다 (comer) en presente cortés: "저는 밥을 ______"',
                options: ['먹아요', '먹어요', '먹해요', '먹습니다'],
                correctAnswer: '먹어요',
                explanation: 'La raíz 먹- tiene la vocal ㅓ (no es ㅏ ni ㅗ), por lo tanto toma -어요: 먹어요.',
                points: 10
              }
            ],
            quiz: [
              {
                id: 'qz-1-1-3-1',
                type: 'multiple_choice',
                prompt: '¿Cómo se conjuga el verbo 운동하다 (hacer ejercicio) en presente cortés?',
                options: ['운동해요', '운동하아요', '운동하여요', '운동했어요'],
                correctAnswer: '운동해요',
                explanation: 'Todos los verbos terminados en 하다 se transforman directamente en 해요 en presente cortés.',
                points: 15
              }
            ],
            summaryChecklist: [
              'Sé conjugar verbos con ㅏ y ㅗ añadiendo -아요.',
              'Sé conjugar verbos con las demás vocales añadiendo -어요.',
              'Reconozco la regla directa de 하다 -> 해요.'
            ]
          }
        ]
      }
    ]
  },

  // ----------------------------------------------------------------------------
  // NIVEL 2: PRINCIPIANTE A2 (PREPARACIÓN TOPIK I)
  // ----------------------------------------------------------------------------
  {
    levelNumber: 2,
    code: 'A2',
    title: 'Nivel 2: Principiante A2',
    subTitle: 'Comprende conversaciones cotidianas y construye oraciones complejas',
    description: 'Pasado (-았/었어요), futuro (-(으)ㄹ 거예요), conectores (-고, -지만, -아서/어서), honoríficos básicos (-(으)시-), deseos, obligaciones y preparación intensiva para superar TOPIK I.',
    targetExam: 'Certificación oficial TOPIK I (Niveles 1 y 2)',
    colorAccent: '#d97706',
    badge: 'TOPIK I 도전자',
    modules: [
      {
        id: 'mod-2-1',
        levelNumber: 2,
        moduleNumber: 5,
        title: 'Tiempos Verbales y Conectores Clave',
        description: 'Conecta ideas lógicas, habla del pasado y formula planes de futuro.',
        iconName: 'GitBranch',
        lessons: [
          {
            id: 'les-2-1-1',
            moduleId: 'mod-2-1',
            levelNumber: 2,
            lessonNumber: 13,
            title: 'Pasado -았/었어요 y Futuro -(으)ㄹ 거예요',
            koreanTitle: '과거 시제(-았/었어요)와 미래 시제(-(으)ㄹ 거예요)',
            slug: 'pasado-futuro-coreano',
            description: 'Domina la línea temporal en coreano: relata lo que hiciste ayer y proyecta lo que harás mañana.',
            orderIndex: 13,
            estimatedMinutes: 30,
            learningObjectives: [
              'Conjugar verbos en tiempo pasado con -았어요 / -었어요 / 했어요.',
              'Conjugar verbos en tiempo futuro o intención con -(으)ㄹ 거예요.',
              'Utilizar marcadores temporales comunes: 어제 (ayer), 오늘 (hoy), 내일 (mañana).'
            ],
            theoryContent: {
              introduction: 'Para construir el tiempo pasado se sigue exactamente la misma regla armónica que en el presente: si la raíz tiene ㅏ/ㅗ se agrega -았어요; si no, -었어요; y los verbos 하다 se convierten en 했어요. Para el futuro, se añade -(으)ㄹ 거예요 a la raíz verbal.',
              sections: [
                {
                  heading: '1. El tiempo pasado (-았/었어요)',
                  content: '가다 -> 갔어요 (fui/fue). 먹다 -> 먹었어요 (comí/comió). 공부하다 -> 공부했어요 (estudié/estudió).'
                },
                {
                  heading: '2. El tiempo futuro -(으)ㄹ 거예요',
                  content: 'Si la raíz termina en vocal o en ㄹ: -ㄹ 거예요. Ejemplo: 가다 -> 갈 거예요 (iré). Si la raíz termina en consonante: -을 거예요. Ejemplo: 먹다 -> 먹을 거예요 (comeré).'
                }
              ]
            },
            vocabularyList: [
              { hangul: '어제', romanization: 'eoje', spanish: 'Ayer', partOfSpeech: 'sustantivo', exampleKorean: '어제 영화를 봤어요.', exampleSpanish: 'Ayer vi una película.' },
              { hangul: '내일', romanization: 'naeil', spanish: 'Mañana (el día siguiente)', partOfSpeech: 'sustantivo', exampleKorean: '내일 친구를 만날 거예요.', exampleSpanish: 'Mañana me reuniré con un amigo.' },
              { hangul: '영화', romanization: 'yeonghwa', spanish: 'Película', partOfSpeech: 'sustantivo', exampleKorean: '한국 영화를 좋아해요.', exampleSpanish: 'Me gustan las películas coreanas.' }
            ],
            grammarPoints: [
              {
                title: 'Estructuras temporales pasadas y futuras',
                structure: 'Pasado: Raíz + -았/었어요 | Futuro: Raíz + -(으)ㄹ 거예요',
                explanation: 'Son las dos construcciones cardinales más evaluadas en la sección de gramática y lectura de TOPIK I.',
                examples: [
                  { hangul: '주말에 뭐 했어요? - 쉬었어요.', romanization: 'Jumare mwo haesseoyo? - Swieosseoyo.', spanish: '¿Qué hiciste el fin de semana? - Descansé.' },
                  { hangul: '주말에 뭐 할 거예요? - 여행 갈 거예요.', romanization: 'Jumare mwo hal geoyeyo? - Yeohaeng gal geoyeyo.', spanish: '¿Qué harás el fin de semana? - Iré de viaje.' }
                ]
              }
            ],
            dailyExamples: [
              {
                speakerA: '민수 (Minsu)',
                hangulA: '어제 저녁에 뭐 먹었어요?',
                spanishA: '¿Qué comiste ayer por la noche?',
                speakerB: '지우 (Jiwoo)',
                hangulB: '비빔밥을 먹었어요. 정말 맛있었어요!',
                spanishB: 'Comí bibimbap. ¡Estuvo verdaderamente delicioso!'
              }
            ],
            exercises: [
              {
                id: 'ex-2-1-1-1',
                type: 'fill_in_blank',
                prompt: 'Completa con el verbo en pasado: "어제 친구와 영화를 _______" (보다 = ver):',
                options: ['봤어요', '봐요', '볼 거예요', '보았을 거예요'],
                correctAnswer: '봤어요',
                explanation: '보 + 았어요 se contrae de forma natural en 봤어요.',
                points: 10
              }
            ],
            quiz: [
              {
                id: 'qz-2-1-1-1',
                type: 'multiple_choice',
                prompt: '¿Cómo se dice "Mañana leeré un libro" (책을 읽다)?',
                options: [
                  '내일 책을 읽을 거예요.',
                  '내일 책을 읽었어요.',
                  '내일 책을 읽고 있어요.',
                  '내일 책을 읽어요.'
                ],
                correctAnswer: '내일 책을 읽을 거예요.',
                explanation: '읽- termina en consonante, por lo que toma -을 거예요: 읽을 거예요.',
                points: 15
              }
            ],
            summaryChecklist: [
              'Conjuga con fluidez en pasado (-았/었어요).',
              'Conjuga planes a futuro con -(으)ㄹ 거예요.',
              'Identifica marcadores temporales 어제, 오늘 y 내일.'
            ]
          }
        ]
      }
    ]
  },

  // ----------------------------------------------------------------------------
  // NIVEL 3: INTERMEDIO B1 (PREPARACIÓN TOPIK II - NIVEL 3)
  // ----------------------------------------------------------------------------
  {
    levelNumber: 3,
    code: 'B1',
    title: 'Nivel 3: Intermedio B1',
    subTitle: 'Comprende textos intermedios, opiniones y registros sociolingüísticos',
    description: 'Gramática intermedia, conectores de causa y condición, registro formal e informal (반말), lectura de noticias sencillas y entrenamiento para TOPIK II Nivel 3.',
    targetExam: 'TOPIK II (Nivel 3 oficial)',
    colorAccent: '#7c3aed',
    badge: '중급 1 마스터',
    modules: [
      {
        id: 'mod-3-1',
        levelNumber: 3,
        moduleNumber: 7,
        title: 'Gramática Intermedia y Registros Sociales',
        description: 'Domina los estilos de habla y las cláusulas subordinadas.',
        iconName: 'MessageSquare',
        lessons: [
          {
            id: 'les-3-1-1',
            moduleId: 'mod-3-1',
            levelNumber: 3,
            lessonNumber: 19,
            title: 'Condiciones -(으)면 y Causas Justificativas -(으)니까',
            koreanTitle: '조건의 -(으)면과 이유의 -(으)니까',
            slug: 'condiciones-eumyeon-causas-eunikka',
            description: 'Aprende a formular oraciones condicionales ("si...") y justificar razones en imperativos y sugerencias.',
            orderIndex: 19,
            estimatedMinutes: 30,
            learningObjectives: [
              'Dominar el conector condicional -(으)면.',
              'Aprender la diferencia crucial entre -아서/어서 (hechos objetivos) y -(으)니까 (opiniones, sugerencias, imperativos).',
              'Construir oraciones compuestas complejas.'
            ],
            theoryContent: {
              introduction: 'En el nivel intermedio las oraciones ya no son simples. Es vital saber qué conector de causa admite sugerencias (-(으)ㅂ시다) o mandatos (-(으)세요). La regla TOPIK fundamental es: ¡NUNCA uses -아서/어서 antes de un mandato o sugerencia; usa -(으)니까!',
              sections: [
                {
                  heading: '1. El conector condicional -(으)면 (Si / cuando)',
                  content: 'Si la raíz termina en vocal o ㄹ: -면. Si termina en consonante: -으면. Ejemplo: 시간이 있으면 영화 봐요 ("Si tienes tiempo, veamos una película").'
                },
                {
                  heading: '2. Causa que justifica una propuesta: -(으)니까',
                  content: '날씨가 추우니까 따뜻하게 입으세요 ("Ya que hace frío, vístete abrigado"). ¡Aquí jamás se podría usar 추워서 porque la cláusula final es un mandato!'
                }
              ]
            },
            vocabularyList: [
              { hangul: '시간', hanja: '時間', romanization: 'sigan', spanish: 'Tiempo / hora', partOfSpeech: 'sustantivo', exampleKorean: '시간이 없어요.', exampleSpanish: 'No tengo tiempo.' },
              { hangul: '약속', hanja: '約束', romanization: 'yaksok', spanish: 'Cita / compromiso / promesa', partOfSpeech: 'sustantivo', exampleKorean: '내일 약속이 있어요.', exampleSpanish: 'Mañana tengo un compromiso.' }
            ],
            grammarPoints: [
              {
                title: 'Contraste -아서/어서 vs -(으)니까 (Clave TOPIK)',
                structure: 'Cláusula de causa + -(으)니까 + Sugerencia/Orden/Invitación',
                explanation: 'A diferencia de -아서/어서, -(으)니까 enfatiza la razón personal subjetiva del hablante y permite combinar con imperativos.',
                examples: [
                  { hangul: '비가 오니까 우산을 가져가세요. (O)', romanization: 'Biga onikka usaneul gajyeogaseyo.', spanish: 'Ya que llueve, llévate el paraguas (Correcto).' },
                  { hangul: '비가 와서 우산을 가져가세요. (X)', romanization: '', spanish: '¡Incorrecto! -아서/어서 no admite órdenes.' }
                ]
              }
            ],
            dailyExamples: [
              {
                speakerA: '동료 (Compañero)',
                hangulA: '오늘 같이 점심 먹을까요?',
                spanishA: '¿Almorzamos juntos hoy?',
                speakerB: '민수 (Minsu)',
                hangulB: '제가 지금 바쁘니까 조금 있다가 만나요.',
                spanishB: 'Ya que estoy ocupado ahora, reunámonos un poco más tarde.'
              }
            ],
            exercises: [
              {
                id: 'ex-3-1-1-1',
                type: 'multiple_choice',
                prompt: 'Elige la opción gramaticalmente correcta para: "날씨가 ______ 코트를 입으세요." (Hace frío, ponte abrigo):',
                options: ['추우니까', '추워서', '춥고', '추우면'],
                correctAnswer: '추우니까',
                explanation: 'Al terminar en mandato (입으세요), la única causa permitida es -(으)니까.',
                points: 10
              }
            ],
            quiz: [
              {
                id: 'qz-3-1-1-1',
                type: 'multiple_choice',
                prompt: '¿Qué conector se usa para indicar una condición general ("Si...") en coreano?',
                options: ['-(으)면', '-(으)러', '-지만', '-거나'],
                correctAnswer: '-(으)면',
                explanation: '-(으)면 es el sufijo de condición (ej. 비가 오면 = si llueve).',
                points: 15
              }
            ],
            summaryChecklist: [
              'Uso -(으)면 para formular hipótesis y condiciones.',
              'Domino la restricción estricta de -아서/어서 vs -(으)니까 con órdenes.',
              'Reconozco estas trampas frecuentes en el examen TOPIK II.'
            ]
          }
        ]
      }
    ]
  },

  // ----------------------------------------------------------------------------
  // NIVEL 4: INTERMEDIO ALTO B2 (PREPARACIÓN TOPIK II - NIVEL 4)
  // ----------------------------------------------------------------------------
  {
    levelNumber: 4,
    code: 'B2',
    title: 'Nivel 4: Intermedio Alto B2',
    subTitle: 'Fluidez, estructuras complejas, voz pasiva y redacción argumentativa',
    description: 'Discurso indirecto (citas de terceros), pasiva y causativa, interpretación de artículos de actualidad y redacción estructurada para la prueba escrita de TOPIK II (Preguntas 51 a 54).',
    targetExam: 'TOPIK II (Nivel 4 oficial)',
    colorAccent: '#dc2626',
    badge: 'TOPIK II 중고급',
    modules: [
      {
        id: 'mod-4-1',
        levelNumber: 4,
        moduleNumber: 8,
        title: 'Discurso Indirecto y Retórica Argumentativa',
        description: 'Aprende a reportar lo que dicen los demás y a redactar ensayos formales.',
        iconName: 'PenTool',
        lessons: [
          {
            id: 'les-4-1-1',
            moduleId: 'mod-4-1',
            levelNumber: 4,
            lessonNumber: 22,
            title: 'Discurso Indirecto -(ㄴ/는)다고 하다 y sus Variantes',
            koreanTitle: '간접 화법: -(ㄴ/는)다고 하다, -냐고 하다, -(으)라고 하다',
            slug: 'discurso-indirecto-coreano',
            description: 'El pilar de las noticias y la conversación formal: cómo citar afirmaciones, preguntas, órdenes y sugerencias ajenas.',
            orderIndex: 22,
            estimatedMinutes: 35,
            learningObjectives: [
              'Dominar la cita de oraciones declarativas: -(ㄴ/는)다고 하다.',
              'Dominar la cita de oraciones interrogativas: -(으)냐고 하다 / -냐고 하다.',
              'Dominar la cita de oraciones imperativas: -(으)라고 하다.',
              'Dominar la cita de oraciones propositivas: -자고 하다.'
            ],
            theoryContent: {
              introduction: 'En TOPIK II más del 40% de los textos de lectura y audios contienen discurso indirecto. Es la habilidad de decir "Él me dijo que vendría", "El periódico informa que las ventas subieron", etc.',
              sections: [
                {
                  heading: '1. Los 4 tipos cardinales de cita indirecta',
                  content: '1) Declaración: Verbo presente + -(ㄴ/는)다고 하다 (먹는다고 해요, 간다고 해요). Adjetivo + -다고 하다 (예쁘다고 해요). Sustantivo + -(이)라고 하다. 2) Pregunta: -냐고 하다 (언제 가냐고 물었어요). 3) Orden: -(으)라고 하다 (빨리 오라고 했어요). 4) Sugerencia: -자고 하다 (같이 밥 먹자고 했어요).'
                }
              ]
            },
            vocabularyList: [
              { hangul: '뉴스', romanization: 'nyuseu', spanish: 'Noticias', partOfSpeech: 'sustantivo', exampleKorean: '뉴스에서 비가 온다고 했어요.', exampleSpanish: 'En las noticias dijeron que llovería.' },
              { hangul: '주장하다', romanization: 'jujanghada', spanish: 'Reclamar / argumentar / sostener', partOfSpeech: 'verbo', exampleKorean: '전문가들은 해결책을 주장합니다.', exampleSpanish: 'Los expertos sostienen una solución.' }
            ],
            grammarPoints: [
              {
                title: 'Fórmula completa de citas indirectas',
                structure: 'Declaración: -(ㄴ/는)다고 하다 | Pregunta: -냐고 하다 | Sugerencia: -자고 하다 | Mandato: -(으)라고 하다',
                explanation: 'Esencial para redactar la pregunta 53 de TOPIK II (análisis de encuestas y citas).',
                examples: [
                  { hangul: '친구가 한국에 간다고 했어요.', romanization: 'Chinguga hanguge gandago haesseoyo.', spanish: 'Mi amigo dijo que va a Corea.' }
                ]
              }
            ],
            dailyExamples: [
              {
                speakerA: '기자 (Periodista)',
                hangulA: '정부에서는 뭐라고 발표했습니까?',
                spanishA: '¿Qué anunció el gobierno?',
                speakerB: '아나운서 (Locutor)',
                hangulB: '경제가 내년에 회복될 것이라고 발표했습니다.',
                spanishB: 'Anunciaron que la economía se recuperará el próximo año.'
              }
            ],
            exercises: [
              {
                id: 'ex-4-1-1-1',
                type: 'multiple_choice',
                prompt: '¿Cómo citas indirectamente: "민수가 말했어요: \'내일 올 거예요\'"?',
                options: [
                  '민수가 내일 올 거라고 했어요.',
                  '민수가 내일 온다고 했어요.',
                  '민수가 내일 오라고 했어요.',
                  '민수가 내일 오자고 했어요.'
                ],
                correctAnswer: '민수가 내일 올 거라고 했어요.',
                explanation: 'Para el futuro -(으)ㄹ 것이다 se usa -(으)ㄹ 거라고 하다.',
                points: 10
              }
            ],
            quiz: [
              {
                id: 'qz-4-1-1-1',
                type: 'multiple_choice',
                prompt: '¿Cuál es la fórmula para citar una propuesta ("Vayamos juntos") en discurso indirecto?',
                options: ['-자고 하다', '-(으)라고 하다', '-(ㄴ/는)다고 하다', '-냐고 하다'],
                correctAnswer: '-자고 하다',
                explanation: '-자고 하다 se usa específicamente para sugerencias conjuntas (청유문).',
                points: 15
              }
            ],
            summaryChecklist: [
              'Distingo los 4 tipos de cita: afirmativa, interrogativa, orden y propuesta.',
              'Aplico con seguridad el discurso indirecto en ejercicios escritos.',
              'Comprendo textos informativos y noticias sin dificultad de atribución.'
            ]
          }
        ]
      }
    ]
  },

  // ----------------------------------------------------------------------------
  // NIVEL 5: AVANZADO C1-C2 (MAESTRÍA TOPIK II - NIVELES 5 Y 6)
  // ----------------------------------------------------------------------------
  {
    levelNumber: 5,
    code: 'C1_C2',
    title: 'Nivel 5: Avanzado C1-C2',
    subTitle: 'Dominio superior, modismos de 4 caracteres (사자성어) y redacción académica',
    description: 'Gramática de alto nivel, matices semánticos refinados, comprensión de editoriales y conferencias universitarias, y dominio absoluto del examen TOPIK II para alcanzar los Niveles 5 y 6.',
    targetExam: 'TOPIK II (Niveles 5 y 6 de Maestría)',
    colorAccent: '#111827',
    badge: '최고급 달인',
    modules: [
      {
        id: 'mod-5-1',
        levelNumber: 5,
        moduleNumber: 9,
        title: 'Retórica Superior y Sabiduría Clásica',
        description: 'Alcanza el pináculo del bilingüismo con expresiones cultas y debate formal.',
        iconName: 'Award',
        lessons: [
          {
            id: 'les-5-1-1',
            moduleId: 'mod-5-1',
            levelNumber: 5,
            lessonNumber: 25,
            title: 'Expresiones Idiomáticas de 4 Caracteres (사자성어: Sajaseong-eo)',
            koreanTitle: '필수 사자성어와 고급 관용 표현',
            slug: 'sajaseongeo-expresiones-cuatro-caracteres',
            description: 'Aprende los proverbios clásicos sino-coreanos de cuatro caracteres más citados en editoriales y en el examen TOPIK Nivel 6.',
            orderIndex: 25,
            estimatedMinutes: 35,
            learningObjectives: [
              'Comprender el origen y significado de los Sajaseong-eo.',
              'Dominar los modismos indispensables: 일석이조, 작심삼일, 고진감래, 동문서답.',
              'Aplicar modismos cultos en ensayos argumentativos formales.'
            ],
            theoryContent: {
              introduction: 'Los Sajaseong-eo (사자성어, 四字成語) son frases idiomáticas de cuatro caracteres heredadas de la tradición clásica. En Corea demuestran una alta sofisticación intelectual y aparecen con frecuencia en las preguntas más difíciles de lectura de TOPIK II.',
              sections: [
                {
                  heading: '1. Los modismos de cuatro caracteres más evaluados',
                  content: '1) 일석이조 (一石二鳥, Il-seok-i-jo): "Matar dos pájaros de un tiro" (un acto con dos beneficios). 2) 작심삼일 (作心三日, Jak-sim-sam-il): "Resolución que dura solo tres días" (falta de constancia de año nuevo). 3) 고진감래 (苦盡甘來, Go-jin-gam-rae): "Tras lo amargo llega lo dulce" (el esfuerzo rinde sus frutos). 4) 역지사지 (易地思之, Yeok-ji-sa-ji): "Ponerse en los zapatos del otro" (empatía).'
                }
              ]
            },
            vocabularyList: [
              { hangul: '일석이조', hanja: '一石二鳥', romanization: 'ilseok-ijo', spanish: 'Matar dos pájaros de un tiro', partOfSpeech: 'expresión', exampleKorean: '운동도 하고 친구도 사귀니 일석이조예요.', exampleSpanish: 'Hago ejercicio y hago amigos, así que mato dos pájaros de un tiro.' },
              { hangul: '작심삼일', hanja: '作心三日', romanization: 'jaksim-samil', spanish: 'Resolución de solo 3 días (inconstancia)', partOfSpeech: 'expresión', exampleKorean: '새해 계획이 작심삼일로 끝나지 않게 하세요.', exampleSpanish: 'Que tus planes de año nuevo no terminen en tres días.' },
              { hangul: '고진감래', hanja: '苦盡甘來', romanization: 'gojin-gamrae', spanish: 'La recompensa tras la dificultad', partOfSpeech: 'expresión', exampleKorean: '열심히 노력했으니 고진감래일 것입니다.', exampleSpanish: 'Como te esforzaste tanto, pronto llegará la recompensa dulce.' }
            ],
            grammarPoints: [
              {
                title: 'Uso de Sajaseong-eo en oraciones formales',
                structure: '[사자성어] + -(이)라는 말이 있듯이 (Como dice el dicho...)',
                explanation: 'Fórmula retórica predilecta para la introducción o conclusión del ensayo de la pregunta 54 de TOPIK II.',
                examples: [
                  { hangul: '‘고진감래’라는 말이 있듯이, 고난 뒤에는 성공이 찾아온다.', romanization: '', spanish: 'Como dice el dicho "tras lo amargo viene lo dulce", tras la tribulación llega el éxito.' }
                ]
              }
            ],
            dailyExamples: [
              {
                speakerA: '면접관 (Entrevistador)',
                hangulA: '지원자의 좌우명은 무엇입니까?',
                spanishA: '¿Cuál es el lema de vida del postulante?',
                speakerB: '지원자 (Postulante)',
                hangulB: '제 좌우명은 \'역지사지\'입니다. 항상 타인의 입장을 먼저 배려합니다.',
                spanishB: 'Mi lema es "Yeokjisaji" (empatía). Siempre considero primero la posición del prójimo.'
              }
            ],
            exercises: [
              {
                id: 'ex-5-1-1-1',
                type: 'multiple_choice',
                prompt: '¿Qué Sajaseong-eo usarías para describir a alguien que se rinde en su dieta al tercer día?',
                options: ['작심삼일 (Jaksim-samil)', '일석이조 (Ilseok-ijo)', '고진감래 (Gojin-gamrae)', '동문서답 (Dongmun-seodap)'],
                correctAnswer: '작심삼일 (Jaksim-samil)',
                explanation: '작심삼일 significa literalmente "hacerse el ánimo por tres días", refiriéndose a la falta de perseverancia.',
                points: 10
              }
            ],
            quiz: [
              {
                id: 'qz-5-1-1-1',
                type: 'multiple_choice',
                prompt: '¿Qué modismo de cuatro caracteres expresa "ponerse en el lugar de la otra persona para comprenderla"?',
                options: ['역지사지 (易地思之)', '일석이조 (一石二鳥)', '작심삼일 (作心三日)', '부지기수 (不知其數)'],
                correctAnswer: '역지사지 (易地思之)',
                explanation: '역지사지 (Yeok-ji-sa-ji) es el proverbio cardinal sobre la empatía y ponerse en la situación ajena.',
                points: 15
              }
            ],
            summaryChecklist: [
              'Conozco los modismos sino-coreanos más trascendentes en la cultura académica.',
              'Sé integrarlos en la redacción de ensayos formales tipo TOPIK II.',
              'Reconozco los matices semánticos que diferencian un nivel intermedio de uno avanzado.'
            ]
          }
        ]
      }
    ]
  }
];

export const getAllLessons = () => {
  const all: any[] = [];
  CURRICULUM_LEVELS.forEach((lvl) => {
    lvl.modules.forEach((mod) => {
      mod.lessons.forEach((les) => {
        all.push({ ...les, levelData: lvl, moduleData: mod });
      });
    });
  });
  return all;
};

export const getLessonBySlug = (slug: string) => {
  for (const lvl of CURRICULUM_LEVELS) {
    for (const mod of lvl.modules) {
      for (const les of mod.lessons) {
        if (les.slug === slug || les.id === slug) {
          return { lesson: les, module: mod, level: lvl };
        }
      }
    }
  }
  return null;
};
