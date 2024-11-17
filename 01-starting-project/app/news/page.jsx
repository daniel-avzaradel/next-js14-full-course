import Link from 'next/link'
import React from 'react'

import classes from './page.module.css'

const NewsPage = () => {
  return (
    <main className={classes.main}>
      <h1>NEWS PAGE</h1>
      <br />
      <div>
        <Link href={'/news/first'}>FIRST NEWS PAGE</Link>
        <Link href={'/news/second'}>SECOND NEWS PAGE</Link>
        <Link href={'/news/third'}>THIRD NEWS PAGE</Link>
      </div>
    </main>
  )
}

export default NewsPage