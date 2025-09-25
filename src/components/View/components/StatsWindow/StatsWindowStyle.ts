import { COLORS } from "@/src/themes/Colors";
import { StyleSheet } from "react-native";

export const StatsWindowStyles = StyleSheet.create({
    container: {
        
    },
    contentContainer: {
      justifyContent: 'center',
      alignContent: 'center',
      alignItems: 'center',
    },
    statsContainer: {
        gap: 5,
        backgroundColor: '#ffe0e0ff',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        width: 300,
        height: 120,
        borderRadius: 20
    },
    statsNumber: {
        color: COLORS.HeaderTextColor,
        fontWeight: 'bold'
    },
    statsText: {
        fontSize: 16
    }
})