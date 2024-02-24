import { RFValue } from 'react-native-responsive-fontsize';
import { DefaultTheme } from 'styled-components';
import styled, { css } from 'styled-components/native';

interface ButtonProps extends DefaultTheme {
  disabled?: boolean;
  bgColor?: string;
}

export const Container = styled.TouchableOpacity<ButtonProps>`
  width: 100%;
  height: ${RFValue(48)}px;
  justify-content: center;
  align-items: center;
  border-radius: ${RFValue(8)}px;
  background-color: ${({ theme, bgColor }: ButtonProps) =>
    bgColor ? bgColor : theme.colors.primary};
  opacity: ${({ disabled }: ButtonProps) => (disabled ? 0.64 : 1)};
`;

export const Title = styled.Text`
  ${({ theme }: DefaultTheme) => css`
    color: ${theme.colors.absolute_white};
    font-size: ${RFValue(theme.fontSizes[6])}px;
    font-family: ${theme.fonts.secondary_600};
  `}
`;
