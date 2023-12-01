import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Inicio from './components/Sections/Inicio/Inicio'
import Sobre from './components/Sections/Sobre/Sobre'
import Projetos from './components/Sections/Projetos/Projetos'

const App = () => {
  return (
    <>
      <Header />
      <Main>
        <Inicio />
        <Sobre />
        <Projetos />
      </Main>
    </>
  )
}

export default App
