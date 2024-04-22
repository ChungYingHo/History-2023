import styled from 'styled-components'
import Btn from './Btn'
import Card from './Card'
import dummyItems from '../asset/dummyItems'
import Img1 from '../asset/icons/restaurant.jpg'
import Img2 from '../asset/icons/Mario and Adrian A.jpg'

const StyledMain = styled.main`
    /* outline: blue solid 2px; */
`

const StyledFirstPart = styled.section`
    /* outline: green solid 2px; */
    width: 66%;
    margin: calc(1rem + 75px) auto 0;
    display: flex;
    flex-direction: column;
`

const StyledTitle = styled.div`
    /* outline: red solid 2px; */
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const StyledTitleText = styled.h1`
    /* outline: yellow solid 2px; */
    font-family: 'Markazi Text', serif;
    font-size: 40px;
`

const StyledCardContainer = styled.div`
    /* outline: red solid 2px; */
    display: flex;
    justify-content: space-between;
`

// *Second part
const StyledSecondPart = styled.section`
    /* outline: blue solid 2px; */
    width: 66%;
    height: 60vh;
    margin: 3rem auto 0;
    background-color: #fbdabb;
    position: relative;
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
`

const StyledInfoContainer = styled.div`
    /* outline: red solid 2px; */
    width: 40%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    position: absolute;
    top: 50%;
    left: 5%;
    transform: translate(0, -50%);
`

const StyledSecondTitle = styled.h1`
    /* outline: yellow solid 2px; */
    font-family: 'Markazi Text', serif;
    font-size: 40px;
    margin: 0;
`

const StyledSubTitle = styled.h3`
    margin: 0;
    font-family: 'Markazi Text', serif;
    font-size: 25px;
`

const StyledText = styled.p`
    font-family: 'Markazi Text', serif;
    font-size: 20px;
    text-align: left;
`

const StyledImg1 = styled.img`
    z-index: 1;
    width: 225px;
    height: 275px;
    object-fit: cover;
    position: absolute;
    top: 5%;
    right: 5%;
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
`

const StyledImg2 = styled.img`
    z-index: 2;
    width: 250px;
    height: 300px;
    object-fit: cover;
    position: absolute;
    bottom: 5%;
    right: 25%;
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
`

export default function Main(){
    return(
        <StyledMain>
            <StyledFirstPart>
                <StyledTitle>
                    <StyledTitleText>This weeks special!</StyledTitleText>
                    <Btn name={'Online Menu'}/>
                </StyledTitle>
                <StyledCardContainer>
                    {dummyItems.map(item=>{
                        return <Card name={item.name} img={item.img} des={item.des} price={item.price} key={item.id} />
                    })}
                </StyledCardContainer>
            </StyledFirstPart>

            <StyledSecondPart>
                <StyledInfoContainer>
                    <StyledSecondTitle>Little Lemon</StyledSecondTitle>
                    <StyledSubTitle>Chicago</StyledSubTitle>
                    <StyledText>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    </StyledText>
                </StyledInfoContainer>
                <StyledImg1 src={Img1}/>
                <StyledImg2 src={Img2}/>
            </StyledSecondPart>
        </StyledMain>
    )
}