import { baseUrl, fetchBlogs } from '@/baseUrl';
import BlogContent from '../BlogContent';
import { TBlogs } from '@/lib/types';

const fetchBlog = async (slug: string) => {
  try {
    const res = await fetch(`${baseUrl}/blogs/${slug}`);
    const data = await res.json();
    return data;
    console.log(data);
  } catch (err) {
    console.log(err);
  }
};

export type TBlog = {
  preview: string;
  title: string;
  body: string;
  comments: unknown[];
  date_created: string;
  date_updated: string;
  likes: number;
  thumbnail: string;
  user_id: string;
  _id: string;
};

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug; //to be used later
  console.log(slug);
  const blog: TBlog = await fetchBlog(slug);
  const blogs: TBlogs[] = await fetchBlogs();
  return (
    <BlogContent
      otherBlogs={blogs.filter((curr) => curr._id !== slug)}
      blog={blog}
    />
  );
}
