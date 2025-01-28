import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type RootStackParamList = {
  Home: undefined;
  AddTodo: undefined;
};

export type RootStackNavigationProp = NativeStackNavigationProp<RootStackParamList>; 