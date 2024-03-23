import Game from '@/pages/Game'
import Helpers from '@/pages/Helpers'
import About from '@/pages/About'
import Contact from '@/pages/Contact'
import Licensing from '@/pages/Licensing'
import Awesome from '@/pages/Awesome/Index'

interface Config {
  siteName: string
}
export const appConfig: Config = {
  siteName: 'Resource Hub',
}

export const game_service_path = 'http://101.43.206.247:3230'

export interface MenuItem {
  label: string
  path: string
  element?: React.ReactNode
  des?: string
  hide?: boolean
  children?: MenuItem[]
  params?: MenuItem[]
}

export type MenuItems = MenuItem[]

export const menuItems: MenuItems = [
  {
    label: 'Helpers',
    path: '/',
    element: <Helpers />,
  },
  {
    label: 'Awesome',
    path: '/Awesome/:type',
    des: 'The Awesome series is a carefully selected resource list that covers various themes and fields.',
    element: <Awesome />,
    params: [
      { label: 'nodejs', path: '/nodejs' },
      { label: 'javascript', path: '/javascript' },
      { label: 'go', path: '/go' },
      { label: 'java', path: '/java' },
      { label: 'vue', path: '/vue' },
      { label: 'react', path: '/react' },
      { label: 'python', path: '/python' },
    ],
  },
  {
    label: 'Game',
    path: '/game',
    element: <Game />,
  },
  {
    label: 'Licensing',
    path: '/licensing',
    element: <Licensing />,
    hide: true,
  },
  {
    label: 'Contact',
    path: '/contact',
    element: <Contact />,
    hide: true,
  },
  {
    label: 'About',
    path: '/about',
    element: <About />,
    hide: true,
  },
]
