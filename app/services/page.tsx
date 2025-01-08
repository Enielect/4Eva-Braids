'use client';
import React from 'react';
import ServicesCard from '@/components/Molecules/ServicesCard';
import ImageCard from '@/components/Molecules/ImageCard';
import BookAppointment from '@/public/book_appointment.png';
import DescriptionCard from '@/components/Molecules/DescriptionCard';
import CustomButton from '@/components/atoms/Button';
import { Input } from '@/components/ui/input';
// import { Select, SelectContent } from '@radix-ui/react-select';
// import { SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import AccordionWrapper from '@/components/Molecules/AccordionWrapper';
import Heading from '@/components/Molecules/Heading';

const ServicesPage = () => {
  const [formState, setFormState] = React.useState({
    full_name: '',
    email: '',
    phone_number: '',
    location: '',
    service_type: '',
    date: '',
    time: '',
    hairstyle: '',
  });
  return (
    <div className='mx-8 my-6'>
      <header className='text-center'>
        <Heading className='sm:hidden'>what we offer</Heading>
        <Design className='mx-auto hidden sm:block' />
        <span className='max-w-[300px] py-3 text-neutral-700 hidden sm:inline-block'>
          Lorem ipsum dolor sit amet consectetur. Orci sed pharetra eu mattis
          congue quis odio massa ipsum. Amet diam venenatis.
        </span>
      </header>

      <section className='mt-5 gap-y-12 grid max-[480px]:grid-cols-1 grid-cols-2 md:grid-cols-3 gap-x-14 lg:grid-cols-4 xl:grid-cols-5 place-items-center'>
        {/* ServicesCard */}
        {Array(10)
          .fill('')
          .map((ele, i) => (
            <ServicesCard
              key={i}
              title='Service Title'
              description='Orci sed pharetra eu mattis congue quis odio massa ipsum. Amet diam venenatis. Orci sed pharetra eu mattis congue quis odio massa ipsum. Amet diam venenatis.'
            />
          ))}
      </section>
      <section className=' my-[60px]'>
        <div className='h-full grid md:grid-cols-[1fr_2fr] gap-[3rem]'>
          <ImageCard image={BookAppointment} className='lg:max-h-[40rem]' />
          <div>
            <h3 className='uppercase text-2xl max-sm:text-center font-semibold sm:text-3xl md:text4xl lg:text-5xl  max-w-[400px] lg:leading-[4rem] text-neutral-900 py-4'>
              how to book an appointment
            </h3>
            <div className='grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'>
              <DescriptionCard
                description='lorem4serserwr skla jdsklfj akldjsfkaj sdfkjasdfjdjfad fd'
                title='I am the title'
              />
              <DescriptionCard
                description='lorem4serserwr skla jdsklfj akldjsfkaj sdfkjasdfjdjfad fd'
                title='I am the title'
              />
              <DescriptionCard
                description='lorem4serserwr skla jdsklfj akldjsfkaj sdfkjasdfjdjfad fd'
                title='I am the title'
              />
              <DescriptionCard
                description='lorem4serserwr skla jdsklfj akldjsfkaj sdfkjasdfjdjfad fd'
                title='I am the title'
              />
            </div>
            <div className='max-w-[150px] my-8'>
              <CustomButton>Book Now</CustomButton>
            </div>
          </div>
        </div>
      </section>
      <section id='book-a-service' className='sm:max-w-[60rem] mx-auto'>
        <div className='text-center'>
          <Heading className=''>book a service</Heading>
          <Design className='mx-auto hidden sm:block' />
          <span className='max-w-[300px] py-3 text-neutral-700 hidden sm:inline-block'>
            Lorem ipsum dolor sit amet consectetur. Orci sed pharetra eu mattis
            congue quis odio massa ipsum. Amet diam venenatis.
          </span>
        </div>
        <form className='space-y-4' action=''>
          <Input
            type='text'
            value={formState.full_name}
            onChange={(e) =>
              setFormState({ ...formState, full_name: e.target.value })
            }
            placeholder='Full Name'
            className='!py-3'
            name='full_name'
          />
          <Input
            type='email'
            value={formState.email}
            onChange={(e) => {
              setFormState({ ...formState, email: e.target.value });
            }}
            placeholder='Email Address'
            name='email'
          />
          <Input
            type='number'
            value={formState.phone_number}
            onChange={(e) => {
              setFormState({ ...formState, phone_number: e.target.value });
            }}
            placeholder='Phone Number'
            name='phone_number'
          />
          <Input
            type='text'
            value={formState.location}
            onChange={(e) => {
              setFormState({ ...formState, location: e.target.value });
            }}
            placeholder='Location'
            name='location'
          />
          {/* <div className='relative max-h-[200px]'>
            <Select onValueChange={() => {}} defaultValue={'man'}>
              <SelectTrigger>
                <SelectValue placeholder='Select a verified email to display' />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value='m@example.com'>m@example.com</SelectItem>
                <SelectItem value='m@google.com'>m@google.com</SelectItem>
                <SelectItem value='m@support.com'>m@support.com</SelectItem>
              </SelectContent>
            </Select>
          </div> */}
          <select
            name='service_type'
            className='w-full py-3 px-2 rounded-md'
            value={formState.service_type}
            onChange={(e) => {
              setFormState({ ...formState, service_type: e.target.value });
            }}
            id=''
          >
            <option value='' disabled>
              Select a service
            </option>
            <option value='service1'>Service 1</option>
            <option value='service2'>Service 2</option>
            <option value='service3'>Service 3</option>
          </select>
          <div className='flex gap-4'>
            <Input
              type='date'
              placeholder='Date'
              onChange={(e) => {
                setFormState({ ...formState, date: e.target.value });
              }}
              value={formState.date}
            />
            <Input
              type='time'
              placeholder='Time'
              value={formState.time}
              onChange={(e) => {
                setFormState({ ...formState, time: e.target.value });
              }}
            />
          </div>
          <textarea
            placeholder='Style Description'
            className='border border-neutral-300 rounded-md p-2 w-full px-3'
            value={formState.hairstyle}
            onChange={(e) => {
              setFormState({ ...formState, hairstyle: e.target.value });
            }}
          />
          <Button className='uppercase w-full text-center rounded-md bg-primary/500'>
            schedule appointment
          </Button>
        </form>
      </section>
      <section className='mx-6 mt-10'>
        <div className='text-center'>
          <Heading>frequently asked questions</Heading>
          <Design className='mx-auto hidden sm:block' />
          <span className='max-w-[300px] py-3 text-neutral-700 hidden sm:inline-block'>
            Lorem ipsum dolor sit amet consectetur. Orci sed pharetra eu mattis
            congue quis odio massa ipsum. Amet diam venenatis.
          </span>
        </div>
        <div className=''>
          <AccordionWrapper />
        </div>
      </section>
    </div>
  );
};

const Design = (props: { className?: string }) => (
  <svg
    width='184'
    height='28'
    className={props.className}
    viewBox='0 0 184 28'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <line y1='18.9999' x2='64' y2='18.9999' stroke='#CFB051' strokeWidth='2' />
    <path
      d='M94.6556 6.24632V4.66666C94.6556 3.19386 93.4667 2 92 2C90.5333 2 89.3444 3.19386 89.3444 4.66666V6.24632M102.556 25.9999H81.3112C78.3779 25.9999 76 23.6121 76 20.6666H108C108 23.6121 105.489 25.9999 102.556 25.9999ZM92 5.99999C83.9334 5.99999 77.3942 12.5665 77.3942 20.6666H106.606C106.606 12.5665 100.067 5.99999 92 5.99999Z'
      stroke='#CFB051'
      strokeWidth='3'
      strokeMiterlimit='10'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <line
      x1='120'
      y1='18.9999'
      x2='184'
      y2='18.9999'
      stroke='#CFB051'
      strokeWidth='2'
    />
  </svg>
);

export default ServicesPage;
