import Image from 'next/image';
import {
  MailIcon,
  OfficeIcon,
  PhoneIcon,
  SocialInstagramIcon,
  SocialTikTokIcon,
  SocialTwitterIcon,
  SocialWhatsAppIcon,
} from '../components/atoms/icons';
import HeroImage from '@/public/hero-image.svg';
import { CustomLink } from '../components/atoms/Button';
import Model1 from '@/public/Model-1.svg';
import ForeGround from '@/public/Foreground.png';
import ImageCard from '../components/Molecules/ImageCard';
import DescriptionCard from '../components/Molecules/DescriptionCard';
import OfferCard from '../components/Molecules/OfferCard';
import TipsCard from '../components/Molecules/TipsCard';
import AdressDescription from '../components/Molecules/AdressDescription';
import { fetchBlogs } from '@/baseUrl';
import { TBlogs } from '@/lib/types';
import Link from 'next/link';

export default async function Home() {
  //this should only be a selected number of blogs
  const blogs: TBlogs[] = await fetchBlogs();
  return (
    <main className=''>
      <div className='bg-primary/50 md:grid grid-cols-2 md:grid-cols-[1fr_auto] lg:grid-cols-2 justify-between'>
        <div className='order-3 sm:min-h-[700px]'>
          <Image
            className='w-full object-cover object-center h-full'
            src={HeroImage}
            alt='logo'
            width={300}
            height={300}
          />
        </div>
        <div className='order-2 h-full sm:px-16 md:px-10 sm:flex flex-col justify-between md:justify-around lg:justify-between py-8 sm:py-0 lg:py-28'>
          <div className='px-3 '>
            <span className='uppercase block font-bold text-primary/500 text-5xl lg:text-7xl md:text-left  text-center py-3'>
              hair braiding & dreadlocks
            </span>
            <span className='uppercase block text-neutral-700 text-2xl sm:text-3xl py-2 max-md:mx-auto md:text-left sm:max-w-[37rem] text-center'>
              transform your hair into a work of art
            </span>
          </div>
          <div className='px-3 py-4 sm:flex md:flex-col lg:flex-row md:items-start lg:items-center gap-12 max-md:mx-auto items-center'>
            <span className='text-neutral-600 sm:max-w-[200px] text-center  sm:text-left block pb-3 text-xl'>
              Get your perfect look by just the click of a button
            </span>
            <div className='sm:min-w-[180px]'>
              <CustomLink href='/services#book-a-service'>Book Now</CustomLink>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-primary/500 px-6 md:px-9 lg:px-10 py-8 sm:py-14'>
        <div className='uppercase text-center py-4 sm:py-10 sm:text-5xl sm:max-w-[49rem] font-semibold sm:leading-[3.5rem] sm:text-left text-3xl text-white'>
          Transform your look with stunning braids in just a few hours.
        </div>
        <div className='sm:grid grid-cols-2 gap-x-8'>
          <div className='grid sm:grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-7'>
            <ImageCard
              className='first-grid-item  sm:max-h-[550px]'
              image={Model1}
            />
            <DescriptionCard
              title='EXPERIENCED STYLISTS'
              description='Our stylists are experts in all hair types and styles, crafting the perfect look just for you.'
            />
            <DescriptionCard
              title='HIGH QUALITY PRODUCTS'
              description='Ever desired originality? say no more, click a button and see.'
            />
          </div>
          <div className='grid sm:grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-7 max-sm:mt-7'>
            <ImageCard
              className='first-grid-item order-4 sm:max-h-[550px]'
              image={Model1}
            />
            <div className='order-2'>
              <DescriptionCard
                title='AFFORDABLE PRICES'
                description='Top-tier quality at unbeatable price. Certainly the best.'
              />
            </div>
            <div className='order-3'>
              <DescriptionCard
                title='CUSTOMER SATISFACTION'
                description='Your happiness is our priority, and we strive to exceed your expectations every time.'
              />
            </div>
          </div>
        </div>
      </div>
      <div className='px-10 pb-6 bg-neutral-50'>
        {/* <div className='uppercase py-6 text-3xl text-center sm:text-5xl sm:text-left sm:py-8'> */}
        <div className='uppercase py-6 text-3xl text-center sm:text-5xl  sm:py-8'>
          WHAT WE OFFER
        </div>
        {/* <div className='mt-5 gap-y-12 grid sm:grid-cols-2 md:grid-cols-3 gap-x-14 lg:grid-cols-4 xl:grid-cols-5 place-items-center'> */}
        <div className='mt-5 flex gap-4 max-sm:flex-col flex-wrap justify-center items-center'>
          <OfferCard
            image={Model1}
            title='Boho Braids'
            description='Transform your look with our signature Boho Braids, a perfect blend of loose, carefree styling and intricate braid patterns.
            These braids exude a relaxed, bohemian vibe, ideal for festivals, casual outings, or special events. Designed with natural-looking plaits and soft textures,
            Boho Braids are your go-to style for embracing an effortlessly chic and trendy aesthetic.
            Whether adorned with accessories or left to flow freely, this braid style promises versatility and timeless appeal.'
          />
          <OfferCard
            image={Model1}
            title='Knotless Braids'
            description='Discover the ultimate in protective styling with our Knotless Braids, a revolutionary braid technique known for its sleek, natural appearance. These braids start seamlessly without knots, reducing tension on the scalp while providing a lightweight and comfortable fit. Perfect for long-lasting wear, Knotless Braids are ideal for achieving a flawless look that’s gentle on your hair. Whether you choose long, flowing lengths or a shorter, chic finish, this braid style ensures beauty and practicality go hand in hand.'
          />
          <OfferCard
            image={Model1}
            title='French Braids'
            description='Embrace the elegance of classic French Braids, a timeless braid style that’s both functional and fashionable. Perfect for all hair types, French Braids feature overlapping strands that create a smooth, polished look. This versatile braid is ideal for everyday wear, formal occasions, or as a foundation for other braided hairstyles. Whether styled in a single braid or multiple intricate patterns, French Braids are a must-have for achieving a sophisticated and refined appearance.'
          />
          <OfferCard
            image={Model1}
            title='Cornrow'
            description='Step into the world of intricate braiding with our expertly crafted Cornrows, a braid style that combines traditional techniques with modern artistry. Cornrows are tight, close-to-the-scalp braids known for their durability and versatility. Whether you prefer straight-back braids, zig-zag patterns, or custom designs, this style lets you showcase your creativity and personality. Perfect for protective styling, Cornrows keep your hair secure and stunning, making them an iconic choice for any occasion.'
          />
        </div>
        <div className='sm:max-w-[60rem] mx-auto my-5'>
          <CustomLink href='/services'>View all services</CustomLink>
        </div>
      </div>
      <section className='pb-8 bg-[#D58A2D1A] px-8'>
        {/* <div className='uppercase py-6 text-3xl text-center sm:text-5xl sm:text-left sm:py-8'> */}
        <div className='uppercase py-6 text-3xl text-center sm:text-5xl  sm:py-8'>
          Hair and Braid tips for you
        </div>
        {/* <div className='mt-5 gap-y-12 grid sm:grid-cols-2 md:grid-cols-3 gap-x-14 lg:grid-cols-4 xl:grid-cols-5 place-items-center'> */}
        <div className='mt-5 flex max-sm:flex-col flex-wrap gap-4 md:mx-10 justify-center items-center'>
          {blogs.map((blog) => (
            <TipsCard
              slug={blog._id}
              key={blog._id}
              image={blog.thumbnail}
              title={blog.title}
              description={blog.preview}
            />
          ))}
        </div>
        <div className='sm:max-w-[60rem] mx-auto my-9'>
          <CustomLink href='/blog'>View all</CustomLink>
        </div>
      </section>
      <section className='py-8 px-8'>
        <div className='uppercase py-6 text-3xl text-center'>Our Works</div>
        <div className=''></div>
        <div className='sm:max-w-[60rem] mx-auto my-9'>
          <CustomLink href='/gallery'>View Complete gallery</CustomLink>
        </div>
      </section>
      <section className=' relative max-md:flex-col gap-4 justify-between sm:max-w-[80vw] sm:mx-auto flex md:my-[130px]'>
        <div className='mx-14 sm:max-w-[30rem] relative sm:-right-12 max-sm:my-10'>
          <div className='absolute -z-10 bg-[#F3ECD5] -left-10 max-sm:-bottom-7 sm:-bottom-8 rounded-md max-sm:w-[80%] sm:w-[34vw] h-[80%]'></div>
          <div className='h-full w-full md:w-[40vw] rounded-md overflow-hidden'>
            <Image
              src={ForeGround}
              width={400}
              height={500}
              className='w-full h-full object-cover'
              alt='foregrand image'
            />
          </div>
        </div>
        <div className='mx-5 px-6 md:px-8 max-md:my-10 max-sm:mt-3 max-sm:mb-10 md:relative right-12 top-10 py-8 rounded-xl sm:max-w-[33rem] lg:w-[45vw] md:w-[40vw] lg:max-w-[45rem] bg-[#f3ecd5]'>
          <div className='uppercase py-6 text-3xl text-center md:sm:text-left '>
            Get in touch
          </div>
          <div className='px-5 text-xl sm:text-left w-full text-center text-neutral-700 pb-5'>
            We are inherently an online braiding site that offer home services but you can check in at our studio with details below.
          </div>
          <div className='space-y-4 pb-10'>
            <AdressDescription
              icon={<OfficeIcon />}
              title='Office Address'
              description='11 Philliph Fatueyi Street, Lagos State, Nigeria'
            />
            <AdressDescription
              icon={<MailIcon />}
              title='Mail Address'
              description='11 Philliph Fatueyi Street, Lagos State, Nigeria'
            />
            <AdressDescription
              icon={<PhoneIcon />}
              title='Contact Details'
              description='+234 906 340 6307 and +234 803 054 4395'
            />
          </div>
          <div className='flex flex-col justify-center gap-4 text-center'>
            <span className='text-neutral/900 text-2xl text-center'>
              Follow us on social media
            </span>
            <div className='flex mx-auto items-center gap-4'>
              <Link href='https://www.tiktok.com/@4evabraids'>
                <SocialTikTokIcon />
              </Link>
              <Link href='https://www.instagram.com/4evabraids/'>
              <SocialTwitterIcon />
              </Link>
              <Link href='https://www.instagram.com/4evabraids/'>
                <SocialInstagramIcon />
              </Link>
              <Link href='https://wa.me/2349063406307'>
                <SocialWhatsAppIcon />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
