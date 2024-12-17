import Image, { StaticImageData } from 'next/image';
import React from 'react';

const ImageCard = (props: { image: string | StaticImageData }) => {
  return (
    <div className='image-shadow rounded-xl overflow-hidden bg-neutral-100'>
      <Image
        src={props.image}
        className='object-center w-full object-cover'
        alt='logo'
        width={300}
        height={300}
      />
    </div>
  );
};

export default ImageCard;
