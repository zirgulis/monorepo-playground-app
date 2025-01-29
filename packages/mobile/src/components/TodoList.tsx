import React from 'react';
import {FlatList, StyleSheet, View, Text, TouchableOpacity} from 'react-native';

interface Todo {
  id: string;
  title: string;
  completed: boolean;
}

interface TodoListProps {
  todos: Todo[];
  onToggleTodo: (id: string) => void;
  onDeleteTodo: (id: string) => void;
}

const TodoItem = ({
  todo,
  onToggle,
  onDelete,
}: {
  todo: Todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}) => (
  <View style={styles.todoItem}>
    <TouchableOpacity
      style={[styles.checkbox, todo.completed && styles.checked]}
      onPress={() => onToggle(todo.id)}
    />
    <Text style={[styles.title, todo.completed && styles.completedTitle]}>
      {todo.title}
    </Text>
    <TouchableOpacity onPress={() => onDelete(todo.id)}>
      <Text style={styles.deleteButton}>×</Text>
    </TouchableOpacity>
  </View>
);

export const TodoList = ({
  todos,
  onToggleTodo,
  onDeleteTodo,
}: TodoListProps) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={todos}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <TodoItem
            todo={item}
            onToggle={onToggleTodo}
            onDelete={onDeleteTodo}
          />
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
  todoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 12,
    borderRadius: 8,
    marginBottom: 8,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#007AFF',
    marginRight: 12,
  },
  checked: {
    backgroundColor: '#007AFF',
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
    fontSize: 24,
    color: '#FF3B30',
    marginLeft: 12,
  },
});
