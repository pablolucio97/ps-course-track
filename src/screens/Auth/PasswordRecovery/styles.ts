import { RFValue } from 'react-native-responsive-fontsize';
import { DefaultTheme } from 'styled-components';
import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  ${({ theme }: DefaultTheme) => css`
    width: 100%;
    flex: 1;
    justify-content: space-evenly;
    align-items: center;
    background-color: ${theme.colors.background};
    padding: ${RFValue(theme.spacings[4])}px;
  `}
`;

export const FormContainer = styled.ScrollView`
  ${({ theme }: DefaultTheme) => css`
    width: 100%;
    padding: ${RFValue(theme.spacings[2])}px;
  `}
`;
