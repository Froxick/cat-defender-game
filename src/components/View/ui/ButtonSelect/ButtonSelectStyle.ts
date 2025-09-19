import { StyleSheet } from "react-native";

export const ButtonSelectStyles = StyleSheet.create({
    
    buttonContainer: {
        flexDirection: "row",
        alignItems: "center",
    },
    mainButton: {
        overflow: 'hidden',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        padding: 5
    },
    buttonGradient: {
        alignItems: "center",
        justifyContent: "center",
        padding: 12,
        width: 240,
        borderRadius: 15,
        opacity: 0.6
    },
    selectedButton: {
        
        
        opacity: 1
    },
    buttonText: {
        color: "white",
        fontSize: 16,
        fontWeight: "bold",
    },
    arrowButton: {
        padding: 5,
        position: 'absolute',
        right: -75,
        backgroundColor: "rgba(255, 255, 255, 0.2)",
        borderRadius: 8,
    },
    descriptionContainer: {
        width: '100%',
        backgroundColor: "#efebeb43",
        borderRadius: 8,
        marginTop: 10,
    },
    descriptionText: {
        padding: 15,
        fontSize: 14,
        color: "#e9e9e9ff",
    },
    buttonItem: {
        flexDirection: 'row',
        
        gap: 5,
        alignContent: 'center',
        alignItems:'center'
    }
})