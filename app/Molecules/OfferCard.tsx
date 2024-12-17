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
    <Card className='!border-none outline-none shadow-none bg-inherit'>
      <CardContent className=''>
        <div className='overflow-hidden rounded-xl bg-neutral-100'>
          <Image src={props.image} width={300} height={300} alt='what we do' />
        </div>
        <CardTitle className='text-2xl text-center py-3'>
          {props.title}
        </CardTitle>
        <CardDescription className='text-center text-lg'>
          {props.description}
        </CardDescription>
      </CardContent>
    </Card>
  );
};

export default OfferCard;
