import { BreathAnimationSystem } from "../systems/BreathAnimationSystem";
import { BulletMovementSystem } from "../systems/BulletMoveSystem";
import { CollisionSystem } from "../systems/ColisionSystem";
import { DamageSystem } from "../systems/DamageSystem";
import { EnemyMoveSystem } from "../systems/EnemyMoveSystem";
import { EnemySpawnSystem } from "../systems/EnemySpawnSystem";
import { PlayerAnimationSystem } from "../systems/PlayerAnimationSystem";
import { PlayerHealthSystem } from "../systems/PlayerHealthSystem";
import { PlayerMoveSystems } from "../systems/PlayerMoveSystems";
import { ShootingSystem } from "../systems/ShootingSystem";
import { createSystemWrapper } from "./systemWrapper";

export const getSystemsArr = () => {
    return (
        [
             createSystemWrapper(PlayerMoveSystems),
             createSystemWrapper(ShootingSystem),
            createSystemWrapper(BulletMovementSystem),
            createSystemWrapper(PlayerAnimationSystem),
            createSystemWrapper(BreathAnimationSystem),
            createSystemWrapper(PlayerHealthSystem),
            createSystemWrapper(EnemySpawnSystem),
            createSystemWrapper(EnemyMoveSystem),
            createSystemWrapper(DamageSystem),
            createSystemWrapper(CollisionSystem)
        ]
    )
}