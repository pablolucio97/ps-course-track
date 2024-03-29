import { Feather, Ionicons } from '@expo/vector-icons';
import { IStyledTheme } from '@interfaces/theme';
import {
  BottomTabNavigationProp,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {
  StackNavigationProp,
  createStackNavigator,
} from '@react-navigation/stack';
import { Home } from '@screens/App/Home';
import { Profile } from '@screens/App/Profile';
import { VideoClasses } from '@screens/App/VideoClasses';
import { WatchClass } from '@screens/App/WatchClass';
import { generateUuid } from '@utils/uuid';
import { Platform } from 'react-native';
import { useTheme } from 'styled-components/native';

const BottomTabNavigator = createBottomTabNavigator();
const StackNavigator = createStackNavigator();

export type TAppRoutesTab = {
  Início: undefined;
  Aulas: undefined;
  Perfil: undefined;
};
export type TAppRoutesStackNavigator = {
  Home: undefined;
  AssistirAula: undefined;
};

export type TAppRoutesBottomTabs = BottomTabNavigationProp<TAppRoutesTab>;
export type TAppRoutesStack = StackNavigationProp<TAppRoutesStackNavigator>;

const AppRoutes = () => {
  const theme = useTheme() as IStyledTheme;

  const screensConfig = {
    headerShown: false,
    tabBarStyle: {
      backgroundColor: theme.colors.cards,
      height: Platform.OS === 'ios' ? theme.sizes[10] : theme.sizes[8],
      paddingBottom:
        Platform.OS === 'ios' ? theme.spacings[0] : theme.spacings[2],
      margin: theme.spacings[5],
      marginBottom: theme.spacings[7],
      borderRadius: theme.spacings[4],
    },
    tabBarHideOnKeyboard: true,
    tabBarLabelStyle: {
      display: 'none',
    },
  };

  const bottomTabsScreens = [
    {
      id: generateUuid(),
      name: 'Início',
      component: Home,
      options: screensConfig,
    },
    {
      id: generateUuid(),
      name: 'Aulas',
      component: VideoClasses,
      options: screensConfig,
    },
    {
      id: generateUuid(),
      name: 'Perfil',
      component: Profile,
      options: screensConfig,
    },
  ];

  function RenderBottomTabsNavigation() {
    return (
      <BottomTabNavigator.Navigator
        initialRouteName="Início"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused }) => {
            if (route.name === 'Início') {
              return (
                <Ionicons
                  name="home"
                  color={theme.colors.secondary}
                  size={focused ? theme.sizes[6] : theme.sizes[5]}
                />
              );
            }
            if (route.name === 'Aulas') {
              return (
                <Feather
                  name="play-circle"
                  color={theme.colors.secondary}
                  size={focused ? theme.sizes[6] : theme.sizes[5]}
                />
              );
            }
            if (route.name === 'Perfil') {
              return (
                <Feather
                  name="user"
                  color={theme.colors.secondary}
                  size={focused ? theme.sizes[6] : theme.sizes[5]}
                />
              );
            }
          },
        })}
      >
        {bottomTabsScreens.map(screen => (
          <BottomTabNavigator.Screen
            key={screen.id}
            name={screen.name}
            component={screen.component}
            options={screen.options as never}
          />
        ))}
      </BottomTabNavigator.Navigator>
    );
  }

  const stackScreens = [
    {
      id: generateUuid(),
      name: 'Home',
      component: RenderBottomTabsNavigation,
      options: screensConfig,
    },
    {
      id: generateUuid(),
      name: 'AssistirAula',
      component: WatchClass,
      options: screensConfig,
    },
  ];

  return (
    <StackNavigator.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}
    >
      {stackScreens.map(screen => (
        <StackNavigator.Screen
          key={screen.id}
          name={screen.name}
          component={screen.component as never}
        />
      ))}
    </StackNavigator.Navigator>
  );
};

export default AppRoutes;
