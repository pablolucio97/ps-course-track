export interface IStyledTheme {
  title: string;
  colors: {
    absolute_black: string;
    absolute_white: string;
    absolute_gray: string;
    alert: string;
    background: string;
    borders: string;
    cards: string;
    disabled: string;
    error: string;
    info: string;
    inputs: string;
    placeholder: string;
    primary: string;
    primaryVariant: string;
    secondary: string;
    secondaryVariant: string;
    success: string;
    subtitle: string;
    text: string;
    title: string;
  };
  fonts: {
    primary_300: string;
    primary_400: string;
    primary_500: string;
    primary_700: string;
    secondary_300: string;
    secondary_400: string;
    secondary_500: string;
    secondary_600: string;
    secondary_700: string;
  };
  spacings: number[];
  sizes: number[];
}
