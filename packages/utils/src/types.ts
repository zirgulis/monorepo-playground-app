export interface Todo {
    id: string;
    title: string;
    completed: boolean;
    createdAt: string;
  }
  
  export type TodoInput = Omit<Todo, 'id' | 'createdAt'>; 