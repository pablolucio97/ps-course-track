import { IStyledTheme } from '@interfaces/theme';
import {
  BottomTabNavigationProp,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import { Home } from '@screens/Home';
import { Platform } from 'react-native';
import { useTheme } from 'styled-components/native';

const BottomTab = createBottomTabNavigator();

export type TAppRoutes = {
  Home: undefined;
};

export type TAppRoutesBottomTabs = BottomTabNavigationProp<TAppRoutes>;

const AppRoutes = () => {
  const theme = useTheme() as IStyledTheme;

  const screensConfig = {
    headerShown: false,
    tabBarStyle: {
      backgroundColor: theme.colors.secondary,
      minHeight: Platform.OS === 'ios' ? theme.sizes[13] : theme.sizes[12],
      padding: theme.spacings[3],
      paddingTop: Platform.OS === 'ios' ? theme.spacings[3] : 0,
      paddingBottom: theme.spacings[3],
    },
    tabBarHideOnKeyboard: true,
  };

  const screens = [
    {
      id: 1,
      name: 'Home',
      component: Home,
      options: screensConfig,
    },
  ];

  return (
    <BottomTab.Navigator initialRouteName="Home">
      {screens.map(screen => (
        <BottomTab.Screen
          key={screen.id}
          name={screen.name}
          component={screen.component}
          options={screen.options as never}
        />
      ))}
    </BottomTab.Navigator>
  );
};

export default AppRoutes;
