import React, { useEffect, useState } from "react";

import axios from "axios";
import parse from "html-react-parser";
import { Link, useParams } from "react-router-dom";

import arrow from "../../assets/svg/arrow.svg";
import styles from "./RecipePage.module.scss";

type Recipe = {
  id: string | number;
  image: string;
  title: string;
  servings: string;
  pricePerServing: string;
  summary: HTMLAllCollection;
  extendedIngredients: string[];
  instructions: HTMLAllCollection;
};

export const RecipePage = () => {
  const [recipeFetched, setRecipe] = useState<Recipe>();
  const { id } = useParams();
  useEffect(() => {
    const fetchRecipe = async () => {
      const result = await axios({
        method: "get",
        url: `https://api.spoonacular.com/recipes/${id}/information?apiKey=7bee5a1c625b4f02a84298107297cb68`,
      });
      setRecipe(result.data);
    };
    fetchRecipe();
  }, []);

  return (
    <div className={styles.container}>
      {recipeFetched &&
        <div className={styles.recipe} key={recipeFetched.id}>
          <Link className={styles.button_return} to="/" style={{backgroundImage: `url(${arrow})`, backgroundPosition: "center", backgroundRepeat: "no-repeat"}}></Link>
          <img className={styles.recipe__image} src={recipeFetched.image} />
          <div className={styles.line}></div>
          <div className={styles.recipe__info}>
            <div className={styles.recipe__title}>{recipeFetched.title}</div>
            <span className={styles.recipe__servings}>
              Servings: {recipeFetched.servings} pers
            </span>
            <span className={styles.recipe__price}>
              Price per serving: {recipeFetched.pricePerServing}$
            </span>
            <div className={styles.recipe__summary}>
              {parse(`${recipeFetched.summary}`)}
            </div>
            <ul className={styles.recipe__ingredients}>
              <p>Ingredients:</p>
              {recipeFetched.extendedIngredients &&
                recipeFetched.extendedIngredients.map((item: any, index: number) => {
                  return (
                    <li className={styles.list__item} key={index}>
                      {item.original}
                    </li>
                  );
                })}
              </ul>
            <div className={styles.recipe__instructions}>
              <p className={styles.instructions__title}>Instructions:</p>
              {parse(`${recipeFetched.instructions}`)}
            </div>
          </div>
        </div>
      }
    </div>
  );
};
