import { Feather } from '@expo/vector-icons';
import { IStyledTheme } from '@interfaces/theme';
import { ForwardRefRenderFunction, forwardRef, useState } from 'react';
import { TextInput, TextInputProps } from 'react-native';
import { CSSProperties } from 'styled-components';
import { useTheme } from 'styled-components/native';
import {
  ChangePasswordVisibilityButton,
  ChangePasswordVisibilityContainer,
  Container,
  FocusedStyle,
  InputContainer,
  InputText,
  Label,
} from './styles';

interface ITextInput extends TextInputProps {
  label?: string;
  containerStyle?: CSSProperties;
}

const InputBase: ForwardRefRenderFunction<TextInput, ITextInput> = (
  { label, containerStyle, ...rest },
  ref
) => {
  const [isPasswordVisibility, setIsPasswordVisibility] = useState(true);
  const [isFocused, setIsFocused] = useState(false);
  const [, setIsFilled] = useState(false);
  const theme = useTheme() as IStyledTheme;

  function handlePasswordVisibilityChange() {
    setIsPasswordVisibility(prevState => !prevState);
  }

  function handleInputFocus() {
    setIsFocused(true);
  }

  function handleInputBlur() {
    setIsFocused(false);
    setIsFilled(!!label);
  }

  return (
    <Container style={containerStyle as never}>
      <Label allowFontScaling={false}>{label}</Label>
      <InputContainer style={isFocused && FocusedStyle}>
        <InputText
          allowFontScaling={false}
          secureTextEntry={isPasswordVisibility}
          placeholderTextColor={theme.colors.absolute_gray}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          {...rest}
          ref={ref}
        />
        <ChangePasswordVisibilityContainer>
          <ChangePasswordVisibilityButton
            onPress={handlePasswordVisibilityChange}
            activeOpacity={0.8}
          >
            <Feather
              name={isPasswordVisibility ? 'eye' : 'eye-off'}
              size={20}
              color={theme.colors.placeholder}
            />
          </ChangePasswordVisibilityButton>
        </ChangePasswordVisibilityContainer>
      </InputContainer>
    </Container>
  );
};

export const PasswordInput = forwardRef<TextInput, ITextInput>(InputBase);
