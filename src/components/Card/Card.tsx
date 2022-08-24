import './Card.scss'

export type CardProps = {
    image: string;
    title: React.ReactNode;
    subtitle: React.ReactNode;
    content?: React.ReactNode;
    onClick?: React.MouseEventHandler;
};

export const Card: React.FC<CardProps> = ({image, title, subtitle, content, onClick, ...props}) => {
    return (
        <div className="card" onClick={onClick} {...props}>
            <img src={image} />
            <h3>{title}</h3>
            <h4>{subtitle}</h4>
            <div>{content}</div>
        </div>
    )
};

