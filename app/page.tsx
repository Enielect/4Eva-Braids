import Image from 'next/image';
import {
  MailIcon,
  OfficeIcon,
  PhoneIcon,
  SocialFacebookIcon,
  SocialInstagramIcon,
  SocialSnapChatIcon,
  SocialTwitterIcon,
} from '../components/atoms/icons';
import HeroImage from '@/public/hero-image.svg';
import CustomButton from '../components/atoms/Button';
import Model1 from '@/public/Model-1.svg';
import ForeGround from '@/public/Foreground.png';
import ImageCard from '../components/Molecules/ImageCard';
import DescriptionCard from '../components/Molecules/DescriptionCard';
import OfferCard from '../components/Molecules/OfferCard';
import TipsCard from '../components/Molecules/TipsCard';
import AdressDescription from '../components/Molecules/AdressDescription';

export default function Home() {
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
            <span className='uppercase block text-primary/500 text-5xl lg:text-7xl md:text-left  text-center py-3'>
              hair braiding & dreadlocks
            </span>
            <span className='uppercase block text-neutral-700 text-2xl sm:text-3xl py-2 max-md:mx-auto md:text-left sm:max-w-[37rem] text-center'>
              transform your hair into a work of art
            </span>
          </div>
          <div className='px-3 py-4 sm:flex md:flex-col lg:flex-row md:items-start lg:items-center gap-12 max-md:mx-auto items-center'>
            <span className='text-neutral-600 sm:max-w-[200px] text-center  sm:text-left block pb-3 text-xl'>
              Get your perfect look with a free sylist consultation
            </span>
            <div className='sm:min-w-[180px]'>
              <CustomButton>Book Now</CustomButton>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-primary/500 px-6 md:px-9 lg:px-10 py-8 sm:py-14'>
        <div className='uppercase text-center py-4 sm:py-10 sm:text-5xl sm:max-w-[49rem] font-semibold sm:leading-[3.5rem] sm:text-left text-3xl text-white'>
          unleash your inner beuty with artistry salon
        </div>
        <div className='sm:grid grid-cols-2 gap-x-8'>
          <div className='grid sm:grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-7'>
            <ImageCard
              className='first-grid-item  sm:max-h-[550px]'
              image={Model1}
            />
            <DescriptionCard
              title='EXPERIENCED STYLISTS'
              description='Our stylists are experienced in all hair types and styles'
            />
            <DescriptionCard
              title='HIGH QUALITY PRODUCTS'
              description='Lorem ipsum dolor sit amet consectetur. Orci sed pharetra eu mattis congue quis odio massa ipsum. Amet diam venenatis.'
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
                description='Lorem ipsum dolor sit amet consectetur. Orci sed pharetra eu mattis congue quis odio massa ipsum. Amet diam venenatis.'
              />
            </div>
            <div className='order-3'>
              <DescriptionCard
                title='CUSTOMER SATISFACTION'
                description='Lorem ipsum dolor sit amet consectetur. Orci sed pharetra eu mattis congue quis odio massa ipsum. Amet diam venenatis.'
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
            title='HAIR BRAIDING'
            description='Lorem ipsum dolor sit amet consectetur. Orci sed pharetra eu mattis congue quis odio massa ipsum. Amet diam venenatis.'
          />
          <OfferCard
            image={Model1}
            title='HAIR BRAIDING'
            description='Lorem ipsum dolor sit amet consectetur. Orci sed pharetra eu mattis congue quis odio massa ipsum. Amet diam venenatis.'
          />
          <OfferCard
            image={Model1}
            title='HAIR BRAIDING'
            description='Lorem ipsum dolor sit amet consectetur. Orci sed pharetra eu mattis congue quis odio massa ipsum. Amet diam venenatis.'
          />
          <OfferCard
            image={Model1}
            title='HAIR BRAIDING'
            description='Lorem ipsum dolor sit amet consectetur. Orci sed pharetra eu mattis congue quis odio massa ipsum. Amet diam venenatis.'
          />
        </div>
        <div className='sm:max-w-[60rem] mx-auto my-5'>
          <CustomButton>View all services</CustomButton>
        </div>
      </div>
      <section className='pb-8 bg-[#D58A2D1A] px-8'>
        {/* <div className='uppercase py-6 text-3xl text-center sm:text-5xl sm:text-left sm:py-8'> */}
        <div className='uppercase py-6 text-3xl text-center sm:text-5xl  sm:py-8'>
          braid tips for you
        </div>
        {/* <div className='mt-5 gap-y-12 grid sm:grid-cols-2 md:grid-cols-3 gap-x-14 lg:grid-cols-4 xl:grid-cols-5 place-items-center'> */}
        <div className='mt-5 flex max-sm:flex-col flex-wrap gap-4 md:mx-10 justify-center items-center'>
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
        <div className='sm:max-w-[60rem] mx-auto my-9'>
          <CustomButton>View all</CustomButton>
        </div>
      </section>
      <section className='py-8 px-8'>
        <div className='uppercase py-6 text-3xl text-center'>Our works</div>
        <div className=''></div>
        <div className='sm:max-w-[60rem] mx-auto my-9'>
          <CustomButton>View Complete gallery</CustomButton>
        </div>
      </section>
      <section className='mx-14 relative max-md:flex-col gap-4 justify-between sm:max-w-[80vw] sm:mx-auto flex md:my-[130px]'>
        <div className='sm:max-w-[30rem] relative sm:-right-12 max-sm:my-10'>
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
        <div className='px-6 md:px-8 max-md:my-10 max-sm:mt-3 max-sm:mb-10 md:relative right-12 top-10 py-8 rounded-xl sm:max-w-[33rem] lg:w-[45vw] md:w-[40vw] lg:max-w-[45rem] bg-[#f3ecd5]'>
          <div className='uppercase py-6 text-3xl text-center md:sm:text-left '>
            get in touch
          </div>
          <div className='px-5 text-xl sm:text-left w-full text-center text-neutral-700 pb-5'>
            Lorem ipsum dolor sit amet consectetur. Orci sed pharetra eu mattis
            congue quis odio massa ipsum. Amet diam venenatis.
          </div>
          <div className='space-y-4 pb-10'>
            <AdressDescription
              icon={<OfficeIcon />}
              title='ADDRESS'
              description='1234 Street Name, City Name, Country Name'
            />
            <AdressDescription
              icon={<MailIcon />}
              title='ADDRESS'
              description='1234 Street Name, City Name, Country Name'
            />
            <AdressDescription
              icon={<PhoneIcon />}
              title='ADDRESS'
              description='1234 Street Name, City Name, Country Name'
            />
          </div>
          <div className='flex flex-col justify-center gap-4 text-center'>
            <span className='text-neutral/900 text-2xl text-center'>
              Follow us on social media
            </span>
            <div className='flex mx-auto items-center gap-4'>
              <SocialFacebookIcon />
              <SocialTwitterIcon />
              <SocialInstagramIcon />
              <SocialSnapChatIcon />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
