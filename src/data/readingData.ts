// ==============================================================================
// KOREAN ACADEMY - GRADED READING (읽기 마당)
// ==============================================================================
import { ReadingArticle } from '../types';

export const READING_DATABASE: ReadingArticle[] = [
  {
    id: 'read-01',
    level: 1,
    category: 'Vida Diaria',
    titleKorean: '나의 하루 일과',
    titleSpanish: 'Mi rutina diaria cotidiana',
    readingTimeMinutes: 3,
    paragraphs: [
      {
        hangul: '저는 보통 아침 일곱 시에 일어납니다. 물 한 잔을 마시고 가벼운 스트레칭을 합니다.',
        spanish: 'Generalmente me levanto a las siete de la mañana. Bebo un vaso de agua y hago estiramientos ligeros.',
        annotations: [
          { word: '보통', meaning: 'generalmente / habitualmente' },
          { word: '일어나다', meaning: 'despertarse / levantarse' }
        ]
      },
      {
        hangul: '아침 여덟 시 반에 지하철을 타고 대학교에 갑니다. 학교에서 친구들과 한국어와 문화를 공부합니다.',
        spanish: 'A las ocho y media de la mañana tomo el metro y voy a la universidad. En la escuela estudio coreano y cultura con mis amigos.',
        annotations: [
          { word: '지하철', meaning: 'metro / tren subterráneo' },
          { word: '타다', meaning: 'montar / tomar transporte' }
        ]
      },
      {
        hangul: '수업이 끝난 후에는 도서관에서 복습을 합니다. 저녁에는 가족들과 함께 맛있는 식사를 합니다.',
        spanish: 'Después de que terminan las clases repaso en la biblioteca. Por la noche ceno deliciosamente junto a mi familia.',
        annotations: [
          { word: '복습', meaning: 'repaso de lecciones' },
          { word: '함께', meaning: 'juntos / en compañía' }
        ]
      }
    ],
    vocabularyFocus: [
      { hangul: '일어나다', spanish: 'Levantarse', grammarRole: 'Verbo de acción' },
      { hangul: '지하철', spanish: 'Metro', grammarRole: 'Sustantivo' },
      { hangul: '복습', spanish: 'Repaso', grammarRole: 'Sustantivo de estudio' }
    ],
    questions: [
      {
        id: 'read-01-q1',
        question: '¿A qué hora se levanta habitualmente el autor del texto?',
        options: ['A las 7:00 AM', 'A las 8:30 AM', 'A las 6:00 AM', 'A las 9:00 AM'],
        correctAnswerIndex: 0,
        explanation: 'El texto inicia: "저는 보통 아침 일곱 시에 일어납니다" (일곱 시 = 7 en punto).'
      },
      {
        id: 'read-01-q2',
        question: '¿Cómo se traslada a la universidad?',
        options: ['En metro (지하철)', 'En autobús (버스)', 'Caminando', 'En taxi'],
        correctAnswerIndex: 0,
        explanation: 'Menciona: "지하철을 타고 대학교에 갑니다" (tomo el metro y voy a la universidad).'
      }
    ]
  },
  {
    id: 'read-02',
    level: 2,
    category: 'Cultura Coreana',
    titleKorean: '한국의 온돌 문화와 사계절',
    titleSpanish: 'La cultura del Ondol y las cuatro estaciones en Corea',
    readingTimeMinutes: 4,
    paragraphs: [
      {
        hangul: '한국에는 봄, 여름, 가을, 겨울의 뚜렷한 사계절이 있습니다. 특히 겨울은 바람이 많이 불고 매우 춥습니다.',
        spanish: 'En Corea hay cuatro estaciones marcadas: primavera, verano, otoño e invierno. Especialmente en invierno sopla mucho viento y hace mucho frío.',
        annotations: [
          { word: '사계절', meaning: 'cuatro estaciones del año' },
          { word: '뚜렷하다', meaning: 'ser marcado / claro' }
        ]
      },
      {
        hangul: '한국인들은 추운 겨울을 따뜻하게 보내기 위해 옛날부터 \'온돌\'이라는 전통 난방 방식을 사용했습니다. 온돌은 방바닥 아래로 따뜻한 열기를 전달하여 방 전체를 데우는 지혜로운 과학적 기술입니다.',
        spanish: 'Para pasar el frío invierno con calidez, los coreanos usaron desde tiempos antiguos un método de calefacción tradicional llamado "Ondol". El Ondol es una sabia técnica científica que calienta toda la habitación transmitiendo calor por debajo del suelo.',
        annotations: [
          { word: '온돌', meaning: 'Ondol (suelo radiante tradicional coreano)' },
          { word: '방바닥', meaning: 'suelo de la habitación' }
        ]
      },
      {
        hangul: '현대 한국 아파트에서도 온돌의 원리를 활용한 보일러 바닥 난방을 사용하고 있습니다. 그래서 한국인들은 집 안에서 신발을 벗고 바닥에 앉아 생활하는 문화가 자연스럽게 발전했습니다.',
        spanish: 'Incluso en los apartamentos modernos de Corea se utiliza la calefacción por caldera bajo el suelo basada en el principio del Ondol. Por ello, la cultura de quitarse los zapatos dentro del hogar y sentarse en el suelo se desarrolló naturalmente.',
        annotations: [
          { word: '신발을 벗다', meaning: 'quitarse los zapatos' }
        ]
      }
    ],
    vocabularyFocus: [
      { hangul: '온돌', spanish: 'Ondol (suelo radiante tradicional)', grammarRole: 'Sustantivo cultural' },
      { hangul: '난방', spanish: 'Calefacción', grammarRole: 'Sustantivo' },
      { hangul: '신발을 벗다', spanish: 'Quitarse los zapatos', grammarRole: 'Expresión verbal cotidiana' }
    ],
    questions: [
      {
        id: 'read-02-q1',
        question: '¿Cómo funciona tradicionalmente el sistema "Ondol"?',
        options: [
          'Calienta la habitación transmitiendo calor bajo el suelo (방바닥)',
          'Usa chimeneas de leña en el techo',
          'Usa aire caliente soplado desde las paredes',
          'Mediante alfombras térmicas importadas'
        ],
        correctAnswerIndex: 0,
        explanation: 'El texto explica: "방바닥 아래로 따뜻한 열기를 전달하여 방 전체를 데우는... 기술입니다".'
      },
      {
        id: 'read-02-q2',
        question: '¿Qué costumbre coreana se consolidó en el hogar gracias a la cultura del Ondol?',
        options: [
          'Quitarse los zapatos al entrar a casa y vivir en contacto con el suelo cálido',
          'Dormir siempre en camas muy elevadas',
          'Comer únicamente de pie',
          'Cerrar permanentemente todas las ventanas'
        ],
        correctAnswerIndex: 0,
        explanation: 'Explica que al estar el suelo cálido y limpio, surgió la costumbre de descalzarse (신발을 벗고) y sentarse en el piso.'
      }
    ]
  }
];
