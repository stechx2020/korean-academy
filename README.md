# 🇰🇷 KOREAN ACADEMY — Academia Virtual Integral del Idioma Coreano

> **Plataforma web educativa completa para aprender coreano desde cero hasta nivel avanzado, con preparación oficial para los exámenes TOPIK I y TOPIK II.**

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![React](https://img.shields.io/badge/React-18.3-61dafb.svg?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.7-3178c6.svg?logo=typescript)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4-38bdf8.svg?logo=tailwindcss)
![Supabase](https://img.shields.io/badge/Supabase-BaaS-3ecf8e.svg?logo=supabase)
![GitHub Pages](https://img.shields.io/badge/Deploy-GitHub%20Pages-222222.svg?logo=github)

---

## 📖 Índice

1. [Visión General y Objetivos](#1-visión-general-y-objetivos)
2. [Arquitectura Tecnológica](#2-arquitectura-tecnológica)
3. [Estructura Académica Curricular (Niveles 0 a 5)](#3-estructura-académica-curricular-niveles-0-a-5)
4. [La Metodología Pedagógica de 11 Pasos](#4-la-metodología-pedagógica-de-11-pasos)
5. [Herramientas Interactivas de Aprendizaje](#5-herramientas-interactivas-de-aprendizaje)
6. [Centro de Preparación Oficial TOPIK I & II](#6-centro-de-preparación-oficial-topik-i--ii)
7. [Base de Datos y Seguridad (Supabase RLS)](#7-base-de-datos-y-seguridad-supabase-rls)
8. [Instalación y Despliegue en GitHub Pages](#8-instalación-y-despliegue-en-github-pages)

---

## 1. Visión General y Objetivos

**Korean Academy** es una academia digital completa concebida para estudiantes hispanohablantes. Integra:
- **Enseñanza progresiva bilingüe español-coreano**, aumentando la inmersión en Hangul conforme se avanza.
- **Preparación rigurosa para los exámenes oficiales TOPIK I (Niveles 1 y 2) y TOPIK II (Niveles 3 a 6)** con simulacros cronometrados y reportes diagnósticos.
- **Pronunciación nativa interactiva** gracias a la API Web Speech (TTS) y evaluación por voz mediante reconocimiento de voz acústico en tiempo real.
- **Desbloqueo progresivo**, impidiendo el avance a lecciones complejas sin consolidar los fundamentos.

---

## 2. Arquitectura Tecnológica

La plataforma está diseñada específicamente para ser alojada en **GitHub Pages** como una Single Page Application (SPA) estática de alto rendimiento:

- **Frontend**: React 18 + TypeScript + Vite.
- **Enrutamiento**: `HashRouter` de `react-router-dom` para **garantizar cero errores 404** al recargar rutas en GitHub Pages.
- **Estilos**: Tailwind CSS con paleta inspirada en la bandera e identidad coreana (azul marino `#102a43`, carmesí `#dc2626`, oro y jade).
- **Backend as a Service (BaaS)**: **Supabase** para gestión de autenticación, base de datos relacional PostgreSQL y políticas de seguridad a nivel de fila (RLS).
- **Modo Local / Offline Resiliente**: Si el usuario aún no ha configurado sus credenciales de Supabase, la aplicación opera al 100% en modo local con persistencia en `localStorage`, permitiendo configurar la URL y la Anon Key directamente desde la interfaz en cualquier momento.

---

## 3. Estructura Académica Curricular (Niveles 0 a 5)

| Nivel | Denominación | Enfoque Pedagógico | Meta de Examen |
| :--- | :--- | :--- | :--- |
| **Nivel 0** | Fundamentos Absolutos | Historia del Rey Sejong, 14 consonantes básicas, 10 vocales, consonantes dobles, vocales compuestas, bloques silábicos y los 7 sonidos representativos del Batchim (받침). | Alfabetización y fonética |
| **Nivel 1** | Principiante A1 | Presentaciones personales, cópula 이다/아니다, partículas 은/는 vs 이/가, tiempo presente cortés (-아요/어요), números nativos y sino-coreanos, fechas, horas y objeto directo 을/를. | TOPIK I (Nivel 1) |
| **Nivel 2** | Principiante A2 | Pasado (-았/었어요), futuro (-(으)ㄹ 거예요), conectores (-고, -지만, -아서/어서), honoríficos básicos (-(으)시-), deseos (-고 싶다) y obligaciones (-아/어야 하다). | TOPIK I (Nivel 2) |
| **Nivel 3** | Intermedio B1 | Condiciones (-(으)면), causa justificativa (-(으)니까), registros sociolingüísticos (존댓말 vs 반말), lectura de noticias y comprensión auditiva extensa. | TOPIK II (Nivel 3) |
| **Nivel 4** | Intermedio Alto B2 | Discurso indirecto (-(ㄴ/는)다고 하다, -냐고 하다, -(으)라고 하다), voz pasiva y causativa, redacción argumentativa estructurada (Preguntas 51 a 54 de TOPIK II). | TOPIK II (Nivel 4) |
| **Nivel 5** | Avanzado C1-C2 | Modismos clásicos de 4 caracteres (사자성어: 일석이조, 작심삼일, 고진감래, 역지사지), registro formal de debate, literatura coreana y comprensión editorial. | TOPIK II (Niveles 5 y 6) |

---

## 4. La Metodología Pedagógica de 11 Pasos

Cada clase en la academia sigue una estructura rigurosa de 11 etapas consecutivas:
1. **Objetivos de Aprendizaje**: Metas claras y medibles al iniciar.
2. **Explicación Teórica Detallada**: Fundamentación lingüística y notas culturales.
3. **Vocabulario Nuevo**: Términos con Hangul, caracteres Hanja asociados, audio nativo y español.
4. **Gramática Explicada Paso a Paso**: Fórmulas morfológicas, reglas de enlace y precauciones.
5. **Ejemplos en Hangul**: Frases auténticas de uso natural.
6. **Transliteración Romanizada Opcional**: Conmutador (ON/OFF) para facilitar el aprendizaje temprano.
7. **Traducción al Español**: Equivalencias precisas y contextuales.
8. **Ejemplos de Uso Cotidiano**: Diálogos dramatizados entre hablantes nativos.
9. **Ejercicios Interactivos**: Práctica guiada inmediata con retroalimentación explicada.
10. **Evaluación Corta**: Quiz cronometrado de control para medir comprensión.
11. **Resumen y Checklist**: Verificación de dominio conceptual y animación de celebración.

---

## 5. Herramientas Interactivas de Aprendizaje

- **Hangul Lab**: Tabla completa con audio para las 40 letras (consonantes simples y dobles, vocales simples y compuestas). Incluye **Constructor Silábico en tiempo real** (초성 + 중성 + 종성) calculado con el algoritmo Unicode de bloques coreanos.
- **Diccionario Inteligente**: Motor de búsqueda bilingüe con filtros por nivel (0 a 5) y categoría gramatical, caracteres Hanja, pronunciación TTS y favoritos sincronizados en Supabase.
- **Flashcards con SRS**: Sistema de Repetición Espaciada para optimizar la memoria a largo plazo según la curva de olvido, con volteo 3D y contador de vocabulario dominado.
- **Laboratorio Gramatical**: Comparaciones cara a cara entre estructuras frecuentemente confundidas (`은/는` vs `이/가`, `에` vs `에서`, `-아서/어서` vs `-(으)니까`) con ejercicios de autocorrección.
- **Comprensión Auditiva (듣기)**: Diálogos graduados con control de velocidad normal/lenta (0.7x), modo de transcripción oculta, preguntas y módulo de dictado en Hangul.
- **Lectura Graduada (읽기)**: Textos con glosario interactivo, vocabulario focalizado y preguntas de comprensión lectora.
- **Taller de Escritura (쓰기)**: Construcción de oraciones en orden SOV y simulación de redacción para TOPIK II (Preguntas 51, 52 y 53 con rúbricas oficiales).
- **Práctica de Pronunciación**: Reconocimiento de voz en tiempo real (`webkitSpeechRecognition`) con cálculo de similitud fonética (0 a 100%) y sugerencias de articulación.

---

## 6. Centro de Preparación Oficial TOPIK I & II

Simuladores de examen cronometrados con:
- Temporizador oficial en cuenta regresiva.
- Paleta visual de preguntas respondidas, pendientes y marcadas para revisión.
- Audios nativos integrados en cada pregunta de comprensión auditiva.
- **Informe Diagnóstico de Resultados**:
  - Puntuación por sección y puntuación total.
  - Determinación del Nivel Estimado Alcanzado.
  - Porcentaje de aciertos y tiempo invertido.
  - Lista de competencias dominadas y áreas por reforzar.
  - Recomendaciones de estudio personalizadas.

---

## 7. Base de Datos y Seguridad (Supabase RLS)

El archivo `supabase/schema.sql` contiene la definición completa de las 18 tablas:
- `profiles`, `courses`, `levels`, `modules`, `lessons`, `lesson_progress`
- `exercises`, `exercise_attempts`, `vocabulary`, `user_vocabulary`
- `assessments`, `assessment_results`, `topik_simulations`, `topik_answers`
- `study_sessions`, `achievements`, `user_achievements`

### Políticas Row Level Security (RLS)
- El contenido educativo (`courses`, `lessons`, `vocabulary`, `assessments`) tiene lectura pública abierta.
- Todos los datos privados del estudiante (`profiles`, `lesson_progress`, `user_vocabulary`, `topik_simulations`, `assessment_results`) cuentan con directivas estrictas `auth.uid() = user_id`, impidiendo que cualquier usuario acceda a datos ajenos.

---

## 8. Instalación y Despliegue en GitHub Pages

### Desarrollo Local

```bash
# 1. Clonar el repositorio
git clone https://github.com/tu-usuario/korean-academy.git
cd korean-academy

# 2. Instalar dependencias
npm install

# 3. Iniciar servidor de desarrollo
npm run dev
```

### Configuración de Supabase
1. Crea un proyecto gratuito en [Supabase](https://supabase.com).
2. Abre el **SQL Editor** en tu dashboard de Supabase y pega el contenido del archivo `supabase/schema.sql`. Ejecútalo.
3. Copia tu `Project URL` y tu `anon public key` desde *Project Settings > API*.
4. Pega tus claves directamente en la ventana modal de configuración dentro de la aplicación, o en tu archivo `.env`.

### Despliegue Automatizado a GitHub Pages
El proyecto incluye un flujo de trabajo de GitHub Actions preconfigurado en `.github/workflows/deploy.yml`:
1. Sube tu código al repositorio en la rama `main`.
2. En GitHub ve a **Settings > Secrets and variables > Actions** y añade:
   - `VITE_SUPABASE_URL`: Tu Project URL de Supabase.
   - `VITE_SUPABASE_ANON_KEY`: Tu Anon Public Key.
3. Ve a **Settings > Pages > Build and deployment** y selecciona **Source: GitHub Actions**.
4. ¡El despliegue se realizará de forma automática en cada `push`!

---

*Desarrollado con dedicación para la comunidad hispanohablante apasionada por el idioma y la cultura coreana.*
