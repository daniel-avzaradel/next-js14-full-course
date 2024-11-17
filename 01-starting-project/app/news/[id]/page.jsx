import React from 'react'
import classes from '../page.module.css'
import Link from 'next/link'

const NewsDetailsPage = ({ params }) => {
  return (
    <main className={classes.main}>
      <h1>NEWS #{params.id.toString().toUpperCase()}</h1>
      <div>
        <Link href={'/news'}>{`< Back`}</Link>
      </div>
    </main>
  )
}

export default NewsDetailsPage