import React, { useState, useRef } from 'react';
import {
  Image,
  TouchableOpacity,
  View,
  Dimensions
} from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';

const { width } = Dimensions.get('window');

const TAB_WIDTH = width / 5;

interface Props {
  currentScreen: string;
  setCurrentScreen: (value: string) => void;
}

const NavBar = ({ currentScreen, setCurrentScreen }: Props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const circleX = useSharedValue(TAB_WIDTH / 2);
  const circleOpacity = useSharedValue(1);

  const animatedCircleStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: withTiming(circleX.value - 7, { duration: 300 }) }],
      opacity: withTiming(circleOpacity.value, { duration: 300 }),
    };
  });

  const onPress = (index: number, screen: string) => {
    setActiveIndex(index);

    circleX.value = TAB_WIDTH * index + TAB_WIDTH / 2;
    circleOpacity.value = index === 3 ? 0 : 1;

    setCurrentScreen(screen);
  };

  return (
    <View className='absolute bottom-8 left-0 right-0 z-20 bg-dark flex-row justify-between items-center px-10 py-0 mx-4 rounded-full'>
      <TouchableOpacity activeOpacity={0.9} key={0} onPress={() => onPress(0, 'HomeScreen')} className="justify-center items-center rounded-full p-3">
        <Image
          source={require("../../assets/icons/home.png")}
          className="w-7 h-7"
        />
      </TouchableOpacity>

      <TouchableOpacity activeOpacity={0.9} key={1} onPress={() => onPress(1, 'NotificationsScreen')} className="justify-center items-center p-3">
        <Image
          source={require("../../assets/icons/notifications.png")}
          className="w-7 h-7"
        />

      </TouchableOpacity>
      
      <TouchableOpacity activeOpacity={0.9} key={2} onPress={() => onPress(2, 'FavoritesScreen')} className="justify-center items-center p-3">
        <Image
          source={require("../../assets/icons/favorite.png")}
          className="w-7 h-7"
        />
      </TouchableOpacity>

      <TouchableOpacity activeOpacity={0.9} key={3} onPress={() => onPress(3, 'ProfileScreen')} className="justify-center items-center p-3">
        <Image
          source={{
            uri: 'https://images.pexels.com/photos/16231430/pexels-photo-16231430.jpeg'
          }}
          className="w-14 h-14 rounded-full"
          resizeMode='cover'
        />
      </TouchableOpacity>

      <Animated.View
        className="active-nav absolute"
        style={[
          {
            width: 45,
            height: 45,
            zIndex: -1,
          },
          animatedCircleStyle,
        ]}
      />
    </View>
  );
}

export default NavBar;