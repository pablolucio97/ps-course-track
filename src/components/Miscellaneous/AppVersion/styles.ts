import { DefaultTheme } from 'styled-components';
import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;
  background-color: transparent;
`;

export const Label = styled.Text`
  ${({ theme }: DefaultTheme) => css`
    font-family: ${theme.fonts.primary_500};
    color: ${theme.colors.absolute_gray};
    font-size: ${theme.fontSizes[6]}px;
  `}
`;
