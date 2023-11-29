import styled from 'styled-components'

export const InicioStyle = styled.section`
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  color: #fff;

  & p:nth-child(1) {
    font-size: 2.25rem;
    font-weight: 600;
  }

  & p:nth-child(2) {    
    color: #b3b3b3;
    font-size: 1.87rem;
    font-weight: 400;
  }

  & img {
    border-radius: 400px;
    border: 1px solid #fff;
    object-fit: cover;
    object-position: center;
  }
`
