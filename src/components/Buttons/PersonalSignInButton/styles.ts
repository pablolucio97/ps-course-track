import { RFValue } from 'react-native-responsive-fontsize';
import UserAvatar from 'react-native-user-avatar';
import { DefaultTheme } from 'styled-components';
import styled, { css } from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  ${({ theme }: DefaultTheme) => css`
    width: 100%;
    height: ${RFValue(theme.sizes[10])}px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-color: ${theme.colors.primary};
    border-radius: ${RFValue(theme.sizes[2])}px;
  `}
`;

export const Title = styled.Text`
  ${({ theme }: DefaultTheme) => css`
    color: ${theme.colors.absolute_white};
    font-size: ${RFValue(theme.fontSizes[6])}px;
    font-family: ${theme.fonts.secondary_600};
    margin-left: ${RFValue(theme.sizes[4])}px;
  `}
`;

export const AvatarUser = styled(UserAvatar as never)`
  ${({ theme }: DefaultTheme) => css`
    width: ${RFValue(theme.sizes[7])}px;
    height: ${RFValue(theme.sizes[7])}px;
    border-radius: ${RFValue(theme.sizes[8])}px;
  `}
`;
