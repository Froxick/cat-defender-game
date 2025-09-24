import { BulletEntity, EnemyEntity, Entities, SystemArgs } from "../types/gameTypes";

const checkCollision = (enemy: EnemyEntity, bullet: BulletEntity): boolean => {
  return (
    enemy.position.x < bullet.position.x + bullet.size.width &&
    enemy.position.x + enemy.size.width > bullet.position.x &&
    enemy.position.y < bullet.position.y + bullet.size.height &&
    enemy.position.y + enemy.size.height > bullet.position.y
  );
};
interface CollisionSystemArgs {
    dispatch: SystemArgs['dispatch'];
}
export const CollisionSystem = (entities: Entities,{dispatch}: CollisionSystemArgs) => {
  const enemiesToRemove: string[] = [];
  const bulletsToRemove: string[] = [];


  Object.keys(entities).forEach(enemyKey => {
    if (enemyKey.startsWith('enemy_')) {
      const enemy = entities[enemyKey] as EnemyEntity;
      
      Object.keys(entities).forEach(bulletKey => {
        if (bulletKey.startsWith('bullet_')) {
          const bullet = entities[bulletKey] as BulletEntity;

          if (checkCollision(enemy, bullet)) {
            
            enemiesToRemove.push(enemyKey);
            bulletsToRemove.push(bulletKey);
            entities.gameState.points += 1;
            dispatch({type: 'KILL'})
          }
        }
      });
    }
  });


  enemiesToRemove.forEach(key => delete entities[key]);
  bulletsToRemove.forEach(key => delete entities[key]);

  return entities;
};