import Line from "../components/Game/GameEntitys/Line/Line";
import Player from "../components/Game/GameEntitys/Player/Player";
import { Entities, GameState, LineEntity, PlayerEntity, Size } from "../types/gameTypes";

export const setupEntities = (SCREEN_WIDTH: number,
     SCREEN_HEIGHT: number, difficulty: number) : Entities => {
        const playerSize : Size = {
            width: 120,
            height: 120
        }
        const lineSize : Size = {
            width: SCREEN_WIDTH,
            height: 5
        }
        const enemySetting = {
            enemySpeed: 1.8,
            enemySpawnInterval: 2000,
        }
        let maxHealth : number;
        switch(difficulty) {
            case 1: {
                maxHealth = 3;
                break
            }
            case 2: {
                maxHealth = 2;
                enemySetting.enemySpawnInterval = 1400
                enemySetting.enemySpeed = 2
                break;
            }
            case 3: {
                maxHealth = 1;
                enemySetting.enemySpawnInterval = 1200
                enemySetting.enemySpeed = 2.2
                break
            }
            default: {
                maxHealth = 3
                break
            }       
        }
        return{
            
            player: {
                    
                    position: {
                        x: SCREEN_WIDTH / 2 - playerSize.width / 2, 
                        y: SCREEN_HEIGHT - playerSize.height + 10, 
                    },
                    size: playerSize,
                    renderer: Player, 
                    lastShotTime: 0,
                    shotCooldown: 1000,
                    state: 'aiming', 
                    animationTimer: 0,
                    breathPhase: 0,
                    breathSpeed: 0.7, 
                    breathAmplitude: 0.03,
                    health: maxHealth,
                    maxHealth: maxHealth,
                } as PlayerEntity,
            line: {
                position: {
                        x: 0, 
                        y: SCREEN_HEIGHT - playerSize.height - 10, 
                },
                size: lineSize,
                renderer: Line
            } as LineEntity,


            
            gameState: {
                screenHeight: SCREEN_HEIGHT,
                screenWidth: SCREEN_WIDTH,
                gameOver: false,
                difficulty: difficulty,
                enemySpeed: enemySetting.enemySpeed,
                enemySpawnInterval: enemySetting.enemySpawnInterval,
                points: 0,
                enemyCount: 0,
            } as GameState
            
        }
}