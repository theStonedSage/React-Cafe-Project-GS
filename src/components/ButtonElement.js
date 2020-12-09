import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const Button = styled(Link)`
    border-radius:50px;
    background:#f7866a;
    white-space:nowrap;
    padding: ${({big})=>(big?'14px 48px':'12px 30px')};
    color : #fff;   
    font-size : ${({fontBig})=>(fontBig?'20px':'16px')};
    outline:none;
    border: none;
    cursor : pointer;
    text-decoration:none;
    display : flex;
    justify-content: center;
    align-items: center;
    transition : all 0.2s ease-in-out;

    &:hover{
        transition: all 0.2s ease-in-out;
        background: ${({primary})=>(primary?'#fff':'#01BF71')};
    }
`
