import styles from './RecipePage.module.scss';

type RecipePageProps = {
    children?: React.ReactNode;
    recipe: any;
}

export const RecipePage: React.FC<RecipePageProps> = ({recipe, ...props}) => {
    return (
        <div className={styles.recipe} {...props}>
            <button className={styles.button_return}></button>
            <img className={styles.recipe__image} src={recipe.image} />
            <div className={styles.line}></div>
            <div className={styles.recipe__title}>{recipe.title}</div>
            <div className={styles.recipe__likes}>{recipe.aggregateLikes}</div>
        </div>
    )
}