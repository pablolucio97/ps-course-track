import { LinearGradient } from 'expo-linear-gradient';
import { RFValue } from 'react-native-responsive-fontsize';
import { DefaultTheme } from 'styled-components';
import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  ${({ theme }: DefaultTheme) => css`
    width: 100%;
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: ${theme.colors.primary};
  `}
`;

export const GradientContainer = styled(LinearGradient)`
  width: 100%;
  flex: 1;
`;

export const LogoTitle = styled.Text`
  ${({ theme }: DefaultTheme) => css`
    font-size: ${RFValue(theme.sizes[5])}px;
    font-family: ${theme.fonts.primary_700};
    color: ${theme.colors.absolute_white};
  `}
`;
