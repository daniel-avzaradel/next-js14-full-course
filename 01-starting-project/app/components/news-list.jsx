import { DUMMY_NEWS } from '@/dummy-news';
import Link from 'next/link';
import React from 'react'

const NewsList = ({ newsItem }) => {
  return (
    <ul className="news-list">
        {DUMMY_NEWS.map((newsItem) => {
          return (
            <li key={newsItem.id}>
              <Link href={`/news/${newsItem.slug}`}>
                <img
                  src={`/images/news/${newsItem.image}`}
                  alt={newsItem.title}
                />
                <span>{newsItem.title}</span>
              </Link>
            </li>
          );
        })}
      </ul>
  )
}

export default NewsList