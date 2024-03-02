import { Feather, Ionicons } from '@expo/vector-icons';
import { IStyledTheme } from '@interfaces/theme';
import {
  BottomTabNavigationProp,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import { Home } from '@screens/App/Home';
import { VideoClasses } from '@screens/App/VideoClasses';
import { Platform } from 'react-native';
import { useTheme } from 'styled-components/native';

const BottomTab = createBottomTabNavigator();

export type TAppRoutes = {
  Início: undefined;
  Aulas: undefined;
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
      paddingTop: Platform.OS === 'ios' ? theme.spacings[1] : theme.spacings[2],
      paddingBottom:
        Platform.OS === 'ios' ? theme.spacings[5] : theme.spacings[3],
    },
    tabBarHideOnKeyboard: true,
    tabBarLabelStyle: {
      color: theme.colors.primary,
      fontSize: Platform.OS === 'ios' ? 14 : 12,
      marginTop:
        Platform.OS === 'ios' ? -theme.spacings[2] : -theme.spacings[1],
    },
  };

  const screens = [
    {
      id: 1,
      name: 'Início',
      component: Home,
      options: screensConfig,
    },
    {
      id: 1,
      name: 'Aulas',
      component: VideoClasses,
      options: screensConfig,
    },
  ];

  return (
    <BottomTab.Navigator
      initialRouteName="Início"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          if (route.name === 'Início') {
            return (
              <Ionicons
                name="home"
                color={theme.colors.primary}
                size={focused ? theme.sizes[6] : theme.sizes[5]}
              />
            );
          }
          if (route.name === 'Aulas') {
            return (
              <Feather
                name="play-circle"
                color={theme.colors.primary}
                size={focused ? theme.sizes[6] : theme.sizes[5]}
              />
            );
          }
        },
      })}
    >
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
