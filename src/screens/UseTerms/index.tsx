/* eslint-disable quotes */
import { HeaderNavigation } from '@components/Miscellaneous/HeaderNavigation';
import { Subtitle } from '@components/Typography/Subtitle';
import { Text } from '@components/Typography/Text';
import { useTermsText } from '@data/mocks';
import { IStyledTheme } from '@interfaces/theme';
import { useNavigation } from '@react-navigation/native';
import { TAuthRoutesBottomTabs } from '@routes/auth.routes';
import { GlobalStyles } from '@styles/globals';
import { StatusBar } from 'expo-status-bar';
import { SvgXml } from 'react-native-svg';
import { useTheme } from 'styled-components/native';
import { logoWithTextSvg, logoWithTextWhiteSvg } from '../../assets/svgs';
import { Container, TextContainer, TitleContainer } from './styles';

export function UseTerms() {
  const navigation = useNavigation<TAuthRoutesBottomTabs>();
  const theme = useTheme() as IStyledTheme;
  const currentTheme = theme.title;

  return (
    <Container
      style={[
        GlobalStyles.paddingTopMedium,
        GlobalStyles.paddingBottomExtraLarge,
      ]}
    >
      <StatusBar style={currentTheme === 'dark' ? 'light' : 'dark'} />
      <HeaderNavigation
        screenTitle="Termos de Uso"
        onBack={() => navigation.goBack()}
        style={GlobalStyles.marginTopLarge}
      />
      <TitleContainer style={GlobalStyles.marginBottomSmall}>
        <Subtitle
          content="Termos de Uso"
          style={GlobalStyles.marginVerticalMedium as never}
        />
      </TitleContainer>
      <TextContainer style={GlobalStyles.marginBottomLarge}>
        {useTermsText.map(text => (
          <Text
            content={text.content}
            key={text.id}
            style={GlobalStyles.marginTopMedium}
          />
        ))}
      </TextContainer>
      <SvgXml
        xml={currentTheme === 'light' ? logoWithTextSvg : logoWithTextWhiteSvg}
      />
    </Container>
  );
}
