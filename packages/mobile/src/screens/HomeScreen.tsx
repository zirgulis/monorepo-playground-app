import React from 'react';
import {useCallback, useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {TodoList} from '@monorepo/components';
import {getTodos, toggleTodo, deleteTodo, Todo} from '@monorepo/utils';
import {RootStackNavigationProp} from '../navigation/types';
import {FAB} from '@monorepo/components/src/FAB/FAB';

export const HomeScreen = () => {
  const navigation = useNavigation<RootStackNavigationProp>();
  const [todos, setTodos] = useState<Todo[]>([]);

  const loadTodos = useCallback(async () => {
    const loadedTodos = await getTodos();
    setTodos(loadedTodos);
  }, []);

  useEffect(() => {
    loadTodos();
  }, [loadTodos]);

  const handleToggleTodo = async (id: string) => {
    await toggleTodo(id);
    loadTodos();
  };

  const handleDeleteTodo = async (id: string) => {
    await deleteTodo(id);
    loadTodos();
  };

  return (
    <View style={styles.container}>
      <TodoList
        todos={todos}
        onToggleTodo={handleToggleTodo}
        onDeleteTodo={handleDeleteTodo}
      />
      <FAB onPress={() => navigation.navigate('AddTodo')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
});
