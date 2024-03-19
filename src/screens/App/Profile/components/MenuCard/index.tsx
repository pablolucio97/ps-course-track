import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import { IStyledTheme } from '@interfaces/theme';
import { useTheme } from 'styled-components/native';
import {
  Container,
  ContentContainer,
  DataContainer,
  Divider,
  Text,
  TextContainer,
} from './styles';

interface MenuCardProps {
  onChangePassword?: () => void;
  onChangeTheme?: () => void;
  onShareApp?: () => void;
  onSignOut?: () => void;
}

export function MenuCard({
  onChangePassword,
  onChangeTheme,
  onShareApp,
  onSignOut,
}: MenuCardProps) {
  const theme = useTheme() as IStyledTheme;
  const ICON_SIZE = 24;

  const data = [
    {
      icon: (
        <Feather
          name="lock"
          color={
            theme.title === 'dark'
              ? theme.colors.absolute_white
              : theme.colors.absolute_black
          }
          size={ICON_SIZE}
        />
      ),
      content: 'Alterar senha',
      onPress: onChangePassword,
    },
    {
      icon: (
        <MaterialCommunityIcons
          name="format-color-fill"
          color={
            theme.title === 'dark'
              ? theme.colors.absolute_white
              : theme.colors.absolute_black
          }
          size={ICON_SIZE}
        />
      ),
      content:
        theme.title === 'dark'
          ? 'Mudar para o tema claro'
          : 'Mudar para o tema escuro',
      onPress: onChangeTheme,
    },
    {
      icon: (
        <Feather
          name="share"
          color={
            theme.title === 'dark'
              ? theme.colors.absolute_white
              : theme.colors.absolute_black
          }
          size={ICON_SIZE}
        />
      ),
      content: 'Compartilhar app',
      onPress: onShareApp,
    },
    {
      icon: (
        <Feather
          name="corner-down-right"
          color={
            theme.title === 'dark'
              ? theme.colors.absolute_white
              : theme.colors.absolute_black
          }
          size={ICON_SIZE}
        />
      ),
      content: 'Sair',
      onPress: onSignOut,
    },
  ];

  return (
    <Container>
      {data.map((item, i) => (
        <ContentContainer
          key={item.content}
          activeOpacity={0.8}
          onPress={item.onPress}
        >
          <DataContainer>
            <TextContainer>
              {item.icon}
              <Text allowFontScaling={false}>{item.content}</Text>
            </TextContainer>
          </DataContainer>
          {i <= data.length - 2 && <Divider />}
        </ContentContainer>
      ))}
    </Container>
  );
}
