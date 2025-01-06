'use client';

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';
import HeroImage from '@/public/hero2.svg';
import Logo from '@/public/logo2.svg';
import { useActionState, useState } from 'react';
import { loginAction } from './actions/auth';
import { Loader2 } from 'lucide-react';

interface FormState {
  email: string;
  password: string;
}
export default function LoginPage() {
  const [state, action, pending] = useActionState(loginAction, undefined);
  const [formState, setFormState] = useState<FormState>({
    email: '',
    password: '',
  });
  return (
    <div className='flex min-h-screen lg:grid grid-cols-[6fr_4fr] bg-gray-100'>
      <div className=' h-screen hidden lg:block'>
        <Image
          src={HeroImage}
          alt='Login Background'
          width={840}
          height={1024}
          className='w-full h-full object-cover object-top'
        />
      </div>

      {/* Right Side - Login Form */}
      <div className='w-full  mx-auto flex flex-col justify-center p-8 bg-white relative'>
        <div className='absolute top-0 left-0 p-4 lg:hidden'>
          <Image src={Logo} alt='4EVA BRAIDS Logo' width={123} height={24} />
        </div>

        <Card className='shadow-none border-0'>
          <CardContent className='mt-16 space-y-6'>
            <div className='mb-8 text-center'>
              <Image
                src={Logo}
                alt='4EVA BRAIDS Logo'
                width={326}
                height={64}
                className='mx-auto'
              />
            </div>
            <p className='text-center text-gray-500'>
              Enter your details to login
            </p>

            <form action={action} className='space-y-4'>
              <div>
                <Input
                  id='email'
                  type='email'
                  onChange={(e) =>
                    setFormState({ ...formState, email: e.target.value })
                  }
                  placeholder='Email address'
                  className='mt-1'
                />
                {state?.errors?.email && (
                  <p className='text-red-500 text-sm pt-1'>
                    {state.errors.email}
                  </p>
                )}
              </div>
              <div>
                <Input
                  id='password'
                  type='password'
                  onChange={(e) =>
                    setFormState({ ...formState, password: e.target.value })
                  }
                  placeholder='Password'
                  className='mt-1'
                />
                {state?.errors?.password && (
                  <div className='text-red-500 text-sm pt-1'>
                    <p>Password must:</p>
                    <ul>
                      {state?.errors?.password?.map((error) => (
                        <li key={error}>- {error}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
              <div className='flex items-center justify-between'>
                <div className='flex items-center'>
                  <input
                    type='checkbox'
                    id='remember'
                    className='h-4 w-4 rounded border-gray-300 text-[#C68E38] focus:ring-[#C68E38]'
                  />
                  <Label
                    htmlFor='remember'
                    className='ml-2 text-sm text-gray-700'
                  >
                    Remember me
                  </Label>
                </div>
              </div>
              <Button
                disabled={pending || !formState.email || !formState.password}
                type='submit'
                className='w-full bg-[#C68E38] hover:bg-[#B07C32] text-white rounded-full'
              >
                {pending ? <Loader2 className='animate-spin' /> : 'Sign In'}
              </Button>
            </form>
            <div className='text-center text-sm'>
              <Link
                href='/verification'
                className='text-[#F4A261] hover:underline block mt-2 text-right'
              >
                Forgot password?
              </Link>
              <p className='mt-4'>
                Don’t have an account?{' '}
                <Link href='/signup' className='text-[#F4A261] hover:underline'>
                  Register a new account
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
