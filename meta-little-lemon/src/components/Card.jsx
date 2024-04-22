import styled from 'styled-components'

const StyledCard = styled.section`
    /* outline: black solid 2px; */
    background-color: lightgray;
    display: flex;
    flex-direction: column;
    width: 30%;
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
`

const StyledImg = styled.img`
    width: 100%;
    height: 40%;
    object-fit: cover;
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
`

const StyledInfo = styled.div`
    width: 80%;
    height: 60%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
`

const StyledItem = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const StyledName = styled.h3`
    font-family: 'Markazi Text', serif;
    font-size: 25px;
`

const StyledPrice = styled.h4`
    font-family: 'Markazi Text', serif;
    font-size: 25px;
    color: #ee9972;
`

const StyledText = styled.p`
    font-family: 'Markazi Text', serif;
    font-size: 20px;
    text-align: left;
`

const StyledLink = styled.a`
    text-decoration: none;
    color: black;
    font-weight: 700;
    text-align: left;
    margin-bottom: 5px;
`



export default function Card({img, name, price, des}){
    return(
        <StyledCard>
            <StyledImg src={img}/>
            <StyledInfo>
                <StyledItem>
                    <StyledName>{name}</StyledName>
                    <StyledPrice>$ {price}</StyledPrice>
                </StyledItem>
                <StyledText>{des}</StyledText>
                <StyledLink href='#'>Order a delivery</StyledLink>
            </StyledInfo>
        </StyledCard>
    )
}