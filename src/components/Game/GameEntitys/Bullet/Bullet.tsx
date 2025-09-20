import { Position, Size } from '@/src/types/gameTypes';
import React from 'react';
import { View } from 'react-native';


interface BulletProps {
  position: Position;
  size: Size;
}

const Bullet: React.FC<BulletProps> = ({ position, size }) => {
  return (
    <View
      style={{
        position: 'absolute',
        left: position.x,
        top: position.y,
        width: size.width,
        height: size.height,
        backgroundColor: '#252525ff',
        borderRadius: size.width / 2, 
      }}
    />
  );
};

export default Bullet;