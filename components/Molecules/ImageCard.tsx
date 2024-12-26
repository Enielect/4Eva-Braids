import Image, { StaticImageData } from 'next/image';
import React from 'react';

const ImageCard = (props: {
  image: string | StaticImageData;
  className?: string;
}) => {
  return (
    <div
      className={`image-shadow rounded-3xl overflow-hidden border-[3px] border-neutral-900 bg-neutral-100 ${props.className}`}
    >
      <Image
        src={props.image}
        className='object-center h-full w-full object-cover'
        alt='logo'
        width={300}
        height={300}
      />
    </div>
  );
};

export default ImageCard;
