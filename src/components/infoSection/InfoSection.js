import React from 'react'
import { Button } from '../ButtonElement'
import { TextWrapper,InfoContainer,InfoWrapper,InfoRow,Column1,Column2,Head,Subtitle,BtnWrap,Img,ImgWrap } from './InfoElements'


const InfoSection = ({imgStart,id,headline,description,buttonLabel,img,alt,tall}) => {
    return (
        <InfoContainer id={id}>
            <InfoWrapper tall={tall}>
                <InfoRow imgStart={imgStart}>
                    <Column1>
                        <TextWrapper>
                            <Head >{headline}</Head>
                            <Subtitle >{description}</Subtitle>
                            <BtnWrap>
                                <Button>{buttonLabel}</Button>
                            </BtnWrap>
                        </TextWrapper>
                    </Column1>
                    <Column2>
                        <ImgWrap>
                            <Img src={img} alt={alt} />
                        </ImgWrap>
                    </Column2>
                </InfoRow>
            </InfoWrapper>
        </InfoContainer>
    )
}

export default InfoSection
