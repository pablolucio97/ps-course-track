import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { DefaultTheme } from 'styled-components';
import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  ${({ theme }: DefaultTheme) => css`
    width: 100%;
    flex: 1;
    background-color: ${theme.colors.background};
    padding: ${RFValue(theme.spacings[6])}px;
  `}
`;

export const ContentContainer = styled.View`
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

export const LogoContainer = styled.View`
  ${({ theme }: DefaultTheme) => css`
    width: 100%;
    align-items: center;
    position: absolute;
    bottom: ${RFValue(theme.spacings[13])}px;
    left: ${RFValue(theme.spacings[7])}px;
  `}
`;

export const Styles = StyleSheet.create({
  text: {
    textAlign: 'center',
  },
});
