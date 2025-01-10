import { z } from 'zod';

export const LoginSchema = z.object({
  username: z.string().email({ message: 'Please enter a valid email.' }).trim(),
  password: z
    .string()
    .min(8, { message: 'Be at least 8 characters long' })
    .regex(/[a-zA-Z]/, { message: 'Contain at least one letter.' })
    .regex(/[0-9]/, { message: 'Contain at least one number.' })
    .regex(/[^a-zA-Z0-9]/, {
      message: 'Contain at least one special character.',
    })
    .trim(),
});

export const SignUpSchema = z.object({
  first_name: z
    .string()
    .min(2, { message: 'Name must be at least 2 characters long.' })
    .trim(),
  last_name: z
    .string()
    .min(2, { message: 'Name must be at least 2 characters long.' })
    .trim(),
  email: z.string().email({ message: 'Please enter a valid email.' }).trim(),
  password: z
    .string()
    .min(8, { message: 'Be at least 8 characters long' })
    .regex(/[a-zA-Z]/, { message: 'Contain at least one letter.' })
    .regex(/[0-9]/, { message: 'Contain at least one number.' })
    .regex(/[^a-zA-Z0-9]/, {
      message: 'Contain at least one special character.',
    })
    .trim(),
  // confirmPassword: z.string().trim(),
  phone_number: z.string().min(10, { message: 'Enter a valid phone number' }),
});
// .refine((data) => data.password === data.confirmPassword, {
//   message: 'Passwords must match',
//   path: ['confirmPassword'], // Set the error path to the confirmPassword field
// });

export type FormState =
  | {
      errors?: {
        first_name?: string[];
        last_name?: string[];
        email?: string[];
        confirmPassword?: string[];
        password?: string[];
      };
      message?: string;
      errorMessage?: string;
    }
  | undefined;
