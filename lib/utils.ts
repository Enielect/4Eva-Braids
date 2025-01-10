import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}


export const SnakeCaseToCamelCase = (str: string) => {
  return str.replace(/_/g, ' ');
}