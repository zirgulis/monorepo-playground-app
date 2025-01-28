import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {RootStackParamList} from './src/navigation/types';
import {HomeScreen} from '@monorepo/mobile/src/screens/HomeScreen';
import {AddTodoScreen} from '@monorepo/mobile/src/screens/AddTodoScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{title: 'Todo List'}}
          />
          <Stack.Screen
            name="AddTodo"
            component={AddTodoScreen}
            options={{title: 'Add Todo'}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};
