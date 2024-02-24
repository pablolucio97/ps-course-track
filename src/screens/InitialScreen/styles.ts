import { getScreenHeightPercent } from '@utils/layout';
import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { DefaultTheme } from 'styled-components';
import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  ${({ theme }: DefaultTheme) => css`
    width: 100%;
    height: ${RFValue(getScreenHeightPercent(100))}px;
    justify-content: center;
    align-items: center;
    background-color: ${theme.colors.background};
  `}
`;

export const ImageContainer = styled.View`
  width: 100%;
  flex: 1;
`;

export const FormContainer = styled.View`
  ${({ theme }: DefaultTheme) => css`
    width: 100%;
    min-height: ${RFValue(getScreenHeightPercent(70))}px;
    align-items: center;
    padding: ${theme.spacings[7]}px ${theme.spacings[7]}px
      ${theme.spacings[12]}px;
    background-color: ${theme.colors.background};
    border-top-left-radius: ${theme.sizes[6]}px;
    border-top-right-radius: ${theme.sizes[6]}px;
    margin-top: -${theme.sizes[12]}px;
  `}
`;

export const Text = styled.Text`
  ${({ theme }: DefaultTheme) => css`
    font-size: ${RFValue(theme.sizes[3])}px;
    font-family: ${theme.fonts.secondary_500};
    color: ${theme.colors.secondary};
  `}
`;

export const Styles = StyleSheet.create({
  image: {
    flex: 1,
    width: '100%',
  },
});
