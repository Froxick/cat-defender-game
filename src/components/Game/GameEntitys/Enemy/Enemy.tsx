import { Position, Size } from "@/src/types/gameTypes"
import { Image } from "react-native"
import { StyleSheet, View } from "react-native"

interface EnemyProps {
    position: Position,
    size: Size
}

const Enemy: React.FC<EnemyProps> = ({ position, size }) => {
  return (
    <View
      style={{
        position: 'absolute',
        left: position.x,
        top: position.y,
        width: size.width,
        height: size.height,
        backgroundColor: '#252525ff'
      }}
    />
  );
};

export default Enemy;
