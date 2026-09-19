import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";
import project5 from "@/assets/project-5.jpg";

export type Project = {
  id: string;
  title: string;
  short: string;
  description: string;
  tags: string[];
  image: string;
  featured?: boolean;
  videoUrl: string;
  slidesUrl: string;
  githubUrl: string;
  slidesFullUrl: string;
};

export const projects: Project[] = [
  {
    id: "geo-radar",
    title: "GEO RADAR - מקום 1 בהאקתון AI",
    short:
      "פלטפורמה לזיהוי ואופטימיזציה של נוכחות מותג במודלי שפה (LLM as a Judge).",
    description:
      "פלטפורמה לזיהוי ואופטימיזציה של נוכחות מותג במודלי שפה (LLM as a Judge). המערכת מבצעת הנדסה לאחור לתהליך החשיבה של Claude, Gemini ו-ChatGPT. הפרויקט כולל מנגנון דטרמיניסטי מבוסס Python למניעת הזיות (Hallucinations) והפקת תוכנית פעולה אופרטיבית להנדסת תוכן.",
    tags: ["Claude API", "Python", "AI Evaluation", "Data Analytics"],
    image: project1,
    featured: true,
    videoUrl: "/videos/geo-radar-demo.mp4",
    slidesUrl: "/slides/geo/index.html",
    githubUrl: "https://github.com/Tamar-Klein/Hackathon-Geo-Radar",
    slidesFullUrl:  "/slides/geo/index.html",
  },
  {
    id: "event-driven-rag",
    title: "מערכת ידע אסטרטגית - Event-Driven RAG",
    short:
      "מערכת RAG מבוססת LlamaIndex לאינדוקס וניתוח קבצי תצורה עם חיפוש סמנטי מתקדם.",
    description:
      "פיתוח מערכת RAG מורכבת מבוססת LlamaIndex לאינדוקס וניתוח קבצי תצורה. כולל חיפוש סמנטי (Pinecone & Cohere), חילוץ נתונים מובנים (Structured Data Extraction) ומנגנון Routing מתקדם להבחנה בין שליפה סמנטית לשאילתות לוגיות.",
    tags: ["LlamaIndex", "Pinecone", "Cohere", "RAG", "Python"],
    image: project2,
    featured: true,
    videoUrl: "/videos/rag-demo.mp4",
    slidesUrl: "/slides/rag_presentation.html",
    githubUrl: "https://github.com/Tamar-Klein/-RAG-with-LlamaIndex---Project",
    slidesFullUrl: "/slides/rag_presentation.html",
  },
  {
    id: "mcp-browser-agent",
    title: "סוכן דפדפן אוטונומי - MCP Browser Agent",
    short: "שרת MCP המעניק למודלי שפה שליטה בדפדפן לחילוץ נתונים בזמן אמת.",
    description:
      "שרת MCP מתקדם המעניק למודלי שפה יכולות שליטה בדפדפן (Playwright) לחילוץ נתונים מורכבים בזמן אמת, כולל יכולות RAG פנימיות להעשרת הקונטקסט, ללא התערבות משתמש.",
    tags: ["MCP SDK", "Playwright", "Anthropic API", "Automation"],
    image: project3,
    featured: true,
    videoUrl:  "/videos/mcp-demo.mp4",
    slidesUrl: "/slides/mcp-presentation.html",
    githubUrl: "https://github.com/Tamar-Klein/MCP-Playwright-Weather",
    slidesFullUrl: "/slides/mcp-presentation.html",
  },
  {
    id: "prompt-lab",
    title: "מעבדת מחקר - Prompt Engineering",
    short: "סביבת מחקר להמרת שפה טבעית לפקודות מערכת (CLI) עם מטריקות הערכה.",
    description:
      "סביבת מחקר מתקדמת להמרת שפה טבעית לפקודות מערכת (CLI). הפרויקט מציג מתודולוגיה איטרטיבית לשיפור פרומפטים, ניהול מקרי קצה, בניית מטריקות הערכה (LLM Evaluation) והרצת קוד ב-Sandbox מאובטח.",
    tags: ["Prompt Engineering", "Gradio", "Testing", "Docker"],
    image: project4,
    videoUrl: "/videos/prompt-demo.mp4",
    slidesUrl: "/slides/prompt-engineering-presentation.html",
    githubUrl: "https://github.com/Tamar-Klein/Prompt-Engineering--Poject",
    slidesFullUrl:  "/slides/prompt-engineering-presentation.html",
  },
  {
    id: "task-agent",
    title: "Task Management AI Agent",
    short: "בוט חכם לניהול משימות המנתח שפה טבעית ומפעיל פונקציות מערכת.",
    description:
      "בוט חכם לניהול משימות המנתח שפה טבעית ומפעיל פונקציות מערכת (Function Calling) לשליפה, עדכון ומחיקת משימות תוך ניהול תורים וקבלת החלטות עצמאית.",
    tags: ["FastAPI", "OpenAI API", "React", "Agentic Workflow"],
    image: project5,
    videoUrl: "https://www.youtube.com/embed/aqz-KE-bpKQ",
    slidesUrl: "https://docs.google.com/presentation/d/e/placeholder/embed",
    githubUrl: "https://github.com/Tamar-Klein/Function-calling---project",
    slidesFullUrl: "https://docs.google.com/presentation",
  },
];
