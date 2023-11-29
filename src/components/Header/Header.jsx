import React from 'react'
import HeaderStyle from './Header.styles'
import { WrapperStyle } from '../../styles/WrapperStyles'
import { Navbar } from '../../styles/NavbarStyles'

const Header = () => {
  return (
    <HeaderStyle>
      <WrapperStyle>
        <Navbar>
          <li>
            <a href="#inicio">Inicio</a>
          </li>
          <li>
            <a href="#sobre">Sobre</a>
          </li>
          <li>
            <a href="#projetos">Projetos</a>
          </li>
        </Navbar>
      </WrapperStyle>
    </HeaderStyle>
  )
}

export default Header
