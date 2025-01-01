"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Card, CardContent} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import HeroImage from '@/public/hero3.svg';
import Logo from '@/public/logo2.svg';

export default function LoginPage() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <div className="w-[840px] h-[1024px] hidden lg:block">
        <Image
          src={HeroImage}
          alt="Login Background"
          width={840}
          height={1024}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right Side - Login Form */}
      <div className="w-full lg:w-[600px] mx-auto flex flex-col justify-center p-8 bg-white relative">
        <div className="absolute top-0 left-0 p-4 lg:hidden">
          <Image
            src={Logo}
            alt="4EVA BRAIDS Logo"
            width={123}
            height={24}
          />
        </div>

        <Card className="shadow-none border-0">
          <CardContent className="mt-16 space-y-6">
          <div className="mb-8 text-center">
          <Image
            src={Logo} 
            alt="4EVA BRAIDS Logo"
            width={326}
            height={64}
            className="mx-auto"
          />
        </div>
            <p className="text-center text-gray-500">Create an account</p>
            <form className="space-y-4">
              <div>
                <Label htmlFor="name"></Label>
                <Input
                  id="name"
                  type="name"
                  placeholder="First name"
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="name"></Label>
                <Input
                  id="name"
                  type="name"
                  placeholder="Last name"
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="email"></Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Email address"
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="password"></Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter Password"
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="password"></Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Recover password"
                  className="mt-1"
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="remember"
                    className="h-4 w-4 rounded border-gray-300 text-[#C68E38] focus:ring-[#C68E38]"
                  />
                  <Label
                    htmlFor="remember"
                    className="ml-2 text-sm text-gray-700"
                  >
                    Remember me
                  </Label>
                </div>
              </div>
              <Button
                type="submit"
                className="w-full bg-[#C68E38] hover:bg-[#B07C32] text-white rounded-full"
              >
                <a href="/verification">Continue to Sign Up</a>
              </Button>
            </form>
            <div className="text-center text-sm">
              <p className="mt-4">
                Already have an account?{" "}
                <Link href="/login" className="text-[#F4A261] hover:underline">
                  Go to Sign In
                </Link>
              </p>
              <Link href="/verification1" className="text-[#F4A261] hover:underline">
                click</Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
