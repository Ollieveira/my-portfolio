import styled from 'styled-components'

const NavbarWrapper = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
`
const NavLogo = styled.h1`
  font-size: 1.12rem;
  font-weight: 700;
`
const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2.5rem;
`
const NavItem = styled.li`
  font-size: 2rem;
`
const NavLink = styled.a`
  text-decoration: none;
  color: #b3b3b3;
  font-weight: bold;
  &:hover {
    text-decoration: underline;
  }
`
const Navbar = ({logo, menuItems}) => {
  return (
    <NavbarWrapper>
      <NavLogo>{logo.text}</NavLogo>
      <NavMenu>
        {menuItems.map((item) => (
          <NavItem>
            <NavLink href={item.link}>{item.text}</NavLink>
          </NavItem>
        ))}
      </NavMenu>
    </NavbarWrapper>
  )
}

export default Navbar
