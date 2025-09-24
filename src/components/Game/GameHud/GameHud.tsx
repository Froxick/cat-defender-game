import { View } from "react-native"
import { PausedButton } from "../PausedButton/PausedButton"
import { GameHudStatus } from "../GameHudStatus/GameHudStatus"
import { GameHudStyles } from "./GameHudStyle"
import { GameHealthUi } from "../GameHealthUi/GameHealthUi"
import { PointsCounter } from "../PointsCounter/PointsCounter"
interface GameHudProps {
    title: string,
    setGameStateFnc : () => void,
    difficulty: number,
    health: {
        maxHealth: number,
        health: number
    }
    poitnts: number,
    pointsText: string
}
export const GameHud = ({...props} : GameHudProps) => {
    const styles = GameHudStyles
    return(
        <View style={styles.hud}>
            <View>
                <View style={styles.button}>
                    <PausedButton
                            onPress={props.setGameStateFnc}
                    />
                 </View>
                 <GameHealthUi 
                    health={props.health}
                 />
            </View>
            
            <View style={styles.status}>
                <GameHudStatus 
                    title={props.title}
                    diffId={props.difficulty}
                />
            </View>
            <View style={styles.pointsCounter}>
                <PointsCounter 
                    text={props.pointsText}
                    counter={props.poitnts}
                />
            </View>
        </View>
    )
}