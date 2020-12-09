import React from 'react'
import { CardContainer,CardWrapper, Icon, Info, Title} from './CardElements'

const Card = ({img,title,info,small}) => {
    console.log(small);
    return (
        // <CardContainer />
        <CardContainer small={small}>
            <CardWrapper small={small}>
                <Icon small={small}  src={img} />
                <Title small={small}>{title}</Title>
                <Info small={small}>{info}</Info>
            </CardWrapper>
        </CardContainer>
    )
}

export default Card
