import React from 'react';

const Footer = () => {
  return (
    <footer className='px-7 py-5 sm:flex flex-row-reverse justify-between items-center text-white bg-neutral-800'>
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
  );
};

export default Footer;
