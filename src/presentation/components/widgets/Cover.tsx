import {
  Image,
  TouchableOpacity,
  View
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Animated from 'react-native-reanimated';

import { ICoverProps } from '../../../domain/models/shared/ICover';

const Cover = ({
  id,
  image,
  title,
  subtitle,
  rating,
  classStyle,
  onPress,
  onPressFavorite
}: ICoverProps) => {
  return (
    <View className='
      rounded-lg
      relative
      mr-3
      w-48
      overflow-hidden
    '
    style={{
      height: 250
    }}
    >
      <TouchableOpacity 
        activeOpacity={1}
        onPress={() => onPress && onPress(id)}
      >
        <Animated.Image
          source={{ uri: image }}
          className={`w-full h-full ${classStyle?.classNameImage || ''}`} 
          resizeMode={'stretch'}
          sharedTransitionTag={`cover-image-${id}`}
        />

        <View className={`absolute top-0 right-0`}>
          <TouchableOpacity 
            activeOpacity={0.8}
            onPress={() => onPressFavorite && onPressFavorite(id)}
          >
            <Icon
              name='heart'
              size={25}
              color={`white`}
              className='p-2'
            />
          </TouchableOpacity>
        </View>

      </TouchableOpacity>
    </View>
  );
}

export default Cover;