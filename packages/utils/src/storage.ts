import AsyncStorage from '@react-native-async-storage/async-storage';
import { Todo, TodoInput } from '@monorepo/utils';

const TODO_STORAGE_KEY = '@todo-app/todos';

export const getTodos = async (): Promise<Todo[]> => {
  try {
    const todosJson = await AsyncStorage.getItem(TODO_STORAGE_KEY);
    return todosJson ? JSON.parse(todosJson) : [];
  } catch (error) {
    console.error('Error getting todos:', error);
    return [];
  }
};

export const addTodo = async (todoInput: TodoInput): Promise<Todo> => {
  try {
    const todos = await getTodos();
    const newTodo: Todo = {
      ...todoInput,
      id: Date.now().toString(),
      createdAt: new Date().toISOString(),
    };
    
    await AsyncStorage.setItem(TODO_STORAGE_KEY, JSON.stringify([...todos, newTodo]));
    return newTodo;
  } catch (error) {
    console.error('Error adding todo:', error);
    throw error;
  }
};

export const toggleTodo = async (id: string): Promise<void> => {
  try {
    const todos = await getTodos();
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    
    await AsyncStorage.setItem(TODO_STORAGE_KEY, JSON.stringify(updatedTodos));
  } catch (error) {
    console.error('Error toggling todo:', error);
    throw error;
  }
};

export const deleteTodo = async (id: string): Promise<void> => {
  try {
    const todos = await getTodos();
    const filteredTodos = todos.filter((todo) => todo.id !== id);
    
    await AsyncStorage.setItem(TODO_STORAGE_KEY, JSON.stringify(filteredTodos));
  } catch (error) {
    console.error('Error deleting todo:', error);
    throw error;
  }
}; 