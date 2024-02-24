import { light } from '@themes/light';
import MaskInput from 'react-native-mask-input';
import { RFValue } from 'react-native-responsive-fontsize';
import { DefaultTheme } from 'styled-components';
import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  ${({ theme }: DefaultTheme) => css`
    width: 100%;
    height: ${theme.sizes[12]}px;
    align-items: flex-start;
    margin-bottom: ${theme.spacings[5]}px;
  `}
`;

export const TextInputEl = styled(MaskInput)`
  ${({ theme }: DefaultTheme) => css`
    width: 100%;
    height: ${theme.sizes[10]}px;
    padding-left: ${theme.spacings[2]}px;
    border-width: ${RFValue(1)}px;
    border-color: ${theme.colors.borders};
    background-color: ${theme.colors.background};
    border-radius: ${theme.sizes[2]}px;
    font-family: ${theme.fonts.primary_400};
    margin-top: ${theme.spacings[0]}px;
    color: ${theme.colors.title};
    font-size: ${theme.fontSizes[6]}px;
  `}
`;

export const Label = styled.Text`
  ${({ theme }: DefaultTheme) => css`
    margin-bottom: ${theme.spacings[0]}px;
    background-color: ${theme.colors.background};
    font-family: ${theme.fonts.primary_500};
    margin-top: ${theme.spacings[0]}px;
    color: ${theme.colors.title};
    font-size: ${theme.fontSizes[6]}px;
  `}
`;

export const FocusedStyle = {
  borderColor: light.theme.colors.primaryVariant,
};
