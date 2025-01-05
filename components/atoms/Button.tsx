import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function CustomButton(props: {
  children: string;
  className?: string;
}) {
  return (
    <Button
      className={`bg-primary/600 w-full px-4 text-lg py-6 text-center rounded-full ${props.className}`}
    >
      {props.children}
    </Button>
  );
}

export function CustomLink(props: { children: string; href: string }) {
  return (
    <Link
      className='bg-primary/600 w-full inline-flex items-center  justify-center gap-2 h-9  whitespace-nowrap text-primary-foreground shadow hover:bg-opacity-90  font-medium transition-colors focus-visible:outline-none  px-4 text-lg py-6 text-center rounded-full'
      href={props.href}
    >
      {props.children}
    </Link>
  );
}
