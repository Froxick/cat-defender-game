import { StyleSheet } from "react-native";

export const GameHealthUiStyle = StyleSheet.create({
    
    container: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        gap: 10,
        marginTop: 10
    },
    healthitem: {
        width: 20,
        height: 20,
        borderRadius: 10,
        marginHorizontal: 5,
    },
    filledHealth: {
        backgroundColor: 'red', 
    },
    emptyHealth: {
        backgroundColor: 'black', 
    },
})