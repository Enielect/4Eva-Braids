import { ReactNode } from 'react';

export default function Heading({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`${className} uppercase text-center py-4 text-2xl font-semibold md:text-3xl lg:text-3xl text-black`}
    >
      {children}
    </div>
  );
}
