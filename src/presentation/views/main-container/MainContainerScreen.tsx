import { useState } from 'react';
import {
  Dimensions,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  runOnJS,
} from "react-native-reanimated";

// ? Navigation Root
import { RootStackParamsList } from '../../../../App';

// ? Component
import NavBar from '../../components/Navbar';

// ? Screen Primary Imports
import HomeScreen from '../home/HomeScreen';
import NotificationScreen from '../notification/NotificationScreen';
import FavoritesScreen from '../favorite/FavoriteScreen';
import ProfileScreen from '../profile/ProfileScreen';

const {
  width,
  height
} = Dimensions.get("window");

interface Props extends StackScreenProps<RootStackParamsList, 'MainContainerScreen'> {}

const MainContainerScreen = ({ navigation, route }: Props) => {
  const pageDefault = route.params?.['pageDefault'];
  const [currentScreen, setCurrentScreen] = useState<string>(pageDefault || 'HomeScreen');
  const [nextScreen, setNextScreen] = useState("HomeScreen");

  const scale = useSharedValue(0);
  const [animating, setAnimating] = useState(false);

  const circleStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scale.value }],
    };
  });

  const changeScreen = (target: string) => {
    if (animating || target === currentScreen) return;

    setAnimating(true);
    setNextScreen(target);

    scale.value = withTiming(10, { duration: 300 }, () => {
      runOnJS(setCurrentScreen)(target);

      scale.value = withTiming(0, { duration: 300 }, () => {
        runOnJS(setAnimating)(false);
      });
    });
  };
  
  const renderScreen = () => {
    switch (currentScreen) {
      case 'HomeScreen':
        return (
          <>
            <HomeScreen navigation={navigation} route={route} />
          </>
        );
      case 'NotificationsScreen':
        return (
          <>
            <NotificationScreen navigation={navigation} route={route} />
          </>
        );
      case 'FavoritesScreen':
        return (
          <>
            <FavoritesScreen navigation={navigation} route={route} />
          </>
        );
      case 'ProfileScreen':
        return (
          <>
            <ProfileScreen navigation={navigation} route={route} />
          </>
        );
      default:
        return null;
    }
  };

  const SafeAreaViewRender = ({ children }: { children: React.ReactNode }) => {
    const contentViewSafeAreaActive = {
      HomeScreen: true,
      NotificationsScreen: true,
      FavoritesScreen: true,
      ProfileScreen: false,
    };

    const isSafeAreaActive = contentViewSafeAreaActive[currentScreen as keyof typeof contentViewSafeAreaActive];

    if (!isSafeAreaActive) {
      return <View className='flex-1'>{children}</View>;
    }

    return <SafeAreaView className='flex-1 mx-4'>{children}</SafeAreaView>;
  }

  return (
    <View className='flex-1 bg-salt relative'>
      <Image
        source={require('../../../assets/icons/waves-opacity-black.png')}
        className='w-full absolute top-0 left-0 right-0 h-250 z-1 opacity-15'
        resizeMode='stretch'
      />

      <SafeAreaViewRender>
        { renderScreen() }
      </SafeAreaViewRender>

      {animating && (
        <Animated.View style={[
          styles.circle,
          circleStyle
        ]} className='bg-eerie'>
          <View className='flex-1 justify-center items-center'>
            <Image
              source={require("../../../assets/images/book.gif")}
              className='w-7 h-7'
              resizeMode="contain"
            />
          </View>
        </Animated.View>
      )}
      
      <NavBar
        currentScreen={currentScreen}
        setCurrentScreen={changeScreen}
      />
    </View>
  );
}

const CIRCLE_SIZE = Math.sqrt(width ** 2 + height ** 2) * 2;

const styles = StyleSheet.create({
  circle: {
    position: "absolute",
    width: CIRCLE_SIZE,
    height: CIRCLE_SIZE,
    borderRadius: CIRCLE_SIZE / 2,
    top: height / 2 - CIRCLE_SIZE / 2,
    left: width / 2 - CIRCLE_SIZE / 2,
    zIndex: 19,
  },
});

export default MainContainerScreen;