import { StyleSheet } from "react-native";

export const GameHudStyles = StyleSheet.create({
    hud: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 16,
        backgroundColor: 'rgba(0, 0, 0, 0)',
    },
    button: {
        marginTop: 60,
        marginLeft: 5
    },
    status: {
        position: 'absolute',
        left: 150,
        top:  85
    },
})