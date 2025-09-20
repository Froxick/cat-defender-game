import { Entities, PlayerEntity } from "../types/gameTypes";

export const BreathAnimationSystem = (entities: Entities, { time }: { time: { current: number, delta: number } }) => {
  const player = entities.player as PlayerEntity;
  player.breathPhase = (player.breathPhase + player.breathSpeed * (time.delta / 1000)) % 1;
  
  return entities;
};