import React, { useEffect, useState } from "react";

import axios from "axios";

import styles from "./RecipePage.module.scss";

export const RecipePage = () => {
  const location = window.location.pathname;
  const id = location.split("/")[2];
  //   console.log(id)

  const [recipeFetched, setRecipe] = useState([]);

  useEffect(() => {
    const fetchRecipe = async () => {
      const result = await axios({
        method: "get",
        url: `https://api.spoonacular.com/recipes/${id}/information`,
      });
      setRecipe(result.data);
      // console.log(result.data)
    };
    fetchRecipe();
  }, []);

  //console.log(recipeFetched);
  return <div className={styles.recipe}></div>;
};

/* <button className={styles.button_return}></button>
<img className={styles.recipe__image} src={recipeFetched.image} />
<div className={styles.line}></div>
<div className={styles.recipe__title}>{recipeFetched.title}</div>
<div className={styles.recipe__likes}>{recipeFetched.aggregateLikes}</div> */
