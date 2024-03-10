import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { DefaultTheme } from 'styled-components';
import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  ${({ theme }: DefaultTheme) => css`
    width: 100%;
    flex-direction: row;
    align-items: center;
    border-radius: ${RFValue(theme.sizes[2])}px;
    background-color: ${theme.colors.cards};
    padding: ${RFValue(theme.sizes[4])}px;
    shadow-color: ${theme.colors.absolute_black};
    shadow-offset: ${RFValue(1)}px;
    shadow-opacity: 0.25;
    shadow-radius: ${RFValue(theme.sizes[2])}px;
  `}
`;
export const TextContainer = styled.View`
  margin: 0 ${RFValue(16)}px;
`;

export const AvatarContainer = styled.View`
  ${({ theme }: DefaultTheme) => css`
    justify-content: center;
    align-items: center;
    width: ${theme.sizes[10]}px;
    height: ${theme.sizes[10]}px;
    border-radius: ${theme.sizes[10] / 2}px;
    background-color: ${theme.colors.primaryVariant};
    overflow: hidden;
  `}
`;

export const AvatarTitle = styled.Text`
  ${({ theme }: DefaultTheme) => css`
    color: ${theme.colors.absolute_white};
    font-size: ${RFValue(theme.fontSizes[6])}px;
    font-family: ${theme.fonts.primary_500};
  `}
`;

export const UserTitleText = styled.Text`
  ${({ theme }: DefaultTheme) => css`
    color: ${theme.colors.title};
    font-size: ${RFValue(theme.fontSizes[6])}px;
    font-family: ${theme.fonts.primary_500};
  `}
`;

export const UserEmailText = styled.Text`
  ${({ theme }: DefaultTheme) => css`
    color: ${theme.colors.text};
    font-size: ${RFValue(theme.fontSizes[5])}px;
    font-family: ${theme.fonts.primary_400};
  `}
`;

export const Styles = StyleSheet.create({
  avatarImage: {
    width: '100%',
    height: '100%',
  },
});
