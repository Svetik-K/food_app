import './RecipePage.scss';

type RecipePageProps = {
    children?: React.ReactNode;
    recipe: any;
}

export const RecipePage: React.FC<RecipePageProps> = ({recipe, ...props}) => {
    return (
        <div className="recipe" {...props}>
            <button className='button button_return'></button>
            <img src={recipe.image} />
            <div className='recipe__title'>{recipe.title}</div>
            <div className='recipe__likes'>{recipe.aggregateLikes}</div>
        </div>
    )
}