import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { StyleSheet } from 'react-native';
import { RootStackParamList } from './navigation/types';
import { HomeScreen } from './screens/HomeScreen';
import { AddTodoScreen } from './screens/AddTodoScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const App = () => {
  return (
    <GestureHandlerRootView style={styles.root}>
      <SafeAreaProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Todo List' }} />
            <Stack.Screen
              name="AddTodo"
              component={AddTodoScreen}
              options={{ title: 'Add Todo' }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});
