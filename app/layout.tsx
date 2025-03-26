import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import Header from '../components/Molecules/Header';
import Footer from '../components/Molecules/Footer';
import { Toaster } from '@/components/ui/sonner';
import BookingsButton from '@/components/Molecules/BookingsButton';
import { cookies } from 'next/headers';
import { baseUrl } from '@/baseUrl';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});
const pangram = localFont({
  src: './fonts/PPPangramSans-CompactRegular.otf',
  variable: '--font-pangram',
  weight: '500',
});

export const metadata: Metadata = {
  title: '4evabraids | Online hair braiding site',
  description: 'Book hair braiding appointments in one click',
};

async function fetchUser(accessToken: string) {
  try {
    const response = await fetch(`${baseUrl}/users/me`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (response.ok) {
      const data = await response.json();
      return data.first_name;
    }
    const data = await response.json();
    console.log(data, 'faied to get user');
  } catch (err) {
    console.error(err);
  }
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookiesStore = await cookies();
  const accessToken = cookiesStore.get('access_token');
  // const isLoggedIn = !!accessToken;
  const firstName = await fetchUser(accessToken?.value ?? '');
  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${pangram.className} overflow-hidden grid grid-rows-[auto_1fr]  h-[100dvh] ${geistMono.variable} antialiased`}
      >
        <Header firstName={firstName} />
        <div className='grid grid-rows-[1fr_auto] min-h-[calc(100dvh-75px)] overflow-auto'>
          <div>{children}</div>
          <Footer />
        </div>

        <Toaster />
        <BookingsButton />
      </body>
    </html>
  );
}
