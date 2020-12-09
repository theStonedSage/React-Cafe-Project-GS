import styled from 'styled-components';

export const ProductContainer = styled.div`
    color:#000;
    background:#f5f5f5;
    position:relative;
`;

export const ProductWrapper = styled.div`
    ${'' /* height:800px; */}
    max-width:1100px;
    width:100%;
    margin-right:auto;
    margin-left:auto;
    padding-bottom:4rem;
`;

export const FloatingText = styled.p`
    position:absolute;
    top:-147px;
    left:14rem;
    font-size:75px;
    font-weight:900;
    color:#f5f5f5;

    @media screen and (max-width:768px){
        display:none;
    }
`;

export const Header = styled.div`
    padding:0 7rem;
    padding-top:2rem;
    ${'' /* padding-bottom:1rem; */}
    ${'' /* background:yellow; */}
    ${'' /* border-bottom:1px solid black; */}
`;

export const SubTitle = styled.p`
    color:#f7866a;
    font-size:18px;
    margin-block-end:0;
    font-weight:600;
`;

export const Title = styled.p`
    font-size:30px;
    margin-block-start:0;
    margin-top:10px;
    margin-bottom:0px;
    font-weight:800;
`;

export const ProductRow = styled.div`
    display:grid;
    grid-auto-columns:1fr 2fr;
    grid-template-areas:'col1 col2';
    
    @media screen and (max-width:768px){
        grid-template-areas:${({imgStart})=>(imgStart?`'col1' 'col2'`:`'col1 col1' 'col2 col2'`)};
    }
`;

export const Column1 = styled.div`
    margin-bottom:15px;
    grid-area:col1;
`;

export const ProductMenu = styled.ul`
    list-style:none;
    margin-top:3rem;
    padding-left:6rem;
`;

export const ProductItem = styled.li`
    display:flex;
    align-items:center;
    padding:0.2rem 1rem;
    width:200px;
    margin:1.5rem 1rem;
    font-weight:700;
    margin-right:auto;
    margin-left:auto;
    border-radius:3rem;
    height:60px;
    cursor:pointer;
    box-shadow:${({active})=>(active?`8px 8px 10px #666666`:`none`)}; 
    background:#fff;

    &:hover&&{
        transition:${({active})=>(active?``:`all 0.2s ease-in-out`)};  ;
        box-shadow:${({active})=>(active?'':`8px 8px 10px #666666`)}; 
        font-weight:${({active})=>(active?'':`800`)};
        font-size:${({active})=>(active?'':`18px`)};
    }
    
`;

export const Column2 = styled.div`
    margin-bottom:15px;
    padding:0 15px;
    grid-area:col2;
    align-items:center;
`;

export const FoodMenu = styled.ul`
    display:flex;
    align-items:center;
    flex-wrap:wrap;
    list-style:none;
    text-align:center;
    margin-right:-22px;
`;

export const FoodIcon = styled.img`
    height:30px;
    width:30px;
    margin-right:0.8rem;
`;
