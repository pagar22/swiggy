import { React } from 'react';
import { StyleSheet } from 'react-native';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { RestaurantScreen } from './src/features/restaurants/screens/restaurants.screen';
import { ThemeProvider } from 'styled-components/native';
import { theme } from './src/infrastructure/theme'

import { useFonts as useOswald, Oswald_400Regular, } from '@expo-google-fonts/oswald';
import { useFonts as useLato, Lato_400Regular, Lato_700Bold, } from '@expo-google-fonts/lato';

export default function App() {

  const [loadOswald] = useOswald({ Oswald_400Regular, });
  const [loadLato] = useLato({ Lato_400Regular, Lato_700Bold, });

  if (!loadOswald || !loadLato) return null;

  return (
    <>
      <ThemeProvider theme={theme}>
        <RestaurantScreen />
      </ThemeProvider>
      <ExpoStatusBar style='auto' />
    </>

  );
}

const styles = StyleSheet.create({

});
