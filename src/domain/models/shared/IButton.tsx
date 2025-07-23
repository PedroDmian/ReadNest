export interface IButtonProps {
  title?: string;
  icon?: any;
  onPress: () => void;
  styleType?: 'dark' | 'light' | 'primary' | 'secondary' | 'danger' | 'success' | 'warning' | 'info' | 'link' | 'disabled' | 'trasparent';
  classNameTouch?: string;
  element?: React.ReactNode;
  activeOpacity?: number;
}