import { NavLinks } from '@/constant'
import Image from 'next/image'
import Link from 'next/link'
import AuthProviders from './AuthProviders'

const Navabar = () => {
  const session = {}
  return (
    <nav className='flexBetween navbar'>
      <div className='flex-1 flexStart gap-10'>
        <Link href="/">
          <Image
            src="/logo.svg"
            width={115}
            height={43}
            alt="Flexibble"
           />
           <ul className='xl:flex hidden text-small gap-7'>
            {NavLinks.map((link) => (
              <Link href={link.href} key={link.key}>
                {link.text}
              </Link>
            ))}
           </ul>
        </Link>
      </div>  
      <div className='flexCenter gap-4'>
        {session ? (
          <>
          Userphoto 
          <Link href="/create-project">
          Share Work
          </Link>
          </>
        ) : (
          <AuthProviders />
        )}
      </div>
    </nav>
  )
}

export default Navabar