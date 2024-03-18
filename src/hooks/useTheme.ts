import { ThemeContext } from '@contexts/ThemeContext';
import { useContext } from 'react';

export const useAppTheme = () => {
  return useContext(ThemeContext);
};
