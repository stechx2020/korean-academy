// ==============================================================================
// KOREAN ACADEMY - GRAMMAR LAB (LABORATORIO DE GRAMÁTICA)
// ==============================================================================
import { GrammarComparison } from '../types';

export const GRAMMAR_COMPARISONS: GrammarComparison[] = [
  {
    id: 'gram-comp-01',
    title: 'Partícula de Tema 은/는 vs Partícula de Sujeto 이/가',
    patternA: '은 / 는 (Tema / Contraste / Lo ya conocido)',
    patternB: '이 / 가 (Sujeto / Enfoque / Información nueva)',
    level: 1,
    explanationA: 'Indica el tema del que se habla ("En cuanto a...", "Hablando de..."), o compara explícita o implícitamente con otras cosas.',
    explanationB: 'Señala estrictamente quién o qué realiza la acción o posee la cualidad. Responde a preguntas como "¿Quién fue?" o "¿Qué cosa?".',
    comparisonRule: 'Usa 은/는 para introducir el tema general o un contraste ("Yo no sé, pero él sí"). Usa 이/가 para especificar el sujeto específico o responder a preguntas con palabras interrogativas (누가, 무엇이, 어디가).',
    examples: [
      {
        hangulA: '저는 콜롬비아 사람이에요.',
        spanishA: 'En cuanto a mí, soy colombiano.',
        hangulB: '제가 요리를 했어요.',
        spanishB: 'Fui yo quien cocinó (responde a ¿quién cocinó?).',
        contextTip: 'En la oración B, el foco está en "yo" como autor de la acción.'
      },
      {
        hangulA: '사과는 맛있어요. 하지만 바나나는 맛없어요.',
        spanishA: 'La manzana es rica, pero el plátano no (contraste con 은/는).',
        hangulB: '사과가 떨어졌어요.',
        spanishB: 'Se cayó una manzana (evento repentino / información nueva).',
        contextTip: 'Al reportar hechos que percibes en el momento, se prefiere 이/가.'
      }
    ],
    exercises: [
      {
        prompt: '¿Quién es el profesor? — (Minho responde: "Yo soy el profesor")',
        options: ['제가 선생님이에요.', '저는 선생님이에요.', '저를 선생님이에요.', '저에 선생님이에요.'],
        correctAnswer: '제가 선생님이에요.',
        explanation: 'Ante la pregunta "¿Quién es el profesor?" (누가 선생님이에요?), se debe usar la partícula de sujeto 제가 (저 + 가).'
      },
      {
        prompt: 'Completa para establecer un contraste: "저는 커피를 좋아해요. 동생___ 차를 좋아해요."',
        options: ['은', '이', '을', '에'],
        correctAnswer: '은',
        explanation: 'Como se está contrastando a sí mismo con su hermano menor (동생), se usa la partícula de contraste 은: 동생은.'
      }
    ]
  },
  {
    id: 'gram-comp-02',
    title: 'Partícula de Destino/Tiempo 에 vs Partícula de Lugar de Acción 에서',
    patternA: '에 (Destino estático, existencia con 있다/없다, o tiempo)',
    patternB: '에서 (Lugar donde se lleva a cabo una acción dinámica)',
    level: 1,
    explanationA: 'Se utiliza para el lugar hacia donde te diriges (가다/오다), el lugar donde algo existe o no (있다/없다), o el momento temporal (3시에).',
    explanationB: 'Se utiliza para el lugar físico donde una persona realiza una acción activa (comer, estudiar, trabajar, comprar). También significa "desde".',
    comparisonRule: '¿Hay una acción dinámica activa ocurriendo dentro del lugar? Si la respuesta es sí -> 에서. Si el verbo es solo existencia (estar) o destino -> 에.',
    examples: [
      {
        hangulA: '도서관에 있어요.',
        spanishA: 'Estoy en la biblioteca (solo existencia estática con 있다).',
        hangulB: '도서관에서 공부해요.',
        spanishB: 'Estudio en la biblioteca (acción dinámica: 공부하다).',
        contextTip: 'En A solo dices dónde estás; en B dices qué acción realizas en ese recinto.'
      },
      {
        hangulA: '학교에 가요.',
        spanishA: 'Voy a la escuela (destino del movimiento hacia adelante).',
        hangulB: '학교에서 출발해요.',
        spanishB: 'Salgo desde la escuela (origen o punto de partida).',
        contextTip: '에 marca la meta; 에서 marca el punto de partida o acción.'
      }
    ],
    exercises: [
      {
        prompt: 'Elige la partícula correcta: "우리는 식당______ 밥을 먹어요."',
        options: ['에서', '에', '을', '로'],
        correctAnswer: '에서',
        explanation: 'Comer comida (밥을 먹다) es una acción dinámica realizada dentro del restaurante, por lo que requiere 에서.'
      },
      {
        prompt: 'Elige la partícula correcta: "지금 집에 아무도 없어요."',
        options: ['에', '에서', '에게', '의'],
        correctAnswer: '에',
        explanation: 'Con el verbo de existencia/ausencia 없다 se utiliza 에: 집에.'
      }
    ]
  },
  {
    id: 'gram-comp-03',
    title: 'Causalidad -아서/어서 vs Justificación -(으)니까',
    patternA: '-아서/어서 (Causa objetiva general, hechos naturales)',
    patternB: '-(으)니까 (Razón subjetiva que justifica mandatos, sugerencias o invitaciones)',
    level: 2,
    explanationA: 'Expresa una relación de causa-efecto natural o cronológica. No puede combinarse con oraciones en tiempo imperativo (-(으)세요) ni propositivo (-(으)ㅂ시다).',
    explanationB: 'Expresa la razón o descubrimiento que motiva una propuesta. Admite de manera natural mandatos, advertencias y sugerencias.',
    comparisonRule: '¡Regla de oro de TOPIK!: Si la segunda mitad de la oración es una orden, sugerencia o invitación, la causa NUNCA puede ser -아서/어서; debe ser obligatoriamente -(으)니까.',
    examples: [
      {
        hangulA: '배가 아파서 병원에 갔어요.',
        spanishA: 'Como me dolía el estómago, fui al hospital (hecho pasado consumado).',
        hangulB: '시간이 없으니까 빨리 가자.',
        spanishB: 'Ya que no hay tiempo, vayamos rápido (sugerencia propositiva: 가자).',
        contextTip: '-(으)니까 se conecta perfecto con propuestas.'
      }
    ],
    exercises: [
      {
        prompt: 'Selecciona la opción correcta: "날씨가 맑_____ 산책을 갈까요?" (El clima está despejado, ¿vamos a pasear?)',
        options: ['으니까', '아서', '어서', '고'],
        correctAnswer: '으니까',
        explanation: 'Al ser una sugerencia o invitación (갈까요?), se requiere -(으)니까: 맑으니까.'
      }
    ]
  }
];
