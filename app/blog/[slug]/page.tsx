import BlogContent from '../BlogContent';

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug; //to be used later
  console.log(slug);
  return <BlogContent />;
}
