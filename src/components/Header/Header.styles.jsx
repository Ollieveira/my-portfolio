import styled from 'styled-components'

const HeaderStyle = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100px;
  background-color: #333;
  color: #fff;

  & a {
    text-decoration: none;
    color: inherit;
  }
`

export default HeaderStyle
