import { Position, Size } from "@/src/types/gameTypes"
import { Image } from "react-native"

interface EnemyProps {
    position: Position,
    size: Size
}

const Enemy: React.FC<EnemyProps> = ({ position, size }) => {
  return (
    <Image
      source={require('@/assets/images/enemyNew.png')}
      resizeMode='contain'
      style={{
        position: 'absolute',
        left: position.x,
        top: position.y,
        width: size.width,
        height: size.height,
        
      }}
    />
  );
};

export default Enemy;
