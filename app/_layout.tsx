// import FontAwesome from '@expo/vector-icons/FontAwesome';
// import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
// import { useFonts } from 'expo-font';
// import { Stack } from 'expo-router';
// import * as SplashScreen from 'expo-splash-screen';
// import { useEffect } from 'react';
// import 'react-native-reanimated';

import { Stack } from "expo-router";
import { StyleSheet, View } from "react-native";




export default function RootLayout() {
  const styles = StyleSheet.create({
    container: {
      flex: 1
    }
  })
  return(
    <View style={styles.container}>
      <Stack
        screenOptions={{
          headerShown: false
        }}
      >
        
      </Stack>
    </View>
  )
}