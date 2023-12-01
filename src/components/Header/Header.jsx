import React from 'react'
import HeaderStyle from './Header.styles'
import { WrapperStyle } from '../../styles/WrapperStyles'
import Navbar from '../Navbar'

const Header = () => {
  const logo = {
    text: 'Willys Oliveira | Desenvolvedor FrontEnd'
  }
  const menuItems = [
    { link: '#home', text: 'Inicio' },
    { link: '#about', text: 'Sobre' },
    { link: '#projects', text: 'Projetos' }
  ]

  return (
    <HeaderStyle>
      <WrapperStyle>
        <Navbar logo={logo} menuItems={menuItems}></Navbar>
      </WrapperStyle>
    </HeaderStyle>
  )
}

export default Header
