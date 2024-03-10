import { AppVersion } from '@components/Miscellaneous/AppVersion';
import { Title } from '@components/Typography/Title';
import { IStyledTheme } from '@interfaces/theme';
import { UserProfileCard } from '@screens/App/Profile/components/UserProfileCard';
import { ColumnContainer, GlobalStyles } from '@styles/globals';
import { StatusBar } from 'expo-status-bar';
import { SvgXml } from 'react-native-svg';
import { useTheme } from 'styled-components/native';
import { logoWithTextSvg, logoWithTextWhiteSvg } from '../../../assets/svgs';
import { MenuCard } from './components/MenuCard';
import { Container } from './styles';

export function Profile() {
  const theme = useTheme() as IStyledTheme;
  const img = 'https://avatars.githubusercontent.com/u/124673758?v=4';
  const currentTheme = theme.title;
  return (
    <Container>
      <ColumnContainer>
        <Title content="Meu Perfi e Configurações" />
        <StatusBar style={theme.title === 'dark' ? 'light' : 'dark'} />
        <UserProfileCard
          userEmail="john-doe@gmail.com"
          userName="John Doe"
          userAvatar={img}
        />
        <MenuCard
          onChangePassword={() => {
            console.log('Change Password');
          }}
          onShareApp={() => {
            console.log('Share App');
          }}
          onSignOut={() => {
            console.log('Logout');
          }}
          onChangeTheme={() => {
            console.log('Change Theme');
          }}
        />
      </ColumnContainer>
      <ColumnContainer style={GlobalStyles.alignItemsCenter}>
        <SvgXml
          xml={
            currentTheme === 'light' ? logoWithTextSvg : logoWithTextWhiteSvg
          }
          style={GlobalStyles.marginBottomMedium}
        />
        <AppVersion version="1.4.3" />
      </ColumnContainer>
    </Container>
  );
}
