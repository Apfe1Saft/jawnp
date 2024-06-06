import Link from 'next/link';
import styles from './page.module.css';
import {options} from '@/app/api/auth/[...nextauth]/options'
import { getServerSession } from 'next-auth';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Home | Jawnp App"
}


export default async function Home() {
  const session = await getServerSession(options);

  return (
    <>
      {session ? (
        <div>Welcome to JAWNP project, {session?.user?.name}!</div>
      ) : (
        <main className={styles.main}>
          <Link href='/api/auth/signin'>
            <h1>Already have an account? Log in</h1>
          </Link>

          <Link href="/signin">
            <h1>First time here? Create an account</h1>
          </Link>
        </main>
      )}
    </>
  );
}