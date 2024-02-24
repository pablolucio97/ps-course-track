import { light } from '@themes/light';
import CheckBox from 'expo-checkbox';
import { CSSProperties, Dispatch, SetStateAction } from 'react';
import { Styles } from './styles';

export interface CheckboxProps {
  checked: boolean;
  onCheck: Dispatch<SetStateAction<boolean>>;
  bgColor?: string;
  checkboxStyle?: CSSProperties;
}

export function Checkbox({
  checked,
  onCheck,
  bgColor,
  checkboxStyle,
}: CheckboxProps) {
  return (
    <CheckBox
      value={checked}
      onValueChange={onCheck}
      color={
        checked
          ? bgColor
            ? bgColor
            : light.theme.colors.primaryVariant
          : undefined
      }
      style={[Styles.checkbox, checkboxStyle as never]}
    />
  );
}
