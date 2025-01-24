import React from 'react'
import Image from 'next/image';
import Img from '@/public/assets/images/3.png';

type Props = {
  width: number,
  height: number,
}

const Logo = (props: Props) => {

  const { width, height } = props;
  return (
    <div>
      <Image
        src={Img}
        width={width}
        height={height}
        alt="Identity Lab Logo" />
    </div>
  )
}

export default Logo;
