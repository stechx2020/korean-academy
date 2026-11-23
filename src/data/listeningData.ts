// ==============================================================================
// KOREAN ACADEMY - LISTENING COMPREHENSION (듣기 연습)
// ==============================================================================
import { ListeningItem } from '../types';

export const LISTENING_DATABASE: ListeningItem[] = [
  {
    id: 'lis-01',
    level: 1,
    title: 'En la cafetería: pidiendo café y postre',
    situation: 'Dos personas en un café de Hongdae piden bebidas y preguntan el precio.',
    audioScript: [
      {
        speaker: '직원 (Empleado)',
        hangul: '어서 오세요! 무엇을 드릴까요?',
        romanization: 'Eoseo oseyo! Mueoseul deurilkkayo?',
        spanish: '¡Bienvenido! ¿Qué desea ordenar?'
      },
      {
        speaker: '수빈 (Subin)',
        hangul: '따뜻한 아메리카노 한 잔하고 치즈케이크 하나 주세요.',
        romanization: 'Ttatteut-han amerikano han janhago chijeukeikeu hana juseyo.',
        spanish: 'Un americano caliente y un pastel de queso, por favor.'
      },
      {
        speaker: '직원 (Empleado)',
        hangul: '네, 알겠습니다. 여기서 드시고 가세요?',
        romanization: 'Ne, algessseumnida. Yeogiseo deusigo gaseyo?',
        spanish: 'Sí, comprendido. ¿Para consumir aquí?'
      },
      {
        speaker: '수빈 (Subin)',
        hangul: '네, 먹고 갈 거예요. 모두 얼마예요?',
        romanization: 'Ne, meokgo gal geoyeyo. Modu eolmayeyo?',
        spanish: 'Sí, lo tomaré aquí. ¿Cuánto es todo?'
      },
      {
        speaker: '직원 (Empleado)',
        hangul: '모두 구천오백 원입니다.',
        romanization: 'Modu gucheon-obaek won-imnida.',
        spanish: 'Son 9,500 wones en total.'
      }
    ],
    questions: [
      {
        id: 'lis-01-q1',
        question: '¿Qué ordenó la clienta (수빈)?',
        options: [
          'Un café americano caliente y un pastel de queso',
          'Un café frío y una dona',
          'Dos cafés con leche',
          'Solo agua mineral'
        ],
        correctAnswerIndex: 0,
        explanation: '수빈 pide: "따뜻한 아메리카노 한 잔하고 치즈케이크 하나" (un americano caliente y un pastel de queso).'
      },
      {
        id: 'lis-01-q2',
        question: '¿Dónde consumirá su pedido?',
        options: [
          'En el mismo café (여기서 먹고 갈 거예요)',
          'Para llevar (포장)',
          'En la oficina',
          'No lo especificó'
        ],
        correctAnswerIndex: 0,
        explanation: 'Ella responde: "네, 먹고 갈 거예요" (Sí, voy a comer aquí).'
      },
      {
        id: 'lis-01-q3',
        question: '¿Cuánto cuesta el total del pedido?',
        options: ['9,500 wones', '8,000 wones', '10,500 wones', '7,200 wones'],
        correctAnswerIndex: 0,
        explanation: 'El empleado dice: "구천오백 원입니다" (구 = 9, 천 = 1,000, 오 = 5, 백 = 100 -> 9,500 wones).'
      }
    ],
    dictationSentence: {
      hangul: '따뜻한 아메리카노 한 잔 주세요',
      romanization: 'Ttatteut-han amerikano han jan juseyo',
      spanish: 'Deme una taza de café americano caliente, por favor.'
    }
  },
  {
    id: 'lis-02',
    level: 2,
    title: 'Haciendo planes para el fin de semana',
    situation: 'Minsu y Jiwoo conversan sobre qué hacer el sábado por la tarde.',
    audioScript: [
      {
        speaker: '민수 (Minsu)',
        hangul: '지우 씨, 이번 주 토요일에 특별한 계획이 있어요?',
        romanization: 'Jiwoo ssi, ibeon ju toyoir-e teukbyeolhan gyehoegi isseoyo?',
        spanish: 'Jiwoo, ¿tienes algún plan especial este sábado?'
      },
      {
        speaker: '지우 (Jiwoo)',
        hangul: '아니요, 아직 없어요. 왜요?',
        romanization: 'Aniyo, ajik eopseoyo. Waeyo?',
        spanish: 'No, aún no tengo nada. ¿Por qué?'
      },
      {
        speaker: '민수 (Minsu)',
        hangul: '인사동에서 한국 전통 공예 전시회를 한대요. 같이 갈래요?',
        romanization: 'Insadong-eseo hanguk jeontong gong-ye jeonsihoereul handaeyo. Gachi gallaeyo?',
        spanish: 'Dicen que hay una exposición de artesanía tradicional coreana en Insadong. ¿Quieres ir juntos?'
      },
      {
        speaker: '지우 (Jiwoo)',
        hangul: '좋아요! 저도 한국 문화에 관심이 많았어요. 몇 시에 만날까요?',
        romanization: 'Joayo! Jeodo hanguk munhwa-e gwansimi manhasseoyo. Myeot sie mannalkkayo?',
        spanish: '¡Me encanta! Yo también tenía mucho interés en la cultura coreana. ¿A qué hora nos encontramos?'
      },
      {
        speaker: '민수 (Minsu)',
        hangul: '오후 두 시에 안국역 삼 번 출구 앞에서 만나요.',
        romanization: 'Ohu du sie Anguk-yeok sam beon chulgu ap-eseo mannayo.',
        spanish: 'Reunámonos a las 2 de la tarde frente a la salida 3 de la estación Anguk.'
      }
    ],
    questions: [
      {
        id: 'lis-02-q1',
        question: '¿A qué lugar planean ir este fin de semana?',
        options: [
          'A una exposición de artesanía tradicional en Insadong',
          'A un concierto de K-Pop en Gangnam',
          'A cenar a un restaurante en Myeongdong',
          'Al cine a ver una película'
        ],
        correctAnswerIndex: 0,
        explanation: 'Minsu propone ir a una exposición de artesanía tradicional en Insadong (인사동 한국 전통 공예 전시회).'
      },
      {
        id: 'lis-02-q2',
        question: '¿Dónde y a qué hora acordaron encontrarse?',
        options: [
          'A las 2:00 PM frente a la salida 3 de la estación Anguk',
          'A las 12:00 PM en el restaurante',
          'A las 3:30 PM en la estación de Seúl',
          'A las 10:00 AM en la cafetería'
        ],
        correctAnswerIndex: 0,
        explanation: 'Minsu dice: "오후 두 시에 안국역 삼 번 출구 앞에서 만나요".'
      }
    ],
    dictationSentence: {
      hangul: '오후 두 시에 역 앞에서 만나요',
      romanization: 'Ohu du sie yeok ap-eseo mannayo',
      spanish: 'Reunámonos frente a la estación a las dos de la tarde.'
    }
  }
];
