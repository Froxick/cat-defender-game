import { View } from "react-native"
import { PausedButton } from "../PausedButton/PausedButton"
import { GameHudStatus } from "../GameHudStatus/GameHudStatus"
import { GameHudStyles } from "./GameHudStyle"
interface GameHudProps {
    title: string,
    setGameStateFnc : () => void,
    difficulty: number
}
export const GameHud = ({...props} : GameHudProps) => {
    const styles = GameHudStyles
    return(
        <View style={styles.hud}>
            <View style={styles.button}>
                 <PausedButton
                        onPress={props.setGameStateFnc}
                 />
            </View>
            <View style={styles.status}>
                <GameHudStatus 
                    title={props.title}
                    diffId={props.difficulty}
                />
            </View>
        </View>
    )
}