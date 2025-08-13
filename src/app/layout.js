"use client"

import { Montserrat } from "next/font/google"
import "./globals.css"
import { usePathname } from 'next/navigation'
import { useEffect } from "react"

const montserrat = Montserrat({
  variable: "--font-montserrat",
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
})

export default function RootLayout({ children }) {
  const pathname = usePathname()

  useEffect(() => {
    if (pathname === '/') {
    document.title = 'Soonyoung'
  } else {
    const segments = pathname.slice(1).split('/').map(segment => {
      return segment.charAt(0).toUpperCase() + segment.slice(1)
    })
    document.title = segments.join(' | ')
  }
  }, [pathname])

  return (
    <html lang="en">
      <body
        className={`${montserrat.className} antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
