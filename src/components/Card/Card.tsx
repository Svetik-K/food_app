import { Link } from "react-router-dom";
import routes from "@config/Routes";

import heart from "../../assets/images/heart.png";
import styles from "./Card.module.scss";

export type CardProps = React.PropsWithChildren<{
  children?: React.ReactNode;
  onClick?: React.MouseEventHandler;
  recipe: CardContent;
}>;

export type CardContent = {
  id: number | string;
  aggregateLikes: number | string;
  image: string;
  title: string;
  readyInMinutes: string;
  healthScore: number | string;
};

export const Card: React.FC<CardProps> = ({ recipe, onClick, ...props }) => {
  return (
    <div key={recipe.id} className={styles.card} onClick={onClick} {...props}>
      <div
        className={styles.card__likes}
        style={{backgroundImage:`url(${heart})`, backgroundPosition: "left", backgroundSize: "contain", backgroundRepeat: "no-repeat"}}
      >
        {recipe.aggregateLikes}
      </div>
      <img
        className={styles.card__image}
        src={recipe.image}
        alt={recipe.title}
      />
      <div className={styles.card__title}>{recipe.title}</div>
      <div className={styles.card__time}>
        Time to cook: {recipe.readyInMinutes} min
      </div>
      <div className={styles.card__score}>
        health score: {recipe.healthScore}
      </div>
      <Link className={styles.card__link} to={routes.recipe.creator(recipe.id)}>
        +
      </Link>
    </div>
  );
};
