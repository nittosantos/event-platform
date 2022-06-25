export interface GetLessonsQueryResponse {
  lesson: {
    id: string;
    title: string;
    slug: string;
    availableAt: string;
    lessonType: "class" | "live";
  }[]
}