import styled from 'styled-components';
import {Link as LinkR} from 'react-router-dom';

export const Nav = styled.nav`
    background:#fff;
    height: 70px;
    ${'' /* margin-top: -80px; */}
    display: flex;
    justify-content:center;
    align-item:center;
    font-size:1rem;
    position:sticky;
    top:0;
    z-index:10;

    @media screen and (max-width: 960px){
        transition: 0.8 all ease;
    }
`;

export const NavbarContainer = styled.div`
    display:flex;
    justify-content:space-between;
    height:70px;
    z-index:1;
    width:100%;
    padding:0 24px;
    max-width:1000px;
`;

export const NavLogo = styled(LinkR)`
    color:#000;
    justify-self:flex-start;
    curson:pointer;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-left: 24px;
    font-weight: 900;
    text-decoration: none;
`;

export const MobileIcons = styled.div`
    display:none;

    @media screen and (max-width: 760px){
        display:block;
        position:absolute;
        top:1.5rem;
        right:1.5rem;
        transform:translated(-100%,60%);
        font-size:1.8rem;
        cursor:pointer;
        color:#000;
    }
`;

export const NavMenu = styled.ul`
    display:flex;
    align-items:center;
    list-style:none;
    text-align:center;
    margin-right:-22px;

    @media screen and (max-width:768px){
        display:none;
    }
`;

export const NavLinks = styled.a`
    color:#000;
    display:flex;
    align-items:center;
    text-decoration:none;
    padding:0 2rem;
    height:100%;
    margin:1rem
    cursor:pointer;

    &:active{
        border-bottom: 3px solid #f7866a;
    }
`;

export const NavItem = styled.li`
    height:80px;
`;

export const NavBtn = styled.nav`
    display:flex;
    align-items:center;

    @media screen and (max-width:768px){
        display:none;
    }
`

export const NavBtnLink = styled(LinkR)`
    border-radius:50px;
    background:#01bf71;
    white-space:nowrap;
    padding:10px 22px;
    color:#010606;
    font-size:16px;
    outline:none;
    border:none;
    curson:pointer;
    transition: all 0.2s ease-in-out;
    text-decoration:none;

    &:hover{
        transition: all 0.2s ease-in-out;
        background:#fff;
        color:#010606;
    }
`;

export const BorderTag = styled.p`
    padding:1rem;
    border-radius:1rem;
    border:1px solid black;
`
