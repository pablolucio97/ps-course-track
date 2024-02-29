import { Feather, Ionicons } from '@expo/vector-icons';
import { IStyledTheme } from '@interfaces/theme';
import {
  BottomTabNavigationProp,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import { Home } from '@screens/Home';
import { VideoClasses } from '@screens/VideoClasses';
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
      backgroundColor: theme.colors.primary,
      minHeight: Platform.OS === 'ios' ? theme.sizes[13] : theme.sizes[12],
      padding: theme.spacings[3],
      paddingTop: Platform.OS === 'ios' ? theme.spacings[1] : 0,
      paddingBottom: theme.spacings[5],
    },
    tabBarHideOnKeyboard: true,
    tabBarLabelStyle: {
      color: theme.colors.absolute_white,
      fontSize: 14,
      marginTop: -theme.spacings[2],
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
                color={
                  focused
                    ? theme.colors.secondaryVariant
                    : theme.colors.absolute_white
                }
                size={focused ? theme.sizes[6] : theme.sizes[5]}
              />
            );
          }
          if (route.name === 'Aulas') {
            return (
              <Feather
                name="play-circle"
                color={
                  focused
                    ? theme.colors.secondaryVariant
                    : theme.colors.absolute_white
                }
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
