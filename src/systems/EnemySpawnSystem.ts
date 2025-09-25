import Enemy from "../components/Game/GameEntitys/Enemy/Enemy";
import { EnemyEntity, Entities, GameState, Time } from "../types/gameTypes";
const BASE_ENEMY_WIDTH = 60;
const BASE_ENEMY_HEIGHT = 70; 

let lastSpawnTime = 0;
// let enemyCount = 0;
export const EnemySpawnSystem = (
  entities: Entities,{time} : {time: Time}
) => {
  const gameState = entities.gameState as GameState;
  
  if ((time.current - lastSpawnTime > gameState.enemySpawnInterval) && gameState.enemyCount < 6) {
    const enemyId = `enemy_${Date.now()}`; 
    
    const widthVariation = Math.random() * 20 - 10; 
    const heightVariation = Math.random() * 20 - 10; 
    
    
    const enemyWidth = Math.max(30, BASE_ENEMY_WIDTH + widthVariation); 
    const enemyHeight = Math.max(40, BASE_ENEMY_HEIGHT + heightVariation); 
    
    const randomX = Math.random() * (gameState.screenWidth - enemyWidth);
    
    entities[enemyId] = {
      position: {
        x: randomX,
        y: -enemyHeight, 
      },
      size: {
        width: enemyWidth,
        height: enemyHeight,
      },
      renderer: Enemy,
      velocity: gameState.enemySpeed,
    } as EnemyEntity;
    
    lastSpawnTime = time.current;
    gameState.enemyCount += 1;
  }
  return entities
  
}

