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
import { statsKey, useStatsStoreSelector } from "@/src/store/useStatsStore";


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
    const [points,setPoitns] = useState(entities.gameState.points || 0);
    const styles = GameScreenStyles
    const router = useRouter()
    const context = useContext(LocalizationContext)
    const {actions,state} = useStatsStoreSelector()
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
    const onSaveStats = () => {
        const keys : Record<number,keyof statsKey> = {
            1: 'resultEasy',
            2: 'resultMedium',
            3: 'resultHard'
        }
        if(state[keys[difficulty]] < points) {
            actions.setResult(keys[difficulty],points)
        }
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
        setPoitns(newEntities.gameState.points)
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
    
    const eventHendler = (type : string) => {
        switch(type) {
            case 'GAME_OVER': {
                setGameStateFnc('paused')
                setGameStateFnc('gameOver')
            }
            case 'PLAYER_DAMAGE' : {
                const player = entities.player as PlayerEntity
                setPlayerHealth({
                    health: player.health,
                    maxHealth: player.maxHealth
                })
            }
            case 'KILL': {
                setPoitns(entities.gameState.points)
            }
        }
    }

    const backGroundImage = {
        easy: require('@/assets/images/backFon.jpg'),
        medium: require('@/assets/images/backFon.jpg'),
        hard: require('@/assets/images/fonHard.png')
    }
    

    const systems = getSystemsArr()
    return(
        <>
            {
                gameState.gameOver && (
                    <GameOverMenu 
                        points={points}
                        textPoints={language === 'ru' ? 'Очки' : 'Points'}
                        title={textGameOver.title}
                        buttonText={textGameOver.button}
                        onClose={onSaveStats}
                    
                    />
                )
            }
            {(gameState.paused === true && gameState.gameOver != true) && (
                <GameMenu 
                    diffText={diff[difficulty]}
                    points={points}
                    onRestart={restartGame}
                    visible={gameState.paused}
                    onClose={() => setGameStateFnc('paused')}
                    onExit={onExit}
                    language={language}
                />
            )}
            <ImageBackground
                source={difficulty === 3 ?  backGroundImage.hard : backGroundImage.easy}
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
                        eventHendler(event.type as string)
                    }}
                />
                <GameHud
                    pointsColor={difficulty === 3 ? 'light' : 'dark'}
                    pointsText={language === 'ru' ? 'Очки' : 'Points'}
                    poitnts={points}
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
