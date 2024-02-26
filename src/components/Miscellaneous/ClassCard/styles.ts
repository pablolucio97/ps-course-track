import { getScreenHeightPercent } from '@utils/layout';
import { TouchableOpacity } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { DefaultTheme } from 'styled-components';
import styled, { css } from 'styled-components/native';

export const Container = styled(TouchableOpacity).attrs({ activeOpacity: 0.8 })`
  width: 100%;
`;

export const CardContainer = styled.View`
  max-width: 100%;
  ${({ theme }: DefaultTheme) => css`
    background-color: ${theme.colors.cards};
    padding: ${RFValue(theme.spacings[4])}px;
    margin-top: ${RFValue(theme.spacings[2])}px;
    border-radius: ${RFValue(theme.sizes[2])}px;
  `}
`;

export const CardTitle = styled.Text`
  ${({ theme }: DefaultTheme) => css`
    color: ${theme.colors.text};
    font-size: ${RFValue(theme.fontSizes[6])}px;
    font-family: ${theme.fonts.primary_700};
  `}
`;

export const ClassTitle = styled(CardTitle)`
  ${({ theme }: DefaultTheme) => css`
    font-size: ${RFValue(theme.fontSizes[5])}px;
  `}
`;

export const Text = styled.Text`
  ${({ theme }: DefaultTheme) => css`
    color: ${theme.colors.text};
    font-size: ${RFValue(theme.fontSizes[5])}px;
    font-family: ${theme.fonts.primary_400};
    margin-top: ${RFValue(theme.spacings[0])}px;
  `}
`;

export const CardRowContainer = styled.View`
  width: ${RFValue(getScreenHeightPercent(80))}px;
  flex-direction: row;
  align-items: center;
`;

export const ClassInfoContainer = styled.View`
  ${({ theme }: DefaultTheme) => css`
    max-width: 100%;
    margin-left: ${RFValue(theme.spacings[2])}px;
    margin-right: ${RFValue(theme.spacings[9])}px;
  `}
`;
