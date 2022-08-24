import React, { useEffect, useState } from 'react'
import { Card } from '@components/Card/Card';
import './Main.scss';
import axios from 'axios';




export const Main = ({...props}) => {
    
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        const fetch = async () => {
            const result = await axios({
                method: 'get',
                url: 'https://api.spoonacular.com/recipes/complexSearch?apiKey=7bee5a1c625b4f02a84298107297cb68&type=dessert'
            })
            console.log(result.data)
            setRecipes(result.data.results); 
    }
    fetch();
    }, [])

    console.log(recipes)
    return (
        <div className='main' {...props}>
            {recipes.map(recipe => {
                return <Card  recipe={recipe} >
                </Card>
            })}       
        </div>
    )

}

// https://api.spoonacular.com/recipes/complexSearch

// https://api.spoonacular.com/recipes/{id}/information