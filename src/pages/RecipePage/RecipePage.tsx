import React, { useEffect, useState } from "react";

import axios from "axios";
import parse from "html-react-parser";
import { Link } from "react-router-dom";

import styles from "./RecipePage.module.scss";

export const RecipePage = () => {
  const [recipeFetched, setRecipe] = useState([]);

  useEffect(() => {
    const location = window.location.pathname;
    const id = location.split("/")[2];

    const fetchRecipe = async () => {
      const result = await axios({
        method: "get",
        url: `https://api.spoonacular.com/recipes/${id}/information?apiKey=7bee5a1c625b4f02a84298107297cb68`,
      });
      setRecipe(result.data);
    };
    fetchRecipe();
  }, []);

  const recipe = [recipeFetched];

  return (
    <div>
      {recipe.map((item: any) => {
        return (
          <div className={styles.recipe} key={item.id}>
            <Link className={styles.button_return} to="/"></Link>
            <img className={styles.recipe__image} src={item.image} />
            <div className={styles.line}></div>
            <div className={styles.recipe__info}>
              <div className={styles.recipe__title}>{item.title}</div>
              <span className={styles.recipe__servings}>
                Servings: {item.servings} pers
              </span>
              <span className={styles.recipe__price}>
                Price per serving: {item.pricePerServing}$
              </span>
              <div className={styles.recipe__summary}>
                {parse(`${item.summary}`)}
              </div>
              <ul className={styles.recipe__ingredients}>
                <p>Ingredients:</p>
                {item.extendedIngredients &&
                  item.extendedIngredients.map((item: any, index: number) => {
                    return (
                      <li className={styles.list__item} key={index}>
                        {item.original}
                      </li>
                    );
                  })}
              </ul>
              <div className={styles.recipe__instructions}>
                <p>Instructions:</p>
                {parse(`${item.instructions}`)}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
