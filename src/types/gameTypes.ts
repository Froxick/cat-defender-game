import { ReactNode } from "react";

export interface Position {
  x: number;
  y: number;
}

export interface Size {
  width: number;
  height: number;
}
export interface Entity {
    position: Position,
    size: Size,
    renderer?: React.FC<any>
}
export interface Time {
    current: number;
    delta: number; 
    previous: number; 
    previousDelta: number
}
export interface PlayerEntity extends Entity {
    lastShotTime: number;
    shotCooldown: number;
    state: 'aiming' | 'shooting';
    animationTimer: number; breathPhase: number; 
    breathSpeed: number; 
    breathAmplitude: number; 
}
export interface BulletEntity extends Entity {
    velocity: number
}
export interface Entities {
    [key: string] : Entity
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

