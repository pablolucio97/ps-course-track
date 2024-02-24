import { RFValue } from 'react-native-responsive-fontsize';
import { DefaultTheme } from 'styled-components';
import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  max-width: 50%;
  justify-content: center;
`;

export const GreetText = styled.Text`
  ${({ theme }: DefaultTheme) => css`
    color: ${theme.colors.text};
    font-size: ${RFValue(theme.fontSizes[6])}px;
    font-family: ${theme.fonts.primary_400};
  `}
`;

export const UserNameText = styled.Text`
  ${({ theme }: DefaultTheme) => css`
    color: ${theme.colors.subtitle};
    font-size: ${RFValue(theme.fontSizes[7])}px;
    font-family: ${theme.fonts.primary_500};
  `}
`;
