import React, { FC, InputHTMLAttributes } from 'react';
import { Eye, EyeOff } from 'lucide-react';

const InputFIeld: FC<
  {
    showPassword: boolean;
    // setShowPassword: React.Dispatch<React.SetStateAction<boolean>>;
  } & InputHTMLAttributes<HTMLInputElement>
> = ({ showPassword, ...props }) => {
  const [displayPassword, setDisplayPassword] = React.useState(false);
  return (
    <div>
      {/* <label
        htmlFor='password'
        className='block text-sm font-medium text-gray-700'
      >
        Password
      </label> */}
      <div className='mt-1 relative'>
        <input
          {...props}
          type={displayPassword ? 'text' : 'password'}
          autoComplete='current-password'
          required
          className='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm'
        />
        {showPassword ? (
          <button
            type='button'
            onClick={() => setDisplayPassword(!displayPassword)}
            className='mt-2 text-sm text-primary-600 absolute right-2 bottom-2 hover:text-primary-500'
          >
            {displayPassword ? (
              <EyeOff className='h-6 w-6 text-gray-500' />
            ) : (
              <Eye className='h-6 w-6 text-gray-500' />
            )}
          </button>
        ) : null}
      </div>
    </div>
    // <Input type={type}  />
  );
};

export default InputFIeld;
