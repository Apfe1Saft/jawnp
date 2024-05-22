'use client'
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from './page.module.css';

export default function Home() {
  const [ipAddress, setIpAddress] = useState('');

  useEffect(() => {
    fetch('https://api.ipify.org/?format=json')
      .then(response => response.json())
      .then(data => setIpAddress(data.ip))
      .catch(error => console.error('Error fetching IP address:', error));
  }, []);

  return (
    <main className={styles.main}>
      <Link href='/login'>
        <h1> Already have an account? Log in </h1>
      </Link>

      <Link href="/signin">
        First time here? Create an account
      </Link>
      
      <div>
        <h1>Your IP Address is: {ipAddress}</h1>
      </div>
    </main>
  );
}