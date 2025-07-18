"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const linkData = [
  {name: 'Performance', path: '/performance'},
  {name: 'Reliability', path: '/reliability'},
  {name: 'Scale', path: '/scale'}
]

export default function Header() {
  const pathname = usePathname()
  return (
    <div className="absolute w-full z-10">
      <div className="flex justify-between mx-20 p-8 text-white items-center">
        <Link className="text-3xl font-bold" href="/">
          Home
        </Link>
        <div className="text-xl space-x-4">
          {
            linkData.map((link) => (
              <Link key={link.path} className={pathname === link.path ? 'text-sky-500' : ''} 
                    href={link.path}
              >
                {link.name}
              </Link>
            ))
          }
        </div>
      </div>
    </div>
  );
}
