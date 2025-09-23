import { EnemyEntity, Entities } from "../types/gameTypes";
export const LineDefence = (entities: Entities) => {
   Object.keys(entities).forEach(key => {
      if(key.startsWith('enemy_')) {
            const enemy = entities[key] as EnemyEntity
        if (enemy.position.y == player.position.y - 20){
        delete entities[key];
          player.health--
        }
      }
   })
  return entities
}
