import { TouchableOpacity } from 'react-native';
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

export const CollapsibleExpandedContainer = styled.View`
  ${({ theme }: DefaultTheme) => css`
    width: 100%;
    height: auto;
    padding: ${RFValue(theme.spacings[3])}px;
    background-color: ${theme.colors.background};
    border-radius: ${theme.spacings[3]}px;
    elevation: 8;
    shadow-color: ${theme.colors.absolute_black};
    shadow-offset: ${RFValue(1)}px;
    shadow-opacity: 0.25;
    shadow-radius: ${RFValue(4)}px;
    margin-bottom: ${RFValue(theme.spacings[4])}px;
  `}
`;

export const CollapsibleCollapsedContainer = styled.View`
  ${({ theme }: DefaultTheme) => css`
  width: 100%;
  height: auto;
  padding: ${theme.spacings[3]}px;
  background-color: ${theme.colors.error};
  border-radius: ${theme.spacings[3]}px;
  elevation: 8;
  shadow-color: ${theme.colors.absolute_black};
  shadow-offset: ${RFValue(1)}px;
  shadow-opacity: 0.25;
    shadow-radius: ${RFValue(4)}px;
    margin-bottom: ${RFValue(theme.spacings[4])}px)};
  `}
`;

export const Button = styled(TouchableOpacity).attrs({ activeOpacity: 0.8 })`
  ${({ theme }: DefaultTheme) => css`
    width: 100%;
    height: auto;
    padding: ${theme.spacings[2]}px;
  `}
`;
