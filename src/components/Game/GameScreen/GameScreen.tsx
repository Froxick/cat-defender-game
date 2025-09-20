import { useRouter } from "expo-router"
import { useContext, useEffect, useRef, useState } from "react";
import {  Dimensions, View } from "react-native"
import {GameEngine} from 'react-native-game-engine'
import { GameScreenStyles } from "./GameScreenStyles";
import { GameMenu } from "../GameMenu/GameMenu";
import { LocalizationContext } from "@/src/localization/context/useLocalizationHookContext";
import { localization } from "@/src/localization/data/localization";
import { GameHud } from "../GameHud/GameHud";
import { Entities } from "@/src/types/gameTypes";
import { setupEntities } from "@/src/utils/setupEntities";
import { PlayerMoveSystems } from "@/src/systems/PlayerMoveSystems";
import { ShootingSystem } from "@/src/systems/ShootingSystem";
import { BulletMovementSystem } from "@/src/systems/BulletMoveSystem";
import { PlayerAnimationSystem } from "@/src/systems/PlayerAnimationSystem";
import { BreathAnimationSystem } from "@/src/systems/BreathAnimationSystem";
interface GameScreenProps {
    params : {
        [key: string]: string | string[];
    }
}
interface gameStateType {
    paused: boolean
}
export const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');
export const GameScreen = ({params} : GameScreenProps) => {
    const gameEngineRef = useRef<GameEngine>(null);
    const [entities, setEntities] = useState<Entities>(setupEntities(SCREEN_WIDTH,SCREEN_HEIGHT));
    
    
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
                    ref={gameEngineRef}
                    entities={entities}
                    systems={[PlayerMoveSystems,ShootingSystem,
                        BulletMovementSystem,PlayerAnimationSystem,
                        BreathAnimationSystem]}
                    running={!gameState.paused}
                />
                <GameHud 
                    title={diff[difficulty]}
                    difficulty={difficulty}
                    setGameStateFnc={() => setGameStateFnc('paused')}
                />
            </View>
        </>
        
    )
}