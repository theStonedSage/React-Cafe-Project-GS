import React, { useEffect, useState } from 'react'
import Card from '../card/Card'
import { recipeList } from './Data'
import { RecipeContainer, RecipeWrapper,Subtitle,Heading, CardRow, LoadButton } from './RecipeElements'

const Recipes = () => {
    const [num,setNum] = useState(3);

    const handleClick = ()=>{
        // console.log(posts);
        setNum(num+3);
    }
    
    useEffect(()=>{
        console.log(num);
        // console.log(posts.num);
    },[num])
    return (
        <RecipeContainer>
            <RecipeWrapper>
                <Subtitle>Recipes</Subtitle>
                <Heading>Our Most Popular Recipes</Heading>
                <CardRow>
                    {recipeList.map((recipe,i)=>i<num&&<Card small {...recipe} />)}
                </CardRow>
                {num<recipeList.length&&<LoadButton onClick={handleClick}>Load More</LoadButton>}
            </RecipeWrapper>
        </RecipeContainer>
    )
}

export default Recipes
