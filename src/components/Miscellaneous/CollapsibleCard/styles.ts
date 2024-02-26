import { light } from '@themes/light';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { DefaultTheme } from 'styled-components';
import styled, { css } from 'styled-components/native';

const appTheme = light.theme;

export const CollapsibleExpandedContainer = styled.View`
  ${({ theme }: DefaultTheme) => css`
    width: 100%;
    height: auto;
    background-color: ${theme.colors.background};
    padding: ${theme.spacings[2]}px;
    border-radius: ${theme.spacings[3]}px;
    elevation: 8;
    shadow-color: ${theme.colors.absolute_black};
    shadow-offset: ${RFValue(1)}px;
    shadow-opacity: 0.25;
    shadow-radius: ${RFValue(4)}px;
  `}
`;

export const CollapsibleCollapsedContainer = styled.View`
  ${({ theme }: DefaultTheme) => css`
    width: 100%;
    height: auto;
    padding: ${theme.spacings[2]}px;
  `}
`;

export const Title = styled.Text`
  ${({ theme }: DefaultTheme) => css`
    color: ${theme.colors.subtitle};
    font-size: ${RFValue(theme.fontSizes[5])}px;
    font-family: ${theme.fonts.primary_500};
  `}
`;

export const Text = styled.Text`
  ${({ theme }: DefaultTheme) => css`
    color: ${theme.colors.text};
    font-size: ${RFValue(theme.fontSizes[5])}px;
    font-family: ${theme.fonts.primary_400};
    margin-top: ${RFValue(theme.fontSizes[0])}px;
  `}
`;

export const Button = styled(TouchableOpacity).attrs({ activeOpacity: 0.8 })`
  ${({ theme }: DefaultTheme) => css`
    margin-top: ${RFValue(theme.fontSizes[2])}px;
  `}
`;

export const ButtonTitle = styled.Text`
  ${({ theme }: DefaultTheme) => css`
    color: ${theme.colors.text};
    font-size: ${RFValue(theme.fontSizes[4])}px;
    font-family: ${theme.fonts.primary_500};
  `}
`;

export const Styles = StyleSheet.create({
  collapsibleContainer: {
    width: '100%',
    borderRadius: appTheme.sizes[3],
    padding: appTheme.spacings[3],
  },
});
