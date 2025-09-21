
import { Entities, GameTouchEvent, PlayerEntity } from "../types/gameTypes";

function isMoveEvent(touch: GameTouchEvent): touch is GameTouchEvent & { delta: { pageX: number; pageY: number } } {
  return touch.type === 'move' && touch.delta !== undefined;
}


export const PlayerMoveSystems = (
  entities: Entities, 
  { touches }: { touches: GameTouchEvent[] }
) => {
  const player = entities.player as PlayerEntity;
  
  const moveTouches = touches.filter(isMoveEvent);
  
  if (moveTouches.length > 0) {
    const touch = moveTouches[0];
    
    let nextX = player.position.x + touch.delta.pageX;
    nextX = Math.max(0, nextX);
    nextX = Math.min(entities.gameState.screenWidth - player.size.width, nextX);
    
    player.position.x = nextX;
  }
  
  return entities;
}