import { StyleSheet } from "react-native";

export const GameHudStatusStyles = (diffId: number) => {
    let colors = {
        text: '',
        back: ''
    }
    switch(diffId) {
       case 1: 
            colors.text = '#2E7D32';  
            colors.back = '#81C78480'; 
            break;
        case 2: 
            colors.text = '#f5ab17ff';  
            colors.back = '#e4d12a80'; 
            break;
        case 3: 
            colors.text = '#C62828';  
            colors.back = '#EF9A9A80'; 
            break;
    }
    return(
                StyleSheet.create({
                    container: {
                        backgroundColor: colors.back,
                        paddingHorizontal: 35,
                        paddingVertical: 10,
                        borderRadius: 15
                    },
                    text: {
                         color: colors.text,
                        fontWeight: 'bold',
                        textAlign: 'center'
                    }
                })
            )
    
}