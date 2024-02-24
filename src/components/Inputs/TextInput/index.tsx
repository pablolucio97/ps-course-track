import { IStyledTheme } from '@interfaces/theme';
import { ForwardRefRenderFunction, forwardRef, useState } from 'react';
import { TextInputProps, TextInput as TextInputRN } from 'react-native';
import { CSSProperties } from 'styled-components';
import { useTheme } from 'styled-components/native';
import { Container, FocusedStyle, Label, TextInputEl } from './styles';

interface InputTextProps extends TextInputProps {
  label: string;
  containerStyle?: CSSProperties;
}
const InputBase: ForwardRefRenderFunction<TextInputRN, InputTextProps> = (
  { label, containerStyle, ...rest },
  ref
) => {
  const [isFocused, setIsFocused] = useState(false);

  const theme = useTheme() as IStyledTheme;

  return (
    <Container style={containerStyle as never}>
      <Label allowFontScaling={false}> {label}</Label>
      <TextInputEl
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        style={isFocused && FocusedStyle}
        allowFontScaling={false}
        placeholderTextColor={theme.colors.absolute_gray}
        ref={ref}
        {...rest}
      />
    </Container>
  );
};

export const TextInput = forwardRef<TextInputRN, InputTextProps>(InputBase);
