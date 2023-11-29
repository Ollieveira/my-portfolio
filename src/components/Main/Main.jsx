import { MainStyle } from './Main.Styles'
import { WrapperStyle } from '../../styles/WrapperStyles'

const Main = ({children}) => {
  return (
    <MainStyle>
      <WrapperStyle>
        {children}
      </WrapperStyle>
    </MainStyle>
  )
}

export default Main
