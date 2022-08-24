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

            <Input value={''} onChange={() => console.log('fuck')} placeholder={'Search'}></Input>
            
            <MultiDropdown 
            value={[{key: 'brg', value: 'Burger'}]} 
            onChange={([]) => console.log('wtf')} 
            pluralizeOptions={() => ''} 
            options={[{key: 'brg', value: 'Burger'}, {key: 'pzz', value: 'Pizza'}, {key: 'snd', value: 'Sandwich'}, {key: 'chk', value: 'Chicken'}]}>
            </MultiDropdown>
        </header>
    )
    
}