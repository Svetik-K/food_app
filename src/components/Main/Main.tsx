import React, { useEffect, useState } from 'react'
import { Card } from '@components/Card/Card';
import styles from './Main.module.scss';
import axios from 'axios';

export const Main = ({...props}) => {
    
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        const fetch = async () => {
            const result = await axios({
                method: 'get',
                url: 'https://api.spoonacular.com/recipes/complexSearch?apiKey=7bee5a1c625b4f02a84298107297cb68&addRecipeInformation=true&type=fingerfood'
            })
            setRecipes(result.data.results); 
            console.log(result.data.results)
    }
    fetch();
    }, [])

    return (
        <div className={styles.main} {...props}>
            {recipes.map((recipe: Object) => {
                return <Card recipe={recipe} >
                </Card>
            })}       
        </div>
    )

}

// https://api.spoonacular.com/recipes/complexSearch

// https://api.spoonacular.com/recipes/{id}/information