// ==============================================================================
// KOREAN ACADEMY - OFFICIAL TOPIK I & TOPIK II EXAM SIMULATOR
// ==============================================================================
import { TopikExam } from '../types';

export const TOPIK_EXAMS: TopikExam[] = [
  // ----------------------------------------------------------------------------
  // TOPIK I (NIVELES 1 Y 2) - 200 PUNTOS TOTALES
  // ----------------------------------------------------------------------------
  {
    id: 'topik-1-full',
    code: 'TOPIK_I',
    title: 'Simulacro Diagnóstico Oficial TOPIK I',
    levelsCovered: 'Nivel 1 (80-139 pts) / Nivel 2 (140-200 pts)',
    durationMinutes: 100, // 40m 듣기 + 60m 읽기
    maxScore: 200,
    passingThresholds: [
      { level: 'TOPIK Nivel 2', minScore: 140, description: 'Dominio de funciones cotidianas complejas, llamadas, bancos y resolución de tareas prácticas.' },
      { level: 'TOPIK Nivel 1', minScore: 80, description: 'Supervivencia básica: saludos, compras en tiendas, presentaciones simples.' },
      { level: 'No Clasificado (<80 pts)', minScore: 0, description: 'Requiere reforzar los fundamentos del Hangul y el vocabulario básico del Nivel 1.' }
    ],
    sections: [
      {
        id: 'listening',
        name: 'Comprensión Auditiva (듣기)',
        koreanName: '듣기 영역',
        questionsCount: 5, // Curated representative questions
        maxScore: 100,
        durationMinutes: 40,
        questions: [
          {
            id: 't1-l-01',
            number: 1,
            section: 'listening',
            subType: 'Diálogo Corto / Asociación de Imagen',
            instructions: '[1~2] 다음을 듣고 알맞은 그림이나 알맞은 대답을 고르십시오. (Escucha y elige la respuesta correcta)',
            audioText: '여: 물이 있어요? \n남: 네, 여기 있어요.',
            passage: 'Pregunta: ¿Qué hay sobre la mesa?',
            options: [
              '물 (Agua)',
              '책 (Libro)',
              '사과 (Manzana)',
              '가방 (Mochila)'
            ],
            correctAnswer: 0,
            points: 20,
            explanation: 'En el audio la mujer pregunta: "물이 있어요?" (¿Hay agua?) y el hombre confirma: "네, 여기 있어요" (Sí, aquí está).',
            topicTag: 'Existencia 있다/없다 y Vocabulario Cotidiano'
          },
          {
            id: 't1-l-02',
            number: 2,
            section: 'listening',
            subType: 'Respuesta de Cortesía',
            instructions: '다음 대화를 듣고 이어질 말로 가장 알맞은 것을 고르십시오.',
            audioText: '남: 주말 잘 보내세요!\n여: ___________________.',
            options: [
              '네, 주말 잘 보내세요. (Sí, que tenga buen fin de semana también)',
              '아니요, 가지 마세요. (No, no se vaya)',
              '죄송합니다. 늦었습니다. (Perdón, llegué tarde)',
              '처음 뵙겠습니다. (Mucho gusto por primera vez)'
            ],
            correctAnswer: 0,
            points: 20,
            explanation: 'Cuando alguien te desea un buen fin de semana ("주말 잘 보내세요"), la respuesta natural y educada es desearle lo mismo: "네, 주말 잘 보내세요".',
            topicTag: 'Saludos y Fórmulas Sociales'
          },
          {
            id: 't1-l-03',
            number: 3,
            section: 'listening',
            subType: 'Lugar de la Conversación',
            instructions: '[3] 다음을 듣고 두 사람이 이야기하고 있는 장소를 고르십시오. (¿Dónde conversan?)',
            audioText: '여: 이 운동화 얼마예요?\n남: 오만 원입니다. 한번 신어 보세요.',
            options: [
              '신발 가게 (Tienda de calzado)',
              '도서관 (Biblioteca)',
              '병원 (Hospital)',
              '공항 (Aeropuerto)'
            ],
            correctAnswer: 0,
            points: 20,
            explanation: 'Mencionan "운동화" (zapatillas deportivas) y "신어 보세요" (pruébeselas), lo cual sitúa la escena en una tienda de zapatos.',
            topicTag: 'Inferencia de Lugares'
          },
          {
            id: 't1-l-04',
            number: 4,
            section: 'listening',
            subType: 'Propósito de la Acción',
            instructions: '여자는 오늘 무엇을 할 것입니까?',
            audioText: '남: 오늘 오후에 시간 있어요? 같이 영화 볼까요?\n여: 미안해요. 오늘은 한국어 시험이 있어서 도서관에서 공부해야 해요.',
            options: [
              '도서관에서 공부하기 (Estudiar en la biblioteca)',
              '영화관에서 영화 보기 (Ver película en el cine)',
              '백화점에서 쇼핑하기 (Ir de compras)',
              '병원에 진료 받으러 가기 (Ir al médico)'
            ],
            correctAnswer: 0,
            points: 20,
            explanation: 'La mujer rechaza la invitación al cine porque tiene examen y dice "도서관에서 공부해야 해요" (tengo que estudiar en la biblioteca).',
            topicTag: 'Comprensión de Intención'
          },
          {
            id: 't1-l-05',
            number: 5,
            section: 'listening',
            subType: 'Detalle de Horario',
            instructions: '남자는 몇 시에 친구를 만납니까?',
            audioText: '여: 몇 시에 친구를 만나요?\n남: 세 시 반에 만나요.',
            options: [
              '3:30 (세 시 반)',
              '2:30 (두 시 반)',
              '4:00 (네 시)',
              '5:30 (다섯 시 반)'
            ],
            correctAnswer: 0,
            points: 20,
            explanation: 'El hombre declara claramente: "세 시 반에 만나요" (Nos vemos a las 3:30).',
            topicTag: 'Horas y Números Nativos'
          }
        ]
      },
      {
        id: 'reading',
        name: 'Comprensión Lectora (읽기)',
        koreanName: '읽기 영역',
        questionsCount: 5,
        maxScore: 100,
        durationMinutes: 60,
        questions: [
          {
            id: 't1-r-01',
            number: 6,
            section: 'reading',
            subType: 'Tema del Texto Corto',
            instructions: '[6] 무엇에 대한 글인지 고르십시오. (¿De qué trata el texto?)',
            passage: '저는 스페인 사람입니다. 수지는 한국 사람입니다.',
            options: [
              '국적 (Nacionalidad)',
              '나이 (Edad)',
              '날씨 (Clima)',
              '휴일 (Día festivo)'
            ],
            correctAnswer: 0,
            points: 20,
            explanation: 'Al contrastar "스페인 사람" y "한국 사람", el tema es claramente la nacionalidad (국적).',
            topicTag: 'Vocabulario Básico y Clasificación'
          },
          {
            id: 't1-r-02',
            number: 7,
            section: 'reading',
            subType: 'Completar el Espacio con Partícula',
            instructions: '[7] 빈칸에 들어갈 가장 알맞은 것을 고르십시오.',
            passage: '식당(    ) 밥을 먹습니다.',
            options: [
              '에서',
              '에',
              '을',
              '의'
            ],
            correctAnswer: 0,
            points: 20,
            explanation: 'Comer arroz/comida es una acción activa realizada en un lugar, por lo que requiere la partícula 에서.',
            topicTag: 'Partículas de Lugar (에 vs 에서)'
          },
          {
            id: 't1-r-03',
            number: 8,
            section: 'reading',
            subType: 'Comprensión de Letrero o Cartel',
            instructions: '[8] 이 안내판은 무엇을 뜻합니까?',
            passage: '[안내] 도서관 내에서는 조용히 해 주십시오. 휴대전화는 진동으로 바꿔 주세요.',
            options: [
              '도서관 이용 시 지켜야 할 예절 (Normas de conducta en la biblioteca)',
              '도서관 개관 시간 안내 (Horario de apertura)',
              '도서 대출 방법 (Cómo pedir prestado libros)',
              '도서관 위치 안내 (Ubicación de la biblioteca)'
            ],
            correctAnswer: 0,
            points: 20,
            explanation: 'El cartel pide hacer silencio y poner el teléfono en vibrador, lo que corresponde a normas de etiqueta (예절).',
            topicTag: 'Comprensión de Avisos Públicos'
          },
          {
            id: 't1-r-04',
            number: 9,
            section: 'reading',
            subType: 'Concordancia con el Texto',
            instructions: '[9] 글의 내용과 같은 것을 고르십시오. (Elige la opción que coincide con el texto)',
            passage: '저는 지난주말에 동대문 시장에 갔습니다. 동대문 시장에는 옷이 많고 가격도 쌌습니다. 저는 마음에 드는 바지 한 벌을 샀습니다.',
            options: [
              '저는 동대문 시장에서 바지를 샀습니다.',
              '저는 이번 주말에 시장에 갈 것입니다.',
              '동대문 시장의 옷은 매우 비쌌습니다.',
              '저는 시장에서 모자를 샀습니다.'
            ],
            correctAnswer: 0,
            points: 20,
            explanation: 'El texto dice textualmente: "마음에 드는 바지 한 벌을 샀습니다" (compré un pantalón que me gustó).',
            topicTag: 'Lectura Comprensiva y Extracción de Hechos'
          },
          {
            id: 't1-r-05',
            number: 10,
            section: 'reading',
            subType: 'Orden Lógico de Oraciones',
            instructions: '[10] 다음을 순서대로 맞게 나열한 것을 고르십시오. (Ordena lógicamente)',
            passage: '(가) 배가 너무 고팠습니다.\n(나) 그래서 근처 식당에 들어갔습니다.\n(다) 맛있는 비빔밥을 배부르게 먹었습니다.',
            options: [
              '(가) - (나) - (다)',
              '(나) - (가) - (다)',
              '(다) - (나) - (가)',
              '(가) - (다) - (나)'
            ],
            correctAnswer: 0,
            points: 20,
            explanation: 'La secuencia causal natural es: Tenía mucha hambre (가) -> Por eso entré a un restaurante (나) -> Comí bibimbap delicioso hasta saciarme (다).',
            topicTag: 'Cohesión y Conectores Lógicos'
          }
        ]
      }
    ]
  },

  // ----------------------------------------------------------------------------
  // TOPIK II (NIVELES 3 A 6) - 300 PUNTOS TOTALES
  // ----------------------------------------------------------------------------
  {
    id: 'topik-2-full',
    code: 'TOPIK_II',
    title: 'Simulacro Diagnóstico Oficial TOPIK II',
    levelsCovered: 'Nivel 3 (120 pts), Nivel 4 (150 pts), Nivel 5 (190 pts), Nivel 6 (230 pts)',
    durationMinutes: 180, // 60m 듣기 + 50m 쓰기 + 70m 읽기
    maxScore: 300,
    passingThresholds: [
      { level: 'TOPIK Nivel 6 (Avanzado Superior)', minScore: 230, description: 'Competencia lingüística fluida y casi nativa en contextos profesionales, académicos y de investigación.' },
      { level: 'TOPIK Nivel 5 (Avanzado)', minScore: 190, description: 'Capacidad para realizar investigaciones, redactar informes especializados y participar en debates complejos.' },
      { level: 'TOPIK Nivel 4 (Intermedio Alto)', minScore: 150, description: 'Comprensión de noticias de actualidad, uso de registros formales y resolución de problemas sociales habituales.' },
      { level: 'TOPIK Nivel 3 (Intermedio)', minScore: 120, description: 'Uso independiente del idioma en la vida comunitaria y relaciones interpersonales cotidianas.' },
      { level: 'No Clasificado (<120 pts)', minScore: 0, description: 'Se recomienda consolidar primero la certificación TOPIK I con puntuación superior a 160.' }
    ],
    sections: [
      {
        id: 'listening',
        name: 'Comprensión Auditiva (듣기)',
        koreanName: '듣기 영역',
        questionsCount: 4,
        maxScore: 100,
        durationMinutes: 60,
        questions: [
          {
            id: 't2-l-01',
            number: 1,
            section: 'listening',
            subType: 'Comprensión de Conferencia / Debate',
            instructions: '다음 대화를 듣고 남자의 생각으로 가장 알맞은 것을 고르십시오.',
            audioText: '여: 요즘 인공지능 번역기가 워낙 발달해서 외국어를 굳이 힘들게 배울 필요가 없다는 사람들도 많은데요.\n남: 글쎄요. 번역기가 단어의 뜻은 전달할 수 있어도, 그 문화 속에 깃든 미묘한 뉘앙스나 정서는 인간만이 온전히 나눌 수 있다고 봅니다. 언어 학습은 단순한 정보 교환이 아니라 타인을 이해하는 창이니까요.',
            options: [
              '기계 번역기가 있어도 외국어 학습은 인간적 이해를 위해 여전히 중요하다.',
              '인공지능 번역기가 있으므로 외국어 교육 시간을 대폭 줄여야 한다.',
              '문화적 뉘앙스는 컴퓨터 알고리즘이 인간보다 더 객관적으로 번역한다.',
              '모든 외국어 학습은 시험 점수 획득을 최우선 목표로 삼아야 한다.'
            ],
            correctAnswer: 0,
            points: 25,
            explanation: 'El hombre defiende que la tecnología no sustituye la empatía ni los matices culturales que solo el ser humano transmite al aprender un idioma.',
            topicTag: 'Inferencia de Postura del Hablante'
          },
          {
            id: 't2-l-02',
            number: 2,
            section: 'listening',
            subType: 'Entrevista a Experto',
            instructions: '남자는 이 사업을 왜 시작했습니까?',
            audioText: '여: 대표님, 폐플라스틱으로 친환경 의류를 제작하는 회사를 창업하신 특별한 계기가 있으신가요?\n남: 네, 바다에 버려진 플라스틱 쓰레기 때문에 해양 생물들이 고통받는 다큐멘터리를 보고 큰 충격을 받았습니다. 쓰레기를 줄이는 동시에 실용적인 패션을 만들면 지속 가능한 지구를 만드는 데 기여할 수 있다고 확신했습니다.',
            options: [
              '해양 환경 오염 문제 해결에 기여하고 지속 가능한 가치를 만들기 위해',
              '기존 패션 대기업의 독점 구조를 깨뜨리기 위해',
              '단기간에 가장 높은 금전적 수익을 올리기 위해',
              '외국 유명 디자이너와의 협업을 성사시키기 위해'
            ],
            correctAnswer: 0,
            points: 25,
            explanation: 'El fundador explica que quedó impactado por el daño ambiental en el mar y fundó la empresa para reducir plásticos y proteger los ecosistemas.',
            topicTag: 'Captura de Motivación Principal'
          },
          {
            id: 't2-l-03',
            number: 3,
            section: 'listening',
            subType: 'Conversación Formal de Negocios',
            instructions: '두 사람이 합의한 내용으로 알맞은 것은 무엇입니까?',
            audioText: '남: 이번 프로젝트 납품 기한을 다음 주 금요일까지로 연장해 주실 수 있습니까?\n여: 품질 향상을 위해서라면 이틀 정도는 늦춰드릴 수 있지만, 다음 주 수요일 오전까지는 반드시 최종안을 주셔야 합니다.',
            options: [
              '최종안 제출 기한을 다음 주 수요일 오전으로 정했다.',
              '프로젝트를 전면 취소하기로 했다.',
              '남자의 요청대로 다음 주 금요일까지 연기했다.',
              '일정 변경 없이 기존 일정 그대로 진행하기로 했다.'
            ],
            correctAnswer: 0,
            points: 25,
            explanation: 'La mujer concede una extensión hasta el miércoles por la mañana (수요일 오전까지).',
            topicTag: 'Negociación y Acuerdos'
          },
          {
            id: 't2-l-04',
            number: 4,
            section: 'listening',
            subType: 'Noticia Social',
            instructions: '이 뉴스의 핵심 내용으로 알맞은 것을 고르십시오.',
            audioText: '최근 1인 가구의 증가로 소포장 식료품과 간편식 시장이 가파른 성장세를 보이고 있습니다. 대형 마트들도 묶음 상품 위주의 진열에서 벗어나 소용량 맞춤형 코너를 대폭 확대하고 있는 추세입니다.',
            options: [
              '1인 가구 증가로 소용량 식품 시장이 급성장하고 있다.',
              '대형 마트들이 1인 가구의 출입을 제한하고 있다.',
              '다인 가구 중심의 대용량 묶음 상품 판매가 사상 최대를 기록했다.',
              '간편식의 품질 저하로 소비자 불만이 급증했다.'
            ],
            correctAnswer: 0,
            points: 25,
            explanation: 'El eje central de la noticia es el auge de los productos en porciones individuales impulsado por el aumento de hogares unipersonales.',
            topicTag: 'Economía y Tendencias Sociales'
          }
        ]
      },
      {
        id: 'writing',
        name: 'Expresión Escrita (쓰기)',
        koreanName: '쓰기 영역',
        questionsCount: 2, // Evaluated objective prompts
        maxScore: 100,
        durationMinutes: 50,
        questions: [
          {
            id: 't2-w-01',
            number: 5,
            section: 'writing',
            subType: 'Pregunta 51: Completar Tablón de Avisos',
            instructions: '[51번] 다음을 읽고 ( ㉠ )과 ( ㉡ )에 들어갈 말을 각각 한 문장으로 쓰십시오.',
            passage: '제목: 룸메이트를 구합니다.\n학교 정문 앞 원룸에서 함께 지낼 룸메이트를 찾고 있습니다. 방이 넓고 깨끗합니다. 비흡연자이신 분이면 ( ㉠ ). 방을 보고 싶으신 분은 아래 번호로 ( ㉡ ).',
            options: [
              '㉠: 좋겠습니다 / ㉡: 연락해 주시기 바랍니다',
              '㉠: 없었습니다 / ㉡: 들어오십시오',
              '㉠: 나쁩니다 / ㉡: 나가지 마십시오',
              '㉠: 먹었습니다 / ㉡: 보지 마십시오'
            ],
            correctAnswer: 0,
            points: 50,
            explanation: 'Para ㉠ la fórmula deseable es "(으)면 좋겠습니다" (sería bueno si no fuma). Para ㉡ la petición cortés de contacto es "연락해 주시기 바랍니다".',
            topicTag: 'Escritura Práctica y Registro Formal'
          },
          {
            id: 't2-w-02',
            number: 6,
            section: 'writing',
            subType: 'Pregunta 52: Explicación Lógica de Fenómeno',
            instructions: '[52번] 다음을 읽고 ( ㉠ )과 ( ㉡ )에 들어갈 알맞은 말을 고르십시오.',
            passage: '사람은 누구나 스트레스를 받는다. 그러나 스트레스가 항상 나쁜 것만은 아니다. 적당한 스트레스는 집중력을 높여 일의 효율을 ( ㉠ ). 반면에 과도한 스트레스는 건강을 해칠 수 있으므로 평소에 잘 ( ㉡ ).',
            options: [
              '㉠: 높여 준다 / ㉡: 관리해야 한다 (o 해소해야 한다)',
              '㉠: 떨어뜨린다 / ㉡: 방치해야 한다',
              '㉠: 없애 준다 / ㉡: 잊어버린다',
              '㉠: 줄인다 / ㉡: 키워야 한다'
            ],
            correctAnswer: 0,
            points: 50,
            explanation: 'El estrés moderado eleva la eficiencia (효율을 높여 준다). En contraste, el estrés excesivo daña la salud, por lo que debe gestionarse bien (관리해야 한다 / 해소해야 한다).',
            topicTag: 'Escritura Expositiva y Causalidad'
          }
        ]
      },
      {
        id: 'reading',
        name: 'Comprensión Lectora (읽기)',
        koreanName: '읽기 영역',
        questionsCount: 4,
        maxScore: 100,
        durationMinutes: 70,
        questions: [
          {
            id: 't2-r-01',
            number: 7,
            section: 'reading',
            subType: 'Idea Principal de Editorial',
            instructions: '다음 글의 주제로 가장 알맞은 것을 고르십시오.',
            passage: '실패를 두려워하는 사회에서는 혁신이 싹트기 어렵다. 위대한 발명과 비즈니스의 성공은 무수한 시행착오 끝에 얻어진 결실이다. 따라서 우리 사회는 실패를 개인의 무능으로 낙인찍기보다, 가치 있는 도전의 과정으로 인정하고 재도전의 기회를 제도적으로 보장해야 한다.',
            options: [
              '실패를 용인하고 재도전을 장려하는 사회적 풍토와 제도가 필요하다.',
              '모든 사업 실패는 개인의 준비 부족에서 비롯되므로 엄벌해야 한다.',
              '혁신보다는 안정적인 전통 산업을 보수적으로 유지하는 것이 바람직하다.',
              '실패의 횟수를 공식적으로 제한하는 법안을 제정해야 한다.'
            ],
            correctAnswer: 0,
            points: 25,
            explanation: 'El texto argumenta que la sociedad debe ver el fracaso como parte de la innovación y garantizar institucionalmente oportunidades de volver a intentarlo.',
            topicTag: 'Lectura Crítica y Tesis Central'
          },
          {
            id: 't2-r-02',
            number: 8,
            section: 'reading',
            subType: 'Significado de Proverbio o Sajaseong-eo',
            instructions: '밑줄 친 부분에 들어갈 가장 알맞은 사자성어를 고르십시오.',
            passage: '어려운 환경 속에서도 끝까지 포기하지 않고 학업에 매진한 영수는 마침내 국가고시에 수석으로 합격했다. 그의 눈물겨운 성공 스토리는 많은 이들에게 (     )의 교훈을 다시금 일깨워 주었다.',
            options: [
              '고진감래 (苦盡甘來: Tras lo amargo llega lo dulce)',
              '작심삼일 (作心三日: Decisión que dura 3 días)',
              '동문서답 (東問西答: Responder algo sin relación)',
              '오리무중 (五里霧中: Estar perdido en la niebla)'
            ],
            correctAnswer: 0,
            points: 25,
            explanation: 'Lograr el éxito tras superar grandes sacrificios encarna exactamente el adagio "고진감래" (la dulzura tras la amargura).',
            topicTag: 'Sajaseong-eo y Modismos Clásicos'
          },
          {
            id: 't2-r-03',
            number: 9,
            section: 'reading',
            subType: 'Inserción Coherente de Oración',
            instructions: '다음 문장이 들어가기에 가장 알맞은 곳을 고르십시오.\n[보기] 그러나 인체에 무해하다는 과학적 근거가 확실히 밝혀질 때까지는 신중을 기해야 한다.',
            passage: '( ㉠ ) 최근 새로운 유전자 교정 식품이 시장에 등장하면서 소비자들의 기대가 커지고 있다. ( ㉡ ) 이 기술은 농작물의 수확량을 획기적으로 늘리고 병충해 저항력을 높일 수 있다. ( ㉢ ) 장기적인 섭취가 인체 면역계에 미칠 영향에 대한 검증은 아직 충분하지 않기 때문이다. ( ㉣ ) 따라서 정부 차원의 엄격한 안전성 평가 기준 마련이 시급하다.',
            options: [
              '㉢',
              '㉠',
              '㉡',
              '㉣'
            ],
            correctAnswer: 0,
            points: 25,
            explanation: 'La frase [보기] introduce una advertencia preventiva que se justifica inmediatamente en la siguiente frase: "porque aún no se ha verificado el impacto en el sistema inmunológico" (이유: 검증이 충분하지 않기 때문이다). Por tanto encaja exactamente en ㉢.',
            topicTag: 'Cohesión Textual Avanzada'
          },
          {
            id: 't2-r-04',
            number: 10,
            section: 'reading',
            subType: 'Análisis de Metáfora y Tono',
            instructions: '필자의 태도로 가장 적절한 것을 고르십시오.',
            passage: '도시의 콘크리트 숲 속에서 우리는 자연과의 연결 고리를 잃어가고 있다. 주말마다 산을 찾는 이들이 늘어나는 것은 단순한 유행이 아니라, 메마른 영혼이 자연의 숨결을 갈망하는 절박한 외침이다.',
            options: [
              '현대 도시인의 자연 단절을 안타까워하며 생태적 회복을 강조하고 있다.',
              '등산 장비의 과소비 문제를 비판하고 있다.',
              '도시 개발 속도를 더욱 가속화해야 한다고 촉구하고 있다.',
              '자연 친화적 삶은 비현실적이므로 도시 생활에 순응해야 한다고 주장한다.'
            ],
            correctAnswer: 0,
            points: 25,
            explanation: 'El autor lamenta la desconexión con la naturaleza en las ciudades ("메마른 영혼...") y resalta la necesidad de reconexión ecológica.',
            topicTag: 'Identificación del Tono y Postura del Autor'
          }
        ]
      }
    ]
  }
];
