import { RFValue } from 'react-native-responsive-fontsize';
import { DefaultTheme } from 'styled-components';
import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  ${({ theme }: DefaultTheme) => css`
    width: 100%;
    flex: 1;
    background-color: ${theme.colors.background};
    padding: ${RFValue(theme.spacings[5])}px;
    padding-top: ${RFValue(theme.spacings[9])}px;
  `}
`;

export const ScrollContainer = styled.ScrollView`
  ${({ theme }: DefaultTheme) => css`
    width: 100%;
    padding: ${RFValue(theme.spacings[0])}px;
    margin-bottom: ${RFValue(theme.spacings[0])}px;
  `}
`;

export const PreviousAndNextClassContainer = styled.View`
  ${({ theme }: DefaultTheme) => css`
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    padding: ${RFValue(theme.spacings[0])}px;
  `}
`;
