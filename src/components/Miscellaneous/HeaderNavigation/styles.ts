import { RFValue } from 'react-native-responsive-fontsize';
import { DefaultTheme } from 'styled-components';
import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ContentContainer = styled.View`
  ${({ theme }: DefaultTheme) => css`
    width: 100%;
    padding-left: ${RFValue(theme.spacings[2])}px;
    padding-right: ${RFValue(theme.spacings[2])}px;
    flex-direction: row;
    align-items: center;
  `}
`;

export const TitleContainer = styled.View`
  width: 80%;
`;

export const LogoContainer = styled.View`
  ${({ theme }: DefaultTheme) => css`
    max-width: ${RFValue(theme.spacings[8])}px;
    max-height: ${RFValue(theme.spacings[8])}px;
    justify-content: center;
    align-items: center;
    margin-right: ${RFValue(theme.spacings[5])}px;
  `}
`;

export const Title = styled.Text`
  ${({ theme }: DefaultTheme) => css`
    font-size: ${RFValue(theme.fontSizes[8])}px;
    font-family: ${theme.fonts.primary_700};
    margin-left: ${RFValue(theme.spacings[3])}px;
    color: ${theme.colors.title};
  `}
`;

export const BackButton = styled.TouchableOpacity``;
