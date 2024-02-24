import { RFValue } from 'react-native-responsive-fontsize';
import { DefaultTheme } from 'styled-components';
import styled, { css } from 'styled-components/native';

interface ButtonProps extends DefaultTheme {
  disabled?: boolean;
}

export const Container = styled.TouchableOpacity`
  ${({ theme }: DefaultTheme) => css`
    width: 100%;
    height: ${RFValue(theme.sizes[8])}px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-color: ${({ disabled }: ButtonProps) =>
      disabled ? theme.colors.disabled : 'transparent'};
    border-radius: ${RFValue(theme.sizes[2])}px;
  `}
`;

export const Title = styled.Text`
  ${({ theme }: DefaultTheme) => css`
    color: ${theme.colors.primaryVariant};
    font-size: ${RFValue(theme.fontSizes[4])}px;
    font-family: ${theme.fonts.secondary_600};
  `}
`;
