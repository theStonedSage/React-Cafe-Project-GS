import styled from 'styled-components';

export const FooterContainer = styled.div`
    color:#000;
    background:#f5f5f5;
`;

export const FooterWrapper = styled.div`
    height:270px;
    max-width:1000px;
    ${'' /* margin-top:rem; */}
    margin-left:auto;
    margin-right:auto;
    padding:1rem 2rem;

`;

export const FooterRow = styled.div`
    display:grid;
    grid-auto-columns:1fr 1fr 1fr 1fr 1fr;
    grid-template-areas:'col1 col2 col3 col4 col5';
    
    @media screen and (max-width:768px){
        grid-template-areas:${({imgStart})=>(imgStart?`'col1' 'col2'`:`'col1 col1' 'col2 col2'`)};
    }
`;

export const Column1 = styled.div`
    margin-bottom:15px;
    padding:0 15px;
    grid-area:col1;
`;

export const Column2 = styled.div`
    margin-bottom:15px;
    padding:0 15px;
    grid-area:col2;
`;

export const Column3 = styled.div`
    margin-bottom:15px;
    padding:0 15px;
    grid-area:col3;
`;

export const Column4 = styled.div`
    margin-bottom:15px;
    padding:0 15px;
    grid-area:col4;
`;

export const Column5 = styled.div`
    margin-bottom:15px;
    padding:0 15px;
    grid-area:col5;
`;

export const ListWrapper = styled.div`
    padding:0.5rem 1rem;
    
`;

export const ListHeader = styled.p`
    font-weight:800;
    font-size:18px;
`;

export const ListItem = styled.p`
    font-size:14px;
    font-weight:500;
    color:grey;
`;