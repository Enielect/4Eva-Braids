'use client';

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';
import Logo from '@/public/logo.svg';
import { useActionState, useEffect, useState } from 'react';
import { loginAction } from './actions/auth';
import { Loader2 } from 'lucide-react';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';
import InputFIeld from '@/components/Molecules/InputFIeld';

interface FormState {
  email: string;
  password: string;
}
export default function LoginPage() {
  const router = useRouter();
  const [state, action, pending] = useActionState(loginAction, undefined);
  const [formState, setFormState] = useState<FormState>({
    email: '',
    password: '',
  });

  useEffect(() => {
    if (state?.errorMessage)
      toast.error(
        state?.errorMessage || 'An error occured when trying to signup'
      );
    if (state?.message) {
      toast.success(state?.message || 'SignUp successful');
      //clear input field
      setFormState({
        email: '',
        password: '',
      });
      router.push('/');
    }
    //eslint-disable-next-line
  }, [state]);
  return (
    <div className='flex min-h-screen lg:grid grid-cols-[6fr_4fr] bg-gray-100'>
      {/* Right Side - Login Form */}
      <div className='w-full  mx-auto flex flex-col justify-center p-8 bg-white relative'>
        <Card className='shadow-none border-0'>
          <CardContent className='md:mt-16 space-y-6'>
            <div className='flex items-center gap-3 justify-center'>
              <div className='h-12 w-12 text-center'>
                <Image
                  src={Logo}
                  alt='4EVA BRAIDS Logo'
                  width={326}
                  height={64}
                  className='mx-auto'
                />
              </div>
              <span className='text-primary/500 pt-2 font-[900] text-4xl'>
                4Eva Braids
              </span>
            </div>
            <p className='text-center text-gray-500'>
              Enter your details to login
            </p>

            <form action={action} className='space-y-4'>
              <div>
                <Input
                  id='email'
                  required
                  type='email'
                  name='username'
                  value={formState.email}
                  onChange={(e) =>
                    setFormState({ ...formState, email: e.target.value })
                  }
                  placeholder='Email address'
                  className='mt-1'
                />
                {state?.errors?.username && (
                  <p className='text-red-500 text-sm pt-1'>
                    {state.errors.username}
                  </p>
                )}
              </div>
              <div>
                <InputFIeld
                  showPassword={true} //wrong type!!!!
                  // setShowPassword={setShowPassword}
                  value={formState.password}
                  onChange={(e) =>
                    setFormState({ ...formState, password: e.target.value })
                  }
                  id='password'
                  className='mt-1'
                  required
                  name='password'
                  placeholder='Enter Password'
                />
                {/* <Input
                  required
                  id='password'
                  type='password'
                  name='password'
                  value={formState.password}
                  onChange={(e) =>
                    setFormState({ ...formState, password: e.target.value })
                  }
                  placeholder='Password'
                  className='mt-1'
                /> */}
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
