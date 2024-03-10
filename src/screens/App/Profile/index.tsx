import { AppVersion } from '@components/Miscellaneous/AppVersion';
import { UserProfileCard } from '@components/Miscellaneous/UserProfileCard';
import { IStyledTheme } from '@interfaces/theme';
import { StatusBar } from 'expo-status-bar';
import { useTheme } from 'styled-components/native';
import { Container, ScrollContainer } from './styles';

export function Profile() {
  // const navigation = useNavigation<TAppRoutesStack>();
  const theme = useTheme() as IStyledTheme;
  const img = 'https://avatars.githubusercontent.com/u/124673758?v=4';

  return (
    <Container>
      <StatusBar style={theme.title === 'dark' ? 'light' : 'dark'} />
      {/* <UserProfileCard
        userEmail="john-doe@gmail.com"
        userName="John Doe"
        userAvatar={img}
      /> */}
      <ScrollContainer>
        <AppVersion version="1.4.3" />
      </ScrollContainer>
    </Container>
  );
}
