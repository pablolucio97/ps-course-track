/* eslint-disable quotes */
import { BorderlessButton } from '@components/Buttons/BorderlessButton';
import { PrimaryButton } from '@components/Buttons/PrimaryButton';
import { HeaderNavigation } from '@components/Miscellaneous/HeaderNavigation';
import { Text } from '@components/Typography/Text';
import { IStyledTheme } from '@interfaces/theme';
import { useNavigation } from '@react-navigation/native';
import { TAuthRoutesStack } from '@routes/auth.routes';
import { StatusBar } from 'expo-status-bar';
import { Platform } from 'react-native';
import { SvgXml } from 'react-native-svg';
import { useTheme } from 'styled-components/native';
import {
    biometricsSvg,
    faceIdSvg,
    logoWithTextSvg,
    logoWithTextWhiteSvg,
} from '../../../assets/svgs';
import { Container, Styles } from './styles';

export function SecureAuthenticationScreen() {
  const navigation = useNavigation<TAuthRoutesStack>();
  const theme = useTheme() as IStyledTheme;
  const currentTheme = theme.title;
  return (
    <Container>
      <StatusBar style={currentTheme === 'dark' ? 'light' : 'dark'} />
      {Platform.OS === 'android' ? (
        <>
          <HeaderNavigation
            screenTitle="Autenticação por biometria"
            onBack={() => navigation.goBack()}
            showsLogo
          />
          <Text
            content={`Gostaria de utilizar sua biometria\npara realizar uma autenticação\nmais rápida e segura?`}
            style={Styles.text}
          />
          <SvgXml xml={biometricsSvg} />
          <PrimaryButton title="Utilizar Biometria" />
        </>
      ) : (
        <>
          <HeaderNavigation
            screenTitle="Autenticação por reconhecimento facial"
            onBack={() => navigation.goBack()}
            showsLogo
          />
          <Text
            content={`Gostaria de utilizar o reconhecimento facial\n para realizar uma autenticação\nmais rápida e segura?`}
            style={Styles.text}
          />
          <SvgXml xml={faceIdSvg} />
          <PrimaryButton title="Fazer Reconhecimento Facial" />
        </>
      )}
      <Text content="ou" />
      <BorderlessButton
        title="Continuar com e-mail e senha"
        onPress={() => {}}
      />
      <SvgXml
        xml={currentTheme === 'light' ? logoWithTextSvg : logoWithTextWhiteSvg}
      />
    </Container>
  );
}
