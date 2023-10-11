import Image from 'next/image'
import { BiGhost } from 'react-icons/bi'
import Link from 'next/link'
import { ModeToggle } from '@/components/ModeToggle'
import { BsDiscord } from 'react-icons/bs'
import Icon from '@/components/Icon'
import { FaLinkedinIn } from 'react-icons/fa'
import { buttonVariants } from '@/components/ui/button'

export default function Home() {
  return (
    <>
      <header className='w-full px-4'>
        <nav className='flex w-full h-14 justify-between border-b-2 items-center'>
          <div className='flex gap-2 items-center h-full'>
            <BiGhost className="text-lg" />
            <span className="text-lg font-semibold">Ghost</span>
          </div>
          <ul className='flex gap-3'>
            <li>
              <Link href=''>Inicio</Link>
            </li>
            <li>
              <Link href=''>Documentacion</Link>
            </li>
            <li>
              <Link href=''>Ejemplos</Link>
            </li>
          </ul>
          <div className='flex gap-3 h-full items-center'>
            <Icon icon={<BsDiscord className="text-xl" />} url='' />
            <Icon icon={<FaLinkedinIn className="text-xl" />} url='' />
            <ModeToggle />
          </div>
        </nav>
        <div className='w-full max-w-screen-xl mt-20 m-auto flex flex-col gap-10'>
          <span className='rounded-xl border-2 bg-muted p-2 m-auto'>Sigueme en linkedin</span>
          <h1 className='text-7xl font-semibold text-center'>La libreria de componentes web creados con tailwindcss</h1>
          <p className='my-4 text-lg text-gray-600 text-center'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti natus aspernatur culpa ipsam vel molestias laborum corrupti. Obcaecati maxime suscipit possimus, quaerat eos aspernatur voluptatibus voluptatem, ab sapiente molestias praesentium!</p>
          <div className='w-full flex gap-6 justify-center'>
            <Link className={`${buttonVariants()} `} href=''>
              Documentacion
            </Link>
            <Link className={`${buttonVariants()} `} href=''>
              GitHub
            </Link>
          </div>
        </div>
      </header>
      <main className='w-full'>

      </main>
    </>
  )
}
