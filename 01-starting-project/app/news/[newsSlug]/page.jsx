import React from 'react'
import classes from '../page.module.css'
import Link from 'next/link'

const NewsDetailsPage = ({ params }) => {
  return (
    <main className={classes.main}>
      <h1>NEWS #{params.newsSlug.toString().toUpperCase()}</h1>
      <Link href={'/news'}>{`< Back`}</Link>
    </main>
  )
}

export default NewsDetailsPage