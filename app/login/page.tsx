'use client'
import DefInput from '@/components/DefInput'
import React, { useState } from 'react'
import styles from './page.module.css'
import DefPasswordInput from '@/components/DefPasswordInput'

export default function Login() {

  const [enteredLogin, setLogin] = useState('');
  const [enteredPassword, setPassword] = useState('');
  const handleLogin = (data: string) => {
    setLogin(data);
  };
  const handlePassword = (data: string) => {
    setPassword(data);
  };
  return (
    <main>
        <div className={styles.div}>
        <h1>Enter your data:</h1>
          <div style={{margin: '10px'}}>
            <DefInput text="Login" onData={handleLogin}/>

            <DefPasswordInput text='Password' onPasswordData={handlePassword}/>

            <div style={{ textAlign: 'center' ,marginLeft: 'auto', marginRight: 'auto' }}>
              <button type='button'>Submit</button>
            </div>
          </div>
        </div>
    </main>
    
  )
}
