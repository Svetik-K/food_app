import { Input } from '@components/Input/Input';
import { MultiDropdown } from '@components/MultiDropdown/MultiDropdown';
import React from 'react';
import './Header.scss'

export type HeaderProps = React.PropsWithChildren<{
    children?: React.ReactNode;
}> 

export const Header: React.FC<HeaderProps> = ({...props}) => {

    return (
        <header className="header" {...props}>

            <Input value={''} onChange={() => console.log('fck')} placeholder={'Search'}></Input>
            
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
    )
    
}