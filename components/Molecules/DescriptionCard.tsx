import { Card, CardDescription, CardTitle } from '@/components/ui/card';
import React from 'react';

const DescriptionCard = (props: {
  title: string;
  description: string;
  className?: string;
}) => {
  return (
    <Card
      className={`bg-neutral-100 border border-neutral-900 px-6 pr-8 py-6 rounded-3xl card-shadow ${props.className}`}
    >
      <CardTitle className='text-primary/600 text-2xl'>{props.title}</CardTitle>
      <CardDescription className='text-primary/500 mt-3 text-xl'>
        {props.description}
      </CardDescription>
    </Card>
  );
};

export default DescriptionCard;
