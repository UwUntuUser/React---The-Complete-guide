import { useState, useEffect } from "react";
import MealCard from "./MealCard";
import useHttp from "../hooks/useHttp";

const requestConfig = {};

export default function MealList() {
  const {
    data: availableMeals,
    isLoading,
    error,
  } = useHttp("http://localhost:3000/meals", requestConfig, []);

  return (
    <ul id="meals">
      {availableMeals.map((meal) => (
        <li className="meal-item" key={meal.id}>
          <MealCard item={meal} />
        </li>
      ))}
    </ul>
  );
}
