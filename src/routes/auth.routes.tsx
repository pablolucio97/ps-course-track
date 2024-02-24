import { InitialScreen } from '@screens/InitialScreen';
import { PasswordRecovery } from '@screens/PasswordRecovery';
import { PolicyPrivacy } from '@screens/PolicyPrivacy';
import { SecureAuthenticationScreen } from '@screens/SecureAuthenticationScreen';
import { SignUp } from '@screens/SignUp';
import { SplashScreen } from '@screens/SplashScreen';
import { TermsAndPoliticsSelector } from '@screens/TermsAndPolicySelector';
import { UseTerms } from '@screens/UseTerms';

import {
  StackNavigationProp,
  createStackNavigator,
} from '@react-navigation/stack';
import { NewUpdateStore } from '@screens/NewUpdateStore';

export type TAuthRoutes = {
  SplashScreen: undefined;
  InitialScreen: undefined;
  SecureAuthenticationScreen: undefined;
  SignUp: undefined;
  PasswordRecovery: undefined;
  UseTerms: undefined;
  PolicyPrivacy: undefined;
  NewUpdateStore: undefined;
};

export type TAuthRoutesStack = StackNavigationProp<TAuthRoutes>;

const AuthRoutes = () => {
  const StackNavigator = createStackNavigator<TAuthRoutes>();

  const screensConfig = {
    headerShown: false,
    tabBarStyle: {
      display: 'none',
    },
  };

  const authRoutes = [
    {
      name: 'SplashScreen',
      component: SplashScreen,
      options: screensConfig,
    },
    {
      name: 'InitialScreen',
      component: InitialScreen,
      options: screensConfig,
    },
    {
      name: 'SecureAuthenticationScreen',
      component: SecureAuthenticationScreen,
      options: screensConfig,
    },
    {
      name: 'SignUp',
      component: SignUp,
      options: screensConfig,
    },
    {
      name: 'PasswordRecovery',
      component: PasswordRecovery,
      options: screensConfig,
    },
    {
      name: 'TermsAndPoliticsSelector',
      component: TermsAndPoliticsSelector,
      options: screensConfig,
    },
    {
      name: 'UseTerms',
      component: UseTerms,
      options: screensConfig,
    },
    {
      name: 'PolicyPrivacy',
      component: PolicyPrivacy,
      options: screensConfig,
    },
    {
      name: 'NewUpdateStore',
      component: NewUpdateStore,
      options: screensConfig,
    },
  ];

  return (
    <StackNavigator.Navigator initialRouteName="SplashScreen">
      {authRoutes.map(route => (
        <StackNavigator.Screen
          key={route.name}
          name={route.name as never}
          component={route.component}
          options={route.options as never}
        />
      ))}
    </StackNavigator.Navigator>
  );
};

export default AuthRoutes;
