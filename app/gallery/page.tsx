import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import React from 'react';

const GalleryPage = () => {
  return (
    <section className='px-4 pb-7'>
      <div className='flex py-4 justify-end'>
        <SelectDemo />
      </div>
      <div className='grid md:grid-cols-2 gap-x-7 gap-y-10 lg:grid-cols-3 xl:grid-cols-4  place-items-center mb-6'>
        {Array(10)
          .fill('')
          .map((ele, i) => (
            <PlaceholderImage key={i} />
          ))}
      </div>
    </section>
  );
};

function SelectDemo() {
  return (
    <Select>
      <SelectTrigger className='w-[180px]'>
        <SelectValue placeholder='Select a fruit' />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Fruits</SelectLabel>
          <SelectItem value='apple'>Apple</SelectItem>
          <SelectItem value='banana'>Banana</SelectItem>
          <SelectItem value='blueberry'>Blueberry</SelectItem>
          <SelectItem value='grapes'>Grapes</SelectItem>
          <SelectItem value='pineapple'>Pineapple</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
function PlaceholderImage() {
  return (
    <svg
      width='348'
      height='348'
      className='block'
      viewBox='0 0 348 348'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      // xmlns:xlink='http://www.w3.org/1999/xlink'
    >
      <g clipPath='url(#clip0_3771_7960)'>
        <rect
          x='3'
          y='3.00049'
          width='342'
          height='342'
          rx='17.941'
          fill='white'
        />
        <rect
          x='-5.40967'
          y='-5.40942'
          width='358.82'
          height='358.82'
          fill='url(#pattern0_3771_7960)'
          fillOpacity='0.8'
        />
        <g filter='url(#filter0_dd_3771_7960)'>
          <path
            d='M201.858 169.989C205.164 171.642 205.164 176.359 201.858 178.012L144.609 206.637C141.627 208.128 138.118 205.96 138.118 202.625V145.376C138.118 142.042 141.627 139.873 144.609 141.364L201.858 169.989Z'
            fill='#FAFAFA'
          />
          <path
            d='M202.109 178.514C205.828 176.654 205.828 171.347 202.109 169.487L144.86 140.863C141.505 139.185 137.557 141.625 137.557 145.376V202.625C137.557 206.376 141.505 208.816 144.86 207.139L202.109 178.514Z'
            stroke='#A3A3A3'
            strokeWidth='1.12131'
          />
        </g>
      </g>
      <rect
        x='1.87869'
        y='1.87918'
        width='344.243'
        height='344.243'
        rx='19.0623'
        stroke='#171717'
        strokeWidth='2.24262'
      />
      <defs>
        <pattern
          id='pattern0_3771_7960'
          patternContentUnits='objectBoundingBox'
          width='1'
          height='1'
        >
          <use
            // xlink:href='#image0_3771_7960'
            transform='translate(-0.25) scale(0.00675676)'
          />
        </pattern>
        <filter
          id='filter0_dd_3771_7960'
          x='130.997'
          y='135.762'
          width='80.4624'
          height='82.4768'
          filterUnits='userSpaceOnUse'
          colorInterpolationFilters='sRGB'
        >
          <feFlood floodOpacity='0' result='BackgroundImageFix' />
          <feColorMatrix
            in='SourceAlpha'
            type='matrix'
            values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
            result='hardAlpha'
          />
          <feOffset dy='4' />
          <feGaussianBlur stdDeviation='3' />
          <feComposite in2='hardAlpha' operator='out' />
          <feColorMatrix
            type='matrix'
            values='0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.1 0'
          />
          <feBlend
            mode='normal'
            in2='BackgroundImageFix'
            result='effect1_dropShadow_3771_7960'
          />
          <feColorMatrix
            in='SourceAlpha'
            type='matrix'
            values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
            result='hardAlpha'
          />
          <feOffset />
          <feGaussianBlur stdDeviation='2' />
          <feComposite in2='hardAlpha' operator='out' />
          <feColorMatrix
            type='matrix'
            values='0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.1 0'
          />
          <feBlend
            mode='normal'
            in2='effect1_dropShadow_3771_7960'
            result='effect2_dropShadow_3771_7960'
          />
          <feBlend
            mode='normal'
            in='SourceGraphic'
            in2='effect2_dropShadow_3771_7960'
            result='shape'
          />
        </filter>
        <clipPath id='clip0_3771_7960'>
          <rect
            x='3'
            y='3.00049'
            width='342'
            height='342'
            rx='17.941'
            fill='white'
          />
        </clipPath>
        <image
          id='image0_3771_7960'
          width='222'
          height='148'
          //   xlink:href='data:image/png;base64,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'
        />
      </defs>
    </svg>
  );
}

export default GalleryPage;
