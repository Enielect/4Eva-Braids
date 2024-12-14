import { Card, CardDescription, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import React from 'react';
import { RightArrow } from '../atoms/icons';

const TipsCard = (props: {
  image: string;
  title: string;
  description: string;
}) => {
  return (
    <Card className='bg-inherit shadow-none !border-none outline-none'>
      <div className='rounded-3xl max-h-[250px] overflow-hidden bg-neutral-100'>
        <Image
          src={props.image}
          className='w-full'
          width={200}
          height={200}
          alt='tips'
        />
      </div>
      <CardTitle className=' pt-2 text-2xl text-neutral-900 font-bold capitalize'>
        {props.title}
      </CardTitle>
      <CardDescription className='py-3 text-xl text-neutral-700'>
        {props.description}
      </CardDescription>
      <div className='uppercase py-1 flex gap-3 items-center text-lg text-primary/500'>
        <span>Read more</span> <RightArrow />
      </div>
    </Card>
  );
};

export default TipsCard;
