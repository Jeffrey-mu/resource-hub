import { createRoot } from 'react-dom/client'
import { NextUIProvider } from '@nextui-org/react'
import { ThemeProvider as NextThemesProvider } from 'next-themes'
import { RouterProvider } from 'react-router-dom'
import router from './router'
import './index.css'

const domNode = document.getElementById('root')
if (domNode) {
  const root = createRoot(domNode)
  root.render(
    <NextUIProvider>
      <NextThemesProvider attribute="class" defaultTheme="dark">
        <RouterProvider router={router} />
      </NextThemesProvider>
    </NextUIProvider>,
  )
}
