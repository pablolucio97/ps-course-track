import { RFValue } from 'react-native-responsive-fontsize';
import { DefaultTheme } from 'styled-components';
import styled, { css } from 'styled-components/native';

export const SubtitleEl = styled.Text`
  ${({ theme }: DefaultTheme) => css`
    color: ${theme.colors.subtitle};
    font-size: ${RFValue(theme.fontSizes[7])}px;
    font-family: ${theme.fonts.primary_500};
  `}
`;
