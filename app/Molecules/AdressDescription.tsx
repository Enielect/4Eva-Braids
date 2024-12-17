import React, { ReactNode } from 'react';

const AdressDescription = (props: {
  icon: ReactNode;
  title: string;
  description: string;
}) => {
  return (
    <div className='flex items-start gap-4'>
      <div className=' '>{props.icon}</div>
      <div>
        <div className='text-neutral-900 text-xl'>{props.title}</div>
        <div className='text-neutral-700'>{props.description}</div>
      </div>
    </div>
  );
};

export default AdressDescription;
