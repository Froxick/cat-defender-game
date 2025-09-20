import { Entities, PlayerEntity, Time } from "../types/gameTypes";

export const PlayerAnimationSystem = (entities: Entities, {time} : {time: Time}) => {
    const player = entities.player as PlayerEntity
    if(player.state === 'shooting' && time.current > player.animationTimer + 100) {
        player.state = 'aiming'
    }
    
    return entities;
}