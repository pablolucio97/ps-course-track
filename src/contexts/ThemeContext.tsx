import { IStyledTheme } from '@interfaces/theme';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { dark } from '@themes/dark';
import { light } from '@themes/light';
import {
  ReactNode,
  createContext,
  useCallback,
  useEffect,
  useState,
} from 'react';
import { StyleSheet, View } from 'react-native';
import { ThemeProvider } from 'styled-components/native';

interface IThemeContext {
  theme: {
    theme: IStyledTheme;
  };
  changeTheme: () => void;
}

interface IThemeProvider {
  children: ReactNode;
}

export const ThemeContext = createContext({} as IThemeContext);

export const AppThemeProvider = ({ children }: IThemeProvider) => {
  const [theme, setTheme] = useState(dark);

  const { theme: appTheme } = theme;
  const { theme: lightTheme } = light;
  const { theme: darkTheme } = dark;

  const loadCurrentTheme = useCallback(async () => {
    try {
      const storedTheme = await AsyncStorage.getItem('@application:theme');
      if (storedTheme) {
        setTheme(JSON.parse(storedTheme));
      }
    } catch (error) {
      console.log(
        `[${loadCurrentTheme}] Failed to load current theme from storage: ${error}`
      );
    }
  }, []);

  const changeTheme = useCallback(async () => {
    const exchangedTheme = appTheme.title === 'dark' ? light : dark;
    setTheme(exchangedTheme);
    await AsyncStorage.setItem(
      '@application:theme',
      JSON.stringify(exchangedTheme)
    );
  }, [appTheme.title]);

  useEffect(() => {
    changeTheme;
  }, [changeTheme]);

  useEffect(() => {
    loadCurrentTheme();
  }, [loadCurrentTheme]);

  const appStyle = StyleSheet.create({
    app: {
      flex: 1,
      backgroundColor:
        appTheme.title === 'dark'
          ? darkTheme.colors.background
          : lightTheme.colors.background,
    },
  });

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      <ThemeProvider theme={appTheme.title === 'dark' ? darkTheme : lightTheme}>
        <View style={appStyle.app}>{children}</View>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};
