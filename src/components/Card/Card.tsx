import { Link } from "react-router-dom";

import styles from "./Card.module.scss";

export type CardProps = React.PropsWithChildren<{
  children?: React.ReactNode;
  onClick?: React.MouseEventHandler;
  recipe: any;
}>;

export const Card: React.FC<CardProps> = ({ recipe, onClick, ...props }) => {
  return (
    <div key={recipe.id} className={styles.card} onClick={onClick} {...props}>
      <div className={styles.card__likes}>{recipe.aggregateLikes}</div>
      <img src={recipe.image} alt={recipe.title} />
      <div className={styles.card__title}>{recipe.title}</div>
      <div className={styles.card__time}>
        Time to cook: {recipe.readyInMinutes} min
      </div>
      <div className={styles.card__score}>
        health score: {recipe.healthScore}
      </div>
      <Link className={styles.card__link} to={`/recipe/${recipe.id}`}>
        +
      </Link>
    </div>
  );
};
