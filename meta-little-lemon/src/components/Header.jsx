import styled from 'styled-components'
import { ReactComponent as Brand } from '../asset/icons/Logo.svg'
import { Link } from 'react-router-dom'

const StyledHeader = styled.header`
    /* outline: red solid 2px; */
`

const StyledNav = styled.nav`
    /* outline: blue solid 3px; */
    width: 66%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
`

const StyledBrand = styled(Brand)`
    /* outline: yellow solid 2px; */
    grid-column: 1/2;
    margin: 1.5rem auto;
`

const StyledList = styled.ul`
    /* outline: green solid 2px; */
    grid-column: 2/6;
    display: flex;
    justify-content: space-around;
    align-items: center;
    list-style-type: none;
`

const StyledListItem = styled.li`
    /* outline: red solid 2px; */
    height: fit-content;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 5px 10px;
    border-radius: 16px;

    &:hover{
        background-color: rgb(244, 206, 20);
    }

    &:active {
    box-shadow: 0 2px 4px rgba(244, 206, 20, 0.5);
    transform: translateY(2px);
  }
`

const StyledLink = styled(Link)`
    /* outline: blue solid 2px; */
    text-decoration: none;
    font-family: 'Karla', sans-serif;
    font-size: 1rem;
    font-weight: 700;
    color: black;
`

export default function Header(){
    return(
        <StyledHeader>
            <StyledNav>
                <StyledBrand/>
                <StyledList>
                    <StyledListItem><StyledLink to='/home'>Home</StyledLink></StyledListItem>
                    <StyledListItem><StyledLink to='#'>About</StyledLink></StyledListItem>
                    <StyledListItem><StyledLink to='/menu'>Menu</StyledLink></StyledListItem>
                    <StyledListItem><StyledLink to='/reserve'>Reservations</StyledLink></StyledListItem>
                    <StyledListItem><StyledLink to='#'>Order Online</StyledLink></StyledListItem>
                    <StyledListItem><StyledLink to='#'>Login</StyledLink></StyledListItem>
                </StyledList>
            </StyledNav>
        </StyledHeader>
    )
}