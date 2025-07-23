import './src/assets/styles/global.css';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { enableScreens } from 'react-native-screens';

// ? Screens Pages
import SignUpScreen from './src/presentation/views/sign-up/SignUpScreen';
import MainContainerScreen from './src/presentation/views/main-container/MainContainerScreen';
import BookScreen from './src/presentation/views/book/BookScreen';
import BookChaptersScreen from './src/presentation/views/book/BookChaptersScreen';
import ChapterScreen from './src/presentation/views/book/ChapterScreen';

import {
  IBook,
  IChapter
} from './src/domain/models/IBook';

export type RootStackParamsList = {
  SignUpScreen: undefined;
  LoginScreen: undefined;
  MainContainerScreen: undefined;
  BookScreen: { id: string } | undefined;
  BookChaptersScreen: IBook | undefined;
  ChapterScreen: IChapter | undefined;
};

enableScreens(true);

// ? Navigation
const Stack = createNativeStackNavigator<RootStackParamsList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
        <Stack.Screen name="MainContainerScreen" component={MainContainerScreen} />
        <Stack.Screen 
          name="BookScreen" 
          component={BookScreen}
          options={{
            headerShown: false,
            presentation: 'transparentModal',
            animation: 'fade',
          }}
        />
        <Stack.Screen 
          name="BookChaptersScreen" 
          component={BookChaptersScreen}
          options={{
            headerShown: false,
            presentation: 'transparentModal',
            animation: 'fade',
          }}
        />
        <Stack.Screen 
          name="ChapterScreen" 
          component={ChapterScreen}
          options={{
            headerShown: false,
            presentation: 'transparentModal',
            animation: 'fade',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}