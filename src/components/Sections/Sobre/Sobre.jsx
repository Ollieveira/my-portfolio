import { SobreStyle } from './Sobre.style'
import Card from '../../Card'
import {
  faHtml5,
  faCss3,
  faJs,
  faReact
} from '@fortawesome/free-brands-svg-icons'

const Sobre = () => {
  const data = [
    {
      title: 'Estudos',
      cursos: [
        {
          nome: 'Desenvolvimento front-end',
          periodo: 'ABR/2023 - DEZ/2023',
          icon: 'src/assets/vnw-icon.png'
        },
        {
          nome: 'Trilha Especializar Discover',
          periodo: 'AGO/2023',
          icon: 'src/assets/rocketseat-icon.png'
        },
        {
          nome: 'Lógica de Programação',
          periodo: 'JUL/2019',
          icon: 'src/assets/senai-icon.png'
        }
      ]
    },
    {
      title: 'Habilidades',
      habilidades: [
        {
          nome: 'HTML5',
          icon: faHtml5
        },
        {
          nome: 'CSS',
          icon: faCss3
        },
        {
          nome: 'JavaScript',
          icon: faJs
        },
        {
          nome: 'React',
          icon: faReact
        }
      ]
    },
    {
      title: 'Profissional',
      empresas: [
        {
          nome: 'Autônomo',
          periodo: '2017 - Atual'
        },
        {
          nome: 'JMR-Com Engenharia e Construções Ltda.',
          periodo: '03/2015 - 12/2015'
        },
        {
          nome: 'JVP Construções e Empreendimentos Ltda.',
          periodo: '02/2014 - 11/2014'
        }
      ]
    }
  ]
  return (
    <SobreStyle id="about">
      <Card data={data}></Card>
    </SobreStyle>
  )
}

export default Sobre
