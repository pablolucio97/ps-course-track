import { PrimaryButton } from '@components/Buttons/PrimaryButton';
import { PasswordInput } from '@components/Inputs/PasswordInput';
import { AppVersion } from '@components/Miscellaneous/AppVersion';
import { Subtitle } from '@components/Typography/Subtitle';
import { Text } from '@components/Typography/Text';
import { Title } from '@components/Typography/Title';
import { useAppTheme } from '@hooks/useTheme';
import { IStyledTheme } from '@interfaces/theme';
import { useFocusEffect } from '@react-navigation/native';
import { UserProfileCard } from '@screens/App/Profile/components/UserProfileCard';
import { ColumnContainer, GlobalStyles } from '@styles/globals';
import { getScreenHeightPercent } from '@utils/layout';
import { StatusBar } from 'expo-status-bar';
import { RefObject, useCallback, useRef, useState } from 'react';
import { TextInput } from 'react-native';
import { Modalize } from 'react-native-modalize';
import { SvgXml } from 'react-native-svg';
import { useTheme } from 'styled-components/native';
import { logoWithTextSvg, logoWithTextWhiteSvg } from '../../../assets/svgs';
import { MenuCard } from './components/MenuCard';
import { Container, Styles } from './styles';
export function Profile() {
  const theme = useTheme() as IStyledTheme;
  const img = 'https://avatars.githubusercontent.com/u/124673758?v=4';
  const currentTheme = theme.title;
  const { changeTheme } = useAppTheme();

  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [newPasswordConfirmation, setNewPasswordConfirmation] = useState('');

  const passwordModalRef = useRef<Modalize>(null);
  const newPasswordInputRef = useRef<TextInput>(null);
  const newPasswordConfirmationInputRef = useRef<TextInput>(null);

  const PASSWORD_MODAL_HEIGHT = getScreenHeightPercent(65);

  const handleOpenPasswordModal = () => {
    passwordModalRef.current?.open();
  };

  const closePasswordModal = () => {
    passwordModalRef.current?.close();
  };

  const navigateNextInput = (inputRef: RefObject<TextInput>) => {
    inputRef.current?.focus();
  };

  useFocusEffect(
    useCallback(() => {
      closePasswordModal();
    }, [])
  );

  return (
    <Container>
      <ColumnContainer>
        <Title content="Meu Perfil e Configurações" />
        <StatusBar style={theme.title === 'dark' ? 'light' : 'dark'} />
        <UserProfileCard
          userEmail="john-doe@gmail.com"
          userName="John Doe"
          userAvatar={img}
        />
        <MenuCard
          onChangePassword={handleOpenPasswordModal}
          onShareApp={() => {
            console.log('Share App');
          }}
          onSignOut={() => {
            console.log('Logout');
          }}
          onChangeTheme={() => {
            changeTheme();
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
      <Modalize
        ref={passwordModalRef}
        modalHeight={PASSWORD_MODAL_HEIGHT}
        modalStyle={{
          ...Styles.changePasswordModal,
          backgroundColor: theme.colors.background,
        }}
      >
        <Subtitle
          content="Alterar senha"
          style={
            [
              GlobalStyles.textCenter,
              GlobalStyles.marginVerticalMedium,
            ] as never
          }
        />
        <Text
          content="Maecenas at massa faucibus, pellentesque metus nec, pharetra nunc. Aliquam enim eros, eleifend id ornare nec, lacinia id justo. Nam magna tortor, sollicitudin ut arcu id,"
          style={
            [GlobalStyles.textCenter, GlobalStyles.marginBottomMedium] as never
          }
        />
        <PasswordInput
          label="Senha atual"
          value={currentPassword}
          onChangeText={setCurrentPassword}
          autoComplete="off"
          autoCapitalize="none"
          autoCorrect={false}
          onSubmitEditing={() => navigateNextInput(newPasswordInputRef)}
        />
        <PasswordInput
          label="Nova senha"
          value={newPassword}
          onChangeText={setNewPassword}
          ref={newPasswordInputRef}
          autoComplete="off"
          autoCapitalize="none"
          autoCorrect={false}
          onSubmitEditing={() =>
            navigateNextInput(newPasswordConfirmationInputRef)
          }
        />
        <PasswordInput
          label="Confirme a nova senha"
          value={newPasswordConfirmation}
          ref={newPasswordConfirmationInputRef}
          autoComplete="off"
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={setNewPasswordConfirmation}
        />
        <PrimaryButton title="Alterar Senha" onPress={() => {}} />
      </Modalize>
    </Container>
  );
}
