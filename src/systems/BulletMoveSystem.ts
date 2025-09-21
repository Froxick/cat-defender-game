import { BulletEntity, Entities, GameState } from "../types/gameTypes";

export const BulletMovementSystem = (entities: Entities) => {
  Object.keys(entities).forEach(key => {
    if (key.startsWith('bullet_')) {
      const bullet = entities[key] as BulletEntity;
      bullet.position.y += bullet.velocity;

      if (bullet.position.y + bullet.size.height < 0) {
        delete entities[key];
      }
    }
  });
  return entities;
};