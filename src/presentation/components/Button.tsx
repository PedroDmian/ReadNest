import {
  Text,
  TouchableOpacity,
  View
} from "react-native";

interface Props {
  title: string;
  icon?: any;
  onPress: () => void;
  style?: 'dark' | 'light' | 'primary' | 'secondary' | 'danger' | 'success' | 'warning' | 'info' | 'link' | 'disabled';
}

const Button = ({
  title,
  icon,
  onPress,
  style
}: Props) => {
  const buttonStyles = {
    dark: {
      touch: 'py-5 px-5 bg-dark',
      text: 'text-white'
    },
    light: {
      touch: 'py-5 px-5 bg-white',
      text: 'text-dark'
    },
    primary: {
      touch: 'py-5 px-5 bg-blue-500',
      text: 'text-white'
    },
    secondary: {
      touch: 'py-5 px-5 bg-gray-500',
      text: 'text-white'
    },
    danger: {
      touch: 'py-5 px-5 bg-red-500',
      text: 'text-white'
    },
    success: {
      touch: 'py-5 px-5 bg-green-500',
      text: 'text-white'
    },
    warning: {
      touch: 'py-5 px-5 bg-yellow-500',
      text: 'text-black'
    },
    info: {
      touch: 'py-5 px-5 bg-cyan-500',
      text: 'text-white'
    },
    link: {
      touch: 'bg-transparent',
      text: 'text-dark'
    },
    disabled: {
      touch: 'py-5 px-5 bg-gray-300',
      text: 'text-gray-500'
    }
  }

  const buttonStyle = buttonStyles[style || 'dark'].touch;
  const textStyle = buttonStyles[style || 'dark'].text

  return (
    <TouchableOpacity className={`${ buttonStyle } rounded-2xl`} onPress={onPress}>
      <View className="flex flex-row justify-center items-center gap-2">
        {icon && <>{icon}</>}

        <Text className={`${textStyle} text-center font-monaBold tracking-wide text-base`}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
}

export default Button;