import Link from 'next/link'
import React from 'react'

import classes from './page.module.css'

const NewsPage = () => {
  return (
    <main className={classes.main}>
      <h1>NEWS PAGE</h1>
      <br />
      <ul>
        <li>
          <Link href={'/news/first'}>FIRST NEWS PAGE</Link>
        </li>
        <li>
          <Link href={'/news/second'}>SECOND NEWS PAGE</Link>
        </li>
        <li>
          <Link href={'/news/third'}>THIRD NEWS PAGE</Link>
        </li>
      </ul>
    </main>
  )
}

export default NewsPage