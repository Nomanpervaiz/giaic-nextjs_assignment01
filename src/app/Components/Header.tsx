"use client";

import { useState } from "react";
import { Button, Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import logohai from "../assets/logoappCopy.png";
import Image from "next/image";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-white  w-full h-4 ">
      <header className="absolute bg-black border-b inset-x-0 top-0 z-50 shadow-md">
        <nav
          aria-label="Global"
          className="flex items-center justify-between p-6 lg:px-8"
        >
          <div className="flex lg:flex-1 ">
            <Image className="h-12 w-12 border bg-white rounded-full" src={logohai} alt="Logo" />
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            <ul className="flex text-white font-semibold">
              <Link href="/">
                <li className="mx-4">Home</li>
              </Link>
              <Link href="/product">
                <li className="mx-4">Products</li>
              </Link>
              <Link href="/about">
                <li className="mx-4">About</li>
              </Link>
              <Link href="/contact">
                <li className="mx-4">Contact</li>
              </Link>
            </ul>
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Button
                    
                    className=" block rounded-lg bg-white text-blue-500 border-none px-5 py-1 text-base font-semibold leading-7 text-black hover:bg-white hover:text-blue-500"
                  >
                    Log in
                  </Button>
          </div>
        </nav>
        <Dialog
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
          className="lg:hidden"
        >
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <Image className="h-12 w-12 " src={logohai} alt="Logo" />
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="h-6 w-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  <ul >
                  <Link href="/">
                <li  onClick={() => setMobileMenuOpen(false)} className="my-4 ">Home</li>
              </Link>
              <Link href="/product">
                <li  onClick={() => setMobileMenuOpen(false)} className="my-4">Products</li>
              </Link>
              <Link href="/about">
                <li  onClick={() => setMobileMenuOpen(false)} className="my-4">About</li>
              </Link>
              <Link href="/contact">
                <li   onClick={() => setMobileMenuOpen(false)} className="my-4">Contact</li>
              </Link>
                  </ul>
                </div>
                <div className="py-6">
                  <Button
                    
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Log in
                  </Button>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>
    </div>
  );
}
