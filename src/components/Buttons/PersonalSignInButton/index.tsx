import { TouchableOpacityProps } from 'react-native';
import { light } from 'themes/light';
import { AvatarUser, Container, Title } from './styles';

interface PersonalSignInButtonProps extends TouchableOpacityProps {
  userName: string;
  onPress: () => void;
  imgUrl?: string;
}

export function PersonalSignInButton({
  onPress,
  userName,
  imgUrl,
  ...rest
}: PersonalSignInButtonProps) {
  if (userName) {
    return (
      <Container activeOpacity={0.8} onPress={onPress} {...rest}>
        <AvatarUser
          src={imgUrl}
          name={userName}
          bgColor={light.theme.colors.secondary}
          textColor={light.theme.colors.absolute_white}
          size={light.theme.sizes[9]}
        />
        <Title allowFontScaling={false}>Entrar como {userName}</Title>
      </Container>
    );
  }
  return null;
}
