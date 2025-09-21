import Bullet from "../components/Game/GameEntitys/Bullet/Bullet";
import { BulletEntity, Entities, GameState, PlayerEntity, Size, Time } from "../types/gameTypes";
 let bulletIdCounter = 0;
export const ShootingSystem = (entities: Entities,{ time }: { time: Time }) => {
    const player = entities.player as PlayerEntity
    if(time.current - player.lastShotTime > player.shotCooldown) {
        player.state = 'shooting';
        player.animationTimer = time.current;
        const bulletSize : Size = {
            width:35,
            height: 40
        }
        const newBullet : BulletEntity = {
            position: {
                x: player.position.x + player.size.width / 2 - bulletSize.width / 2,
                y: player.position.y - bulletSize.height
            },
            size: bulletSize,
            renderer: Bullet,
            velocity: -5
        } 
        const newBulletId = `bullet_${bulletIdCounter++}`;
        entities[newBulletId] = newBullet;
        player.lastShotTime = time.current;
    }
    return entities;
}
