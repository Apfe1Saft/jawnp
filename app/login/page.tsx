'use client'
import React, { useState } from 'react';
import DefInput from '@/components/DefInput';
import DefPasswordInput from '@/components/DefPasswordInput';
import styles from './page.module.css';
import { loginUser } from '@/services/userService';

export default function Login() {
  const [enteredLogin, setLogin] = useState('');
  const [enteredPassword, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (data:string) => {
    setLogin(data);
  };

  const handlePassword = (data:string) => {
    setPassword(data);
  };

  const handleSubmit = async () => {
    try {
      console.log("login "+enteredLogin)
      console.log("password "+enteredPassword)
      const response = await loginUser({
        login: enteredLogin,
        password: enteredPassword
      });
      console.log('Login successful', response);
    } catch (error) {
      console.error('Login failed', error);
      setError('Invalid login or password');
    }
  };

  return (
    <main>
      <div className={styles.div}>
        <h1>Enter your data:</h1>
        <div style={{ margin: '10px' }}>
          <DefInput text="Login" onData={handleLogin} />
          <DefPasswordInput text='Password' onPasswordData={handlePassword} />
          {error && <p style={{ color: 'red' }}>{error}</p>}
          <div style={{ textAlign: 'center', marginLeft: 'auto', marginRight: 'auto' }}>
            <button type='button' onClick={handleSubmit}>Submit</button>
          </div>
        </div>
      </div>
    </main>
  );
}
