import axios from 'axios';

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:8000',
  headers: { 'Content-Type': 'application/json' },
});

export interface CharacterSummary {
  id: string;
  name: string;
  species: string;
  kingdom: 'fungi' | 'bacteria' | 'insects';
  alignment: 'hero' | 'villain' | 'complex';
  personality: string;
  teaches: string[];
  image: string;
  video: string | null;
  color: string;
}

export interface CharacterFull extends CharacterSummary {
  backstory: string;
  relationships: Array<{ character: string; type: string }>;
}

export interface LessonMeta {
  id: string;
  title: string;
  track: string;
  description: string;
  duration: string;
  sectionCount: number;
}

export interface LessonSection {
  type: string;
  content: any;
}

export interface LessonFull {
  id: string;
  title: string;
  track: string;
  description: string;
  duration: string;
  sections: LessonSection[];
}

export interface Track {
  id: string;
  title: string;
  lessons: LessonMeta[];
}

export const characterApi = {
  list: async (kingdom?: string, alignment?: string): Promise<CharacterSummary[]> => {
    const params: Record<string, string> = {};
    if (kingdom) params.kingdom = kingdom;
    if (alignment) params.alignment = alignment;
    const res = await apiClient.get('/api/characters', { params });
    return res.data;
  },
  get: async (id: string): Promise<CharacterFull> => {
    const res = await apiClient.get(`/api/characters/${id}`);
    return res.data;
  },
};

export const curriculumApi = {
  listLessons: async (): Promise<LessonMeta[]> => {
    const res = await apiClient.get('/api/curriculum/lessons');
    return res.data;
  },
  getLesson: async (id: string): Promise<LessonFull> => {
    const res = await apiClient.get(`/api/curriculum/lessons/${id}`);
    return res.data;
  },
  getTracks: async (): Promise<Track[]> => {
    const res = await apiClient.get('/api/curriculum/tracks');
    return res.data;
  },
};
