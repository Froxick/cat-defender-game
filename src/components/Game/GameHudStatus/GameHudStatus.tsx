import { Text, View } from "react-native"
import { GameHudStatusStyles } from "./GameHudStatusStyle"
interface GameHudStatusProps {
    title: string,
    diffId: number
}
export const GameHudStatus = ({title,diffId}: GameHudStatusProps) => {
    const styles = GameHudStatusStyles(diffId)
    return(
       <View style={styles.container}>
        <Text style={styles.text}>
            {title}
        </Text>
       </View> 
    )
}