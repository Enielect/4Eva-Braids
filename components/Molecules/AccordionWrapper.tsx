import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../ui/accordion';

const AccordionWrapper = () => {
  return (
    <Accordion
      type='single'
      collapsible
      className='w-full max-md:space-y-4 md:grid grid-cols-2  !text-lg sm:gap-x-6 md:gap-x-14 !gap-7 py-4'
    >
      <AccordionItem
        value='item-1 '
        className='bg-primary/500 rounded-md px-4 sm:text-lg text-white'
      >
        <AccordionTrigger>How long before I get a response after booking?</AccordionTrigger>
        <AccordionContent>
          Typically in minutes if booked via Whatsapp or IG, and within 2 hours if booked via the form above.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem
        value='item-2'
        className='bg-primary/500 rounded-md px-4 sm:text-lg text-white'
      >
        <AccordionTrigger>How do I know the prices of each style?</AccordionTrigger>
        <AccordionContent>
          A price list of all our services will be sent to you when you book an appointment.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem
        value='item-3'
        className='bg-primary/500 rounded-md px-4 sm:text-lg text-white'
      >
        <AccordionTrigger>What if I want to braid my hair at night?</AccordionTrigger>
        <AccordionContent>
          Our service is 24/7. You can book an appointment for anytime of the day
        </AccordionContent>
      </AccordionItem>
      <AccordionItem
        value='item-4'
        className='bg-primary/500 rounded-md px-4 sm:text-lg text-white'
      >
        <AccordionTrigger>How many people will braid my hair at a time?</AccordionTrigger>
        <AccordionContent>
          Typically 3. it can be less and you can request more if you want.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem
        value='item-5'
        className='bg-primary/500 rounded-md px-4 sm:text-lg text-white'
      >
        <AccordionTrigger>Do you make other styles that are not listed on this website?</AccordionTrigger>
        <AccordionContent>
          Yes we do
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default AccordionWrapper;
