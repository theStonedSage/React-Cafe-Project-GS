import React from 'react'
import { Nav,NavBtn,NavBtnLink,NavItem,NavLinks,NavMenu,NavbarContainer,NavLogo,MobileIcons,BorderTag } from './NavbarElements'

const Navbar = ({toggle}) => {
    return (
        <Nav>
            <NavbarContainer>
                <NavLogo to="/">FOOD<span style={{color:"#f7866a"}}>STUFF</span></NavLogo>
                <MobileIcons onClick={toggle}>
                    {/* <FaBars /> */}
                </MobileIcons>
                <NavMenu>
                    <NavItem>
                        <NavLinks to="/about">
                                Home
                          
                         </NavLinks>
                        
                    </NavItem>
                    <NavItem>
                        <NavLinks to="/discover"> Restraunts </NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="/services"> About </NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="/signup"> Contact US  </NavLinks>
                    </NavItem>
                </NavMenu>
                {/* <NavBtn>
                    <NavBtnLink to="/signup">Signup</NavBtnLink>
                </NavBtn> */}
            </NavbarContainer>
        </Nav>
    )
}

export default Navbar
