import DefInput from '@/components/Forms'
import React from 'react'

export default function signin() {
  return (
    <div>
      Enter your data.
      <DefInput text ="Name"/>
      <DefInput text="Surname"/>
      <DefInput text="Email"/>
    </div>
  )
}
