import React, { ReactNode } from 'react';
import Ceo from '@/public/ceo.jpg';
import CeoAgain from '@/public/ceo-again.jpg';
import Image from 'next/image';
import { EyeIcon, MissionIcon } from '../../components/atoms/icons';
import Heading from '@/components/Molecules/Heading';

const AboutPage = () => {
  return (
    <div>
      <section className='px-7 md:grid grid-cols-2 place-items-center gap-4 md:px-14 my-5'>
        <div className='rounded-tl-[100px] border overflow-hidden w-full h-[80%]'>
          <Image
            src={CeoAgain}
            width={400}
            height={400}
            className='w-full h-full'
            alt='hero image about section'
          />
        </div>
        <div className='-order-2 md:max-w-[40rem] md:flex justify-center flex-col items-center text-center'>
          <Heading className='lg:text-5xl'>About the company</Heading>
          <p className=''>
          <strong><em>4evabraids</em> is a next generation braiding salon</strong> that offers a wide range of braiding services. The company was founded in 2019
          and since then we have retained the reputation a excellence in the industry. <br />
          <br />

          At <em>4evabraids</em> we’re revolutionizing the hair braiding industry with our next-generation salon experience.
          Whether you prefer the comfort of your home or the vibrant energy of our in-salon service, our team of highly skilled,
          professional braiders is committed to crafting stunning, long-lasting styles tailored to you.
          Renowned for our exceptional craftsmanship, <em>4evabraids</em> has become synonymous with premium quality and innovative 
          techniques that set us apart from the rest. With an expanding presence across Lagos and plans to launch nationwide soon,
          we’re bringing our artistry and excellence to more clients who demand nothing but the best.
          </p>
        </div>
      </section>
      <section className="bg-[url('/circular-bg.jpeg')] md:py-12 py-5 space-y-6">
        <div className='md:flex md:max-w-[70rem] mx-auto'>
          <IntentCard icon={<EyeIcon />} title='our vision'>
            To be the leading all-in-one hair braiding salon in the world, bringing beauty, confidence, and innovation to every client.
          </IntentCard>
          <IntentCard icon={<MissionIcon />} title='our mission'>
            At <em>4evabraids</em>, we aim to transform the hair braiding experience by combining artistry, innovation, and unmatched professionalism
          </IntentCard>
        </div>
      </section>
      <section className='px-7 py-4 '>
        <Heading>our core values</Heading>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-12'>
          {[
            {
              value: 'Elegance',
              description:
                'Our dedication to elegance ensures every braid is crafted with sophistication, enhancing your style with a flawless finish.',
            },
            {
              value: 'Efficiency',
              description:
                'We value your time by delivering exceptional braids promptly, maintaining the perfect balance of speed and quality.',
            },
            {
              value: 'Quality',
              description:
                'Experience unmatched quality in every braid, as we use the finest techniques and materials to guarantee durability and style.',
            },
            {
              value: 'Perfection',
              description:
                'Perfection is our standard. Each braid is a masterpiece, tailored to elevate your look and boost your confidence.',
            },
          ].map((ele, i) => (
            <CoreValuesCard key={i} index={i + 1} title={ele.value}>
              {ele.description}
            </CoreValuesCard>
          ))}
        </div>
      </section>
      <section className='px-7 py-4 lg:py-14 sm:py-4 md:py-5 md:grid gap-7 grid-cols-2 place-items-center mt-5 bg-[#F3ECD5]'>
        <div className='border-r-[100%] h-full'>
          <Image
            src={Ceo}
            width={400}
            height={400}
            className='w-full h-full'
            alt='hero image about section'
          />
        </div>
        <div className=''>
          <Heading className='lg:text-5xl lg:text-left'>meet the ceo</Heading>
          <p>
            <strong>Nwofia Chidinma Evaresta</strong> is the visionary CEO and Chief Braider of <em>4evabraids</em>, a brand synonymous with
          innovation and excellence in the hair braiding industry. With a unique ability to craft masterpieces
          from every client’s hair, Evaresta has transformed her passion for braiding into a thriving business
          that redefines beauty and artistry. <br />
          <br />
          
          A graduate of English from Nnamdi Azikiwe University (UNIZIK), 
          Evaresta’s journey into braiding began long before her professional career. From her primary school days,
          she displayed remarkable skill and creativity, braiding her classmates`&apos;` hair with precision and flair.
          After graduating, she turned her lifelong talent into a career, building a reputation as a diligent, innovative, and highly skilled braider.
          Today, Evaresta doesn’t just braid hair—she creates styles for greatness. Her work graces the heads of 
          influential individuals, reflecting her commitment to delivering beauty, confidence, and unmatched quality.

          Under her leadership, <em>4evabraids</em> continues to grow, expanding its reach and reputation while staying true to the
          values of excellence, creativity, and passion that define Evaresta herself.
          </p>
        </div>
      </section>
    </div>
  );
};



type InnerCardProp = {
  icon: ReactNode;
  title: string;
  children: ReactNode;
};

function IntentCard({ icon, title, children }: InnerCardProp) {
  return (
    <div className='space-y-3 px-7'>
      <div className='py-4'>{icon}</div>
      <strong className='text-primary/600 uppercase'>{title}</strong>
      <p className='text-neutral-700'>{children}</p>
    </div>
  );
}

type CoreValsProps = {
  index: number;
  title: string;
  children: ReactNode;
};

function CoreValuesCard({ index, title, children }: CoreValsProps) {
  return (
    <div className='grid grid-cols-[40px_1fr] items-start gap-4'>
      <div className='bg-secondary/500 mt-3 w-full h-[40px] text-white rounded-full flex justify-center items-center'>
        {index}
      </div>
      <div className='bg-primary/500 px-4 py-5 rounded-2xl'>
        <header className='uppercase text-xl font-bold text-white'>
          {title}
        </header>
        <span className='text-neutral-100 pt-3 block'>{children}</span>
      </div>
    </div>
  );
}
export default AboutPage;
