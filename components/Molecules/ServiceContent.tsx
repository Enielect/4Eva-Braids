'use client';

import React, { useActionState, useEffect } from 'react';
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
import { RegisterBooking } from '@/app/action/bookings';
import { Loader2 } from 'lucide-react';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';

type TUserData =
  | {
      first_name: string;
      last_name: string;
      email: string;
      phone_number: string;
      _id: string;
      date_created: string;
      date_updated: string;
    }
  //eslint-disable-next-line
  | {};

const ServiceContent = ({ userData }: { userData: TUserData }) => {
  const router = useRouter();
  const [state, action, pending] = useActionState(RegisterBooking, undefined);
  const [formState, setFormState] = React.useState({
    fullname:
      userData && 'first_name' in userData && 'last_name' in userData
        ? `${userData.first_name} ${userData.last_name}`
        : '',
    email: userData && 'email' in userData ? `${userData.email}` : '',
    phone_number:
      userData && 'phone_number' in userData ? `${userData.phone_number}` : '',
    location: '',
    // service_type: '',
    date: '',
    time: '',
    style: '',
  });

  useEffect(() => {
    if (state?.errorMessage)
      toast.error(
        state?.errorMessage || 'An error occured when trying to signup'
      );
    if (state?.message) {
      toast.success(state?.message || 'SignUp successful');
      //clear input field
      setFormState((prev) => ({
        ...prev,
        location: '',
        date: '',
        time: '',
        style: '',
      }));
      router.push('/');
    }
    //eslint-disable-next-line
  }, [state]);

  return (
    <div className='mx-8 my-6'>
      <header className='text-center'>
        <Heading className='sm:hidden'>What we offer</Heading>
        <Design className='mx-auto hidden sm:block' />
        <span className='max-w-[300px] py-3 text-neutral-700 hidden sm:inline-block'>
          These are just a few of the services we offer. Hit the book button and type in a description of the exact style you want!
        </span>
      </header>

      <section className='mt-5 gap-y-12 grid max-[480px]:grid-cols-1 grid-cols-2 md:grid-cols-3 gap-x-14 lg:grid-cols-4 xl:grid-cols-5 place-items-center'>
        <ServicesCard
          title="Bohemian Braids"
          description="A blend of loose, carefree styling and intricate braid patterns, exuding a relaxed, boho vibe. Ideal for festivals, casual outings,
          or special events, these natural-looking plaits feature soft textures and timeless appeal. Perfect for achieving an effortlessly chic aesthetic."
        />

        <ServicesCard
          title="Knotless Braids"
          description='A revolutionary protective style offering a sleek, natural look without knots. Lightweight and gentle on the scalp, they ensure comfort and durability.
          Suitable for long-lasting wear, Knotless Braids balance beauty and practicality for various lengths and styles.'
        />

        <ServicesCard
          title='French Braids'
          description='A classic, timeless braid style featuring overlapping strands for a smooth, polished look. Perfect for everyday wear or formal occasions,
          French Braids are versatile and can serve as the foundation for more intricate styles. Ideal for an elegant and refined appearance.'
        />

        <ServicesCard
          title='Cornrow'
          description='Intricate, close-to-the-scalp braids known for their durability and versatility. Available in straight-back designs, zig-zag patterns, or custom artistry,
          Cornrows are perfect for protective styling while showcasing creativity and personality. An iconic choice for any occasion.'
        />

        <ServicesCard
          title="Box Braids"
          description="Achieve a timeless and versatile look with Box Braids, a protective style featuring individual plaits neatly parted into box-shaped sections. Perfect for long-term wear, these braids offer flexibility in length, size, and styling options."
        />
        
        <ServicesCard
          title="Goddess Braids"
          description="Embody elegance with Goddess Braids, larger cornrow-style braids that are sleek and bold. Often adorned with accessories, this style is perfect for making a statement while protecting your hair."
        />
        
        <ServicesCard
          title="Fishtail Braids"
          description="Elevate your style with Fishtail Braids, a unique braid technique that intertwines small sections of hair for a detailed, woven effect. Ideal for formal events or casual wear, this braid adds a touch of sophistication."
        />
        
        <ServicesCard
          title="Halo Braids"
          description="Channel ethereal beauty with Halo Braids, a circular braid that crowns the head. This style is perfect for weddings, special occasions, or everyday wear, offering a regal and polished look."
        />
        
        <ServicesCard
          title="Lemonade Braids"
          description="Inspired by iconic styles, Lemonade Braids are side-swept cornrows known for their chic and edgy appearance. Perfect for making a bold statement, this style combines fashion and functionality effortlessly."
        />
        
        <ServicesCard
          title="Micro Braids"
          description="Experience the intricacy of Micro Braids, a detailed style featuring tiny, individual braids. Lightweight and versatile, they allow for various styling options while maintaining a sleek appearance."
        />
        
        <ServicesCard
          title="Fulani Braids"
          description="Celebrate tradition with Fulani Braids, a style characterized by intricate patterns, cornrows, and bead embellishments. This cultural braid style is both artistic and practical, perfect for any occasion."
        />
        
        <ServicesCard
          title="Twist Braids"
          description="Opt for a softer look with Twist Braids, featuring two-strand twists that offer a natural and textured finish. Perfect for protective styling, this versatile option suits casual and formal settings."
        />
        
        <ServicesCard
          title="Butterfly Braids"
          description="Add a whimsical touch with Butterfly Braids, a voluminous style combining soft textures and creative patterns. Ideal for achieving a bold yet elegant look suitable for any event."
        />
        
        <ServicesCard
          title="Jumbo Braids"
          description="Make a bold statement with Jumbo Braids, a style featuring thick, oversized plaits. Perfect for quick styling, these braids are both trendy and protective, offering a striking and low-maintenance option."
        />
        
        <ServicesCard
          title="Crochet Braids"
          description="Discover convenience with Crochet Braids, a method of attaching pre-braided or twisted hair to your natural hair. This quick and versatile style is ideal for achieving a variety of looks effortlessly."
        />
        
        <ServicesCard
          title="Waterfall Braids"
          description="Achieve a romantic and flowing look with Waterfall Braids, a style where sections of hair cascade like a waterfall. Perfect for weddings or casual outings, this braid offers an enchanting and elegant finish."
        />

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
                description='Put in your details and we will get back to you immediately via call or chat'
                title='Fill the Form Below'
              />
              <DescriptionCard
                description='We are actively online and ready to receive your request on WhatsApp. click the "Book Via" button below the right side of this screen'
                title='Or send a Direct Message on WhatsApp'
              />
              <DescriptionCard
                description='Instagram is also a good way to reach us. We are always online. click the "Book Via" button below the right side of this screen'
                title='Or Instagram if you prefer'
              />
              <DescriptionCard
                description='A direct call to our line (check the bottom of the page) is also a possible way to place an appointment'
                title='You can also call our active line'
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
            Hello, you are just about to get the best service of your life. Fill in the form below and we will get back to you shortly
          </span>
        </div>
        <form action={action} className='space-y-4'>
          <Input
            type='text'
            required
            value={formState.fullname}
            onChange={(e) =>
              setFormState({ ...formState, fullname: e.target.value })
            }
            placeholder='Full Name'
            className='!py-3'
            name='fullname'
          />
          <Input
            type='email'
            required
            value={formState.email}
            onChange={(e) => {
              setFormState({ ...formState, email: e.target.value });
            }}
            placeholder='Email Address'
            name='email'
          />
          <Input
            type='number'
            required
            value={formState.phone_number}
            onChange={(e) => {
              setFormState({ ...formState, phone_number: e.target.value });
            }}
            placeholder='Phone Number'
            name='phone_number'
          />
          <Input
            type='text'
            required
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
          {/* <select
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
          </select> */}
          <div className='flex gap-4'>
            <Input
              type='date'
              name='date'
              required
              placeholder='Date'
              onChange={(e) => {
                setFormState({ ...formState, date: e.target.value });
              }}
              value={formState.date}
            />
            <Input
              required
              type='time'
              name='time'
              placeholder='Time'
              value={formState.time}
              onChange={(e) => {
                setFormState({ ...formState, time: e.target.value });
              }}
            />
          </div>
          <textarea
            required
            name='style'
            placeholder='Style Description'
            className='border border-neutral-300 rounded-md p-2 w-full px-3'
            value={formState.style}
            onChange={(e) => {
              setFormState({ ...formState, style: e.target.value });
            }}
          />
          <Button
            disabled={pending}
            className='uppercase w-full text-center rounded-md bg-primary/500'
          >
            {pending ? (
              <Loader2 className='animate-spin' />
            ) : (
              'Schedule Appointment'
            )}
          </Button>
        </form>
      </section>
      <section className='mx-6 mt-10'>
        <div className='text-center'>
          <Heading>frequently asked questions</Heading>
          <Design className='mx-auto hidden sm:block' />
          <span className='max-w-[300px] py-3 text-neutral-700 hidden sm:inline-block'>
            Your question not here? feel free to reach out on our social media handles
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

export default ServiceContent;
