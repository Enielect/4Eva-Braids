import React from 'react';
import TipsCard from '../../components/Molecules/TipsCard';
import { fetchBlogs } from '@/baseUrl';
import { TBlogs } from '@/lib/types';

const Blogpage = async () => {
  const blogs: TBlogs[] = await fetchBlogs();
  return (
    <>
      {blogs?.length === 0 && (
        <div className='grid place-items-center h-full text-xl'>
          <span>
            Sorry, there are no <span className='text-primary/600'>blogs</span>{' '}
            to display at the momemt{' '}
          </span>
        </div>
      )}
      <div className='my-10 pb-8 px-8'>
        <div className='gap-y-8 grid sm:grid-cols-2 md:grid-cols-3 gap-x-14 lg:grid-cols-4 xl:grid-cols-5 place-items-center mb-6'>
          {blogs?.map((blog) => (
            <TipsCard
              slug={blog._id}
              key={blog._id}
              image={blog.thumbnail}
              title={blog.title}
              description={blog.preview}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Blogpage;
