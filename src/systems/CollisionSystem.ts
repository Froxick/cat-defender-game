import { BulletEntity, EnemyEntity, Entities } from "../types/gameTypes";

const checkCollision = (enemy: EnemyEntity, bullet: BulletEntity): boolean => {
  return (
    enemy.position.x < bullet.position.x + bullet.size.width &&
    enemy.position.x + enemy.size.width > bullet.position.x &&
    enemy.position.y < bullet.position.y + bullet.size.height &&
    enemy.position.y + enemy.size.height > bullet.position.y
  );
};

export const CollisionSystem = (entities: Entities) => {
  const enemiesToRemove: string[] = [];
  const bulletsToRemove: string[] = [];

  // Проверяем столкновения между всеми врагами и пулями
  Object.keys(entities).forEach(enemyKey => {
    if (enemyKey.startsWith('enemy_')) {
      const enemy = entities[enemyKey] as EnemyEntity;
      
      Object.keys(entities).forEach(bulletKey => {
        if (bulletKey.startsWith('bullet_')) {
          const bullet = entities[bulletKey] as BulletEntity;

          if (checkCollision(enemy, bullet)) {
            // Помечаем врага и пулю для удаления
            enemiesToRemove.push(enemyKey);
            bulletsToRemove.push(bulletKey);
          }
        }
      });
    }
  });

  // Удаляем всех врагов и пули, которые столкнулись
  enemiesToRemove.forEach(key => delete entities[key]);
  bulletsToRemove.forEach(key => delete entities[key]);

  return entities;
};
