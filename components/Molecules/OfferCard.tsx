import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from '@/components/ui/card';
import Image, { StaticImageData } from 'next/image';
import React from 'react';

const OfferCard = (props: {
  image: string | StaticImageData;
  title: string;
  description: string;
}) => {
  return (
    <Card className='!border-none outline-none  shadow-none bg-inherit'>
      <CardContent className=''>
        <div className='overflow-hidden mx-auto max-h-[12rem] max-w-[20rem] rounded-xl bg-neutral-100'>
          <Image src={props.image} width={300} height={300} className='h-full w-full' alt='what we do' />
        </div>
        <CardTitle className='text-2xl !font-normal text-center py-3'>
          {props.title}
        </CardTitle>
        <CardDescription className='text-center max-w-96 text-lg'>
          {props.description}
        </CardDescription>
      </CardContent>
    </Card>
  );
};

export default OfferCard;
