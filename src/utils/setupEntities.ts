import Player from "../components/Game/GameEntitys/Player/Player";
import { Entities, PlayerEntity, Size } from "../types/gameTypes";

export const setupEntities = (SCREEN_WIDTH: number,
     SCREEN_HEIGHT: number) : Entities => {
        const playerSize : Size = {
            width: 120,
            height: 120
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
                breathAmplitude: 0.03 
               
            } as PlayerEntity
        }
}