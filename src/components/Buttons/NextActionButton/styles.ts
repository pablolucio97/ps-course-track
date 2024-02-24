import { RFValue } from 'react-native-responsive-fontsize';
import { DefaultTheme } from 'styled-components';
import styled, { css } from 'styled-components/native';

interface ButtonProps extends DefaultTheme {
  disabled?: boolean;
}

export const Container = styled.TouchableOpacity<ButtonProps>`
  ${({ theme }: DefaultTheme) => css`
    width: 100%;
    height: ${RFValue(theme.sizes[9])}px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border-radius: ${RFValue(8)}px;
    background-color: ${theme.colors.cards};
    opacity: ${({ disabled }: ButtonProps) => (disabled ? 0.64 : 1)};
  `}
`;

export const ContentContainer = styled.TouchableOpacity<ButtonProps>`
  ${({ theme }: DefaultTheme) => css`
    width: 100%;
    height: ${RFValue(theme.sizes[9])}px;
    flex-direction: row;
    align-items: center;
    border-radius: ${RFValue(theme.sizes[2])}px;
    background-color: ${theme.colors.cards};
    opacity: ${({ disabled }: ButtonProps) => (disabled ? 0.64 : 1)};
    padding-left: ${RFValue(theme.sizes[5])}px;
  `}
`;

export const Title = styled.Text`
  ${({ theme }: DefaultTheme) => css`
    color: ${theme.colors.title};
    font-size: ${RFValue(theme.fontSizes[5])}px;
    font-family: ${theme.fonts.secondary_600};
    margin-right: ${RFValue(theme.sizes[2])}px;
  `}
`;
