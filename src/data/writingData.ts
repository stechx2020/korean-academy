// ==============================================================================
// KOREAN ACADEMY - WRITING STUDIO (쓰기 공방 & TOPIK WRITING)
// ==============================================================================
import { WritingTask } from '../types';

export const WRITING_TASKS: WritingTask[] = [
  {
    id: 'wri-01',
    level: 1,
    title: 'Construcción sintáctica básica: Orden SOV',
    type: 'sentence_building',
    prompt: 'Ordena los siguientes elementos para formar una oración correcta: "Pedro come manzanas en la cafetería"',
    instructions: 'Recuerda el orden natural en coreano: Sujeto + Lugar (에서) + Objeto (을/를) + Verbo (먹어요).',
    starterText: '페드로는 / 카페에서 / 사과를 / 먹어요',
    referenceAnswer: '페드로는 카페에서 사과를 먹어요.',
    criteria: [
      'Ubicación del sujeto al inicio con la partícula 은/는.',
      'Uso correcto de la partícula de lugar 에서.',
      'Uso de la partícula de objeto 를 con 사과.',
      'Ubicación obligatoria del verbo al final de la frase.'
    ]
  },
  {
    id: 'wri-02',
    level: 2,
    title: 'Completar anuncio informal: TOPIK II Pregunta 51',
    type: 'topik_writing',
    prompt: 'Completa los espacios en blanco ( ㉠ ) y ( ㉡ ) con la cortesía adecuada en un tablón de anuncios de segunda mano.',
    instructions: 'Texto del aviso: "자전거를 팝니다. 지난달에 샀는데 이사를 가게 되어서 ( ㉠ ). 가격은 5만 원입니다. 관심이 있으신 분은 저에게 ( ㉡ )."',
    starterText: '㉠: \n㉡: ',
    referenceAnswer: '㉠: 팔려고 합니다 (o 팝니다 / 내놓습니다)\n㉡: 연락해 주시기 바랍니다 (o 연락해 주세요 / 문자 주십시오)',
    criteria: [
      'Uso del registro formal adecuado (-ㅂ/습니다 o -(으)십시오).',
      'Concordancia contextual con la venta de la bicicleta.',
      'Uso de la fórmula de contacto estándar: 연락해 주시기 바랍니다.'
    ]
  },
  {
    id: 'wri-03',
    level: 4,
    title: 'Redacción gráfica de encuesta: TOPIK II Pregunta 53',
    type: 'topik_writing',
    prompt: 'Redacta un texto objetivo de 200 a 300 caracteres describiendo los resultados de una encuesta sobre: "Motivos principales para aprender coreano en el extranjero".',
    instructions: 'Datos: 1° lugar: Interés en el K-Pop y dramas (45%), 2° lugar: Deseo de estudiar o trabajar en Corea (35%), 3° lugar: Interés general en la cultura tradicional (20%). Debes usar el estilo neutro escrito (-ㄴ/는다, -(으)ㅁ).',
    targetLength: '200-300자',
    referenceAnswer: '인주시 한국어 교육원에서 외국인을 대상으로 한국어를 배우는 목적에 대해 설문조사를 실시하였다. 조사 결과에 따르면 ‘K-Pop 및 드라마에 대한 관심’이 45%로 가장 높게 나타났다. 이어 ‘한국 유학 및 취업’이 35%로 그 뒤를 이었으며, ‘전통문화에 대한 관심’이 20%로 조사되었다. 이러한 결과를 통해 대중문화가 한국어 학습의 가장 큰 계기가 되고 있음을 알 수 있다.',
    criteria: [
      'No escribir en primera persona ("yo"); mantener tono objetivo y analítico.',
      'Uso de fórmulas canónicas: "조사 결과에 따르면...", "...가장 높게 나타났다", "...그 뒤를 이었다".',
      'Uso del registro escrito no honorífico 해라체 (-ㄴ/는다, -었다).'
    ]
  }
];
