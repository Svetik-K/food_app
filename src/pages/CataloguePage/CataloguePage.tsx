import './CataloguePage.scss';
import { Header } from '@components/Header/Header';
import { Main } from '@components/Main/Main';


type CataloguePageProps = {
    children?: React.ReactNode;
}

export const CataloguePage: React.FC<CataloguePageProps> = ({children, ...props}) => {

    return (
        <div className='page-container' {...props}>
            <Header></Header>
            <Main></Main>

        </div>    
        
    )
}