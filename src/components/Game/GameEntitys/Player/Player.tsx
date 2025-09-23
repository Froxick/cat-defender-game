

import { Position, Size } from "@/src/types/gameTypes"
import { Image, Animated, StyleSheet } from "react-native"
import { useEffect, useRef, useState } from "react"


const playerImages = {
  aiming: require('@/assets/images/Paim.png'),
  shooting: require('@/assets/images/Pshoot.png'),
};

interface PlayerProps {
    position: Position,
    size: Size,
    state: string,
    breathPhase: number,
    breathAmplitude: number
}
const Player = ({position, size, state,breathAmplitude,breathPhase}: PlayerProps) => {
    const [currentState, setCurrentState] = useState(state);
    const aimingOpacity = useRef(new Animated.Value(1)).current;
    const shootingOpacity = useRef(new Animated.Value(0)).current;
    
    useEffect(() => {
        if (state === 'shooting' && currentState === 'aiming') {
            
            Animated.parallel([
                Animated.timing(aimingOpacity, {
                    toValue: 0,
                    duration: 50, 
                    useNativeDriver: true,
                }),
                Animated.timing(shootingOpacity, {
                    toValue: 1,
                    duration: 50,
                    useNativeDriver: true,
                }),
            ]).start();
            setCurrentState('shooting');
        } else if (state === 'aiming' && currentState === 'shooting') {
            
            Animated.parallel([
                Animated.timing(shootingOpacity, {
                    toValue: 0,
                    duration: 50,
                    useNativeDriver: true,
                }),
                Animated.timing(aimingOpacity, {
                    toValue: 1,
                    duration: 50,
                    useNativeDriver: true,
                }),
            ]).start();
            setCurrentState('aiming');
        }
    }, [state]);
    const scale = 1 + breathAmplitude * Math.sin(breathPhase * 2 * Math.PI);
    const styles = StyleSheet.create({
        container: {
            position: 'absolute',
            left: position.x,
            top: position.y,
            width: size.width,
            height: size.height,
            transform: [{ scale }]
        },
        image: {
            position: 'absolute',
            width: '100%',
            height: '100%',
        }
    })
    
    return(
        <Animated.View style={styles.container}>
            <Animated.Image
                style={[styles.image, { opacity: aimingOpacity }]}
                source={playerImages.aiming}
                resizeMode="contain"
                fadeDuration={0}
            />
            <Animated.Image
                style={[styles.image, { opacity: shootingOpacity }]}
                source={playerImages.shooting}
                resizeMode="contain"
                fadeDuration={0}
            />
        </Animated.View>
    )
}

export default Player