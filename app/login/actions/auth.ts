'use server';

import { baseUrl } from '@/baseUrl';
import { LoginSchema, SignUpSchema } from '@/lib/definitions';
import { SnakeCaseToCamelCase } from '@/lib/utils';
import { cookies } from 'next/headers';

export async function loginAction(prev: unknown, formData: FormData) {
  console.log('LoginAction', formData);
  const validatedFields = LoginSchema.safeParse({
    username: formData.get('username'),
    password: formData.get('password'),
  });
  if (!validatedFields.success) {
    return { errors: validatedFields.error.flatten().fieldErrors };
  }
  console.log('run boundary');

  try {
    const { username, password } = validatedFields.data;
    const formattedData = new URLSearchParams({ username, password });
    // const body = JSON.stringify({ username, password });
    console.log(formattedData.toString(), 'this is the formatted data');

    const response = await fetch(`${baseUrl}/auth/token`, {
      method: 'POST',
      headers: {
        accept: 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: formattedData.toString(),
    });

    if (response.ok) {
      const data = await response.json();
      const { token_type, access_token } = data;
      (await cookies()).set('access_token', access_token);
      (await cookies()).set('token_type', token_type);
      console.log(data, 'this is the data');

      //set the accessToken in Cookies
      return { message: 'Login successful' };
    }

    const data = await response.json();

    console.log(data.detail, 'this is the data detail');

    if (typeof data.detail === 'string') {
      return {
        errorMessage: data.detail || 'An error occured when trying to login',
      };
    }

    const error = data.detail[0];

    return {
      errorMessage:
        (error.loc[0] === 'body'
          ? `${SnakeCaseToCamelCase(error.loc[1])} ${error.msg}`
          : error.msg) || 'An error occured when trying to login',
    };
  } catch (err) {
    console.log(err, 'error occured during login');
    return { errorMessage: 'An error occured' };
  }
}

export async function signUpAction(prev: unknown, formData: FormData) {
  console.log('I qm in the signup function');
  console.log('SignUpAction', formData);
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

    console.log(data.detail, 'this is the data detail');
    if (typeof data.detail === 'string') {
      return {
        errorMessage: data.detail || 'An error occured when trying to signup',
      };
    }
    const error = data.detail[0];
    return {
      errorMessage:
        (error.loc[0] === 'body'
          ? `${SnakeCaseToCamelCase(error.loc[1])} ${error.msg}`
          : error.msg) || 'An error occured when trying to signup',
    };
  } catch (err) {
    console.error(err, 'error occured during signup');
    return { errorMessage: 'An error occured' };

    // [cause]: [Error [ConnectTimeoutError]: Connect Timeout Error] {
    //   code: 'UND_ERR_CONNECT_TIMEOUT'
    // } //time out error
  }
}
