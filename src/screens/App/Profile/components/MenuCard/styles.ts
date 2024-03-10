import { RFValue } from 'react-native-responsive-fontsize';
import { DefaultTheme } from 'styled-components';
import styled, { css } from 'styled-components/native';
import { getScreenHeight } from 'utils/layout';

const screenHeight = getScreenHeight();

export const Container = styled.View`
  ${({ theme }: DefaultTheme) => css`
    width: 100%;
    align-items: center;
    border-radius: ${RFValue(10)}px;
    background-color: ${theme.colors.cards};
    elevation: 2;
    padding: ${RFValue(24)}px;
  `}
`;

export const Divider = styled.View`
  width: 100%;
  height: ${RFValue(1)}px;
  background-color: rgba(0, 0, 0, 0.2);
  margin: ${RFValue(8)}px 0;
`;

export const ContentContainer = styled.TouchableOpacity`
  width: 100%;
  flex-direction: column;
  justify-content: center;
`;

export const TextContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const DataContainer = styled.View`
  ${({ theme }: DefaultTheme) => css`
    flex-direction: row;
    align-items: center;
    height: ${screenHeight < 670
      ? RFValue(theme.sizes[7])
      : RFValue(theme.sizes[6])}px;
    justify-content: space-between;
  `}
`;

export const Text = styled.Text`
  ${({ theme }: DefaultTheme) => css`
    color: ${theme.colors.text};
    font-size: ${RFValue(theme.fontSizes[4])}px;
    font-family: ${theme.fonts.primary_400};
    margin-left: ${RFValue(theme.spacings[4])}px;
  `}
`;
