'use client';

import * as React from 'react';

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from '@/components/ui/input-otp';

export function InputOTPControlled() {
  const [value, setValue] = React.useState('');

  return (
    <div className='space-y-2'>
      <InputOTP
        maxLength={6}
        value={value}
        onChange={(value) => {
          if (/^\d*$/.test(value)) setValue(value);
        }}
      >
        <InputOTPGroup className='space-x-3'>
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
          <InputOTPSlot index={2} />
          <InputOTPSlot index={3} />
          <InputOTPSlot index={4} />
          <InputOTPSlot index={5} />
        </InputOTPGroup>
      </InputOTP>
      {/* <div className='text-center text-sm'>
        {value === '' ? (
          <>Enter your one-time password.</>
        ) : (
          <>You entered: {value}</>
        )}
      </div> */}
    </div>
  );
}
