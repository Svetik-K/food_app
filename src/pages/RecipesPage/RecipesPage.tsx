import React, { FormEvent, useEffect, useState } from "react";

import { Card, CardContent } from "@components/Card/Card";
import { Input } from "@components/Input/Input";
import { MultiDropdown } from "@components/MultiDropdown/MultiDropdown";
import axios from "axios";

import foodTypes from "../../foodTypes";
import styles from "./RecipesPage.module.scss";

export const RecipesPage = () => {
  const [recipesFound, setRecipes] = useState([]);
  const [recipeSearch, setRecipeSearch] = useState("");
  const [foodType, setFoodType] = useState(foodTypes[0].value);

  useEffect(() => {
    const fetchRecipes = async (query: string) => {
      const result = await axios({
        method: "get",
        url: `https://api.spoonacular.com/recipes/complexSearch?apiKey=7bee5a1c625b4f02a84298107297cb68&addRecipeInformation=true&query=${query}`,
      });
      setRecipes(result.data.results);
    };
    fetchRecipes(recipeSearch);
  }, [recipeSearch]);

  useEffect(() => {
    const fetchRecipes = async (query: string) => {
      const result = await axios({
        method: "get",
        url: `https://api.spoonacular.com/recipes/complexSearch?apiKey=7bee5a1c625b4f02a84298107297cb68&addRecipeInformation=true&type=${query}`,
      });
      setRecipes(result.data.results);
    };
    fetchRecipes(foodType);
  }, [foodType]);

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <form className="search-form">
          <Input
            value={recipeSearch}
            onChange={(value) => setRecipeSearch(value)}
            placeholder={"Search"}
          ></Input>
        </form>
        <MultiDropdown
          value={foodType}
          onChange={(value) => setFoodType(value)}
          options={foodTypes}
        ></MultiDropdown>
      </header>
      <main className={styles.main}>
        {recipesFound.length &&
          recipesFound.map((recipe: CardContent) => {
            return <Card recipe={recipe} key={recipe.id}></Card>;
          })}
      </main>
    </div>
  );
};
