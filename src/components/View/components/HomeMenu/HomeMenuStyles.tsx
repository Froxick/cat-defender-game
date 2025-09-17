import { COLORS } from "@/src/themes/Colors";
import { StyleSheet } from "react-native";

export const HomeMenuStyles = StyleSheet.create({
    container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingVertical: 50,
    gap: 50,
    paddingTop: '40%'
  },
  menuButtons: {
    width: '80%',
    alignItems: 'center',
  },
})