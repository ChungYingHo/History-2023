import styled from 'styled-components'
import Img  from '../asset/icons/restauranfood.jpg'
import Btn from './Btn'
import { Link } from 'react-router-dom'

const StyledBanner = styled.section`
    background-color: #495e57;
`

const StyledContainer = styled.div`
    /* outline: red solid 2px; */
    width: 66%;
    height: 300px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    position: relative;
`

const StyledText = styled.div`
    /* outline: blue solid 2px; */
    grid-column: 1/2;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 1rem 0;
`

const StyledTitle = styled.h1`
    /* outline: green solid 2px; */
    font-family: 'Markazi Text', serif;
    font-size: 40px;
    color: rgb(244, 206, 20);
    margin: 0;
`

const StyledSubTitle = styled.h3`
    font-family: 'Markazi Text', serif;
    font-size: 30px;
    color: white;
    margin: 0;
`

const StyledInfo = styled.p`
    font-family: 'Markazi Text', serif;
    font-size: 20px;
    color: white;
    text-align: left;
`

const StyledImg = styled.section`
    background-image: url(${Img});
    background-size: cover;
    width: 350px;
    height: 375px;
    border-radius: 16px;
    position: absolute;
    top: 1rem;
    right: 0;
`

export default function Banner(){
    return(
        <StyledBanner>
            <StyledContainer>
                <StyledText>
                    <StyledTitle>Little Lemon</StyledTitle>
                    <StyledSubTitle>Chicago</StyledSubTitle>
                    <StyledInfo>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim ut tellus elementum sagittis vitae et. </StyledInfo>
                    <Link to='/reserve'><Btn name={'Reserve a Table'}/></Link>
                </StyledText>
                <StyledImg/>
            </StyledContainer>
        </StyledBanner>
    )
}