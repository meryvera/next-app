import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About',
  description: 'Generated about page',
  keywords: ['about page', 'zapatos', 'carducci'],    
}

export default function page() {
  return (
    <div className='text-7xl'>
      about
    </div>
  )
}

