import create from 'zustand'
import { persist } from 'zustand/middleware';
import { Todo } from '../types';
const TODOS = 'TODOS'

interface TodoState {
  todos: Todo[];
  completedTodos: Todo[];
  addTodo: (todo: Todo) => void;
  completeTodo: (todo: Todo) => void;
  clearAll: () => void;
  filterWords: string[];
  setFilterWord: (filterWord: string) => void;
}

export const useTodos = create(
  persist<TodoState>(
    (set) => ({
      todos: [],
      completedTodos: [],
      completeTodo: (todo: Todo) =>
        set((state) => ({
          ...state,
          todos: [...state.todos.filter((item) => item.id !== todo.id)],
          completedTodos: [
            { ...todo, completed: true },
            ...state.completedTodos,
          ],
        })),
      addTodo: (todo: Todo) =>
        set((state) => ({ ...state, todos: [{ ...todo }, ...state.todos] })),
      clearAll: () =>
        set((state) => ({ ...state, todos: [], completedTodos: [] })),
      filterWords: [],
      setFilterWord: (word: string) =>
        set((state) => ({
          ...state,
          filterWords: state.filterWords.includes(word)
            ? [...state.filterWords.filter((item) => item !== word)]
            : [...state.filterWords, word],
        })),
    }),
    {
      name: TODOS,
    }
  )
);
