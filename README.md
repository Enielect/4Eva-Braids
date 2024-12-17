# 4EvaBraids-frontend


## Contents
1. [Introduction](#introduction)
2. [About](#about)
3. [Features (implemented)](#implemented-features)
4. [Features (To be implemented](#yet-to-be-implemented-features)
5. [Technologies](#technologies)
6. [Folder structure](#folder-structure)
9. [Contributing](#contributing)
10. [About Tech Stack (For contributors)](#about-tech-stack)
    -  [Getting Started](#getting-started)
    -  [Learn More](#learn-more)
    -  [Deploy on Vercel](#deploy-on-vercel)
12. [Link to resources](#important-links)


## Introduction
4EvaBraids is an online hair braiding platform, where users can books appointments with with skilled braiders and get their hair made, either as home service or onsite braiding. While this is the core of it's purpose there are other functionalities and features developed to spice up the site - Read on and see more!
![Landing Page](docs/images/Hero%20Section.png "Landing Page")

<br>

## About
- Purpose
    - The purpose of this site is to make finding and making braiding appointments easier for clients and also to automate managing custormers for the braiders. It also improves visibility and professionalism.
- Motivation
    - Prior tonow, braiders use Instagram and Tiktok as their bassic platform for professional page and work gallery. while these platforms are very good when used as galleries, they have several disadvantages. Just to list a few
        - Not flexible
        - Zero Automation
        - Less professional
        - Poor data gathering capabilities
- Solution
    - We provide the solution to all the above stated problems, and even more. such solutions are stated below
        - Great professional brand (using a .com site, cool!)
        - Unlimited way to showcase your work (we even liked the gallery to both IG and Tiktok, so videos hosted there can be displayed nd showcased on the site while keepig our database lighter
        - Premuim booking experience
        - Blog to improve SEO and show Ads
        - Massive data logging and gathering information
        - Complex automation to ease both client and braider of stress

![Features Page](docs/images/Features%20Section.png "Features Section")

<br>

## Implemented Features
{{ To be populated later }}

<br>

##  Yet To Be Implemented Features
> [!NOTE]
> The following features are place holders from the backend

1) Gallery: A video and photo library
   - Gallery from our local database
   - Gallery from Instagram
   - Gallery from Tiktok
3) Booking algorithm
   - Account is created automatically using booking information
   - Email is sent to the braiders for a booking appointment
   - SMS is sent to the braiders for a bookig appointment
   - The whatsapp contack and IG handle of braider is returned to client
4) Blog
   - Blog with title, body and images (with links to youtube videos if needed)
   - Comments and likes for a blog
5) Testimonials
   - Testimonials from Clients
   - Achievemens and certificates
6) Online Payment Platform
   - For approved appointments
   - For items bought from the e-store
7) E-Cormmerce
   - An e-store for hair accessories
   - And other fashion components
  
![How to Book Page](docs/images/How%20to%20Book.png "Booking Instruction")

<br>

## Technologies
> The following technologies were used for this project

| Technology   | Purpose | Documentation link   |
|------------|------------|------------|
| NextJS | To be updated | To be updated |
| Tailwind CSS | To be updated | To be updated |
| Shadcn UI | To be updated | To be updated |
| Playwright | To be updated | To be updated |
| Vi test | To be updated | To be updated |

<br>

## Folder Structure
> [!TIP]
> The directory structure was created buy running the command `tree >> dirStructure.txt` from the root of this project
> You can run it to update the file `dirStructure.md` then copy and past on this README file
```
.
├── app
│   ├── atoms
│   │   ├── Button.tsx
│   │   └── icons.tsx
│   ├── favicon.ico
│   ├── fonts
│   │   ├── GeistMonoVF.woff
│   │   └── GeistVF.woff
│   ├── globals.css
│   ├── layout.tsx
│   ├── Molecules
│   │   ├── AdressDescription.tsx
│   │   ├── DescriptionCard.tsx
│   │   ├── ImageCard.tsx
│   │   ├── OfferCard.tsx
│   │   └── TipsCard.tsx
│   └── page.tsx
├── components
│   └── ui
│       ├── accordion.tsx
│       ├── aspect-ratio.tsx
│       ├── button.tsx
│       ├── card.tsx
│       ├── select.tsx
│       └── sonner.tsx
├── components.json
├── dirStructure.md
├── docs
│   └── images
│       └── README.md
├── lib
│   └── utils.ts
├── next.config.ts
├── package.json
├── package-lock.json
├── postcss.config.mjs
├── public
│   ├── file.svg
│   ├── globe.svg
│   ├── hero-image.svg
│   ├── logo.svg
│   ├── Model-1.svg
│   ├── next.svg
│   ├── vercel.svg
│   └── window.svg
├── README.md
├── tailwind.config.ts
└── tsconfig.json
```

<br>

## Contributing
Hi, we appreciate any contribution to this repository, kindly fork this repo, add your feature (or fixes) and create a pull request. You can start by implementing the [yet-to-be-implemented](#yet-to-be-implemented-features) above or check for any issue and solve it.

<br>

## Important Links
1. [Google drive](https://drive.google.com/drive/folders/1nkLk7gpuJ2goUGwwKMx_iF3ZcW3887rJ?usp=sharing)
2. [Project pitch](https://docs.google.com/presentation/d/1FpoadYXboSWbsJNq1_Om3yOAnf_qRi40m4ICDwHJI_4/edit?usp=sharing)
3. Backend Repository

<br>

## About Tech Stack
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

<br>

### Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

### Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

### Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
