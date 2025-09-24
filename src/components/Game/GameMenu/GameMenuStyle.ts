import { COLORS } from "@/src/themes/Colors";
import { Dimensions, StyleSheet } from "react-native";
const windowHeight = Dimensions.get('window').height;
const windowWight = Dimensions.get('window').width
export const GameMenuStyles = StyleSheet.create({

    modalOverlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        alignContent:'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    modalContainer: {
        width: windowWight * 0.9,
        maxHeight: windowHeight * 0.7,
        minHeight: windowHeight * 0.28,
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
    contentContainer: {
        paddingTop: 40,
        paddingLeft: 20,
        justifyContent: 'center',
        alignContent: 'center',
        gap: 10
    },
    buttonsContainer : {
        flexDirection: 'row',
        gap: 50,
        marginTop: 50,
    },
    diffContainer: {
      
    },
    pointsContainer: {
        
    },
    statsText: {
        fontSize: 17,
        color: '#2e2e2eff'
    },
    points: {
        color: COLORS.HeaderTextColor,
        fontWeight: 'bold'
    }

})