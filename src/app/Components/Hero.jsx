import { Button } from "@headlessui/react";
import React from "react";

const Hero = () => {
  return (
    <section className="relative  w-full mt-20">
      <video
  className="absolute inset-0 object-cover w-full h-full -z-20"
  src="https://www.shutterstock.com/shutterstock/videos/3469224683/preview/stock-footage-red-nike-air-jordan-retro-fiba-sneakers-on-black-background-rotating-on-stand-astana-kazakhstan.webm"
  loop
  muted
  autoPlay
  playsInline
/>

      <div className="relative  isolate px-6 pt-0 lg:px-8">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        ></div>
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-balance text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Achi see Website
            </h1>
            <p className="mt-6 text-lg leading-8 text-white">
              "Welcome to our modern and dynamic web platform, showcasing
              interactive, responsive designs built with cutting-edge
              technologies like Next.js and Tailwind."
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                Get started
              </Button>
            </div>
          </div>
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
