import { StyleSheet, TouchableOpacity } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { DefaultTheme } from 'styled-components';
import styled, { css } from 'styled-components/native';

export const Container = styled(TouchableOpacity).attrs({ activeOpacity: 0.8 })`
  width: 49%;
`;

export const CardContainer = styled.View`
  max-width: 100%;
  ${({ theme }: DefaultTheme) => css`
    justify-content: center;
    background-color: ${theme.colors.inputs};
    padding: ${RFValue(theme.spacings[2])}px;
    margin-top: ${RFValue(theme.spacings[1])}px;
    border-radius: ${RFValue(theme.sizes[2])}px;
    height: ${RFValue(theme.sizes[11])}px;
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
    font-size: ${RFValue(theme.fontSizes[4])}px;
    margin-right: ${RFValue(theme.spacings[2])}px;
  `}
`;

export const Text = styled.Text`
  ${({ theme }: DefaultTheme) => css`
    color: ${theme.colors.text};
    font-size: ${RFValue(theme.fontSizes[4])}px;
    font-family: ${theme.fonts.primary_400};
    margin-top: ${RFValue(theme.spacings[0])}px;
  `}
`;

export const CardRowContainer = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
`;

export const CardColumnContainer = styled.View`
  width: 100%;
`;

export const ClassInfoContainer = styled.View`
  ${({ theme }: DefaultTheme) => css`
    margin-left: ${RFValue(theme.spacings[2])}px;
    margin-right: ${RFValue(theme.spacings[2])}px;
  `}
`;

export const Styles = StyleSheet.create({
  playClassIcon: {
    marginRight: RFValue(4),
    marginLeft: RFValue(-8),
  },
  classTitle: {
    marginRight: RFValue(4),
  },
  card: {
    marginLeft: RFValue(2),
  },
});
