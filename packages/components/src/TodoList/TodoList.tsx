import { FlatList, StyleSheet, View } from 'react-native';
import type { Todo } from '@monorepo-playground-app/utils';
import { TodoItem } from '../TodoItem/TodoItem';

interface TodoListProps {
  todos: Todo[];
  onToggleTodo: (id: string) => void;
  onDeleteTodo: (id: string) => void;
}

export const TodoList = ({ todos, onToggleTodo, onDeleteTodo }: TodoListProps) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={todos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TodoItem todo={item} onToggle={onToggleTodo} onDelete={onDeleteTodo} />
        )}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listContent: {
    padding: 16,
  },
});
