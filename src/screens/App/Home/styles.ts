import { light } from '@themes/light';
import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { DefaultTheme } from 'styled-components';
import styled, { css } from 'styled-components/native';

const appTheme = light.theme;

export const Container = styled.View`
  ${({ theme }: DefaultTheme) => css`
    width: 100%;
    flex: 1;
    align-items: center;
    background-color: ${theme.colors.background};
    padding: ${RFValue(theme.spacings[5])}px;
    padding-top: ${RFValue(theme.spacings[9])}px;
  `}
`;

export const TextContainer = styled.ScrollView`
  ${({ theme }: DefaultTheme) => css`
    width: 100%;
    padding: 0 ${RFValue(theme.spacings[2])}px 0;
  `}
`;

export const TitleContainer = styled.View`
  ${({ theme }: DefaultTheme) => css`
    width: 100%;
    padding: 0 ${RFValue(theme.spacings[2])}px 0;
  `}
`;

export const Styles = StyleSheet.create({
  courseImage: {
    width: '100%',
    borderRadius: RFValue(8),
    aspectRatio: '16/9',
    marginTop: RFValue(appTheme.spacings[3]),
    marginBottom: RFValue(appTheme.spacings[3]),
  },
});
