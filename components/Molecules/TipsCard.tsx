import { Card, CardDescription, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import React from 'react';
import { RightArrow } from '../atoms/icons';
import Link from 'next/link';

const TipsCard = (props: {
  image: string;
  title: string;
  description: string;
  slug: string;
}) => {
  return (
    <Card className='bg-inherit shadow-none h-full flex flex-col justify-between !border-none outline-none'>
      <div className=' h-full'>
        <div className='rounded-3xl h-[15rem] w-full overflow-hidden bg-neutral-100'>
          <Image
            loading='lazy'
            src={props.image}
            className='w-full h-full object-cover object-top'
            width={500}
            height={500}
            alt='tips'
          />
        </div>
        <CardTitle className=' pt-4 text-xl text-neutral-900 font-normal capitalize'>
          {props.title}
        </CardTitle>
        <div className='flex flex-col justify-end'>
          <CardDescription className='py-3 max-w-96 text-base text-neutral-700'>
            {props.description + '...'}
          </CardDescription>
        </div>
      </div>
      <div className='uppercase py-1 flex gap-3 items-center text-base text-primary/500'>
        <Link href={`/blog/${props.slug}`}>Read more</Link> <RightArrow />
      </div>
    </Card>
  );
};

export default TipsCard;
