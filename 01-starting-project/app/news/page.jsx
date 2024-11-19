import React from "react";

import classes from "./page.module.css";
import { DUMMY_NEWS } from "@/dummy-news";
import NewsList from "../components/news-list";

const NewsPage = () => {
  return (
    <main className={classes.main}>
      <h1>NEWS PAGE</h1>
      <br />
      <NewsList news={DUMMY_NEWS} />
    </main>
  );
};

export default NewsPage;
