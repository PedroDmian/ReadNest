import './src/assets/styles/global.css';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// ? Screens Pages
import SignUpScreen from './src/presentation/views/sign-up/SignUpScreen';
import HomeScreen from './src/presentation/views/home/HomeScreen';
import ProfileScreen from './src/presentation/views/profile/ProfileScreen';

export type RootStackParamsList = {
  SignUpScreen: undefined;
  LoginScreen: undefined;
  HomeScreen: undefined;
  ProfileScreen: undefined;
};

// ? Navigation
const Stack = createNativeStackNavigator<RootStackParamsList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}