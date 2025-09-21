import { EnemyEntity, Entities } from "../types/gameTypes";

export const EnemyMovementSystem = (entities: Entities) => {
  return entities;
};

const ENEMY_SPAWN_INTERVAL = 1500; // Интервал появления врагов в миллисекундах
const ENEMY_SPEED = 2; // Скорость движения врагов
const ENEMY_WIDTH = 30; // Ширина врага
const ENEMY_HEIGHT = 40; // Высота врага

let lastSpawnTime = 0;

export const EnemySystem = (
  entities: Entities, 
  { time, screen }: { time: { current: number }, screen: { width: number, height: number } }
) => {

  if (time.current - lastSpawnTime > ENEMY_SPAWN_INTERVAL) {
    const enemyId = `enemy_${Date.now()}`; // Уникальный ID для врага
    
    const randomX = Math.random() * (screen.width - ENEMY_WIDTH);
    
    entities[enemyId] = {
      type: 'enemy',
      position: {
        x: randomX,
        y: -ENEMY_HEIGHT,
      },
      size: {
        width: ENEMY_WIDTH,
        height: ENEMY_HEIGHT,
      },
      velocity: ENEMY_SPEED,
    } as EnemyEntity;
    
    lastSpawnTime = time.current;
  }
  
  Object.keys(entities).forEach(key => {
    if (key.startsWith('enemy_')) {
      const enemy = entities[key] as EnemyEntity;
      
      enemy.position.y += enemy.velocity;
      
      if (enemy.position.y > screen.height) {
        delete entities[key];
      }

      if (enemy.position.y == bullet.position.y and enemy.position.x == bullet.position.x) {
        delete entities[key];
    }
  });
  
  return entities;
};
