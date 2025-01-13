'use server';
import { baseUrl } from '@/baseUrl';

export async function ClickStatMarker(platform: 'W' | 'G') {
  console.log('I am in the ClickStatMarker function');
  try {
    const response = await fetch(`${baseUrl}/stats/register_click`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ platform }),
    });

    // console.log(response, 'this is the response object');
    if (response.ok) {
      const data = await response.json();
      console.log(data);
    }
  } catch (err) {
    console.log(err);
  }
}

export async function RegisterBooking(prev: unknown, formData: FormData) {
  const body = Object.fromEntries(formData.entries());

  const formatted = {
    fullname: body.fullname,
    email: body.email,
    phone_number: body.phone_number,
    location: body.phone_number,
    data: body.date,
    time: body.time,
    style: body.style,
  };
  console.log(formatted, 'formatted');

  try {
    const queryParams = new URLSearchParams(
      formatted as Record<string, string>
    );
    const response = await fetch(
      `${baseUrl}/bookings?${queryParams.toString()}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    // console.log(response, 'this is the response object');
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      return { message: 'Bookings successfully placed' };
    }
    const data = await response.json();
    console.log(data, 'When the booking failed');
    return { errorMessage: 'An error occured while creating bookings' };
  } catch (err) {
    console.log(err);
    return { errorMessage: 'An uexpected Error Occured' };
  }

  console.log(body, 'body');
}
