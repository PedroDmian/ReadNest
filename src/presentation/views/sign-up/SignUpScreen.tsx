import { StackScreenProps } from '@react-navigation/stack';
import {
  View,
  Image,
  Text,
  SafeAreaView
} from 'react-native';

import { RootStackParamsList } from '../../../../App';

import Button from '../../components/Button';

interface Props extends StackScreenProps<RootStackParamsList, 'SignUpScreen'> { }

const SignUpScreen = ({ navigation, route }: Props) => {
  return (
    <View className='flex-1 relative bg-white'>
      <Image
        source={require('../../../assets/icons/waves-opacity.png')}
        className='w-full absolute top-0 left-0 right-0 h-250 z-10'
        resizeMode='stretch'
      />

      <View className='flex-1 px-6 flex justify-center items-center bg-salt'>
        <SafeAreaView className='flex-1 w-full flex justify-center items-center relative z-20'>
          <View className='w-full'>
            <Image
              source={require('../../../assets/images/people-book-read.png')}
              className='w-full h-64'
              resizeMode='contain'
            />

            <Text className='text-dark text-4xl font-monaExtraBold tracking-widest mt-10 text-left w-full'>
              Welcome,
            </Text>
            <Text className='text-dark text-2xl font-mona mt-2 text-left w-full'>
              You have been missed!
            </Text>
          </View>

          <View className='w-full mt-10'>
            <Button title='Sign In' onPress={() => console.log('Sign In Pressed')} />

            <Text className='text-silver text-center font-monaMedium mt-5 mb-5 tracking-wide text-xl tracking-widest'>
              or
            </Text>

            <View className='flex w-full justify-between items-center'>
              <View className='mb-10 w-full'>
                <View className='mb-5'>
                  <Button 
                    title='Continue with Google' 
                    icon={<Image 
                      source={require('../../../assets/icons/google.png')} className='w-6 h-6'
                      resizeMode='contain'
                    />}
                    onPress={() => console.log('Sign In Pressed')}
                    style='light'
                  />
                </View>
                
                <View className='mb-5'>
                  <Button 
                    title='Continue with Apple' 
                    icon={<Image 
                      source={require('../../../assets/icons/apple.png')} className='w-6 h-6' 
                      resizeMode='contain'
                    />}
                    onPress={() => console.log('Sign In Pressed')}
                    style='light'
                  />
                </View>

              </View>

              <View>
                <View className='flex flex-row justify-center items-center gap-4 mt-5'>
                  <Text>Don't have account?</Text>
                  <Button
                    title='Register' 
                    onPress={() => navigation.navigate('HomeScreen')}
                    style='link'
                  />
                </View>
              </View>
            </View>
          </View>
        </SafeAreaView>
      </View>

      <Image
        source={require('../../../assets/icons/waves-yellow.png')}
        className='w-full absolute -bottom-10 left-0 right-0 h-250 z-10 rotate-180'
        resizeMode='stretch'
      />
    </View>
  );
}

export default SignUpScreen;