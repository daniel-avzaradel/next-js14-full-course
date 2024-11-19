import NewsList from '@/app/components/news-list'
import { getLatestNews } from '@/app/lib/news'
import React from 'react'

const LatestNewsPage = () => {

  const latestNews = getLatestNews();

  return (
    <>
      <h1>Latest News</h1>
      <NewsList news={latestNews} />
    </>
  )
}

export default LatestNewsPage