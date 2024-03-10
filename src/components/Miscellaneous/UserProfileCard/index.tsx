import { Image } from 'expo-image';
import { CSSProperties } from 'styled-components';
import {
  AvatarContainer,
  AvatarTitle,
  Container,
  Styles,
  TextContainer,
  UserEmailText,
  UserTitleText,
} from './styles';
interface UserProfileCardProps {
  userName: string;
  userEmail: string;
  userAvatar?: string;
  style?: CSSProperties;
}

export function UserProfileCard({
  userName,
  userEmail,
  userAvatar,
  style,
}: UserProfileCardProps) {
  const formatUserInitialsName = userName ? userName.split(' ') : [];
  const firstLetterInitialName =
    formatUserInitialsName.length > 0
      ? formatUserInitialsName[0].charAt(0).toUpperCase()
      : '';
  const firstLetterLastName =
    formatUserInitialsName.length > 1
      ? formatUserInitialsName[1].charAt(0).toUpperCase()
      : '';

  const userNameInitials = `${firstLetterInitialName}${firstLetterLastName}`;

  return (
    <Container style={style as never}>
      <AvatarContainer>
        {userAvatar ? (
          <Image
            source={userAvatar}
            style={Styles.avatarImage}
            blurRadius={4}
            contentFit="cover"
            transition={1000}
          />
        ) : (
          <AvatarTitle allowFontScaling={false}>{userNameInitials}</AvatarTitle>
        )}
      </AvatarContainer>
      <TextContainer>
        <UserTitleText allowFontScaling={false}>{userName}</UserTitleText>
        <UserEmailText allowFontScaling={false}>
          {userEmail.substring(0, 18).concat('...')}
        </UserEmailText>
      </TextContainer>
    </Container>
  );
}
