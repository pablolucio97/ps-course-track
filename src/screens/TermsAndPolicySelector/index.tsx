/* eslint-disable quotes */
import { NextActionButton } from '@components/Buttons/NextActionButton';
import { HeaderNavigation } from '@components/Miscellaneous/HeaderNavigation';
import { Text } from '@components/Typography/Text';
import { IStyledTheme } from '@interfaces/theme';
import { useNavigation } from '@react-navigation/native';
import { TAuthRoutesBottomTabs } from '@routes/auth.routes';
import { GlobalStyles } from '@styles/globals';
import { StatusBar } from 'expo-status-bar';
import { SvgXml } from 'react-native-svg';
import { useTheme } from 'styled-components/native';
import { logoWithTextSvg, logoWithTextWhiteSvg } from '../../assets/svgs';
import { Container, FormContainer } from './styles';

export function TermsAndPoliticsSelector() {
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
        screenTitle="Termos de Uso e Política de Privacidade"
        onBack={() => navigation.goBack()}
        style={GlobalStyles.marginTopExtraLarge}
      />
      <Text
        content="Selecione um documento para visualizar"
        style={GlobalStyles.marginTopLarge}
      />
      <FormContainer style={GlobalStyles.marginTopMedium}>
        <NextActionButton
          title="Termos de Uso"
          onPress={() => navigation.navigate('UseTerms')}
          style={GlobalStyles.marginBottomMedium}
        />
        <NextActionButton
          title="Política de Privacidade"
          onPress={() => navigation.navigate('PolicyPrivacy')}
        />
      </FormContainer>
      <SvgXml
        xml={currentTheme === 'light' ? logoWithTextSvg : logoWithTextWhiteSvg}
      />
    </Container>
  );
}
