'use server';

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
  //validate form firld]
  const validatedFields = SignUpSchema.safeParse({
    email: formData.get('email'),
    password: formData.get('password'),
    confirmPassword: formData.get('confirm-password'),
    first_name: formData.get('first-name'),
    last_name: formData.get('last-name'),
  });

  if (!validatedFields.success) {
    return { errors: validatedFields.error?.flatten().fieldErrors };
  }
//   const { email, password, first_name, last_name } = validatedFields.data;

  //run the endpoint  here for user signup

  revalidatePath('/', 'layout');
  redirect('/');
}
