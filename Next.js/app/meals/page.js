import MealsGrid from "@/components/meals/meals-grid";
import { getAllMeals } from "@/lib/meals";

import classes from "./page.module.css";
import Link from "next/link";

// Gracias a que usamos next que podemos marcar componentes como asincronos
export default async function MealsPage() {
  const meals = await getAllMeals();

  return (
    <>
      <header className={classes.header}>
        <h1>Meals Page creted 
          <span className={classes.highlight}> by you</span>
        </h1>
        <p className={classes.cta}>
          <Link href="/meals/share">Share your meal</Link>
        </p>
      </header>
      <main className={classes.main}>
        <MealsGrid meals={meals}></MealsGrid>
      </main>
    </>
  );
}