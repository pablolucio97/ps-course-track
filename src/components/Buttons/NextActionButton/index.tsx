import { Feather } from '@expo/vector-icons';
import { IStyledTheme } from '@interfaces/theme';
import { ActivityIndicator, TouchableOpacityProps } from 'react-native';
import { CSSProperties } from 'styled-components';
import { useTheme } from 'styled-components/native';
import { Container, ContentContainer, Title } from './styles';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  disabled?: boolean;
  loading?: boolean;
  bgColor?: string;
  buttonTextStyle?: CSSProperties;
  onPress: () => void;
}

export function NextActionButton({
  disabled,
  buttonTextStyle,
  loading,
  title,
  onPress,
  ...rest
}: ButtonProps) {
  const DISABLED_BUTTON_OPACITY = 0.8;
  const theme = useTheme() as IStyledTheme;
  return (
    <Container
      activeOpacity={DISABLED_BUTTON_OPACITY}
      disabled={disabled}
      {...rest}
    >
      {loading ? (
        <ActivityIndicator />
      ) : (
        <ContentContainer onPress={onPress}>
          <Title allowFontScaling={false} style={buttonTextStyle as never}>
            {title}
          </Title>
          <Feather
            size={theme.sizes[6]}
            name="arrow-right"
            color={theme.colors.title}
          />
        </ContentContainer>
      )}
    </Container>
  );
}
