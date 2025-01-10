import { baseUrl } from '@/baseUrl';
import ServiceContent from '@/components/Molecules/ServiceContent';
import { cookies } from 'next/headers';
import React from 'react';

async function fetchUserInfo(accessToken: string) {
  try {
    const response = await fetch(`${baseUrl}/users/me`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (response.ok) {
      const data = await response.json();
      return data;
    }
    const data = await response.json();
    console.log(data, 'faied to get user');
  } catch (err) {
    console.error(err);
  }
}
const ServicesPage = async () => {
  const accessToken = (await cookies()).get('access_token')?.value;
  const userData = accessToken ? await fetchUserInfo(accessToken) : {};
  return <ServiceContent userData={userData} />;
};

export default ServicesPage;
