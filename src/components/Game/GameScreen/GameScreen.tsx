import { useRouter } from "expo-router"
import { useContext, useEffect, useState } from "react";
import {  View } from "react-native"
import {GameEngine} from 'react-native-game-engine'
import { GameScreenStyles } from "./GameScreenStyles";
import { PausedButton } from "../PausedButton/PausedButton";
import { GameMenu } from "../GameMenu/GameMenu";
import { LocalizationContext } from "@/src/localization/context/useLocalizationHookContext";
import { GameHudStatus } from "../GameHudStatus/GameHudStatus";
import { localization } from "@/src/localization/data/localization";
interface GameScreenProps {
    params : {
        [key: string]: string | string[];
    }
}
interface gameStateType {
    paused: boolean
}

export const GameScreen = ({params} : GameScreenProps) => {
    const styles = GameScreenStyles
    const router = useRouter()
    const context = useContext(LocalizationContext)
    const language = context.language
    const textLocal = localization[language].homeMenu.menuModal.buttons
    
    const diff : Record<number,string> = {
        1: textLocal.easy,
        2: textLocal.medium,
        3: textLocal.hard
    }
    const onExit = () => {
        router.replace('/')
    }
    const[gameState,setGameState] = useState<gameStateType>({
        paused: false
    })
    const setGameStateFnc = (key: keyof gameStateType) => {
        setGameState(prev => ({
            ...prev,
            [key]: !prev[key]
        }))
    }
    const[difficulty,setDifficulty] = useState(1)

    useEffect(() => {
        if(params.difficulty) {
            const diff = parseInt(params.difficulty as string);
            setDifficulty(diff)
        }
    },[params.difficulty])
    return(
        <>
            {gameState.paused && (
                <GameMenu 
                    visible={gameState.paused}
                    onClose={() => setGameStateFnc('paused')}
                    onExit={onExit}
                    language={language}
                />
            )}
            <View style={styles.container}>
                <GameEngine 
                    running={!gameState.paused}
                />
                <View style={styles.hud}>
                    <View
                        style={styles.button}
                    >
                        <PausedButton 
                            onPress={() => setGameStateFnc('paused')}
                        />
                    </View>
                    <View style={styles.status}>
                        <GameHudStatus 
                            title={diff[difficulty]}
                            diffId={difficulty}
                        />
                    </View>
                    
                </View>
            </View>
        </>
        
    )
}