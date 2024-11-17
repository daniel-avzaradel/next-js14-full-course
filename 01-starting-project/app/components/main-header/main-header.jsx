import Link from 'next/link'
import React from 'react'

import classes from './main-header.module.css'

const MainHeaderComponent = () => {
  return (
    <header className={classes.header}>
      <h1>NEWS APP</h1>
      <nav>
        <Link href={'/'}>HOME</Link>
        <Link href={'/news'}>NEWS</Link>
      </nav>
    </header>
  )
}

export default MainHeaderComponent