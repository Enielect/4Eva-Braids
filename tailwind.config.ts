import type { Config } from 'tailwindcss';
import tailwindcssAnimate from 'tailwindcss-animate';

export default {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        'neutral/50': '#FAFAFA',
        'neutral/100': '#F5F5F5',
        'neutral/200': '##E5E5E5',
        'neutral/300': '#D4D4D4',
        'neutral/400': '#A3A3A3',
        'neutral/500': '#737373',
        'neutral/600': '#525252',
        'neutral/700': '#404040',
        'neutral/800': '#262626',
        'neutral/900': '#171717',
        'primary/50': '#F3ECD5',
        'primary/100': '#ECDFB9',
        'primary/200': '#E2CF96',
        'primary/300': '#D8C074',
        'primary/400': '#CFB051',
        'primary/500': '#C5A02E',
        'primary/600': '#A48526',
        'primary/700': '#836B1F',
        'primary/800': '#635017',
        'primary/900': '#42350F',
        'secondary/50': '#FBEDD8',
        'secondary/100': '#F8E1BE',
        'secondary/200': '#F5D29D',
        'secondary/300': '#F2C37D',
        'secondary/400': '#EEB45D',
        'secondary/500': '#EBA53C',
        'secondary/600': '#C48932',
        'secondary/700': '#9D6E28',
        'secondary/800': '#76531E',
        'secondary/900': '#4E3714',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: {
            height: '0',
          },
          to: {
            height: 'var(--radix-accordion-content-height)',
          },
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)',
          },
          to: {
            height: '0',
          },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
    plugins: [tailwindcssAnimate],
  },
} satisfies Config;
