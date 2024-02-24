import { TouchableOpacity } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { DefaultTheme } from 'styled-components';
import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ColumnContainer = styled.View``;

export const RowContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Text = styled.Text`
  ${({ theme }: DefaultTheme) => css`
    color: ${theme.colors.title};
    font-size: ${RFValue(theme.fontSizes[6])}px;
    font-family: ${theme.fonts.primary_400};
  `}
`;

export const LinkText = styled.Text`
  ${({ theme }: DefaultTheme) => css`
    color: ${theme.colors.primaryVariant};
    font-size: ${RFValue(theme.fontSizes[6])}px;
    font-family: ${theme.fonts.primary_700};
  `}
`;

export const Button = styled(TouchableOpacity).attrs({ activeOpacity: 0.8 })``;
