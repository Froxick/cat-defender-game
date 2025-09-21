import { EnemyEntity, Entities } from "../types/gameTypes";

export const EnemyMoveSystem = (entities: Entities) => {
    Object.keys(entities).forEach(key => {
        if(key.startsWith('enemy_')) {
            const enemy = entities[key] as EnemyEntity
            enemy.position.y += enemy.velocity

            if(enemy.position.y >  entities.gameState.screenHeight ) {
                delete entities[key];
            }
        }
    })
    return entities
}