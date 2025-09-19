import { StyleSheet } from "react-native";

export const PausedButtonStyles = StyleSheet.create({
    hudButton: {
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 7,
        alignContent:'center',
        alignItems: 'center',
        width: 50,
        height: 50,
        backgroundColor: 'grey',
        borderRadius: 5,
        marginTop: '10%',
        borderWidth: 1,
        borderColor: '#2f2f2fff',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    buttonBlock: {
        width: 13,
        borderRadius: 3,
        height: 32,
        backgroundColor: '#b8b8b8ff',
        borderWidth: 1,
        borderColor: '#4d4d4dff'
    },
})