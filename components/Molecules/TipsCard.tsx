import { Card, CardDescription, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import React from 'react';
import { RightArrow } from '../atoms/icons';
import Link from 'next/link';

const TipsCard = (props: {
  image: string;
  title: string;
  description: string;
}) => {
  return (
    <Card className='bg-inherit shadow-none !border-none outline-none'>
      <div className='rounded-3xl max-h-[15rem] max-w-[25rem] overflow-hidden bg-neutral-100'>
        <Image
          src={props.image}
          className='w-full'
          width={200}
          height={200}
          alt='tips'
        />
      </div>
      <CardTitle className=' pt-3 text-xl text-neutral-900 font-normal capitalize'>
        {props.title}
      </CardTitle>
      <CardDescription className='py-3 max-w-96 text-base text-neutral-700'>
        {props.description}
      </CardDescription>
      <div className='uppercase py-1 flex gap-3 items-center text-base text-primary/500'>
        <Link href='#'>Read more</Link> <RightArrow />
      </div>
    </Card>
  );
};

export default TipsCard;
