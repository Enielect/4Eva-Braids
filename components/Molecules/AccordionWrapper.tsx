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
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent>
          Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem
        value='item-2'
        className='bg-primary/500 rounded-md px-4 sm:text-lg text-white'
      >
        <AccordionTrigger>Is it styled?</AccordionTrigger>
        <AccordionContent>
          Yes. It comes with default styles that matches the other
          components&apos; aesthetic.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem
        value='item-3'
        className='bg-primary/500 rounded-md px-4 sm:text-lg text-white'
      >
        <AccordionTrigger>Is it animated?</AccordionTrigger>
        <AccordionContent>
          Yes. It&apos;s animated by default, but you can disable it if you
          prefer.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem
        value='item-2'
        className='bg-primary/500 rounded-md px-4 sm:text-lg text-white'
      >
        <AccordionTrigger>Is it styled?</AccordionTrigger>
        <AccordionContent>
          Yes. It comes with default styles that matches the other
          components&apos; aesthetic.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem
        value='item-3'
        className='bg-primary/500 rounded-md px-4 sm:text-lg text-white'
      >
        <AccordionTrigger>Is it animated?</AccordionTrigger>
        <AccordionContent>
          Yes. It&apos;s animated by default, but you can disable it if you
          prefer.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default AccordionWrapper;
