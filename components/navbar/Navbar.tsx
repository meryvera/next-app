import { HomeIcon } from '@primer/octicons-react'
import Link from 'next/link'
import { ActiveLink } from '../active-link/ActiveLink'

const navItems = [
  { title: 'Home', url: '/' },
  { title: 'About', url: '/about' },
  { title: 'Pricing', url: '/pricing' },
  { title: 'Contact', url: '/contact' },
]

export const Navbar = () => {

  return (
    <nav className='flex bg-blue-800 bg-opacity-30 p-2 m-2 rounded'>
      <Link href={'/'} className='flex items-center'>
        <HomeIcon size={24} className='mr-3' />
        <span>Home Logo</span>
      </Link>

      <div className='flex flex-1'></div>

      {navItems.map( item => (
        <ActiveLink key={item.url} {...item} />
      ))}
            

      {/* {navItems.map( item => (
        <Link key={item.url} className='mr-2' href={item.url}>
          {item.title}
        </Link>
      ))} */}

      {/* <a className='mr-3' href='/about'>aboout</a>
      <a className='mr-3' href='/pricing'>Pricing</a>
      <a className='mr-3' href='/contact'>Contact</a>  */}
    </nav>
  )
}
