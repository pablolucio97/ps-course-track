import { light } from '@themes/light';
import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { DefaultTheme } from 'styled-components';
import styled, { css } from 'styled-components/native';

const appTheme = light.theme;

export const Container = styled.View`
  ${({ theme }: DefaultTheme) => css`
    width: 100%;
    height: auto;
    background-color: ${theme.colors.background};
  `}
`;

export const InfoContainer = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.Text`
  ${({ theme }: DefaultTheme) => css`
    color: ${theme.colors.subtitle};
    font-size: ${RFValue(theme.fontSizes[6])}px;
    font-family: ${theme.fonts.primary_500};
  `}
`;

export const Text = styled.Text`
  ${({ theme }: DefaultTheme) => css`
    color: ${theme.colors.text};
    font-size: ${RFValue(theme.fontSizes[5])}px;
    font-family: ${theme.fonts.primary_400};
  `}
`;

export const Styles = StyleSheet.create({
  progressBar: {
    width: '100%',
    height: appTheme.sizes[2],
    marginTop: RFValue(appTheme.sizes[2]),
    marginBottom: RFValue(appTheme.sizes[2]),
    borderRadius: RFValue(appTheme.sizes[0]),
    borderColor: 'transparent',
  },
});
