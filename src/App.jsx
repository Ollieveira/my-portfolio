import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Inicio from './components/Sections/Inicio/Inicio'
import Sobre from './components/Sections/Sobre/Sobre'

const App = () => {
  return (
    <>
      <Header />
      <Main>
        <Inicio />
        <Sobre />
      </Main>
    </>
  )
}

export default App
