import React, { Suspense } from 'react'
import '../styles/globals.css'
import Header from './components/header/Header'
import Loading from './loading'
import MainHeader from './components/header/MainHeader'
import Home from './components/main/Home'


export default function RootLayout({ children }) {
    return (
      <html lang="en">
        <body>
        <MainHeader />
        <Home>{children}</Home>
        <Suspense fallback={<Loading />}/>
        </body>
      </html>
    )
  }