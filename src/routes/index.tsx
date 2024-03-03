import { NavigationContainer } from '@react-navigation/native';
import AppRoutes from './app.routes';
import AuthRoutes from './auth.routes';

const isAuthenticated = false;

const navigatorThemeStyle = {
  colors: {
    background: 'transparent',
  },
};

export const Routes = () => {
  if (!isAuthenticated) {
    return (
      <NavigationContainer theme={navigatorThemeStyle as never}>
        <AuthRoutes />
      </NavigationContainer>
    );
  } else {
    return (
      <NavigationContainer theme={navigatorThemeStyle as never}>
        <AppRoutes />
      </NavigationContainer>
    );
  }
};
