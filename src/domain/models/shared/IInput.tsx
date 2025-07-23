export interface IInputProps {
  label?: string;
  placeholder?: string;
  type?: 'text' | 'number';
  maxLength?: number;
  value?: string | number;
  error?: string;
  placeHolderTextColor?: string;
  classStyle?: IInputStyled;
  icon?: any
  onChange: (value: string) => void;
}

export interface IInputStyled {
  classNameContainer?: string;
  classNameLabel?: string;
  classNameInputContainer?: string;
  classNameInput?: string;
  classNameError?: string;
}