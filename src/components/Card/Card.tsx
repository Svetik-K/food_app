import styles from './Card.module.scss'

export type CardProps = React.PropsWithChildren<{
    children?: React.ReactNode;
    onClick?: React.MouseEventHandler;
    recipe: any;
}>;

export const Card: React.FC<CardProps> = ({recipe, children,  onClick, ...props}) => {
    return (
        <div className={styles.card} onClick={onClick} {...props}>
            <div className={styles.card__likes}>{recipe.aggregateLikes}</div>
            <img src={recipe.image} />
            <div className={styles.card__title}>{recipe.title}</div>
            <div className={styles.card__time}>Time to cook: {recipe.readyInMinutes} min</div>
            <div className={styles.card__score}>health score: {recipe.healthScore}</div>
            <button className={styles.button_plus}>+</button>
        </div>
    )
};


/*      
        <a href="#" className='card__link'>See Recipe</a>
        <button className='button button_heart'></button>
         */