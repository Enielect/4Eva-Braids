'use server';

import { baseUrl } from '@/baseUrl';
import { LoginSchema, SignUpSchema } from '@/lib/definitions';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export async function loginAction(prev: unknown, formData: FormData) {
  console.log('LoginAction', formData);
  //validate form
  const validatedFields = LoginSchema.safeParse({
    email: formData.get('email'),
    password: formData.get('password'),
  });
  if (!validatedFields.success) {
    return { errors: validatedFields.error.flatten().fieldErrors };
  }
  console.log('run boundary');

  //run the endpoint  here for user login

  revalidatePath('/', 'layout');
  redirect('/');

  // console.log("Email", email);
}

export async function signUpAction(prev: unknown, formData: FormData) {
  console.log('I qm in the signup function');
  console.log('LoginAction', formData);
  //validate form firld]
  const validatedFields = SignUpSchema.safeParse({
    email: formData.get('email'),
    password: formData.get('password'),
    // confirmPassword: formData.get('confirm-password'),
    phone_number: formData.get('phone_number'),
    first_name: formData.get('first_name'),
    last_name: formData.get('last_name'),
  });

  if (!validatedFields.success) {
    return { errors: validatedFields.error?.flatten().fieldErrors };
  }
  const { email, password, first_name, last_name, phone_number } =
    validatedFields.data;
  const formattedData = JSON.stringify({
    email,
    password,
    first_name,
    last_name,
    phone_number,
  });

  //run the endpoint  here for user signup
  try {
    console.log('I am in the try block');
    const response = await fetch(`${baseUrl}/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: formattedData,
    });

    // console.log(response, 'this is the response object');
    if (response.ok) {
      // throw new Error('An error occured');
      console.log('response was ok');
      const data = await response.json();
      console.log(data, 'good response');
      return { message: 'SignUp successful' };
    }
    const data = await response.json();
    return {
      errorMessage: data.detail || 'An error occured when trying to signup',
    };
    // toast(data.detail || 'An error occured when trying to signup');
    // console.log(data);
  } catch (err) {
    console.log('I am in the error block');
    console.log(err, 'error occured during signup');
    return { errorMessage: 'An error occured' };

    // [cause]: [Error [ConnectTimeoutError]: Connect Timeout Error] {
    //   code: 'UND_ERR_CONNECT_TIMEOUT'
    // } //time out error
  }

  // revalidatePath('/', 'layout');
  // redirect('/');
}
