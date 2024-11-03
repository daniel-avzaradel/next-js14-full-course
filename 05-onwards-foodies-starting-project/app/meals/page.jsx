import { Suspense } from "react";

import Link from "next/link";
import MealsGrid from "../components/meals/meals-grid";

import classes from './page.module.css'
import { getMeals } from "@/lib/meals";

const Meals = async () => {
  const meals = await getMeals();

  return(<MealsGrid meals={meals} />)
}

const MealsPage = () => {

  return (
    <>
    <header className={classes.header}>
      <h1>Delicious meals, created{' '}
        <span className={classes.highlight}>by you</span>
      </h1>
      <p className={classes.headerp}>Choose your favorite recipe and cook it yourself. It is easy and fun!</p>
      <p className={classes.cta}>
        <Link href='/meals/share'>
          Share Your Favorite Recipe
        </Link>
      </p>
      <main className={classes.main}>
        <Suspense fallback={<p className={classes.loading}>Fetching meals..</p>}>
          <Meals />
        </Suspense>
      </main>
    </header>
    </>
  );
};

export default MealsPage;
