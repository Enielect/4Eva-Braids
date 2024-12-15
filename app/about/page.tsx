import React, { ReactNode } from 'react';
import HeroImage from '@/public/hero-image.svg';
import Header from '../Molecules/Header';
import Image from 'next/image';
import { EyeIcon, MissionIcon } from '../atoms/icons';
import Footer from '../Molecules/Footer';

const AboutPage = () => {
  return (
    <div>
      <Header />
      <section className='px-7 my-5'>
        <div className='border-r-[100%] '>
          <Image
            src={HeroImage}
            width={400}
            height={400}
            alt='hero image about section'
          />
        </div>
        <Heading>about the company</Heading>
        <p>
          Lorem ipsum dolor sit amet consectetur. Ipsum urna eget quis tristique
          posuere leo tincidunt mi nisl. Leo mattis vel phasellus praesent leo
          pharetra lobortis. Non facilisi venenatis vitae ultricies sociis
          volutpat suspendisse dictum sodales. Interdum massa pulvinar cursus
          dignissim nisl. Elit purus egestas cursus semper eu commodo. Bibendum
          pharetra aliquet vitae faucibus aliquam mattis in pretium. Et molestie
          a commodo in leo amet. Tortor ac faucibus sit vitae vitae commodo id.
          Eget vel eget mattis id nec odio fermentum ac egestas. Posuere sed
          aliquam leo dui justo sapien. Sed eget scelerisque ultricies elit.
          Tristique metus gravida nunc massa sit. Augue quis ut sit nulla. Cras
          id netus euismod tempus urna.
        </p>
      </section>
      <section className="bg-[url('/circular-bg.jpeg')] py-5 space-y-6">
        <IntentCard icon={<EyeIcon />} title='our vision'>
          Lorem ipsum dolor sit amet consectetur. Iaculis metus sodales ut
          lacus. Cursus pharetra ornare lacus pretium purus aliquam leo. Quis
          dui.
        </IntentCard>
        <IntentCard icon={<MissionIcon />} title='our mission'>
          Lorem ipsum dolor sit amet consectetur. Iaculis metus sodales ut
          lacus. Cursus pharetra ornare lacus pretium purus aliquam leo. Quis
          dui.
        </IntentCard>
      </section>
      <section className='px-7 py-4 space-y-6'>
        <Heading>our core values</Heading>
        {[
          {
            value: 'value',
            description:
              'Lorem ipsum dolor sit amet consectetur. Viverra massa odio cras lorem habitant tempor. Ornare mattis orci praesent rhoncus facilisis convallis a facilisis nullam. Sit pharetra arcu ultrices tristique.',
          },
          {
            value: 'value',
            description:
              'Lorem ipsum dolor sit amet consectetur. Viverra massa odio cras lorem habitant tempor. Ornare mattis orci praesent rhoncus facilisis convallis a facilisis nullam. Sit pharetra arcu ultrices tristique.',
          },
          {
            value: 'value',
            description:
              'Lorem ipsum dolor sit amet consectetur. Viverra massa odio cras lorem habitant tempor. Ornare mattis orci praesent rhoncus facilisis convallis a facilisis nullam. Sit pharetra arcu ultrices tristique.',
          },
          {
            value: 'value',
            description:
              'Lorem ipsum dolor sit amet consectetur. Viverra massa odio cras lorem habitant tempor. Ornare mattis orci praesent rhoncus facilisis convallis a facilisis nullam. Sit pharetra arcu ultrices tristique.',
          },
        ].map((ele, i) => (
          <CoreValuesCard key={i} index={i + 1} title={ele.value}>
            {ele.description}
          </CoreValuesCard>
        ))}
      </section>
      <section className='px-7 py-5 mt-5 bg-[#F3ECD5]'>
        <div className='border-r-[100%] '>
          <Image
            src={HeroImage}
            width={400}
            height={400}
            alt='hero image about section'
          />
        </div>
        <Heading>meet the ceo</Heading>
        <p>
          Lorem ipsum dolor sit amet consectetur. Ipsum urna eget quis tristique
          posuere leo tincidunt mi nisl. Leo mattis vel phasellus praesent leo
          pharetra lobortis. Non facilisi venenatis vitae ultricies sociis
          volutpat suspendisse dictum sodales. Interdum massa pulvinar cursus
          dignissim nisl. Elit purus egestas cursus semper eu commodo. Bibendum
          pharetra aliquet vitae faucibus aliquam mattis in pretium. Et molestie
          a commodo in leo amet. Tortor ac faucibus sit vitae vitae commodo id.
          Eget vel eget mattis id nec odio fermentum ac egestas. Posuere sed
          aliquam leo dui justo sapien. Sed eget scelerisque ultricies elit.
          Tristique metus gravida nunc massa sit. Augue quis ut sit nulla. Cras
          id netus euismod tempus urna.
        </p>
      </section>
      <Footer />
    </div>
  );
};

function Heading({ children }: { children: ReactNode }) {
  return (
    <div className='uppercase text-center py-4 text-3xl text-black'>
      {children}
    </div>
  );
}

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
