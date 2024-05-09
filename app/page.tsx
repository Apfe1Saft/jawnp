import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={styles.main}>
      <Link href='/login'>
        <h1> Already have account? Log in </h1>
      </Link>

      <Link href="/signin">
        First time here? Create account
      </Link>
    </main>
  )
}
