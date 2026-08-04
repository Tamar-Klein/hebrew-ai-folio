import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";

export type Project = {
  id: string;
  title: string;
  short: string;
  description: string;
  tags: string[];
  image: string;
  videoUrl: string;
  slidesUrl: string;
  githubUrl: string;
  slidesFullUrl: string;
};

export const projects: Project[] = [
  {
    id: "rag-assistant",
    title: "עוזר ידע ארגוני מבוסס RAG",
    short: "מנוע חיפוש סמנטי מעל אלפי מסמכים ארגוניים עם תשובות מעוגנות במקורות.",
    description:
      "מערכת RAG מלאה: אינדוקס מסמכים, חלוקה חכמה לצ'אנקים, אמבדינגס ווקטור-סטור, ושכבת דירוג מחדש (re-ranking) לשיפור הדיוק. הממשק מציג ציטוטים למקור עבור כל תשובה, כולל מדידת הזיות והערכה אוטומטית של איכות התשובות.",
    tags: ["Python", "LangChain", "RAG", "pgvector", "FastAPI"],
    image: project1,
    videoUrl: "https://www.youtube.com/embed/aqz-KE-bpKQ",
    slidesUrl: "https://docs.google.com/presentation/d/e/placeholder/embed",
    githubUrl: "https://github.com",
    slidesFullUrl: "https://docs.google.com/presentation",
  },
  {
    id: "agent-pipeline",
    title: "צוות סוכני AI לאוטומציית תהליכים",
    short: "ארכיטקטורת סוכנים מרובי-שלבים עם כלים, זיכרון ובקרת איכות.",
    description:
      "פלטפורמה לתזמור סוכנים אוטונומיים: תכנון משימות, קריאה לכלים חיצוניים, זיכרון ארוך-טווח ומנגנון ביקורת עצמית. כוללת מעקב מלא (tracing), ניהול עלויות טוקנים ומדיניות fallback בין מודלים.",
    tags: ["LLMs", "Agents", "TypeScript", "Node.js", "OpenAI"],
    image: project2,
    videoUrl: "https://www.youtube.com/embed/aqz-KE-bpKQ",
    slidesUrl: "https://docs.google.com/presentation/d/e/placeholder/embed",
    githubUrl: "https://github.com",
    slidesFullUrl: "https://docs.google.com/presentation",
  },
  {
    id: "vision-qc",
    title: "בקרת איכות בראייה ממוחשבת",
    short: "זיהוי פגמים בזמן אמת בקו ייצור בעזרת מודל ויז'ן מותאם.",
    description:
      "מודל זיהוי אובייקטים שאומן על דאטהסט תעשייתי ייעודי, כולל אוגמנטציות, כיול סף ואופטימיזציה להרצה על הקצה (edge). המערכת מספקת דשבורד ניטור, התראות בזמן אמת ומדדי דיוק מתמשכים.",
    tags: ["PyTorch", "Computer Vision", "ONNX", "Docker"],
    image: project3,
    videoUrl: "https://www.youtube.com/embed/aqz-KE-bpKQ",
    slidesUrl: "https://docs.google.com/presentation/d/e/placeholder/embed",
    githubUrl: "https://github.com",
    slidesFullUrl: "https://docs.google.com/presentation",
  },
  {
    id: "voice-analytics",
    title: "ניתוח שיחות קול בעברית",
    short: "תמלול, סיכום וזיהוי כוונות לשיחות שירות בעברית.",
    description:
      "פייפליין קולי מקצה לקצה: תמלול בעברית, דיאריזציה של דוברים, סיכום אוטומטי וחילוץ כוונות ותובנות עסקיות. התוצרים נשמרים במאגר מובנה ומוזרמים לדשבורד ניהולי לזיהוי מגמות.",
    tags: ["Whisper", "NLP", "React", "Python", "Supabase"],
    image: project4,
    videoUrl: "https://www.youtube.com/embed/aqz-KE-bpKQ",
    slidesUrl: "https://docs.google.com/presentation/d/e/placeholder/embed",
    githubUrl: "https://github.com",
    slidesFullUrl: "https://docs.google.com/presentation",
  },
];
