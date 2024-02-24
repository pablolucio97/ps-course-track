import { RFValue } from 'react-native-responsive-fontsize';
import { DefaultTheme } from 'styled-components';
import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  ${({ theme }: DefaultTheme) => css`
    width: 100%;
    flex: 1;
    align-items: center;
    background-color: ${theme.colors.background};
    padding: ${RFValue(theme.spacings[4])}px;
    padding-top: ${RFValue(theme.spacings[7])}px;
  `}
`;

export const TextContainer = styled.ScrollView`
  ${({ theme }: DefaultTheme) => css`
    width: 100%;
    padding: 0 ${RFValue(theme.spacings[2])}px 0;
  `}
`;

export const TitleContainer = styled.View`
  ${({ theme }: DefaultTheme) => css`
    width: 100%;
    padding: 0 ${RFValue(theme.spacings[2])}px 0;
  `}
`;
