import styled from 'styled-components'

const StyledBtn = styled.button`
    background-color: rgb(244, 206, 20);
    border-radius: 16px;
    border: transparent;
    padding: 10px 15px;
    cursor: pointer;
    font-weight: 700;
    height: 40px;
    width: fit-content;

    &:active {
    box-shadow: 0 2px 4px rgba(244, 206, 20, 0.5);
    transform: translateY(2px);
  }
`

export default function Btn({name, onClick}){
    return(
        <StyledBtn onClick={onClick}>{name}</StyledBtn>
    )
}