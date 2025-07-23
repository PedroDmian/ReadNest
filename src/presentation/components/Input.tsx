import {
  Text,
  View,
  TextInput
} from "react-native";

import { IInputProps } from "../../domain/models/shared/IInput";

const Input = ({
  label,
  placeholder,
  type = 'text',
  maxLength = 500,
  value,
  error = '',
  icon,
  placeHolderTextColor = '#6c757d',
  onChange,
  classStyle
}: IInputProps) => {
  const classNameContainer = classStyle?.classNameContainer ?? '';
  const classNameLabel = classStyle?.classNameLabel ?? 'ms-1 text-dark text-base font-monaMedium mb-2';
  const classNameInputContainer = classStyle?.classNameInputContainer;
  const classNameInput = classStyle?.classNameInput ?? 'text-dark text-base font-monaRegular';
  const classNameError = classStyle?.classNameError ?? 'ms-1 text-danger text-base mt-1';

  return (
    <View className={`w-full ${classNameContainer}`}>
      { label && 
        <Text className={`${classNameLabel}`}>
          {label}
        </Text>
      }

      <View className={`
        flex-row
        items-center
        justify-start
        relative
        bg-timberwolf
        rounded-full
        px-4
        container-input
        ${classNameInputContainer}
        border
        border-solid
        ${error ? 'border-danger' : 'border-transparent'}
      `}>
        { icon &&
          <View className="mb-1">
            {icon}
          </View>
        }

        <TextInput
          placeholder={placeholder || ''}
          keyboardType={type === 'number' ? 'number-pad' : 'default'}
          maxLength={maxLength || 500}
          placeholderTextColor={placeHolderTextColor}
          onChangeText={onChange}
          value={String(value)}
          className={`${classNameInput} w-full pb-2 h-full flex items-center ${icon ? 'ps-2' : 'ps-2'}`}
        />
      </View>
      

      { error && <Text className={`${classNameError}`}>{error}</Text> }
    </View>
  );
}

export default Input;