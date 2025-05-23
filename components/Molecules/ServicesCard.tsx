import React from 'react';
import { Card, CardDescription, CardTitle } from '../ui/card';
import Image, { StaticImageData } from 'next/image';
// import Model1 from '@/public/Model-1.svg';

const ServicesCard = (props: {
  title: string;
  description: string;
  image: string | StaticImageData;
}) => {
  return (
    <Card className='space-y-4 !border-none sm:max-w-[350px] max-sm:max-w-[250px] maxoutline-none shadow-none'>
      <div className='max-sm:max-w-[200px] rounded-xl max-h-[15rem] sm:max-w-[230px] border  overflow-hidden mx-auto'>
        {/* the above was max-h-[150px] previously but majority of the image heihgt was not being displayed */}
        <Image
          className='w-full h-full object-cover object-bottom'
          src={props.image}
          width={400}
          height={400}
          alt='services'
        />
      </div>
      <CardTitle className='text-center text-xl uppercase'>
        {props.title}
      </CardTitle>
      <CardDescription className='text-neutral-700 text-center'>
        {props.description}
      </CardDescription>
    </Card>
  );
};

export default ServicesCard;
