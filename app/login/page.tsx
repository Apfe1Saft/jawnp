import DefInput from '@/components/DefInput'
import React from 'react'
import styles from './page.module.css'
import DefPasswordInput from '@/components/DefPasswordInput'
import DefButton from '@/components/DefButton'
import SubmitButton from '@/components/SubmitButton'

export default function Login() {
  return (
    <main>
        <div className={styles.div}>
        <h1>Enter your data:</h1>
          <div style={{margin: '10px'}}>
            <DefInput text='Login'/>
            <DefPasswordInput text='Password'/>
            <SubmitButton text='Submit'/>
          </div>
        </div>
    </main>
    
  )
}
