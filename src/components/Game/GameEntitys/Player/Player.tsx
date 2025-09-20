import { Position, Size } from "@/src/types/gameTypes"
import { Image } from "react-native"
import { StyleSheet, View } from "react-native"

interface PlayerProps {
    position: Position,
    size: Size,
    state: string,
    breathPhase: number,
    breathAmplitude: number
}
const Player = ({position,size,state,breathAmplitude,breathPhase} : PlayerProps) => {
    const scale = 1 + breathAmplitude * Math.sin(breathPhase * 2 * Math.PI);
    const styles = StyleSheet.create({
        player: {
            position: 'absolute',
            left: position.x,
            top: position.y,
            width: size.width,
            height: size.height,
            transform: [{ scale }]
        }
    })
    let playerImage;
    switch(state) {
        case 'shooting':
            playerImage = require('@/assets/images/Pshoot.png')
            break;
        case 'aiming':
            playerImage = require('@/assets/images/Paim.png')
            break;
        
    }
    return(
        <Image
            style={styles.player}
            source={playerImage} 
            resizeMode="contain" 
        />
    )
}
export default Player