import Image from 'next/image';
import {
  Hamburger,
  MailIcon,
  OfficeIcon,
  PhoneIcon,
  SocialFacebookIcon,
  SocialInstagramIcon,
  SocialSnapChatIcon,
  SocialTwitterIcon,
} from './atoms/icons';
import HeroImage from '@/public/hero-image.svg';
import Logo from '@/public/logo.svg';
import CustomButton from './atoms/Button';
import Model1 from '@/public/Model-1.svg';
import ImageCard from './Molecules/ImageCard';
import DescriptionCard from './Molecules/DescriptionCard';
import OfferCard from './Molecules/OfferCard';
import TipsCard from './Molecules/TipsCard';
import AdressDescription from './Molecules/AdressDescription';

export default function Home() {
  return (
    <main className=''>
      <div className='bg-primary/500 px-2 py-4 flex justify-between'>
        <div>
          <Image
            className='w-full'
            src={Logo}
            alt='logo'
            width={80}
            height={80}
          />
        </div>
        <Hamburger className='h-8' />
      </div>
      <div className='bg-primary/50'>
        <div>
          <Image
            className='w-full'
            src={HeroImage}
            alt='logo'
            width={300}
            height={300}
          />
        </div>
        <div className='px-3'>
          <span className='uppercase block text-primary/500 text-4xl text-center py-3'>
            hair braiding & dreadlocks
          </span>
          <span className='uppercase block text-neutral-700 text-2xl py-2 text-center'>
            transform your hair into a work of art
          </span>
        </div>
        <div className='px-3 py-4'>
          <span className='text-neutral-600 text-center block pb-3 text-xl'>
            Get your perfect look with a free sylist consultation
          </span>
          <CustomButton>Book Now</CustomButton>
        </div>
      </div>
      <div className='bg-primary/500 px-6 py-8'>
        <div className='uppercase text-center py-4 text-3xl text-white'>
          unleash your inner beuty with artistry salon
        </div>
        <div className='space-y-8'>
          <ImageCard image={Model1} />
          <DescriptionCard
            title='EXPERIENCED STYLISTS'
            description='Our stylists are experienced in all hair types and styles'
          />
          <DescriptionCard
            title='HIGH QUALITY PRODUCTS'
            description='Lorem ipsum dolor sit amet consectetur. Orci sed pharetra eu mattis congue quis odio massa ipsum. Amet diam venenatis.'
          />
          <ImageCard image={Model1} />
          <DescriptionCard
            title='AFFORDABLE PRICES'
            description='Lorem ipsum dolor sit amet consectetur. Orci sed pharetra eu mattis congue quis odio massa ipsum. Amet diam venenatis.'
          />
          <DescriptionCard
            title='CUSTOMER SATISFACTION'
            description='Lorem ipsum dolor sit amet consectetur. Orci sed pharetra eu mattis congue quis odio massa ipsum. Amet diam venenatis.'
          />
        </div>
      </div>
      <div className='px-10 pb-6 bg-neutral-50'>
        <div className='uppercase py-6 text-3xl text-center'>WHAT WE OFFER</div>
        <div className='space-y-8'>
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
          <CustomButton>View all services</CustomButton>
        </div>
      </div>
      <section className='pb-8 bg-[#D58A2D1A] px-8'>
        <div className='upercase py-6 text-3xl text-center'>
          BRAID TIPS FOR YOU
        </div>
        <div className='space-y-4 mb-6'>
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
        <CustomButton>View All</CustomButton>
      </section>
      <section className='py-8 px-8'>
        <div className='uppercase py-6 text-3xl text-center'>Our works</div>
        <div></div>
        <CustomButton>View Complete Gallery</CustomButton>
      </section>
      <section className='px-5 m-4 py-8 rounded-xl bg-[#D58A2D1A]'>
        <div className='uppercase py-6 text-3xl text-center'>get in touch</div>
        <div className='px-5 text-xl w-full text-center text-neutral-700 pb-5'>
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
      </section>
      <footer className='px-7 py-5 text-white bg-neutral-800'>
        <div className='flex gap-4 text-xl justify-center flex-wrap'>
          {['home', 'about', 'services', 'blog', 'gallery', 'contact us'].map(
            (ele, i) => (
              <span className='uppercase' key={i}>
                {ele}
              </span>
            )
          )}
        </div>
        <span className='py-5 text-center block text-xl'>
          &copy; 4Eva Braids, All Rights Reserved
        </span>
      </footer>
    </main>
  );
}
