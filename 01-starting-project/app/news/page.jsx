import Link from "next/link";
import React from "react";

import classes from "./page.module.css";
import { DUMMY_NEWS } from "@/dummy-news";
import Image from "next/image";

const NewsPage = () => {
  return (
    <main className={classes.main}>
      <h1>NEWS PAGE</h1>
      <br />
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
    </main>
  );
};

export default NewsPage;
