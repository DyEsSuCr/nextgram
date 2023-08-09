import Link from 'next/link'
import { Links } from '@/types'

const links: Links[] = [
  {
    label: 'home',
    route: '/'
  },
  {
    label: 'explore',
    route: '/explore'
  },
  {
    label: 'create',
    route: '/create'
  },
  {
    label: 'profile',
    route: '/profile'
  }
]

export default function Sidebar() {
  return (
    <nav>
      <h1>𝓓𝔂𝓖𝓰𝓻𝓪𝓶</h1>
      <ul>
        {
          links.map(({ label, route }) => (
            <li key={label}>
              <Link href={route} className='text-blue-600'>
                {label}
              </Link>
            </li>
          ))
        }
      </ul>
    </nav>
  )
}
