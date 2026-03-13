import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface LessonProgress {
  currentSection: number;
  completedSections: number[];
  completed: boolean;
  lastAccessedAt: string;
}

interface ProgressState {
  lessons: Record<string, LessonProgress>;
  viewedCharacters: string[];

  getLessonProgress: (lessonId: string) => LessonProgress | undefined;
  updateSectionProgress: (lessonId: string, sectionIndex: number) => void;
  markSectionComplete: (lessonId: string, sectionIndex: number) => void;
  markLessonComplete: (lessonId: string) => void;
  resetLessonProgress: (lessonId: string) => void;
  getCompletedLessons: () => string[];
  getCompletedSectionCount: (lessonId: string) => number;
  addViewedCharacter: (characterId: string) => void;
  getTotalStats: () => {
    lessonsCompleted: number;
    sectionsCompleted: number;
    charactersViewed: number;
  };
}

export const useProgressStore = create<ProgressState>()(
  persist(
    (set, get) => ({
      lessons: {},
      viewedCharacters: [],

      getLessonProgress: (lessonId) => get().lessons[lessonId],

      updateSectionProgress: (lessonId, sectionIndex) => {
        set((state) => ({
          lessons: {
            ...state.lessons,
            [lessonId]: {
              currentSection: sectionIndex,
              completedSections:
                state.lessons[lessonId]?.completedSections || [],
              completed: state.lessons[lessonId]?.completed || false,
              lastAccessedAt: new Date().toISOString(),
            },
          },
        }));
      },

      markSectionComplete: (lessonId, sectionIndex) => {
        set((state) => {
          const existing = state.lessons[lessonId];
          const completedSections = existing?.completedSections
            ? [...existing.completedSections]
            : [];
          if (!completedSections.includes(sectionIndex)) {
            completedSections.push(sectionIndex);
          }
          return {
            lessons: {
              ...state.lessons,
              [lessonId]: {
                currentSection: existing?.currentSection || sectionIndex,
                completedSections,
                completed: existing?.completed || false,
                lastAccessedAt: new Date().toISOString(),
              },
            },
          };
        });
      },

      markLessonComplete: (lessonId) => {
        set((state) => ({
          lessons: {
            ...state.lessons,
            [lessonId]: {
              ...state.lessons[lessonId],
              completed: true,
              lastAccessedAt: new Date().toISOString(),
            },
          },
        }));
      },

      resetLessonProgress: (lessonId) => {
        set((state) => {
          const { [lessonId]: _, ...rest } = state.lessons;
          void _;
          return { lessons: rest };
        });
      },

      getCompletedLessons: () => {
        return Object.entries(get().lessons)
          .filter(([, p]) => p.completed)
          .map(([id]) => id);
      },

      getCompletedSectionCount: (lessonId) => {
        return get().lessons[lessonId]?.completedSections?.length || 0;
      },

      addViewedCharacter: (characterId) => {
        set((state) => {
          if (state.viewedCharacters.includes(characterId)) return state;
          return {
            viewedCharacters: [...state.viewedCharacters, characterId],
          };
        });
      },

      getTotalStats: () => {
        const state = get();
        const lessonsCompleted = Object.values(state.lessons).filter(
          (l) => l.completed
        ).length;
        const sectionsCompleted = Object.values(state.lessons).reduce(
          (sum, l) => sum + (l.completedSections?.length || 0),
          0
        );
        return {
          lessonsCompleted,
          sectionsCompleted,
          charactersViewed: state.viewedCharacters.length,
        };
      },
    }),
    {
      name: 'fungus-progress',
    }
  )
);
