import {Player} from "@/src/components/Game/GameEntitys"
interface LinePosition {
  x: number;
  y: number;
  width: number;
  height: number;
}
class Line {n
  private position: LinePosition;
  private isActive: boolean;
  private onHealthDecrease: () => void;

  constructor(playerY: number, onHealthDecrease: () => void) {
    const screenWidth = Dimensions.get('window').width;
    const screenHeight = Dimensions.get('window').height;
    
    // Фиксированная позиция линии чуть выше игрока
    this.position = {
      x: 0,
      y: player.position.y - 20, // Фиксированное расстояние от игрока
      width: screenWidth,
      height: 3 // Тонкая линия для визуального обозначения
    };
    
    this.isActive = true;
    this.onHealthDecrease = onHealthDecrease;
  }
