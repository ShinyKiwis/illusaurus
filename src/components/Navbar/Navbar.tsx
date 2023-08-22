"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useRef, useEffect } from 'react'
import { MdEditNote } from "react-icons/md"

const Navbar = () => {
  const searchRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    const handleCtrlK = (event: KeyboardEvent) => {
      if(event.ctrlKey && event.key === 'k') {
        event.preventDefault()
        searchRef.current?.focus()
      }
    }
    document.addEventListener('keydown', handleCtrlK)

    return () => {
      document.removeEventListener('keydown', handleCtrlK)
    }
  }, [])

  return (
    <nav className='p-2 px-4 md:px-52 shadow-lg shadow-slate-400/50 flex items-center'>
      <Link href="/">
        <Image src="/icon.png" alt="Logo" width="45" height="45"/>
      </Link>
      <form className='w-full'>
        <div className='w-3/4 md:w-5/12 ms-4 border-slate-200 focus-within:border-sky-500 rounded-md border-2 px-2 py-1 flex items-center gap-2'>
          <input className="w-full focus:ring-0 focus:outline-none text-sm md:text-md text-slate-800 placeholder:text-slate-400" 
            ref={searchRef}
            placeholder='Search illusaurus...'/>
          <span className='text-sm invisible md:visible text-slate-800 font-semibold flex-none'>Ctrl K</span>
        </div>
      </form>
      <Link href="/notes" className="font-semibold text-sky-500 text-lg hover:text-sky-600 flex items-center">
        <MdEditNote size="30"/>
        Notes
      </Link>
    </nav>
  )
}

export default Navbar
