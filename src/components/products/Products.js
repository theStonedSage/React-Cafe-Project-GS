import React, { useState } from 'react'
import Card from '../card/Card'
import { foodCardOne } from '../card/Data'
import { Column1, Column2 } from '../infoSection/InfoElements'
import { Subtitle } from '../services/ServiceElements'
import { foodfast, foodfish, foodpizza, foodsweet } from './Data'
import { FloatingText, FoodIcon, FoodMenu, Header, ProductContainer, ProductItem, ProductMenu, ProductRow, ProductWrapper,SubTitle,Title } from './ProductElements'

const Products = () => {

    const [option, setOption] = useState({type:'fast'})

    const handleSwitch = (e)=>{
        setOption({...option,type:e});
    }
    return (
        <ProductContainer>
            <ProductWrapper>
                <FloatingText>FOOD MENU</FloatingText>
                <Header>
                    <SubTitle>Quick Pick</SubTitle>
                    <Title>POPULAR FOODS</Title>
                </Header>
                <ProductRow>
                    <Column1>
                        <ProductMenu>
                            <ProductItem active={option.type==='fast'} onClick={()=>handleSwitch('fast')}><FoodIcon src={'https://img.icons8.com/color/48/000000/hamburger.png'} />Fast Food</ProductItem>
                            <ProductItem active={option.type==='pizza'} onClick={()=>handleSwitch('pizza')}><FoodIcon src={'https://img.icons8.com/color/48/000000/quesadilla.png'} />Pizza</ProductItem>
                            <ProductItem active={option.type==='fish'} onClick={()=>handleSwitch('fish')}><FoodIcon src={'https://img.icons8.com/color/48/000000/fish-food.png'} />Sea Food</ProductItem>
                            <ProductItem active={option.type==='sweet'} onClick={()=>handleSwitch('sweet')}><FoodIcon src={'https://img.icons8.com/color/48/000000/dessert.png'} />Dessert</ProductItem>
                        </ProductMenu>
                    </Column1>
                    <Column2>
                        <FoodMenu>
                            {option.type==='pizza'&&foodpizza.map((food)=><Card small={true} {...food} />)}
                            {option.type==='fast'&&foodfast.map((food)=><Card small={true} {...food} />)}
                            {option.type==='fish'&&foodfish.map((food)=><Card small={true} {...food} />)}
                            {option.type==='sweet'&&foodsweet.map((food)=><Card small={true} {...food} />)}
                        </FoodMenu>
                    </Column2>
                </ProductRow>
            </ProductWrapper>
        </ProductContainer>
    )
}

export default Products
