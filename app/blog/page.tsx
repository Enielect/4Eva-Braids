import React from 'react';
import Model1 from '@/public/Model-1.svg';
import TipsCard from '../../components/Molecules/TipsCard';

const Blogpage = () => {
  return (
    <div className='my-10 pb-8 px-8'>
      <div className='gap-y-8 grid sm:grid-cols-2 md:grid-cols-3 gap-x-14 lg:grid-cols-4 xl:grid-cols-5 place-items-center mb-6'>
        <TipsCard
          image={Model1}
          title='BLOG TITLE'
          description='Orci sed pharetra eu mattis congue quis odio massa ipsum. Amet diam venenatis.'
        />
        <TipsCard
          image={Model1}
          title='BLOG TITLE'
          description='Orci sed pharetra eu mattis congue quis odio massa ipsum. Amet diam venenatis.'
        />
        <TipsCard
          image={Model1}
          title='BLOG TITLE'
          description='Orci sed pharetra eu mattis congue quis odio massa ipsum. Amet diam venenatis.'
        />
        <TipsCard
          image={Model1}
          title='BLOG TITLE'
          description='Orci sed pharetra eu mattis congue quis odio massa ipsum. Amet diam venenatis.'
        />
      </div>
    </div>
  );
};

export default Blogpage;
