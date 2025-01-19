import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from './navigation/types';
import { HomeScreen } from './screens/HomeScreen';
import { AddTodoScreen } from './screens/AddTodoScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Todo List' }} />
        <Stack.Screen name="AddTodo" component={AddTodoScreen} options={{ title: 'Add Todo' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
