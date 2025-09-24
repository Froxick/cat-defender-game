import { useRouter } from "expo-router"
import { useContext, useRef, useState } from "react";
import {  Dimensions, ImageBackground, View } from "react-native"
import {GameEngine} from 'react-native-game-engine'
import { GameScreenStyles } from "./GameScreenStyles";
import { GameMenu } from "../GameMenu/GameMenu";
import { LocalizationContext } from "@/src/localization/context/useLocalizationHookContext";
import { localization } from "@/src/localization/data/localization";
import { GameHud } from "../GameHud/GameHud";
import { Entities, GameState, PlayerEntity } from "@/src/types/gameTypes";
import { setupEntities } from "@/src/utils/setupEntities";
import { getSystemsArr } from "@/src/utils/getSystemsArr";
import { GameOverMenu } from "../GameOverMenu/GameOverMenu";


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
    const [playerHealth, setPlayerHealth] = useState({
        health: (entities.player as PlayerEntity).health,
        maxHealth: (entities.player as PlayerEntity).maxHealth
    });
    const styles = GameScreenStyles
    const router = useRouter()
    const context = useContext(LocalizationContext)
    const language = context.language
    const textLocal = localization[language].homeMenu.menuModal.buttons
    const textGameOver = localization[language].gameHud.gameOver
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
        const player = newEntities.player as PlayerEntity;
        setPlayerHealth({
            health: player.health,
            maxHealth:player.maxHealth
        })
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
    


    

    const systems = getSystemsArr()
    return(
        <>
            {
                gameState.gameOver && (
                    <GameOverMenu 
                        title={textGameOver.title}
                        buttonText={textGameOver.button}
                        onClose={onExit}
                    
                    />
                )
            }
            {(gameState.paused === true && gameState.gameOver != true) && (
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
                    systems={systems}
                    running={!gameState.paused }
                    onEvent={(event : any) => {
                        if(event.type === 'GAME_OVER') {
                            setGameStateFnc('paused')
                            setGameStateFnc('gameOver')
                        }
                        if(event.type === 'PLAYER_DAMAGE'){
                            const player = entities.player as PlayerEntity
                            setPlayerHealth({
                                health: player.health,
                                maxHealth: player.maxHealth
                            })
                        }
                    }}
                />
                <GameHud
                    health={
                       playerHealth
                    }
                    title={diff[difficulty]}
                    difficulty={difficulty}
                    setGameStateFnc={() => setGameStateFnc('paused')}
                />
            </ImageBackground>
        </>
        
    )
}
