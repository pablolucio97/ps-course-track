import { NavigationContainer } from '@react-navigation/native';
import { useAuthenticationStore } from '@store/Auth';
import AppRoutes from './app.routes';
import AuthRoutes from './auth.routes';

const navigatorThemeStyle = {
  colors: {
    background: 'transparent',
  },
};

export const Routes = () => {
  const { isAuthenticated } = useAuthenticationStore();

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
