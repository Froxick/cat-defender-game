import { LinearGradient } from "expo-linear-gradient"
import { Text, TouchableOpacity } from "react-native"
import { GameMenuButtonStyles } from "./GameMenuStyles"
interface GameMenuButtonProps {
    gradientColor: {
        one: string,
        two: string
    },
    onPress: () => void,
    title: string
}
export const GameMenuButton = ({...props} : GameMenuButtonProps) => {
    const styles = GameMenuButtonStyles
    return(
        <TouchableOpacity
            onPress={props.onPress}
        >
            <LinearGradient
                style={styles.container}
                colors={
                    [
                        props.gradientColor.one,
                        props.gradientColor.two
                    ]
                }
            >
                <Text style={styles.text}>
                    {props.title}
                </Text>
            </LinearGradient>
        </TouchableOpacity>
                           
    )
}