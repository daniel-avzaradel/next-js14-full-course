import React from 'react'
import { DUMMY_NEWS } from '@/dummy-news';
import { notFound } from 'next/navigation';

const NewsDetailsPage = ({ params }) => {

  const newsSlug = params.id;
  const newsItem = DUMMY_NEWS.find(news => news.slug === newsSlug);

  if(!newsItem) {
    return notFound();
  }

  return (
    <article className='news-article'>
      <header>
        <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
        <h1>{newsItem.title}</h1>
        <time dateTime={newsItem.date}>{newsItem.date}</time>
      </header>
      <p>{newsItem.content}</p>
    </article>
  )
}

export default NewsDetailsPage