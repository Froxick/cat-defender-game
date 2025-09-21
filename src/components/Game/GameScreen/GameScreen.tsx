import { useRouter } from "expo-router"
import { useContext, useEffect, useRef, useState } from "react";
import {  Dimensions, ImageBackground, View } from "react-native"
import {GameEngine} from 'react-native-game-engine'
import { GameScreenStyles } from "./GameScreenStyles";
import { GameMenu } from "../GameMenu/GameMenu";
import { LocalizationContext } from "@/src/localization/context/useLocalizationHookContext";
import { localization } from "@/src/localization/data/localization";
import { GameHud } from "../GameHud/GameHud";
import { Entities, GameState, PlayerEntity } from "@/src/types/gameTypes";
import { setupEntities } from "@/src/utils/setupEntities";
import { PlayerMoveSystems } from "@/src/systems/PlayerMoveSystems";
import { ShootingSystem } from "@/src/systems/ShootingSystem";
import { BulletMovementSystem } from "@/src/systems/BulletMoveSystem";
import { PlayerAnimationSystem } from "@/src/systems/PlayerAnimationSystem";
import { BreathAnimationSystem } from "@/src/systems/BreathAnimationSystem";

import { createSystemWrapper } from "@/src/utils/systemWrapper";
import { PlayerHealthSystem } from "@/src/systems/PlayerHealthSystem";
import { EnemySpawnSystem } from "@/src/systems/EnemySpawnSystem";
import { EnemyMoveSystem } from "@/src/systems/EnemyMoveSystem";


interface GameScreenProps {
    params : {
        [key: string]: string | string[];
    }
}
interface gameStateType {
    paused: boolean,
    gameOver: boolean
}
export const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');
export const GameScreen = ({params} : GameScreenProps) => {
    const [gameKey, setGameKey] = useState(0);
    const gameEngineRef = useRef<GameEngine>(null);
    const[difficulty,setDifficulty] = useState(parseInt(params.difficulty as string))
    const [entities, setEntities] = useState<Entities>(setupEntities(SCREEN_WIDTH,SCREEN_HEIGHT,difficulty));
    const gameStateFromEntities = entities.gameState as GameState;
    const gameStatePlayer = entities.player as PlayerEntity
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
    const restartGame = () => {
        
        const newEntities = setupEntities(SCREEN_WIDTH, SCREEN_HEIGHT, difficulty);
        
        setEntities(newEntities);
        setGameState({
            paused: false,
            gameOver: false
        });
        setGameKey(prev => prev + 1);
    }
    const[gameState,setGameState] = useState<gameStateType>({
        paused: false,
        gameOver: gameStateFromEntities.gameOver
    })
    const setGameStateFnc = (key: keyof gameStateType) => {
        setGameState(prev => ({
            ...prev,
            [key]: !prev[key]
        }))
    }
    

   
    useEffect(() => {
        setGameState(prev => ({
            ...prev,
            gameOver: gameStateFromEntities.gameOver
        }))
    }, [gameStateFromEntities.gameOver])
   
    
    const wrappedPlayerMoveSystems = createSystemWrapper(PlayerMoveSystems);
    const wrappedShootingSytems = createSystemWrapper(ShootingSystem);
    const wrappedBulletMoveSystems = createSystemWrapper(BulletMovementSystem);
    const wrappedPlayerAnimationSystems = createSystemWrapper(PlayerAnimationSystem);
    const wrappedBreathAnimationSystems = createSystemWrapper(BreathAnimationSystem);
    const wrappedPlayerHealthSystems = createSystemWrapper(PlayerHealthSystem);
    const wrappedEnemySpawnSystems = createSystemWrapper(EnemySpawnSystem)
    const wrappedEnemyMoveSystems = createSystemWrapper(EnemyMoveSystem);
    return(
        <>
            {gameState.paused && (
                <GameMenu 
                    onRestart={restartGame}
                    visible={gameState.paused}
                    onClose={() => setGameStateFnc('paused')}
                    onExit={onExit}
                    language={language}
                />
            )}
            <ImageBackground
                source={require('@/assets/images/backFon.jpg')}
                resizeMode="cover"
                style={styles.container}>
                <View
                    style={styles.fonBlur}
                />
                <GameEngine 
                    key={gameKey}
                    ref={gameEngineRef}
                    entities={entities}
                    systems={[
                        wrappedPlayerMoveSystems,wrappedShootingSytems,
                        wrappedBulletMoveSystems,wrappedPlayerAnimationSystems,
                        wrappedBreathAnimationSystems,wrappedPlayerHealthSystems,
                        wrappedEnemySpawnSystems,wrappedEnemyMoveSystems
                    ]}
                    running={!gameState.paused }
                    onEvent={(event : any) => {
                        if(event.type === 'GAME_OVER') {
                            setGameStateFnc('gameOver')
                        }
                    }}
                />
                <GameHud
                    health={
                        {
                            maxHealth:gameStatePlayer.maxHealth,
                            health: gameStatePlayer.health
                        }
                    }
                    title={diff[difficulty]}
                    difficulty={difficulty}
                    setGameStateFnc={() => setGameStateFnc('paused')}
                />
            </ImageBackground>
        </>
        
    )
}
