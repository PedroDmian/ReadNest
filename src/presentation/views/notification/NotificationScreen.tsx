import { useState } from 'react';
import {
  Text,
  View,
  RefreshControl
} from 'react-native';
import {
  KeyboardAwareScrollView
} from 'react-native-keyboard-aware-scroll-view';

import { INavigationProps } from '../../../domain/models/INavigation';

const NotificationScreen = ({ navigation, route }: INavigationProps) => {
  const [refreshing, setRefreshing] = useState(false);
  
  const onRefresh = async () => {
    setRefreshing(true);

    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  };

  return (
    <KeyboardAwareScrollView
      bounces={true}
      keyboardShouldPersistTaps={'never'}
      contentContainerStyle={{
        flexGrow: 1,
      }}
      showsVerticalScrollIndicator={true}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      <View className='flex-1 justify-center items-center'>
        <Text className='text-dark text-4xl font-monaExtraBold tracking-widest'>
          Notifications Screen
        </Text>
        <Text className='text-dark text-2xl font-mona mt-2'>
          This is the main container screen.
        </Text>
      </View>
    </KeyboardAwareScrollView>
  );
}

export default NotificationScreen;