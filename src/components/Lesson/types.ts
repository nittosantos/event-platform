export interface LessonProps {
  title: string;
  slug: string;
  availableAt: Date;
  type: "class" | "live";
}