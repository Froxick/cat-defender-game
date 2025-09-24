

export interface Position {
  x: number;
  y: number;
}

export interface Size {
  width: number;
  height: number;
}
export interface Entity {
    position?: Position,
    size?: Size,
    renderer?: React.FC<any>
}
export interface Time {
    current: number;
    delta: number; 
    previous: number; 
    previousDelta: number
}
export interface GameState extends Entity {
    screenWidth: number;
    screenHeight: number;
    gameOver: boolean;
    difficulty: number;
    enemySpeed: number;
    enemySpawnInterval: number;
    points: number;
}
export interface PlayerEntity extends Entity {
    position: Position,
    size: Size,
    lastShotTime: number;
    shotCooldown: number;
    state: 'aiming' | 'shooting';
    animationTimer: number; breathPhase: number; 
    breathSpeed: number; 
    breathAmplitude: number; 
    health: number;
    maxHealth: number;
}
export interface LineEntity extends Entity {
    position: Position,
    size: Size,
}
export interface BulletEntity extends Entity {
    position: Position,
    size: Size,
    velocity: number
}
export interface Entities {
    [key: string] : Entity,
    gameState: GameState
}
export interface SystemArgs {
  time: Time
  touches: any[];
  events: any[];
  dispatch: (event: any) => void;
}
export interface GameTouchEvent {
  type: string;
  id: number; 
  event: any; 
  delta?: {
    pageX: number;
    pageY: number;
    locationX: number;
    locationY: number;
  };
}
export interface EnemyEntity extends Entity {
  velocity: number,
  size: Size,
  position: Position,
}
