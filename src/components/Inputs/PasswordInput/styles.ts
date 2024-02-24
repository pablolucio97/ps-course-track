import { light } from '@themes/light';
import { TextInput, Platform } from 'react-native';
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

export const InputContainer = styled.View`
  ${({ theme }: DefaultTheme) => css`
    width: 100%;
    height: ${theme.sizes[10]}px;
    flex-direction: row;
    border-width: ${RFValue(1)}px;
    border-color: ${theme.colors.borders};
    border-radius: ${theme.sizes[2]}px;
    color: ${theme.colors.title};
    font-size: ${theme.fontSizes[6]}px;
  `}
`;

export const ChangePasswordVisibilityContainer = styled.View`
  ${({ theme }: DefaultTheme) => css`
    justify-content: center;
    align-items: center;
    border-radius: ${theme.spacings[0]}px;
    width: ${Platform.OS === 'ios' ? RFValue(32) : RFValue(40)}px;
    height: ${Platform.OS === 'ios' ? RFValue(44) : RFValue(48)}px;
    margin-left: ${RFValue(theme.spacings[4])}px;
  `}
`;

export const InputText = styled(TextInput)`
  ${({ theme }: DefaultTheme) => css`
    width: 80%;
    border-radius: ${theme.sizes[2]}px;
    font-family: ${theme.fonts.primary_400};
    color: ${theme.colors.title};
    font-size: ${theme.fontSizes[6]}px;
    padding-left: ${theme.spacings[2]}px;
  `}
`;

export const ChangePasswordVisibilityButton = styled.TouchableOpacity`
  ${({ theme }: DefaultTheme) => css`
    padding: ${theme.spacings[2]}px;
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
