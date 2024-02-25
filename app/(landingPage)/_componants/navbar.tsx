import Link from 'next/link'
import logo_color from '@/public/logo_color.svg'
import Image from 'next/image'
import React from 'react'
import { Button } from '@/components/ui/button'

export function Navbar() {
  return (
    <div className='fixed top-0 w-full h-14 border-b shadow-sm px-4 flex items-center bg-white'>
        <div className='md:max-w-screen-2xl mx-auto flex items-center w-full justify-between'>
            <Image className='cursor-pointer hover:opacity-75 transition hidden md:flex' src={logo_color} alt='logo' width={200}/>
            <div className='space-x-4 md:block md:w-auto flex items-center justify-between w-full'>
                <Button size="sm" variant="outline">
                    <Link href="/login">
                        Login
                    </Link>
                </Button>
                <Button size="sm" asChild>
                    <Link href="/signup">
                        Get Task Tower
                    </Link>
                </Button>
            </div>
        </div>
    </div>
  )
}