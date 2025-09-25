import { Position, Size } from '@/src/types/gameTypes';
import React from 'react';
import { Image } from 'react-native';



interface BulletProps {
  position: Position;
  size: Size;
  type: 'light' | 'dark'
}

const images = {
   light: require('@/assets/images/bullet.png'),
   dark: require('@/assets/images/bulletDark.png')
}
const Bullet: React.FC<BulletProps> = ({ position, size,type }) => {
  return (
    <Image
      source={images[type]}
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