import Enemy from "../components/Game/GameEntitys/Enemy/Enemy";
import { EnemyEntity, Entities, GameState, Time } from "../types/gameTypes";

const ENEMY_WIDTH = 60;
const ENEMY_HEIGHT = 70; 

let lastSpawnTime = 0;

export const EnemySpawnSystem = (
  entities: Entities,{time} : {time: Time}
) => {
  const gameState = entities.gameState as GameState;
  if (time.current - lastSpawnTime > gameState.enemySpawnInterval) {
    const enemyId = `enemy_${Date.now()}`; 
    
    const randomX = Math.random() * (gameState.screenWidth - ENEMY_WIDTH);
    
    entities[enemyId] = {
      position: {
        x: randomX,
        y: -ENEMY_HEIGHT,
      },
      size: {
        width: ENEMY_WIDTH,
        height: ENEMY_HEIGHT,
      },
      renderer: Enemy,
      velocity: gameState.enemySpeed,
    } as EnemyEntity;
    
    lastSpawnTime = time.current;
  }
  return entities
  
}

