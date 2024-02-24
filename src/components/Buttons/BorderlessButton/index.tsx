import { TouchableOpacityProps } from 'react-native';
import { CSSProperties } from 'styled-components';
import { Container, Title } from './styles';

interface BorderlessButtonProps extends TouchableOpacityProps {
  title: string;
  disabled?: boolean;
  buttonTextStyle?: CSSProperties;
}

export function BorderlessButton({
  disabled,
  buttonTextStyle,
  title,
  ...rest
}: BorderlessButtonProps) {
  const DISABLED_BUTTON_OPACITY = 0.8;
  return (
    <Container
      activeOpacity={DISABLED_BUTTON_OPACITY}
      disabled={disabled}
      {...rest}
    >
      <Title allowFontScaling={false} style={buttonTextStyle as never}>
        {title}
      </Title>
    </Container>
  );
}
