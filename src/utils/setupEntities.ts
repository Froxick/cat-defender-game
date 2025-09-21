import Player from "../components/Game/GameEntitys/Player/Player";
import { Entities, GameState, PlayerEntity, Size } from "../types/gameTypes";

export const setupEntities = (SCREEN_WIDTH: number,
     SCREEN_HEIGHT: number, difficulty: number) : Entities => {
        const playerSize : Size = {
            width: 120,
            height: 120
        }
        let maxHealth : number;
        switch(difficulty) {
            case 1: {
                maxHealth = 3;
                break
            }
            case 2: {
                maxHealth = 2;
                break;
            }
            case 3: {
                maxHealth = 1;
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
                        y: SCREEN_HEIGHT - playerSize.height - 20, 
                    },
                    size: playerSize,
                    renderer: Player, 
                    lastShotTime: 0,
                    shotCooldown: 800,
                    state: 'aiming', 
                    animationTimer: 0,
                    breathPhase: 0,
                    breathSpeed: 0.7, 
                    breathAmplitude: 0.03,
                    health: maxHealth,
                    maxHealth: maxHealth,
                } as PlayerEntity,
            
            gameState: {
                screenHeight: SCREEN_HEIGHT,
                screenWidth: SCREEN_WIDTH,
                gameOver: false,
                difficulty: difficulty,
                enemySpeed: 2,
                enemySpawnInterval: 1500,
            } as GameState
            
        }
}