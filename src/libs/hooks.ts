import { useColorScheme } from 'react-native';

export const useDynamicColor = () => {
  const theme = useColorScheme();

  return (darkThemeValue: string, lightThemeValue: string) =>
    theme === 'dark' ? darkThemeValue : lightThemeValue;
};
