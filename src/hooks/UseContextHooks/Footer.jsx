import React, { useContext } from 'react'
import Contact from './Contact'
import { AppContext } from './AppContext'

function Footer() {
    const {phone}=useContext(AppContext)
  return (
    <div>
        <h1>Contact</h1>
        <p>phone:{phone} </p>
    </div>
  )
}

export default Footer