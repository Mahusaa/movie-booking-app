import React, { Suspense } from 'react'
import '../styles/globals.css'
import Header from './components/header/Header'
import Loading from './loading'


export default function RootLayout({ children }) {
    return (
      <html lang="en">
        <body>
        <Header />
        {children}
        <Suspense fallback={<Loading />}/>
        </body>
      </html>
    )
  }