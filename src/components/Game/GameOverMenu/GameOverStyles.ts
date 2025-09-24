import { COLORS } from "@/src/themes/Colors";
import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";
const windowHeight = Dimensions.get('window').height;
const windowWight = Dimensions.get('window').width
export const GameOverStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        alignContent:'center',
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
    },
    content: {
        width: windowWight * 0.9,
        maxHeight: windowHeight * 0.8,
        minHeight: windowHeight * 0.3,
        backgroundColor: '#f8f3f4ff',
        borderRadius: 20,
        padding: 20,
        shadowColor: '#000',
        shadowOffset: {
        width: 0,
        height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        
    },
    titleContainer: {
        justifyContent:'center',
        textAlign:'center',
        alignContent:'center',
        alignItems: 'center'
    },
    title: {
            fontSize: 30,
            fontWeight: 'bold',
            color:COLORS.HeaderTextColor,
            textShadowColor: 'rgba(0, 0, 0, 0.1)',
            textShadowOffset: { width: 2, height: 2 },
            textShadowRadius: 5,
    },
    buttons: {
        marginTop: 60,
        justifyContent:'center'
    },
    button:{

    }
})