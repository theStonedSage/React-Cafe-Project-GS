import React from 'react'
import { FooterContainer, FooterRow, FooterWrapper, Column1,Column2,Column3,Column4,Column5, ListWrapper, ListHeader, ListItem } from './FooterElements'

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrapper>
                <FooterRow>
                    <Column1>
                        <ListWrapper>
                            <ListHeader>Our Menu</ListHeader>
                            <ListItem>Breakfast</ListItem>
                            <ListItem>Lunch</ListItem>
                            <ListItem>FastFood</ListItem>
                            <ListItem>Dinner</ListItem>
                            <ListItem>Desert</ListItem>
                        </ListWrapper>
                    </Column1>
                    <Column2>
                        <ListWrapper>
                            <ListHeader>Our Menu</ListHeader>
                            <ListItem>Breakfast</ListItem>
                            <ListItem>Lunch</ListItem>
                            <ListItem>FastFood</ListItem>
                            <ListItem>Dinner</ListItem>
                            <ListItem>Desert</ListItem>
                        </ListWrapper>
                    </Column2>
                    <Column3>
                        <ListWrapper>
                        <ListHeader>Information</ListHeader>
                            <ListItem>About Us</ListItem>
                            <ListItem>Blog</ListItem>
                            <ListItem>Contact</ListItem>
                            <ListItem>Popular Recipies</ListItem>
                        </ListWrapper>
                    </Column3>
                    <Column4>
                        <ListWrapper>
                            <ListHeader>Service</ListHeader>
                            <ListItem>Quality food</ListItem>
                            <ListItem>Best Taste</ListItem>
                            <ListItem>Fast Delivery</ListItem>
                        </ListWrapper>
                    </Column4>
                    <Column5>
                        <ListWrapper>
                            <ListHeader>Join our List Offer</ListHeader>
                            <ListItem>Breakfast</ListItem>
                            <ListItem>Lunch</ListItem>
                            <ListItem>FastFood</ListItem>
                        </ListWrapper>
                    </Column5>

                </FooterRow>
            </FooterWrapper>
        </FooterContainer>
    )
}

export default Footer
