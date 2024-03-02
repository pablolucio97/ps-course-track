/* eslint-disable quotes */
import { PrimaryButton } from '@components/Buttons/PrimaryButton';
import { TextInput } from '@components/Inputs/TextInput';
import { HeaderNavigation } from '@components/Miscellaneous/HeaderNavigation';
import { Text } from '@components/Typography/Text';
import { IStyledTheme } from '@interfaces/theme';
import { useNavigation } from '@react-navigation/native';
import { TAuthRoutesStack } from '@routes/auth.routes';
import { GlobalStyles } from '@styles/globals';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Platform } from 'react-native';
import { SvgXml } from 'react-native-svg';
import { useTheme } from 'styled-components/native';
import { logoWithTextSvg, logoWithTextWhiteSvg } from '../../../assets/svgs';
import { Container, FormContainer } from './styles';

export function PasswordRecovery() {
  const navigation = useNavigation<TAuthRoutesStack>();
  const theme = useTheme() as IStyledTheme;
  const currentTheme = theme.title;

  const [email, setEmail] = useState('');

  return (
    <Container
      style={[
        GlobalStyles.paddingTopMedium,
        GlobalStyles.paddingBottomExtraLarge,
      ]}
    >
      <StatusBar style={currentTheme === 'dark' ? 'light' : 'dark'} />
      <HeaderNavigation
        screenTitle="Recuperação de senha"
        onBack={() => navigation.goBack()}
        style={
          Platform.OS === 'ios'
            ? GlobalStyles.marginTopExtraLarge
            : GlobalStyles.marginTopLarge
        }
      />
      <FormContainer style={GlobalStyles.marginTopMedium}>
        <Text
          content={`Informe seu e-mail de acesso. Caso o e-mail\ninformado exista na nossa base de dados,\nvocê receberá por email as instruções para\nrecuperar sua senha.`}
          style={GlobalStyles.marginBottomMedium}
        />
        <TextInput
          label="E-mail"
          placeholder="Seu e-mail"
          autoCapitalize="none"
          keyboardType="email-address"
          value={email}
          onChangeText={val => setEmail(val.toLowerCase())}
        />
        <PrimaryButton title="Enviar e-mail" onPress={() => {}} />
      </FormContainer>
      <SvgXml
        xml={currentTheme === 'light' ? logoWithTextSvg : logoWithTextWhiteSvg}
      />
    </Container>
  );
}
