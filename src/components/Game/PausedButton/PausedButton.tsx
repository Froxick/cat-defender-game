import { TouchableOpacity, View } from "react-native"
import { PausedButtonStyles } from "./PausedButtonStyles"
interface PausedButtonProps {
    onPress : ( ) => void
}
export const PausedButton = ({onPress} : PausedButtonProps) => {
    const styles = PausedButtonStyles
    return(
        <TouchableOpacity 
            style={styles.hudButton}
            onPress={onPress}
        >
            <View style={styles.buttonBlock}>
        
            </View>
            <View style={styles.buttonBlock}>
        
            </View>
        </TouchableOpacity>
    )
}