/* eslint-disable quotes */
import { PrimaryButton } from '@components/Buttons/PrimaryButton';
import { MaskedTextInput } from '@components/Inputs/MaskedTextInput';
import { PasswordInput } from '@components/Inputs/PasswordInput';
import { TextInput } from '@components/Inputs/TextInput';
import { HeaderNavigation } from '@components/Miscellaneous/HeaderNavigation';
import { IStyledTheme } from '@interfaces/theme';
import { useNavigation } from '@react-navigation/native';
import { TAuthRoutesStack } from '@routes/auth.routes';
import { GlobalStyles } from '@styles/globals';
import { StatusBar } from 'expo-status-bar';
import { RefObject, useRef, useState } from 'react';
import { Platform, TextInput as TextInputRN } from 'react-native';
import { Masks } from 'react-native-mask-input';
import { useTheme } from 'styled-components/native';
import { TermsCheckBox } from './components/TermsCheckBox';
import { Container, FormContainer } from './styles';

export function SignUp() {
  const navigation = useNavigation<TAuthRoutesStack>();
  const theme = useTheme() as IStyledTheme;
  const currentTheme = theme.title;

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [cpf, setCpf] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  const [acceptTerms, setAcceptTerms] = useState(false);

  const nameInputRef = useRef<TextInputRN>(null);
  const emailInputRef = useRef<TextInputRN>(null);
  const cpfInputRef = useRef<TextInputRN>(null);
  const passwordInputRef = useRef<TextInputRN>(null);
  const passwordConfirmInputRef = useRef<TextInputRN>(null);

  const handleInputNavigate = (ref: RefObject<TextInputRN>) => {
    ref?.current?.focus();
  };

  return (
    <Container
      style={[
        GlobalStyles.paddingTopMedium,
        GlobalStyles.paddingBottomExtraLarge,
      ]}
    >
      <StatusBar style={currentTheme === 'dark' ? 'light' : 'dark'} />
      <HeaderNavigation
        screenTitle="Cadastro"
        onBack={() => navigation.goBack()}
        showsLogo
        style={
          Platform.OS === 'ios'
            ? GlobalStyles.marginTopExtraLarge
            : GlobalStyles.marginTopLarge
        }
      />
      <FormContainer
        style={GlobalStyles.marginTopSmall}
        showsVerticalScrollIndicator={false}
      >
        <TextInput
          label="Nome"
          placeholder="Seu nome"
          value={name}
          onChangeText={setName}
          ref={nameInputRef}
          onSubmitEditing={() => handleInputNavigate(emailInputRef)}
        />
        <TextInput
          label="E-mail"
          placeholder="Seu e-mail"
          autoCapitalize="none"
          keyboardType="email-address"
          value={email}
          onChangeText={val => setEmail(val.toLowerCase())}
          ref={emailInputRef}
          onSubmitEditing={() => handleInputNavigate(cpfInputRef)}
        />
        <MaskedTextInput
          label="CPF"
          placeholder="Seu CPF"
          keyboardType="numeric"
          mask={Masks.BRL_CPF}
          value={cpf}
          onChangeText={setCpf}
          ref={cpfInputRef as never}
          onSubmitEditing={() => handleInputNavigate(passwordInputRef)}
          returnKeyType={'done' as never}
        />
        <PasswordInput
          label="Senha"
          placeholder="Sua senha (mínimo de 6 dígitos)"
          value={password}
          onChangeText={setPassword}
          ref={passwordInputRef}
          onSubmitEditing={() => handleInputNavigate(passwordConfirmInputRef)}
        />
        <PasswordInput
          label="Confirmação de senha"
          placeholder="Confirme sua senha"
          value={passwordConfirm}
          onChangeText={setPasswordConfirm}
          ref={passwordConfirmInputRef}
        />
        <TermsCheckBox
          checked={acceptTerms}
          onCheck={() => setAcceptTerms(!acceptTerms)}
          style={GlobalStyles.marginBottomMedium}
        />
        <PrimaryButton
          title="Cadastrar"
          onPress={() => {}}
          disabled={!acceptTerms}
        />
      </FormContainer>
    </Container>
  );
}
