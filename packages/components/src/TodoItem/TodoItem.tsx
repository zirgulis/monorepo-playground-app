import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import type { Todo } from '@monorepo-playground-app/utils';

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

export const TodoItem = ({ todo, onToggle, onDelete }: TodoItemProps) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.toggleButton} onPress={() => onToggle(todo.id)}>
        <Text style={[styles.checkbox, todo.completed && styles.checked]}>
          {todo.completed ? '✓' : ''}
        </Text>
      </TouchableOpacity>

      <Text style={[styles.title, todo.completed && styles.completedTitle]}>{todo.title}</Text>

      <TouchableOpacity style={styles.deleteButton} onPress={() => onDelete(todo.id)}>
        <Text style={styles.deleteText}>×</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 8,
    marginVertical: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  toggleButton: {
    marginRight: 10,
  },
  checkbox: {
    width: 24,
    height: 24,
    borderWidth: 2,
    borderColor: '#007AFF',
    borderRadius: 12,
    textAlign: 'center',
    lineHeight: 22,
    color: '#007AFF',
  },
  checked: {
    backgroundColor: '#007AFF',
    color: '#fff',
  },
  title: {
    flex: 1,
    fontSize: 16,
  },
  completedTitle: {
    textDecorationLine: 'line-through',
    color: '#999',
  },
  deleteButton: {
    padding: 5,
  },
  deleteText: {
    fontSize: 24,
    color: '#FF3B30',
    fontWeight: 'bold',
  },
});
