import { BorderlessButton } from '@components/Buttons/BorderlessButton';
import { PersonalSignInButton } from '@components/Buttons/PersonalSignInButton';
import { PrimaryButton } from '@components/Buttons/PrimaryButton';
import { PasswordInput } from '@components/Inputs/PasswordInput';
import { TextInput } from '@components/Inputs/TextInput';
import { AppVersion } from '@components/Miscellaneous/AppVersion';
import { Text } from '@components/Typography/Text';
import { IStyledTheme } from '@interfaces/theme';
import { useNavigation } from '@react-navigation/native';
import { TAuthRoutesBottomTabs } from '@routes/auth.routes';
import { ColumnContainer, GlobalStyles } from '@styles/globals';
import { Image } from 'expo-image';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { SvgXml } from 'react-native-svg';
import { useTheme } from 'styled-components/native';
import { logoWithTextSvg, logoWithTextWhiteSvg } from '../../assets/svgs';
import { Container, FormContainer, ImageContainer, Styles } from './styles';

export function InitialScreen() {
  const bgImgPath = '../../assets/imgs/initial_screen_bg.png';
  const IMAGE_TRANSITION_MS = 800;
  const [isAuthenticated] = useState(false);
  const [hasStoreUpdates] = useState(false);
  const navigation = useNavigation<TAuthRoutesBottomTabs>();
  const theme = useTheme() as IStyledTheme;
  const currentTheme = theme.title;

  useEffect(() => {
    hasStoreUpdates && navigation.navigate('NewUpdateStore');
  }, [hasStoreUpdates, navigation]);

  return (
    <Container>
      <StatusBar style="light" />
      <ImageContainer>
        <Image
          style={Styles.image}
          source={require(bgImgPath)}
          contentFit="cover"
          transition={IMAGE_TRANSITION_MS}
        />
      </ImageContainer>
      <FormContainer>
        <SvgXml
          xml={
            currentTheme === 'light' ? logoWithTextSvg : logoWithTextWhiteSvg
          }
          style={
            isAuthenticated
              ? GlobalStyles.marginBottomExtraLarge
              : GlobalStyles.marginBottomMedium
          }
        />
        {isAuthenticated ? (
          <>
            <Text
              content="Seja bem vindo(a) novamente!"
              style={GlobalStyles.marginBottomMedium}
            />
            <ColumnContainer
              style={[
                GlobalStyles.marginTopLarge,
                GlobalStyles.containerCenterItems,
              ]}
            >
              <PersonalSignInButton
                userName="Pablo Silva"
                onPress={() =>
                  navigation.navigate('SecureAuthenticationScreen')
                }
                style={GlobalStyles.marginBottomMedium}
              />
              <Text content="ou" style={GlobalStyles.marginVerticalMedium} />
              <BorderlessButton title="Entrar com outra conta" />
            </ColumnContainer>
          </>
        ) : (
          <>
            <Text
              content="Faça login para acessar a plataforma"
              style={GlobalStyles.marginBottomMedium}
            />
            <TextInput
              label="E-mail"
              placeholder="Seu e-mail"
              containerStyle={GlobalStyles.marginBottomMedium}
            />
            <PasswordInput
              label="Senha"
              placeholder="Sua senha"
              containerStyle={GlobalStyles.marginBottomMedium}
            />
            <BorderlessButton
              title="Esqueci minha senha"
              onPress={() => navigation.navigate('PasswordRecovery')}
            />
            <PrimaryButton
              title="Entrar"
              style={GlobalStyles.marginVerticalSmall}
            />
            <BorderlessButton
              style={GlobalStyles.marginBottomMedium}
              title="Não tenho uma conta"
              onPress={() => navigation.navigate('SignUp')}
            />
          </>
        )}
        <ColumnContainer
          style={
            isAuthenticated
              ? GlobalStyles.marginTopLarge
              : GlobalStyles.marginBottomExtraLarge
          }
        >
          <AppVersion version="1.4.5" />
        </ColumnContainer>
      </FormContainer>
    </Container>
  );
}
