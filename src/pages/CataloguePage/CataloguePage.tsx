import styles from './CataloguePage.module.scss';
import { Main } from '@components/Main/Main';
import { MultiDropdown } from '@components/MultiDropdown/MultiDropdown';
import { Input } from '@components/Input/Input';


type CataloguePageProps = {
    children?: React.ReactNode;
}

export const CataloguePage: React.FC<CataloguePageProps> = ({children, ...props}) => {

    return (
        <div className={styles.container} {...props}>
            <header className={styles.header}>
                <Input value={''} onChange={() => console.log('oj')} placeholder={'Search'}></Input>
                
                <MultiDropdown 
                value={[{key: 'des', value: 'dessert'}]} 
                onChange={([]) => console.log('wtf')} 
                pluralizeOptions={() => ''} 
                options={[
                    {key: 'mc', value: 'main course'}, 
                    {key: 'sd', value: 'side dish'}, 
                    {key: 'des', value: 'dessert'}, 
                    {key: 'app', value: 'appetizer'},
                    {key: 'sal', value: 'salad'},
                    {key: 'brd', value: 'bread'},
                    {key: 'bkf', value: 'breakfast'},
                    {key: 'sou', value: 'soup'},
                    {key: 'bvr', value: 'beverage'},
                    {key: 'soc', value: 'souce'},
                    {key: 'mar', value: 'marinade'},
                    {key: 'fin', value: 'fingerfood'},
                    {key: 'snk', value: 'snack'},
                    {key: 'drn', value: 'drink'}
                ]}>
                </MultiDropdown>
            </header>
   
            <Main></Main>

        </div>    
        
    )
}