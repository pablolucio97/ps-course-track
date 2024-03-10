import { StatusBar } from '@components/Miscellaneous/StatusBar';
import {
  Poppins_300Light,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
} from '@expo-google-fonts/poppins';
import {
  Roboto_300Light,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto';
import { Routes } from '@routes/index';
import { dark } from '@themes/dark';
import { light } from '@themes/light';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { ThemeProvider } from 'styled-components/native';

export default function App() {
  const { theme: lightTheme } = light;
  const { theme: darkTheme } = dark;

  const appBackground = darkTheme.colors.background;

  const appStyle = StyleSheet.create({
    app: {
      flex: 1,
      backgroundColor: appBackground,
    },
  });

  const [fontsLoaded] = useFonts({
    Roboto_300Light,
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
    Poppins_300Light,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
  });

  useEffect(() => {
    SplashScreen.preventAutoHideAsync();
  }, []);

  if (!fontsLoaded) {
    return null;
  } else {
    SplashScreen.hideAsync();
    return (
      <ThemeProvider theme={darkTheme}>
        <View style={appStyle.app}>
          <StatusBar />
          <Routes />
        </View>
      </ThemeProvider>
    );
  }
}
