import { Position, Size } from "@/src/types/gameTypes"
import { Image } from "react-native"

interface EnemyProps {
    position: Position,
    size: Size,
    type: 'default' | 'devil'
}
const images = {
  default: require('@/assets/images/enemyNew.png'),
  devil: require('@/assets/images/enemyHard.png')
}

const Enemy: React.FC<EnemyProps> = ({ position, size, type }) => {
  return (
    <Image
      source={images[type]}
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
