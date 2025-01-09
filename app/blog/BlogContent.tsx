'use client';
import React from 'react';
import TipsCard from '@/components/Molecules/TipsCard';
import { ChevronLeft } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { TBlog } from './[slug]/page';
import { TBlogs } from '@/lib/types';

const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]

const BlogContent = ({
  blog,
  otherBlogs,
}: {
  blog: TBlog;
  otherBlogs: TBlogs[];
}) => {
  const router = useRouter();
  return (
    <section className='px-10 md:grid py-10 gap-5 grid-cols-[1fr_25%]'>
      <div>
        <header className='flex gap-1 items-center'>
          <button onClick={() => router.back()}>
            {' '}
            <ChevronLeft className='h-5' />
          </button>
          <span className='text-sm text-primary/500 '>Back to blog page</span>
        </header>
        <main className='py-10'>
          <header className='text-xl md:text-3xl font-bold text-primary/500'>
            {blog.title}
          </header>
          {/* date of posting */}
          <span className='text-[#D4D4D4] py-3 block'>
            {MONTHS[new Date(blog.date_created).getMonth()]},{' '}
            {new Date(blog.date_created).getDate()}{' '}
            {new Date(blog.date_created).getFullYear()}
          </span>
          {/* My Post: {slug} */}

          <div className='py-4'>
            {/* <p>
              Lorem ipsum dolor sit amet consectetur. Massa sed nulla lobortis
              maecenas diam sodales nec. Et magna elit ipsum consectetur tellus
              eget eget. Nibh scelerisque in ante adipiscing est est ac ornare.
              Ac enim et sit sagittis. Dignissim ante lorem ac curabitur. Donec
              arcu diam est elit dui in quam facilisis eu. Quisque augue
              pellentesque penatibus elementum magnis. A nibh viverra semper
              pellentesque cras leo. Enim morbi aenean fringilla risus egestas
              nisl. Magna ante tempor quam quisque molestie. Suscipit amet
              integer leo feugiat tellus ut pharetra urna. Nisl quisque egestas
              ut sem in sit. Enim et nec pellentesque non eleifend morbi
              facilisis tristique.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur. Massa sed nulla lobortis
              maecenas diam sodales nec. Et magna elit ipsum consectetur tellus
              eget eget. Nibh scelerisque in ante adipiscing est est ac ornare.
              Ac enim et sit sagittis. Dignissim ante lorem ac curabitur. Donec
              arcu diam est elit dui in quam facilisis eu. Quisque augue
              pellentesque penatibus elementum magnis. A nibh viverra semper
              pellentesque cras leo. Enim morbi aenean fringilla risus egestas
              nisl. Magna ante tempor quam quisque molestie. Suscipit amet
              integer leo feugiat tellus ut pharetra urna. Nisl quisque egestas
              ut sem in sit. Enim et nec pellentesque non eleifend morbi
              facilisis tristique.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur. Massa sed nulla lobortis
              maecenas diam sodales nec. Et magna elit ipsum consectetur tellus
              eget eget. Nibh scelerisque in ante adipiscing est est ac ornare.
              Ac enim et sit sagittis. Dignissim ante lorem ac curabitur. Donec
              arcu diam est elit dui in quam facilisis eu. Quisque augue
              pellentesque penatibus elementum magnis. A nibh viverra semper
              pellentesque cras leo. Enim morbi aenean fringilla risus egestas
              nisl. Magna ante tempor quam quisque molestie. Suscipit amet
              integer leo feugiat tellus ut pharetra urna. Nisl quisque egestas
              ut sem in sit. Enim et nec pellentesque non eleifend morbi
              facilisis tristique.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur. Massa sed nulla lobortis
              maecenas diam sodales nec. Et magna elit ipsum consectetur tellus
              eget eget. Nibh scelerisque in ante adipiscing est est ac ornare.
              Ac enim et sit sagittis. Dignissim ante lorem ac curabitur. Donec
              arcu diam est elit dui in quam facilisis eu. Quisque augue
              pellentesque penatibus elementum magnis. A nibh viverra semper
              pellentesque cras leo. Enim morbi aenean fringilla risus egestas
              nisl. Magna ante tempor quam quisque molestie. Suscipit amet
              integer leo feugiat tellus ut pharetra urna. Nisl quisque egestas
              ut sem in sit. Enim et nec pellentesque non eleifend morbi
              facilisis tristique.
            </p> */}
            {blog.body}
          </div>

          {/* Comments */}
          <div className='py-8'>
            <h3 className='text-xl md:text-2xl text-primary/500 font-bold py-3'>
              Add Comment
            </h3>
            <div className='space-y-3 max-w-[30rem]'>
              <Input type='text' placeholder='Enter your name' />
              <textarea
                className='h-[6rem] resize-none w-full rounded-md border placeholder:pt-3 placeholder:pl-3'
                placeholder='Type in your comment'
              />
              <div>
                <Button className='px-4 bg-primary/500 py-3 rounded-full '>
                  Post Comment
                </Button>
              </div>
            </div>
          </div>
        </main>
      </div>
      <aside className='max-md:hidden'>
        <div className='w-[90%] h-1 bg-primary/500 ml-8'></div>
        <div className='flex gap-4 '>
          <div className='h-full'>
            <svg
              width='24'
              height='2654'
              className='h-fit'
              viewBox='0 0 24 2654'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <line
                x1='14'
                y1='8.74228e-08'
                x2='14'
                y2='24'
                stroke='#EBA53C'
                strokeWidth='4'
              />
              <rect y='40' width='24' height='24' fill='#EBA53C' />
              <line
                x1='14'
                y1='80'
                x2='13.9999'
                y2='2654'
                stroke='#EBA53C'
                strokeWidth='4'
              />
            </svg>
          </div>
          <div className='pt-[3rem] h-fit'>
            <header className='text-primary/500  text-2xl pb-4 font-bold'>
              Latest Blogs
            </header>
            <div className='gap-y-8 grid'>
              {otherBlogs.map((blog) => (
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
        </div>
      </aside>
      <div className='pt-6 border-t-[3px] md:hidden border-primary/500'>
        <header className='text-primary/500 text-2xl font-bold'>
          Latest Blogs
        </header>
        <div className='gap-y-8 grid'>
          {/* These are not fetched from an api endpoint that provides the latest blogs yet */}
          {otherBlogs.map((blog) => (
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
    </section>
  );
};

export default BlogContent;
