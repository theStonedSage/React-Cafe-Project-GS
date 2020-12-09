import styled from 'styled-components';



export const CardContainer = styled.div`
    color:#000;
    background: #fff;
    margin-bottom:2rem;
    padding:${({small})=>(small?'0.5rem':'1rem')};
    border-radius:1rem;
    box-shadow: 10px 10px 8px #888888;
    margin:${({small})=>(small?'1rem':'0')};
`;

export const CardWrapper = styled.div`
    height:${({small})=>(small?'240px':'310px')};
    width:${({small})=>(small?'':'270px')};
    text-align:${({small})=>(small?'left':'center')};
`;

export const Icon = styled.img`
    height:${({small})=>(small?'170px':'140px')};
    width:${({small})=>(small?'260px':'140px')};
    border-radius:${({small})=>(small?'1rem':'none')};
    margin:0 0 10px 0;
    padding-right:0;
`;

export const Title = styled.p`
    font-size:${({small})=>(small?'1.1rem':'1.2rem')};
    margin-block-end:0;
    margin-block-start:0;
    margin-top:5px;
    font-weight:800;
`;

export const Info = styled.p`
    margin-block-start:${({small})=>(small?'0':'')};
    max-width:440px;
    margin-bottom:35px;
    font-size:${({small})=>(small?'16px':'18px')};;
    line-height:24px;
    color: #010606;
`;