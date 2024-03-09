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
    marginTop: RFValue(appTheme.spacings[4]),
    marginBottom: RFValue(appTheme.spacings[4]),
  },
  supportText: {
    marginBottom: RFValue(appTheme.spacings[4]),
  },
  seeAllCommentariesText: {
    marginBottom: RFValue(appTheme.spacings[4]),
    marginTop: -RFValue(appTheme.spacings[3]),
    justifyContent: 'flex-start',
  },
  seeAllCommentariesModal: {
    width: getScreenWidth(),
    padding: RFValue(appTheme.spacings[3]),
    paddingBottom: RFValue(appTheme.spacings[9]),
  },
  writeCommentaryModal: {
    width: getScreenWidth(),
    padding: RFValue(appTheme.spacings[3]),
    paddingBottom: RFValue(appTheme.spacings[3]),
  },
  textAreaInput: {
    height: RFValue(appTheme.sizes[14]),
  },
  textAreaCharactersIndicator: {
    fontSize: RFValue(appTheme.fontSizes[4]),
    marginTop: RFValue(appTheme.spacings[12]),
    marginRight: RFValue(appTheme.spacings[1]),
    textAlign: 'right',
  },
});
