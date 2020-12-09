import React from 'react'
import Card from '../card/Card'
import { cardOne,cardTwo,cardThree } from '../card/Data'
import { CardWrapper, Heading, ServiceContainer, ServiceWrapper, Subtitle } from './ServiceElements'

const Services = () => {
    return (
        <ServiceContainer>
            <ServiceWrapper>
                <Subtitle>Features</Subtitle>
                <Heading>Our Awsome Services</Heading>
                <CardWrapper>
                    <Card {...cardOne} />
                    <Card {...cardTwo} />
                    <Card {...cardThree} />
                </CardWrapper>
            </ServiceWrapper>
        </ServiceContainer>
    )
}

export default Services
