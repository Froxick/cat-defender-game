import { EnemyEntity, Entities, PlayerEntity, SystemArgs } from "../types/gameTypes";
interface DamageSystemArgs {
  dispatch: SystemArgs['dispatch'];
}

export const DamageSystem = (entities: Entities, {dispatch}: DamageSystemArgs) => {
  
   const player = entities.player as PlayerEntity
   Object.keys(entities).forEach(key => {
      if(key.startsWith('enemy_')) {
           
            const enemy = entities[key] as EnemyEntity
        if (enemy.position.y >= player.position.y){
          
          player.health--
          dispatch({type: 'PLAYER_DAMAGE'})
          delete entities[key];
        }
      }
   })
  return entities
}
