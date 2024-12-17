import { Button } from '@/components/ui/button';

export default function CustomButton(props: { children: string }) {
  return (
    <Button className='bg-primary/600 w-full px-4 text-lg py-6 text-center rounded-full'>
      {props.children}
    </Button>
  );
}
