import Image from 'next/image';
import Link from 'next/link';
import { Disclosure } from '@headlessui/react';
import { MenuIcon, XIcon, ChevronRightIcon } from '@heroicons/react/solid';
import { FaInstagram, FaGithub } from 'react-icons/fa';
const navigation = [
  { name: 'Rumah', href: '/' },
  { name: 'Tentang', href: '/about' },
  { name: 'Panduan', href: 'https://drive.google.com/file/d/15-vKJpKUXa5Mdtqd7oX1d-8zoTJB9JvA/view?usp=sharing' },
];

export default function navbar() {
  return (
    <Disclosure as="nav">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-8 lg:px-12">
            <div className="flex justify-between h-20">
              <div className="flex items-center">
                <span>
                  <Image
                    src="/icon/alec.svg"
                    alt="Axle Load Calculation"
                    width={30}
                    height={22}
                  />
                </span>
              </div>

              <div className="flex">
                <div className="flex items-center md:hidden">
                  <Disclosure.Button className="inline-flex items-center justify-center rounded-md text-zinc-900 dark:text-yellow-50 duration-300">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XIcon className="block h-7 w-7" aria-hidden="true" />
                    ) : (
                      <MenuIcon className="block h-7 w-7" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="hidden md:flex h-full pl-8">
                  {navigation.map(({ name, href }) => (
                    <Link href={href} key={name} className="inline-flex items-center px-8 py-2 font-light text-sm rounded-md text-zinc-900 dark:text-yellow-50 duration-300">
                      <span>{name}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="md:hidden">
            <div className="px-10 py-8 space-y-10">
              {navigation.map(({ name, href }) => (
                <Link href={href} key={name}>
                  <Disclosure.Button
                    as="a"
                    className="group flex justify-center cursor-pointer"
                  >
                    <span className="text-zinc-900 font-bold duration-300 mb-2">
                      {name}
                    </span>
                  </Disclosure.Button>
                </Link>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}