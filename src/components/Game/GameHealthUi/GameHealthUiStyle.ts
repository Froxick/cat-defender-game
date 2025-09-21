import { StyleSheet } from "react-native";

export const GameHealthUiStyle = StyleSheet.create({
    
    container: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      
        gap: 10,
        marginTop: 10
    },
    healthitem: {
        width: 60,
        height: 60,
    },
    filledHealth: {
        // backgroundColor: 'red', 
    },
    emptyHealth: {
        // backgroundColor: 'black', 
    },
})