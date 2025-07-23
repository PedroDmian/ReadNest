import {
  Text,
  View,
  SafeAreaView
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import IconFontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import { INavigationProps } from '../../../domain/models/INavigation';
import { IBook } from '../../../domain/models/IBook';

import CoverHeader from '../../components/widgets/CoverHeader';
import Button from '../../components/Button';
import BookChapters from '../../components/modules/BookChapters';

const BookChaptersScreen = ({ navigation, route }: INavigationProps) => {
  const {
      id,
      image,
      title,
      description,
      history,
      author,
      progress = 0,
    } = route.params as IBook;
    
  return (
    <View className='flex-1 bg-dark justify-start w-full'>
      <KeyboardAwareScrollView
        bounces={false}
        keyboardShouldPersistTaps={'never'}
        contentContainerStyle={{ flexGrow: 1, width: '100%' }}
        showsVerticalScrollIndicator={false}
      >
        <Button
          icon={<IconFontAwesome5 name='chevron-left' size={25} color={'white'}/>}
          onPress={() => navigation.goBack()}
          styleType={'trasparent'}
          classNameTouch='absolute top-[50px] left-5 z-10 px-2 py-1'
        ></Button>

        <CoverHeader 
          id={id} 
          image={image}
          classStyle={{
            classNameContainer: 'h-1/4',
          }}
        />
        
        <SafeAreaView className='w-full h-full flex-1'>
          <BookChapters 
            title={title}
            description={description}
            history={history}
            author={author}
            image={image}
            id={id}
            onPressRead={(id) => navigation.navigate('ChapterScreen', {
                id,
              })
            }
          />
        </SafeAreaView>
      </KeyboardAwareScrollView>
    </View>
  );
}

export default BookChaptersScreen;