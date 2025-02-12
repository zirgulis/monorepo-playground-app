import React, {useState} from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {addTodo} from '@monorepo/utils';
import {RootStackNavigationProp} from '../navigation/types';
import {Button} from '@monorepo/components';

export const AddTodoScreen = () => {
  const navigation = useNavigation<RootStackNavigationProp>();
  const [title, setTitle] = useState('');

  const handleSubmit = async () => {
    if (title.trim()) {
      await addTodo({title: title.trim(), completed: false});
      navigation.goBack();
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={title}
        onChangeText={setTitle}
        placeholder="Enter todo title"
        autoFocus
      />
      <Button
        title="Add Todo"
        onPress={handleSubmit}
        disabled={!title.trim()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  input: {
    height: 48,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    paddingHorizontal: 16,
    marginBottom: 16,
    fontSize: 16,
  },
});
