import Link from 'next/link'
import './globals.css'
import DisplayUser from '@/components/DisplayUser'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <nav>
          <div>
            <h1>
              <Link href='/main'>Main </Link>
              <Link href='/reports'>Reports </Link>
              <DisplayUser/>
            </h1>
          </div>
        </nav>
        {children}
      </body>
    </html>
  )
}
