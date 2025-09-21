import {  Entities, PlayerEntity, SystemArgs, Time } from "../types/gameTypes";
export interface HealthSystemArgs {
  time: SystemArgs['time'];
  dispatch: SystemArgs['dispatch'];
}
export const PlayerHealthSystem = (entities: Entities,{dispatch}: HealthSystemArgs) : Entities => {
    const player = entities.player as PlayerEntity
    if(entities.gameState.gameOver) return entities;

    if(player.health <= 0 && !entities.gameState.gameOver) {
        entities.gameState.gameOver = true
        dispatch({ type: 'GAME_OVER' });
    }
    return entities;
}