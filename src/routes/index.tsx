import { NavigationContainer } from '@react-navigation/native';
import AppRoutes from './app.routes';
import AuthRoutes from './auth.routes';

const isAuthenticated = false;

export const Routes = () => {
  if (isAuthenticated) {
    return (
      <NavigationContainer>
        <AuthRoutes />
      </NavigationContainer>
    );
  } else {
    return (
      <NavigationContainer>
        <AppRoutes />
      </NavigationContainer>
    );
  }
};
