import { IStyledTheme } from '@interfaces/theme';
import { StatusBar as StatusBarExpo } from 'expo-status-bar';
import { useTheme } from 'styled-components/native';

export function StatusBar() {
  const theme = useTheme() as IStyledTheme;
  return <StatusBarExpo style={theme.title === 'dark' ? 'light' : 'dark'} />;
}
