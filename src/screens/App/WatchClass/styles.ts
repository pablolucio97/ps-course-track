import { light } from '@themes/light';
import { getScreenWidth } from '@utils/layout';
import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { DefaultTheme } from 'styled-components';
import styled, { css } from 'styled-components/native';

const { theme: appTheme } = light;

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

export const PreviousAndNextClassContainer = styled.View`
  ${({ theme }: DefaultTheme) => css`
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    padding: ${RFValue(theme.spacings[0])}px;
  `}
`;

export const Styles = StyleSheet.create({
  video: {
    width: '100%',
    aspectRatio: '16/9',
    backgroundColor: appTheme.colors.absolute_black,
    marginTop: appTheme.spacings[4],
    marginBottom: appTheme.spacings[4],
  },
  supportText: {
    marginBottom: appTheme.spacings[4],
  },
  seeAllCommentariesText: {
    marginBottom: appTheme.spacings[4],
    marginTop: -appTheme.spacings[3],
    justifyContent: 'flex-start',
  },
  modal: {
    width: getScreenWidth(),
    padding: RFValue(12),
    paddingBottom: RFValue(48),
  },
});
