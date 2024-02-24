import { light } from '@themes/light';
import { ForwardRefRenderFunction, forwardRef, useState } from 'react';
import MaskInput from 'react-native-mask-input';
import { Container, FocusedStyle, Label, TextInputEl } from './styles';

interface ITextInputMaskProps {
  label: string;
  mask: (string | RegExp)[];
  value?: string;
  // eslint-disable-next-line no-unused-vars
  onChangeText?: (text: string, mask?: string) => void;
  keyboardType?: 'numeric';
  placeholder?: string;
  onSubmitEditing?: () => void;
  editable?: boolean;
  autoFocus?: boolean;
  returnKeyType:
    | 'done'
    | 'go'
    | 'next'
    | 'search'
    | 'send'
    | 'none'
    | 'previous'
    | 'default';
}

const InputBase: ForwardRefRenderFunction<
  typeof MaskInput,
  ITextInputMaskProps
> = ({ label, editable, autoFocus, returnKeyType, ...rest }, ref) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <Container>
      <Label allowFontScaling={false}>{label}</Label>
      <TextInputEl
        ref={ref as never}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        style={isFocused && FocusedStyle}
        editable={editable}
        allowFontScaling={false}
        autoFocus={autoFocus}
        placeholderTextColor={light.theme.colors.absolute_gray}
        returnKeyType={returnKeyType as never}
        {...rest}
      />
    </Container>
  );
};

export const MaskedTextInput = forwardRef<
  typeof MaskInput,
  ITextInputMaskProps
>(InputBase);
