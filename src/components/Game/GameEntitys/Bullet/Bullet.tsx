import { Position, Size } from '@/src/types/gameTypes';
import React from 'react';
import { Image } from 'react-native';



interface BulletProps {
  position: Position;
  size: Size;
}

const Bullet: React.FC<BulletProps> = ({ position, size }) => {
  return (
    <Image
      source={require('@/assets/images/bulletDark.png')}
      resizeMode='cover'
      style={{
        position: 'absolute',
        left: position.x,
        top: position.y,
        width: size.width,
        height: size.height,
        borderRadius: size.width / 2, 
      }}
    />
  );
};

export default Bullet;