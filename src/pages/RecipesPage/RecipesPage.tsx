import React, { useEffect, useState } from "react";

import { Card } from "@components/Card/Card";
import { Input } from "@components/Input/Input";
import { MultiDropdown } from "@components/MultiDropdown/MultiDropdown";
import axios from "axios";

import styles from "./RecipesPage.module.scss";

export const RecipesPage = () => {
  const [recipesFound, setRecipes] = useState([]);

  let query = "dessert";

  useEffect(() => {
    const fetchRecipes = async () => {
      const result = await axios({
        method: "get",
        url: `https://api.spoonacular.com/recipes/complexSearch?apiKey=7bee5a1c625b4f02a84298107297cb68&addRecipeInformation=true&type=${query}`,
      });
      setRecipes(result.data.results);
    };
    fetchRecipes();
  }, []);

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Input
          value={""}
          onChange={() => console.log("oj")}
          placeholder={"Search"}
        ></Input>
        <MultiDropdown
          value={[{ key: "des", value: "dessert" }]}
          onChange={([]) => console.log("wtf")}
          pluralizeOptions={() => ""}
          options={[
            { key: "mc", value: "main course" },
            { key: "sd", value: "side dish" },
            { key: "des", value: "dessert" },
            { key: "app", value: "appetizer" },
            { key: "sal", value: "salad" },
            { key: "brd", value: "bread" },
            { key: "bkf", value: "breakfast" },
            { key: "sou", value: "soup" },
            { key: "bvr", value: "beverage" },
            { key: "soc", value: "souce" },
            { key: "mar", value: "marinade" },
            { key: "fin", value: "fingerfood" },
            { key: "snk", value: "snack" },
            { key: "drn", value: "drink" },
          ]}
        ></MultiDropdown>
      </header>
      <div className={styles.main}>
        {recipesFound.length &&
          recipesFound.map((recipe: any) => {
            return <Card recipe={recipe} key={recipe.id}></Card>;
          })}
      </div>
    </div>
  );
};
