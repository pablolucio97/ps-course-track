import { TouchableOpacityProps } from 'react-native';
import { SvgXml } from 'react-native-svg';
import { CSSProperties } from 'styled-components';
import { googleLogoSvg } from '../../../assets/svgs';
import { Container, Title } from './styles';

interface ButtonProps extends TouchableOpacityProps {
  title?: string;
  disabled?: boolean;
  loading?: boolean;
  bgColor?: string;
  buttonTextStyle?: CSSProperties;
}

export function GoogleSignInButton({
  disabled,
  buttonTextStyle,
  title,
  ...rest
}: ButtonProps) {
  const DISABLED_BUTTON_OPACITY = 0.5;
  return (
    <Container
      activeOpacity={DISABLED_BUTTON_OPACITY}
      disabled={disabled}
      {...rest}
    >
      {title ? (
        <>
          <Title allowFontScaling={false} style={buttonTextStyle as never}>
            {title}
          </Title>
        </>
      ) : (
        <>
          <SvgXml xml={googleLogoSvg} />
          <Title allowFontScaling={false} style={buttonTextStyle as never}>
            Entrar com o Google
          </Title>
        </>
      )}
    </Container>
  );
}
