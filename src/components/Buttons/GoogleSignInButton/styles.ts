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
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: ${RFValue(8)}px;
  background-color: ${({ theme, bgColor, disabled }: ButtonProps) =>
    bgColor ? bgColor : disabled ? theme.colors.disabled : theme.colors.inputs};
`;

export const Title = styled.Text`
  ${({ theme }: DefaultTheme) => css`
    color: ${theme.colors.title};
    font-size: ${RFValue(theme.fontSizes[6])}px;
    font-family: ${theme.fonts.secondary_600};
    margin-left: ${theme.spacings[4]}px;
  `}
`;
