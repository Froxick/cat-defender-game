import { LinearGradient } from "expo-linear-gradient"
import { Text, TouchableOpacity } from "react-native"
import { ButtonMenuStyles } from "./ButtonMenuStyle"
interface ButtonMenuProps {
    navigateTo: () => void,
    title: string,
    gradientColors: {
        one: string,
        two: string
    },
}
export const ButtonMenu = ({...props}: ButtonMenuProps) => {
    const styles = ButtonMenuStyles
    return(
        <TouchableOpacity 
            style={styles.button}
            onPress={() => props.navigateTo()}
        >
            <LinearGradient
                colors={[props.gradientColors.one, props.gradientColors.two]}
                style={styles.buttonGradient}
            >
                <Text style={styles.buttonText}>{props.title}</Text>
                   
            </LinearGradient>
        </TouchableOpacity>
    )
}