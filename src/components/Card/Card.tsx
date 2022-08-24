import './Card.scss'

export type CardProps = React.PropsWithChildren<{
    children?: React.ReactNode;
    onClick?: React.MouseEventHandler;
    recipe: any;
}>;

export const Card: React.FC<CardProps> = ({recipe, children,  onClick, ...props}) => {
    return (
        <div className="card" onClick={onClick} {...props}>
            <img src={recipe.image} />
            <div className='card__title'>{recipe.title}</div>
      
            <button className='button button_plus'>+</button>
        </div>
    )
};


/*      <div className='card__time'>Time to cook: {recipe.readyInMinutes}</div>
            <div className='card__score'>{recipe.healthScore} health score</div> */