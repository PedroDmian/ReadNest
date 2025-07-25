import { useRef } from 'react';
import {
  Text,
  View,
  SafeAreaView,
  Animated,
  Image
} from 'react-native';

import { INavigationProps } from '../../../domain/models/INavigation';

import ProfileHeader from '../../components/ProfileHeader';
import Title from '../../components/Title';
import Button from '../../components/Button';

const HEADER_HEIGHT = 370;

const ProfileScreen = ({ navigation, route }: INavigationProps) => {
  const scrollY = useRef(new Animated.Value(0)).current;

  const opacity = scrollY.interpolate({
    inputRange: [0, HEADER_HEIGHT - 100],
    outputRange: [1, 0],
    extrapolate: 'clamp',
  });

  const IMAGES = [
    'https://images.pexels.com/photos/16231430/pexels-photo-16231430.jpeg',
    'https://picsum.photos/id/1025/200/300',
    'https://picsum.photos/id/1035/200/300',
    'https://picsum.photos/id/1045/200/300',
    'https://images.pexels.com/photos/30246590/pexels-photo-30246590.jpeg',
    'https://picsum.photos/id/1065/200/300',
  ];
  
  return (
    <View className='flex-1 bg-dark justify-start w-full'>
      <ProfileHeader
        opacity={opacity}
        image={'https://images.pexels.com/photos/16231430/pexels-photo-16231430.jpeg'}
      />
      
      <Animated.ScrollView
        bounces={false}
        showsVerticalScrollIndicator={false}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: true }
        )}
        scrollEventThrottle={16}
        contentContainerStyle={{ paddingTop: HEADER_HEIGHT }}
      >
        <SafeAreaView className='w-full flex-1 z-10 bg-white rounded-t-[9vw] min-h-[500px]'>
          <View className='w-full px-4 pt-4 pb-28'>

            <Title
              title={`Damian Palomo`}
              subtitle={`@Damian.palomo`}
              classStyle={{
                classNameTitle: 'text-dark text-4xl font-mona text-center',
                classNameSubtitle: 'text-dark text-lg font-mona text-center font-monaLight'
              }}
            />

            <View className='justify-center'>
              <Button 
                title='Follow'     
                onPress={() => console.log('Follow users')}
                styleType='border'
                classNameTouch={'border border-silver rounded-full px-10 py-2 my-5 mx-auto text-silver'}
              />
            </View>

            <View className='mx-10'>
              <Text className='text-dark text-base font-monaLight text-justify'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus rem saepe odit sed, accusantium dignissimos.
              </Text>

              <View className='flex-row items-center justify-between mt-5'>
                <View>
                  <Text className='text-dark text-2xl font-monaMedium text-center'>100</Text>
                  <Text className='text-dark text-base font-monaLight text-center'>Followers</Text>
                </View>
                <View>
                  <Text className='text-dark text-2xl font-monaMedium text-center'>50 K</Text>
                  <Text className='text-dark text-base font-monaLight text-center'>Following</Text>
                </View>
                <View>
                  <Text className='text-dark text-2xl font-monaMedium text-center'>30</Text>
                  <Text className='text-dark text-base font-monaLight text-center'>Posts</Text>
                </View>
              </View>
            </View>

            <View>
              <View className='mt-5'>
                <Title
                  title={`Gallery`}
                  classStyle={{
                    classNameTitle: 'text-dark text-lg font-mona text-center font-monaLight mb-5'
                  }}
                />

                <View className="flex-row flex-wrap justify-between px-5">
                  {
                    IMAGES.map((item, index) => (
                      <Image
                        key={index}
                        source={{ uri: item }}
                        resizeMode="cover"
                        className='rounded-xl mb-3'
                        style={{
                          width: '48.5%',
                          height: 200,
                          borderRadius: 12
                        }}
                      />
                    ))
                  }
                </View>
              </View>
            </View>

          </View>
        </SafeAreaView>
      </Animated.ScrollView>
    </View>
  );
}

export default ProfileScreen;