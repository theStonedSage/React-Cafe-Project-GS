import styled from 'styled-components';

export const ServiceContainer = styled.div`
    background:#fff;
    color:#fff;
    height:650px;

    @media screen and (max-width:768px){
        height:1200px;
    }
`;

export const ServiceWrapper = styled.div`
    text-align:center;
    max-width:1200px;
    
    width:100%;
    margin-right:auto;
    margin-left:auto;
    padding:1rem 24px;

    
`;

export const Heading = styled.p`
    margin-bottom: 4rem;
    font-size: 34px;
    font-weight:800;
    font-weight: 600;
    color: #010606;
    margin-block-start:0;

    @media screen and (max-width:480px){
        font-size:32px;
    }
`;

export const Subtitle = styled.p`
    ${'' /* margin-bottom:px; */}
    font-size:18px;
    ${'' /* line-height:24px; */}
    color:#f7866a ;
    font-weight:800;
    margin-block-start:0;
    margin-block-end:0;
`;

export const CardWrapper = styled.div`
    margin-left:auto;
    margin-right:auto;
    display: flex;
    flex-wrap:wrap;
    justify-content:space-around;
    align-items:center;
    max-width:1200px;
`;
