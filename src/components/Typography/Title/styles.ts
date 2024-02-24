import { RFValue } from 'react-native-responsive-fontsize';
import { DefaultTheme } from 'styled-components';
import styled, { css } from 'styled-components/native';

export const TitleEl = styled.Text`
  ${({ theme }: DefaultTheme) => css`
    color: ${theme.colors.title};
    font-size: ${RFValue(theme.fontSizes[8])}px;
    font-family: ${theme.fonts.primary_700};
  `}
`;
